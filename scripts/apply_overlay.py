"""Apply the checked-in fight and missing-step overlay onto a generated route.

The sheet stays the source of the route. This pass only inserts frame-confirmed
steps, renames the two Flee commands, and prefixes a character onto a fight
step when the inventory names that character without replacing a sheet weapon.
Ids assigned from the sheet are left alone. New steps get their own ids.
"""

from __future__ import annotations

import hashlib
import json
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
OVERLAY = ROOT / "scripts" / "overlays" / "merged-fights.json"
NOTES_OUT = ROOT / "src" / "data" / "fight-notes.ts"

SKIP_WORDING = {"F065", "F066", "F127", "F128"}
SKIP_NOTES = {"F065", "F066", "F127", "F128"}
ACTORS = (
    "Throne",
    "Osvald",
    "Hikari",
    "Partitio",
    "Temenos",
    "Agnea",
    "Ochette",
    "Castti",
)
WEAPONS = ("Sword", "Spear", "Dagger", "Axe", "Bow", "Staff")
WEAK_ORDER = (
    "Sword",
    "Spear",
    "Dagger",
    "Axe",
    "Bow",
    "Staff",
    "Fire",
    "Ice",
    "Lightning",
    "Wind",
    "Light",
    "Dark",
)
PHASE_WORDS = (
    "galdera",
    "thurston",
    "vide",
    "dolcinaea",
    "trousseau",
    "rai mei",
    "scourge of the sea",
    "malamaowl",
    "grieving golem",
    "professor harvey",
    "cubaryi",
    "omniscient eye",
)
FLEE_AHEAD = "Anyone: Flee (free first turn from A Step Ahead; if it fails, Flee again next turn)"
FLEE_ONE = "Break it (hit its weakness), then Flee (Chewy: a broken enemy always lets you flee)"
FLEE_MANY = "Flee (repeat until it works)"
FLEE_BOSS = "Flee is not available in boss fights."
STRIPPER_RE = re.compile(
    r"\bHHB\b|Beastly Howl|Decaying Dragon's Essence|\bJudgment\b",
    re.I,
)


def load_overlay() -> dict:
    return json.loads(OVERLAY.read_text(encoding="utf-8"))


def walk(acts):
    for act in acts:
        for chapter in act["chapters"]:
            for block in chapter["blocks"]:
                for index, step in enumerate(block["steps"]):
                    yield chapter, block, index, step


def find_step(acts, step_id: str):
    for chapter, block, index, step in walk(acts):
        if step["id"] == step_id:
            return chapter, block, index, step
    return None


def add_note(step: dict, text: str) -> None:
    current = step.get("note") or ""
    if text in current:
        return
    step["note"] = text if not current else f"{current} · {text}"


def parse_clock(token: str) -> int:
    parts = [int(part) for part in token.strip().split(":")]
    if len(parts) == 3:
        hours, minutes, seconds = parts
        return hours * 3600 + minutes * 60 + seconds
    if len(parts) == 2:
        minutes, seconds = parts
        return minutes * 60 + seconds
    raise ValueError(token)


def watch_seconds(video_time: str) -> int:
    start = re.split(r"[–—&]", video_time, maxsplit=1)[0]
    return max(0, parse_clock(start) - 3)


def overlay_id(chapter_id: str, ref: str, used: set[str]) -> str:
    digest = hashlib.sha1(f"overlay:{ref}".encode("utf-8")).hexdigest()[:6]
    number = 900
    while True:
        candidate = f"{chapter_id}-{number}-{digest}"
        if candidate not in used:
            used.add(candidate)
            return candidate
        number += 1


def confirmed_steps(overlay: dict) -> list[dict]:
    rows = []
    for row in overlay["new_nonfight_steps"]:
        if row.get("source_confidence") != "confirmed in frames":
            continue
        if not row.get("include_as_new_step"):
            continue
        if not row.get("position", {}).get("exact"):
            continue
        rows.append(row)
    return rows


def insert_steps(acts, overlay: dict) -> tuple[list[str], list[str]]:
    used = {step["id"] for _, _, _, step in walk(acts)}
    added = []
    missing = []
    for row in confirmed_steps(overlay):
        position = row["position"]
        found = find_step(acts, position["step_id"])
        if not found:
            missing.append(row["id"])
            continue
        chapter, block, index, _anchor = found
        kind = "fight" if row["type"] == "forced fight" else "do"
        step = {
            "id": overlay_id(chapter["id"], row["id"], used),
            "text": row["suggested_wording"],
            "check": True,
            "kind": kind,
            "watch": watch_seconds(row["video_time"]),
            "overlay": row["id"],
        }
        if position["where"] == "before":
            block["steps"].insert(index, step)
        else:
            insert_at = index + 1
            while insert_at < len(block["steps"]) and block["steps"][insert_at].get("overlay"):
                insert_at += 1
            block["steps"].insert(insert_at, step)
        added.append(row["id"])
    return added, missing


def ability_core(action: str) -> str:
    text = re.sub(r"\([^)]*\)", "", action)
    text = re.sub(r"\s+x\d+\b", "", text)
    text = text.split("—")[0].split("->")[0]
    if ":" in text:
        left, _right = text.split(":", 1)
        if left.strip().lower() == "hired help":
            return ""
        text = left
    text = text.strip()
    if text.lower() in {"attack", "defend"}:
        return text
    if len(text) < 4:
        return ""
    return text


def sheet_tail(text: str) -> str:
    if "—" in text:
        return text.split("—", 1)[1].strip()
    return text.strip()


GENERIC_STEP = re.compile(
    r"^(?:Turn \d+(?:\.\d+)?|#\d+|T\d+|Anyone|Everyone|\d+(?:st|nd|rd|th) Person)\b",
    re.I,
)


def names_actor(text: str, actor: str) -> bool:
    return re.search(rf"\b{re.escape(actor)}\b", text) is not None


def generic_step(text: str) -> bool:
    """Only steps that do not already name who acts. Never replace a sheet actor."""
    if any(names_actor(text, actor) for actor in ACTORS):
        return False
    return bool(GENERIC_STEP.match(text))


def has_weapon(text: str) -> bool:
    return any(re.search(rf"\b{weapon}\b", text) for weapon in WEAPONS)


def weapon_unclear(action: str) -> bool:
    lowered = action.lower()
    return "unclear" in lowered or "unreadable" in lowered


def update_wording(acts, overlay: dict) -> list[dict]:
    by_id = {}
    for chapter, block, _index, step in walk(acts):
        by_id[step["id"]] = step
    changes = []
    for fight in overlay["fights"]:
        if fight["confirmation"] != "fully_confirmed":
            continue
        if fight["fight_id"] in SKIP_WORDING:
            continue
        if fight.get("partial_reasons"):
            continue
        steps = [by_id[item["id"]] for item in fight["app_mapping"].get("app_steps") or [] if item["id"] in by_id]
        used = set()
        for action in fight.get("player_actions") or []:
            actor = action.get("actor") or ""
            raw = action.get("action") or ""
            if actor not in ACTORS:
                continue
            core = ability_core(raw)
            if not core:
                continue
            pattern = re.compile(rf"\b{re.escape(core)}\b", re.I)
            matches = [
                step
                for step in steps
                if id(step) not in used and generic_step(step["text"]) and pattern.search(step["text"])
            ]
            if core.lower() == "attack":
                matches = [step for step in matches if re.search(r"\bAttack\b", sheet_tail(step["text"])) and not has_weapon(step["text"])]
            if len(matches) != 1:
                continue
            step = matches[0]
            if weapon_unclear(raw) and has_weapon(step["text"]):
                continue
            tail = sheet_tail(step["text"])
            if weapon_unclear(raw) and not has_weapon(tail):
                wording = f"{actor}: {tail} (weapon unclear)" if tail else f"{actor}: Attack (weapon unclear)"
            else:
                wording = f"{actor}: {tail}" if tail else f"{actor}: {core}"
            if wording == step["text"]:
                continue
            if "sheet" not in step:
                step["sheet"] = step["text"]
            step["text"] = wording
            used.add(id(step))
            changes.append({"fight": fight["fight_id"], "id": step["id"], "text": wording})
    return changes


def apply_flee(acts) -> None:
    ordered = [step for _chapter, _block, _index, step in walk(acts) if step.get("check")]
    ahead_at = next((index for index, step in enumerate(ordered) if "Equip A Step Ahead" in step["text"]), None)
    # These are the first overworld travels, where early random encounters happen.
    # The route's "kill an encounter" steps stay kill steps.
    one = next((step for step in ordered if step["text"].startswith("Tag New Delsta Harbour")), None)
    many = next((step for step in ordered if step["text"] == "Go to Cape Cold."), None)
    if one:
        add_note(one, FLEE_ONE)
    if many:
        add_note(many, FLEE_MANY)
    if ahead_at is not None:
        add_note(ordered[ahead_at], FLEE_AHEAD)
    boss = find_step(acts, "throne-ch-1-1-84df79")
    if boss:
        add_note(boss[3], FLEE_BOSS)
    for _chapter, _block, _index, step in walk(acts):
        if step.get("text") == "Anyone — Run":
            step["sheet"] = step["text"]
            step["text"] = "Anyone — Flee"


def canonical_weak(names) -> list[str] | None:
    if not names:
        return None
    mapped = []
    for name in names:
        if name == "Polearm":
            name = "Spear"
        if name not in WEAK_ORDER:
            return None
        mapped.append(name)
    return [name for name in WEAK_ORDER if name in mapped]


def shield_text(value) -> str | None:
    if value is None:
        return None
    text = str(value).strip()
    if text in {"", "99"}:
        return None
    return text


def needs_recheck(enemy: dict) -> bool:
    name = (enemy.get("name") or "").lower()
    return any(re.search(rf"\b{re.escape(word)}\b", name) for word in PHASE_WORDS)


def confidence_of(enemy: dict) -> str:
    raw = enemy.get("confidence") or "unknown"
    if raw == "verified":
        return "verified"
    if raw == "single-source":
        return "single-source"
    return "unverified"


def build_notes(acts, overlay: dict) -> dict:
    by_id = {step["id"]: step for _c, _b, _i, step in walk(acts)}
    notes: dict[str, dict] = {}
    for fight in overlay["fights"]:
        if fight["fight_id"] in SKIP_NOTES:
            continue
        step_ids = [item["id"] for item in fight["app_mapping"].get("app_steps") or [] if item["id"] in by_id]
        if not step_ids:
            continue
        enemies = []
        for enemy in fight["weakness"].get("enemies") or []:
            confidence = confidence_of(enemy)
            entry = {"name": enemy["name"], "confidence": confidence}
            if confidence in {"verified", "single-source"}:
                weak = canonical_weak(enemy.get("weak"))
                if weak:
                    entry["weak"] = weak
                else:
                    entry["confidence"] = "unverified"
            shield = shield_text(enemy.get("shield"))
            if shield and entry["confidence"] != "unverified":
                entry["shield"] = shield
            elif shield and confidence == "conflicting":
                # A conflicting weakness list is not shown. A lone shield number
                # from one source is not shown as if it settled the fight.
                pass
            if needs_recheck(enemy):
                entry["recheck"] = True
            enemies.append(entry)
        if not enemies:
            continue
        for step_id in step_ids:
            step = by_id[step_id]
            note = {"enemies": enemies}
            blob = " ".join([step.get("text") or "", step.get("sheet") or ""])
            if STRIPPER_RE.search(blob):
                note["ignoresWeakness"] = True
            notes[step_id] = note
    # Tutorial and forced Guard steps from the opening have no sourced weakness.
    for _chapter, _block, _index, step in walk(acts):
        ref = step.get("overlay")
        if ref == "O1":
            notes[step["id"]] = {
                "enemies": [{"name": "Pursuers (tutorial)", "confidence": "unverified"}],
            }
        elif ref == "O17":
            notes[step["id"]] = {
                "enemies": [{"name": "Guard", "confidence": "unverified"}],
            }
    return notes


def write_notes(notes: dict) -> None:
    payload = json.dumps(notes, ensure_ascii=False, indent=2)
    order = json.dumps(list(WEAK_ORDER), ensure_ascii=False)
    NOTES_OUT.write_text(
        "/** Generated from scripts/overlays/merged-fights.json. Do not hand-edit. */\n"
        f"export const weakOrder = {order} as const;\n"
        "export type WeakName = (typeof weakOrder)[number];\n"
        "export type WeakConfidence = \"verified\" | \"single-source\" | \"unverified\";\n"
        "export type FightEnemy = {\n"
        "  name: string;\n"
        "  confidence: WeakConfidence;\n"
        "  weak?: WeakName[];\n"
        "  shield?: string;\n"
        "  recheck?: boolean;\n"
        "};\n"
        "export type FightNote = {\n"
        "  enemies: FightEnemy[];\n"
        "  ignoresWeakness?: boolean;\n"
        "};\n"
        f"export const fightNotes: Record<string, FightNote> = {payload};\n",
        encoding="utf-8",
    )


def rehash(acts) -> str:
    ids = [step["id"] for _c, _b, _i, step in walk(acts)]
    if len(ids) != len(set(ids)):
        raise SystemExit("overlay ids collided")
    return hashlib.sha1("\n".join(ids).encode("utf-8")).hexdigest()[:16]


def apply_overlay(acts, write_notes_file: bool = True) -> dict:
    overlay = load_overlay()
    added, missing = insert_steps(acts, overlay)
    changes = update_wording(acts, overlay)
    apply_flee(acts)
    notes = build_notes(acts, overlay)
    if write_notes_file:
        write_notes(notes)
    for _chapter, _block, _index, step in walk(acts):
        step.pop("overlay", None)
    shown = 0
    unverified = 0
    for note in notes.values():
        if note.get("ignoresWeakness"):
            continue
        if any(enemy.get("weak") for enemy in note["enemies"]):
            shown += 1
        elif any(enemy["confidence"] == "unverified" for enemy in note["enemies"]):
            unverified += 1
    stats = {
        "added": added,
        "missing_anchors": missing,
        "wording": len(changes),
        "fights_updated": sorted({item["fight"] for item in changes}),
        "notes": len(notes),
        "weakness_shown_steps": shown,
        "unverified_steps": unverified,
        "rev": rehash(acts),
    }
    print(
        "overlay",
        f"added={len(added)}",
        f"wording={len(changes)}",
        f"fights={len(stats['fights_updated'])}",
        f"notes={len(notes)}",
        f"shown={shown}",
        f"unverified={unverified}",
        f"missing={len(missing)}",
    )
    return stats
