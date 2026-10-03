#!/usr/bin/env python3
"""Turn Chewy's published OT2 all-superbosses sheet into route data."""

import csv
import hashlib
import json
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
SRC = Path(sys.argv[1]) if len(sys.argv) > 1 else ROOT / "scripts" / "sheets" / "no-alrond.csv"
OUT = Path(sys.argv[2]) if len(sys.argv) > 2 else ROOT / "src" / "data" / "route.ts"

# Chapter order of the "No Alrond (more consistent)" tab.
# Galdera starts at the night-switch row, after Hikari Ch.5. Agnea Ch.5 is after Galdera.
ACTS = [
    ("prologue", "Prologue", "Throne Ch.1"),
    ("west", "Westbound", "Partitio Ch. 2"),
    ("east", "The East", "Hikari Ch. 2"),
    ("boat", "The Boat", "Partitio Ch. 3"),
    ("mid", "Midgame", "Hikari Ch. 3"),
    ("galdera", "Galdera", "Switch to night before fighting Galdera."),
    ("stories", "After Galdera", "Agnea Ch. 5"),
    ("dawn", "The Dawn", "Journey for the Dawn"),
    ("extras", "Extra Battles", "Majestic Mysterious Travellers"),
]


def clock(h: int, m: int, s: int) -> tuple[str, int]:
    return (f"{h}:{m:02d}:{s:02d}", h * 3600 + m * 60 + s)


# Pinned marks are exact. The rest are the audit timeline, about ±20s.
MARKS = {
    "Throne Ch.1": clock(0, 0, 0),
    "Partitio Ch. 2": clock(0, 20, 0),
    "Hikari Ch. 2": clock(0, 31, 0),
    "Recruit Temenos": clock(0, 36, 0),
    "Throne Ch. 2: Mother's Route": clock(0, 37, 0),
    "Osvald Ch. 3": clock(0, 38, 30),
    "Osvald Ch. 4": clock(0, 40, 0),
    "Partitio Ch. 3": clock(0, 58, 0),
    # Divine Dual-Edge in the video. 1:15:00 was ~5 minutes late and put this
    # chapter after marks the sheet now runs later.
    "Hikari Ch. 3": clock(1, 9, 47),
    # Sheet order is Thurston → Hikari 3 → Sand Lion. 1:02:00 is the video
    # fight, which is before Hikari Ch.3, so the route-order mark sits just
    # after 1:09:47. The link still opens 1:02:00 (see VIDEO_SECONDS).
    "Castti Ch.2: Sai Route": clock(1, 10, 0),
    "Foreign Assassins": clock(1, 10, 30),
    "Hikari Ch. 4": clock(1, 18, 0),
    "Hikari Ch. 5": ("1:21:53", 4913),
    "Castti Ch. 2: Winterbloom Route": clock(1, 29, 0),
    "Castti Ch. 3": clock(1, 31, 0),
    "Castti Ch. 4": clock(1, 33, 0),
    "Agnea Ch. 2": clock(1, 42, 0),
    "Throne Ch. 3: Father's Route": clock(1, 46, 0),
    "Agnea Ch. 3": clock(1, 47, 0),
    "Agnea Ch. 4": clock(1, 49, 0),
    "Partitio Ch. 4": clock(1, 50, 0),
    "Ochette Ch. 2: Cateracta's Route": clock(1, 55, 0),
    "Ochette Ch. 2: Tera's Route": clock(2, 0, 0),
    "Ochette Ch. 2: Glacis's Route": clock(2, 5, 0),
    "Ochette Ch. 3": clock(2, 8, 0),
    "The Apothecary & Hunter, Part 1": clock(2, 11, 0),
    "The Apothecary & Hunter, Part 2": clock(2, 12, 30),
    "Switch to night before fighting Galdera.": ("2:14:42", 8082),
    "Agnea Ch. 5": clock(2, 20, 57),
    "Throne Ch. 3: Mother's Route": clock(2, 24, 0),
    "Throne Ch. 4": clock(2, 26, 15),
    "The Dancer & Warrior, Part 2": clock(2, 28, 0),
    "Osvald Ch. 5": clock(2, 31, 37),
    "The Scholar & Merchant, Part 1": clock(2, 34, 0),
    "The Scholar & Merchant, Part 2": clock(2, 36, 0),
    "Temenos Ch. 2": clock(2, 38, 47),
    "Temenos Ch. 3: Crackridge Route": clock(2, 42, 0),
    "Temenos Ch. 3: Stormhail Route": clock(2, 44, 0),
    "Temenos Ch. 4": clock(2, 48, 0),
    "The Cleric & Thief, Part 1": clock(2, 52, 0),
    "The Cleric & Thief, Part 2": clock(2, 55, 0),
    "Journey for the Dawn": clock(2, 57, 0),
    "Vide, the Wicked": ("3:03:15", 10995),
    "Majestic Mysterious Travellers": ("3:05:45", 11145),
    "Masterly Mysterious Travellers": clock(3, 10, 0),
    "True Vide (Phase 1)": clock(3, 14, 0),
    "True Vide (Phase 2)": clock(3, 16, 0),
    "True Vide, the Wicked": clock(3, 18, 0),
}

# Real video offset when the route-order mark was moved to stay non-decreasing.
VIDEO_SECONDS = {
    "Castti Ch.2: Sai Route": clock(1, 2, 0)[1],
}
ORDER_NOTES = {
    "Castti Ch.2: Sai Route": "order differs from the video (Sand Lion is at 1:02:00)",
}

PHASE_TITLES = {start for _, _, start in ACTS} | set(MARKS) | {
    "The Cleric & Thief, Part 2",
}

GENERIC_TITLES = {
    "Overworld",
    "Menu",
    "Notes",
    "Tavern",
    "Armourer",
    "Provisioner",
    "Black Market",
    "Guards",
}

SECTION_HEADERS = {
    "buy",
    "sell",
    "notes",
    "jobs",
    "support skills",
    "equipment",
    "inventory",
    "learn skills",
    "switch party",
    "change party",
    "idle party members",
    "primary",
    "secondary",
    "overworld",
}

TURN_RE = re.compile(r"^(Turn \d+.*|T\d+)$", re.I)
TURN_CELL_RE = re.compile(r"^Turn \d+(?:\.\d+)?(?:\s*-.*)?$", re.I)
CHANGELOG_RE = re.compile(r"^change ?log$", re.I)
MARK_RE = re.compile(r"^[\^v](?: \d+)?$|^[<>]$")
CONTEXT_RE = re.compile(r"^(After |Before |Requires |During )", re.I)
OPTIONAL_RE = re.compile(r"\b(optionally|if you want|up to you)\b", re.I)
SCAFFOLD_CELLS = {
    "formation",
    "change party",
    "idle party members",
    "current party",
    "order obtained",
    "primary",
    "secondary",
    "idle",
    "current",
    "enemy",
}
CHANGELOG_OUT = ROOT / "src" / "data" / "changelog.ts"


def cells_of(row):
    return {i: c.strip() for i, c in enumerate(row) if c and c.strip()}


def expand_turn(label: str) -> str:
    m = re.fullmatch(r"T(\d+)", label)
    return f"Turn {m.group(1)}" if m else label


def is_section_header(text: str) -> bool:
    t = text.strip()
    if t.lower() in SECTION_HEADERS:
        return True
    if TURN_RE.match(t):
        return True
    if CONTEXT_RE.match(t) and not t.endswith(".") and len(t) < 80:
        return True
    return False


def slug(text: str) -> str:
    s = re.sub(r"[^a-z0-9]+", "-", text.lower()).strip("-")
    return s[:48] or "x"


def main():
    with SRC.open(newline="") as f:
        rows = list(csv.reader(f))

    # Split into blocks on blank rows. Stop at Changelog / Change Log.
    blocks_raw = []
    current = []
    start_row = 0
    changelog_rows = []
    for i, row in enumerate(rows):
        c = cells_of(row)
        titleish = c.get(1, "")
        if CHANGELOG_RE.match(titleish):
            changelog_rows = rows[i + 1 :]
            break
        if not c:
            if current:
                blocks_raw.append((start_row, current))
                current = []
            continue
        if not current:
            start_row = i
        current.append((i, c))
    if current:
        blocks_raw.append((start_row, current))
    changelog = parse_changelog(changelog_rows)

    parsed_blocks = [parse_block(sr, body) for sr, body in blocks_raw]

    # Group into chapters, then acts.
    chapters = []
    for block in parsed_blocks:
        title = block["title"]
        if not chapters or title in PHASE_TITLES:
            mark = MARKS.get(title)
            chapters.append(
                {
                    "id": slug(title) + "-" + str(block["row"]),
                    "title": title if title in PHASE_TITLES else title,
                    "mark": mark[0] if mark else None,
                    "seconds": mark[1] if mark else None,
                    "videoSeconds": VIDEO_SECONDS.get(title),
                    "orderNote": ORDER_NOTES.get(title),
                    "blocks": [],
                }
            )
            # A phase-title block still holds its own steps.
        # If the opener wasn't a declared phase but we have no chapter yet.
        if title in PHASE_TITLES and chapters[-1]["blocks"]:
            pass
        chapters[-1]["blocks"].append(block)

    for ch in chapters:
        merged = []
        for b in ch["blocks"]:
            if b["foes"] and not b["steps"] and merged:
                merged[-1].setdefault("foes", [])
                merged[-1]["foes"] = (merged[-1]["foes"] or []) + b["foes"]
            else:
                merged.append(b)
        ch["blocks"] = merged

    # If the first block of a chapter is ONLY the phase title and it duplicated
    # because title is the phase, keep it when it has steps.

    act_starts = {start: (aid, atitle) for aid, atitle, start in ACTS}
    acts = []
    for ch in chapters:
        if ch["title"] in act_starts or not acts:
            aid, atitle = act_starts.get(ch["title"], ("prologue", "Prologue"))
            acts.append({"id": aid, "title": atitle, "chapters": []})
        # Drop empty blocks
        ch["blocks"] = [b for b in ch["blocks"] if b["steps"] or b["foes"] or b.get("when")]
        if ch["title"].startswith("Switch to night"):
            ch["title"] = "Galdera"
        if ch["blocks"]:
            acts[-1]["chapters"].append(ch)

    apply_revision_notes(acts)
    attach_missing_cells(acts, rows)
    rev = assign_stable_ids(acts)

    # Strip nulls for a tighter payload and count steps.
    n = 0
    foe_n = 0
    for act in acts:
        for ch in act["chapters"]:
            if ch["mark"] is None:
                ch.pop("mark")
                ch.pop("seconds")
            if ch.get("videoSeconds") is None:
                ch.pop("videoSeconds", None)
            if not ch.get("orderNote"):
                ch.pop("orderNote", None)
            for b in ch["blocks"]:
                b.pop("row", None)
                if not b["foes"]:
                    b.pop("foes")
                else:
                    foe_n += len(b["foes"])
                if not b.get("when"):
                    b.pop("when", None)
                for s in b["steps"]:
                    if s.get("check"):
                        n += 1
                    for k in ("lines", "note", "warn", "optional", "lead", "ctx"):
                        if not s.get(k):
                            s.pop(k, None)

    payload = {
        "meta": {
            "game": "Octopath Traveler II",
            "category": "All superbosses, no Alrond",
            "runner": "chewythebigblackdog",
            "video": "https://youtu.be/d6YOJxTfIeQ",
            "sheetDate": "2026-07-04",
            "steps": n,
            "foes": foe_n,
            "rev": rev,
            "note": "Chewy's current No Alrond (more consistent) sheet tab; video uploaded 2025-06-08; sheet revised through 7/4/2026",
        },
        "acts": acts,
    }

    OUT.parent.mkdir(parents=True, exist_ok=True)
    OUT.write_text(
        "/** Generated from Chewy's published route sheet. Do not hand-edit. */\n"
        "export type Step = {\n"
        "  id: string;\n"
        "  text: string;\n"
        "  check: boolean;\n"
        "  kind: \"do\" | \"fight\" | \"shop\" | \"menu\" | \"party\" | \"note\";\n"
        "  lines?: string[];\n"
        "  note?: string;\n"
        "  warn?: boolean;\n"
        "  optional?: boolean;\n"
        "  lead?: string;\n"
        "  ctx?: string;\n"
        "};\n"
        "export type Block = {\n"
        "  id: string;\n"
        "  title: string;\n"
        "  kind: \"travel\" | \"fight\" | \"menu\" | \"shop\" | \"setup\";\n"
        "  when?: string;\n"
        "  foes?: string[];\n"
        "  solo?: boolean;\n"
        "  steps: Step[];\n"
        "};\n"
        "export type Chapter = {\n"
        "  id: string;\n"
        "  title: string;\n"
        "  mark?: string;\n"
        "  seconds?: number;\n"
        "  videoSeconds?: number;\n"
        "  orderNote?: string;\n"
        "  blocks: Block[];\n"
        "};\n"
        "export type Act = { id: string; title: string; chapters: Chapter[] };\n"
        "export type RouteData = {\n"
        "  meta: {\n"
        "    game: string;\n"
        "    category: string;\n"
        "    runner: string;\n"
        "    video: string;\n"
        "    sheetDate: string;\n"
        "    steps: number;\n"
        "    foes: number;\n"
        "    rev: string;\n"
        "    note: string;\n"
        "  };\n"
        "  acts: Act[];\n"
        "};\n"
        f"export const route: RouteData = {json.dumps(payload, ensure_ascii=False, indent=2)};\n",
        encoding="utf-8",
    )
    print(f"acts={len(acts)} chapters={sum(len(a['chapters']) for a in acts)} steps={n} foes={foe_n} rev={rev}")
    print("file", OUT, "bytes", OUT.stat().st_size)
    write_changelog(changelog)
    print("changelog", len(changelog), CHANGELOG_OUT)


def parse_block(start_row, body):
    title_row = body[0][1].get(1, "Step")
    rest = body[1:]
    # Single-sentence blocks are themselves the step.
    if not rest and title_row not in GENERIC_TITLES:
        kind = "fight" if not title_row.endswith(".") and len(title_row) < 42 else "travel"
        if title_row.endswith("."):
            kind = "travel"
        step = make_step(start_row, title_row, "do" if kind == "travel" else "fight", None)
        return {
            "id": f"b{start_row}",
            "row": start_row,
            "title": title_row,
            "kind": kind if kind != "fight" else "setup",
            "when": None,
            "foes": [],
            "solo": True,
            "steps": [step],
        }

    when_bits = []
    foes = []
    steps = []
    context = None
    mode = None
    enemy_cols = {}
    pending_lead = None
    place_lead = None
    pending_notes: list[str] = []
    side_header = None
    side_turn_col = None
    last_actor = None

    def push(step):
        nonlocal pending_lead
        if pending_lead:
            step["lead"] = pending_lead
            pending_lead = None
        elif place_lead and not step.get("lead"):
            step["lead"] = place_lead
        if pending_notes:
            step["note"] = join_note(step.get("note"), " ".join(pending_notes))
            pending_notes.clear()
            if step.get("note") and is_warn(step["note"]):
                step["warn"] = True
        steps.append(step)

    for i, c in rest:
        c1 = c.get(1, "")
        c2 = c.get(2, "")
        # Enemy script header.
        if c1 == "Enemy" and any("Turn" in v for v in c.values()):
            mode = "enemy"
            enemy_cols = {k: v for k, v in c.items() if k != 1}
            context = None
            continue
        if mode == "enemy":
            if c2 or (c1 and TURN_RE.match(c1)):
                mode = None
            else:
                parts = []
                for col, label in enemy_cols.items():
                    if c.get(col):
                        parts.append(f"{label}: {c[col]}")
                if c1 or parts:
                    foes.append(f"{c1} — " + " · ".join(parts) if parts else c1)
                continue

        if c1.lower() == "primary" and c.get(4, "").lower() == "secondary":
            mode = "split-party"
            context = "Parties"
            continue
        if mode == "split-party" and c1 and not c2:
            push(make_step(i, f"Primary party: {c1}", "party", context))
            if c.get(4):
                push(make_step(i + 100000, f"Secondary party: {c[4]}", "party", context))
            continue
        if mode == "split-party" and (c2 or not c1):
            mode = None

        # Continuation: no traveler name in the first column.
        if not c1:
            c3 = c.get(3, "")
            turn_col = next((k for k in sorted(c) if TURN_CELL_RE.match(c[k])), None)
            if turn_col is not None and not c2:
                label = c[turn_col]
                context = expand_turn(label) if re.fullmatch(r"T\d+", label) else label
                side_turn_col = turn_col
                actor = c.get(turn_col + 1, "")
                action = c.get(turn_col + 2, "")
                if actor and not TURN_CELL_RE.match(actor):
                    text = f"{context} — {actor}: {action}" if action else f"{context} — {actor}"
                    push(make_step(i, text, "fight", context))
                continue
            if side_turn_col is not None and not c2:
                actor = c.get(side_turn_col, "")
                action = c.get(side_turn_col + 1, "")
                if actor and not TURN_CELL_RE.match(actor) and len(actor.split()) <= 4:
                    text = f"{context} — {actor}: {action}" if action else f"{context} — {actor}"
                    push(make_step(i, text, "fight", context))
                    continue
            if c2 and CONTEXT_RE.match(c2) and not c3:
                side_header = c2
                continue
            if c2 and steps and "Concoct" in steps[-1]["text"] and not c3:
                extra = c2
                if c.get(6):
                    extra += f" → {c[6]}"
                steps[-1].setdefault("lines", []).append(extra)
                tips = [
                    v
                    for k, v in sorted(c.items())
                    if k not in {2, 6} and not MARK_RE.fullmatch(v) and v.lower() not in SCAFFOLD_CELLS
                ]
                if tips:
                    steps[-1]["note"] = join_note(steps[-1].get("note"), " ".join(tips))
                continue
            if not c2 and c3 and steps and context in {"Jobs", "Learn Skills"}:
                if c3 not in steps[-1]["text"]:
                    steps[-1]["text"] += f", {c3}"
                continue
            if not c2 and c3 and (
                context == "Support Skills" or (steps and "Equip" in steps[-1]["text"])
            ):
                actor = last_actor or "Then"
                text = f"{actor} — Equip {c3}"
                if c.get(6):
                    text += f" ({c[6]})"
                push(make_step(i, text, "menu", context))
                continue
            if c2:
                actor = last_actor or "Then"
                if TURN_RE.match(actor) or actor.startswith("Turn "):
                    actor = "Then"
                action = c2 if not c3 else f"{c2} {c3}"
                text = f"{actor} — {action}"
                if c.get(6):
                    slotish = context in {"Support Skills", "Equipment", "Inventory", "Jobs"} or str(c.get(6, "")).startswith("Slot")
                    text += f" ({c[6]})" if slotish else f" → {c[6]}"
                mark = c.get(7, "")
                if re.fullmatch(r"[\^v] ?\d?", mark or ""):
                    text += f" [{mark.replace(' ', '')}]"
                if context in {"Jobs", "Support Skills", "Equipment", "Learn Skills", "Inventory"}:
                    cont_kind = "menu"
                elif context and context.lower().startswith("turn"):
                    cont_kind = "fight"
                else:
                    cont_kind = "do"
                step = make_step(i, text, cont_kind, context)
                if c.get(4) and c[4] != c2:
                    step["note"] = f"{side_header}: {c[4]}" if side_header else f"Other column: {c[4]}"
                tip = c.get(7, "")
                if tip and not re.fullmatch(r"[\^v] ?\d?|[\^v]|[<>]", tip):
                    step["note"] = join_note(step.get("note"), tip)
                    if is_warn(step["note"]):
                        step["warn"] = True
                push(step)
                continue
            bits = [c[k] for k in sorted(c)]
            if bits:
                push(make_step(i, " · ".join(bits), "note", context))
            continue

        side_turn_col = None
        if is_section_header(c1) and not c2:
            harvest_side(c, pending_notes, skip={1})
            label = expand_turn(c1)
            if label.lower() == "overworld":
                context = None
                mode = None
                continue
            if label.lower() in {"change party", "idle party members", "switch party"}:
                if context and str(context).lower().startswith("turn"):
                    place_lead = str(context)
                context = "Party"
                mode = "party"
            elif label.lower() == "buy":
                context = "Buy"
                mode = "shop"
            elif label.lower() == "sell":
                context = "Sell"
                mode = "shop"
            elif label.lower() == "notes":
                context = "Notes"
                mode = "notes"
            elif CONTEXT_RE.match(label) or label.lower().startswith("after ") or label.lower().startswith("before "):
                if not steps:
                    when_bits.append(label)
                else:
                    pending_lead = label
            else:
                context = label
                if label.lower().startswith("turn"):
                    place_lead = None
                if label.lower() in {"jobs", "support skills", "equipment", "learn skills", "inventory"}:
                    mode = "menu"
            continue

        if (
            not c2
            and not c.get(3)
            and context not in {"Buy", "Sell", "Notes"}
            and is_bare_label(c1)
        ):
            harvest_side(c, pending_notes, skip={1})
            if c1.lower() in SCAFFOLD_CELLS or c1.lower() == "overworld":
                continue
            # A run of short labels is a heading plus the list under it
            # (Prepare / Snow Yak / Buttermeep), not three discarded contexts.
            if place_lead and place_lead.lower() not in SCAFFOLD_CELLS:
                push(make_step(i, c1, "note", None))
                continue
            place_lead = c1
            continue

        if not (
            TURN_RE.match(c1)
            or c1.startswith("Slot")
            or c1
            in {
                "Anyone",
                "Everyone",
                "1st Person",
                "2nd Person",
                "3rd Person",
                "Last Person",
                "Order Obtained",
            }
        ):
            last_actor = c1
        step = format_action(i, c, context, mode)
        if c.get(4) and side_header and step.get("note") and "Other column:" in step["note"]:
            step["note"] = step["note"].replace("Other column:", f"{side_header}:", 1)
        push(step)

    if place_lead and not any(
        place_lead in (s.get("lead") or "") or place_lead in (s.get("text") or "") for s in steps
    ):
        push(make_step(start_row, place_lead, "note", None))
    if pending_notes and steps:
        steps[-1]["note"] = join_note(steps[-1].get("note"), " ".join(pending_notes))
        pending_notes.clear()

    kind = infer_block_kind(title_row, steps, foes, context_modes(steps))
    solo = False
    return {
        "id": f"b{start_row}",
        "row": start_row,
        "title": title_row,
        "kind": kind,
        "when": " · ".join(when_bits) if when_bits else None,
        "foes": foes,
        "solo": solo,
        "steps": steps,
    }


def context_modes(steps):
    return {s["kind"] for s in steps}


def infer_block_kind(title, steps, foes, kinds):
    if title == "Overworld":
        return "travel"
    if title == "Menu" or kinds <= {"menu", "party", "note"} and "menu" in kinds:
        return "menu"
    if "shop" in kinds and "fight" not in kinds:
        return "shop"
    if foes or "fight" in kinds or (title not in GENERIC_TITLES and not title.endswith(".") and "do" not in kinds and steps):
        if foes or "fight" in kinds:
            return "fight"
    if foes or any(s["text"].startswith("Turn ") or s["text"].startswith("1st ") for s in steps):
        return "fight"
    if title == "Menu":
        return "menu"
    if title.endswith("."):
        return "travel"
    if "fight" in kinds:
        return "fight"
    return "setup"


def format_action(i, c, context, mode):
    c1 = expand_turn(c.get(1, ""))
    c2 = c.get(2, "")
    c3 = c.get(3, "")
    c4 = c.get(4, "")
    c5 = c.get(5, "")
    c6 = c.get(6, "")
    mark = c.get(7, "") if re.fullmatch(r"[\^v] ?\d?|[\^v]|[<>]", c.get(7, "")) else ""

    kind = "do"
    if mode == "shop" or (context in {"Buy", "Sell"}):
        kind = "shop"
    elif mode == "menu" or context in {"Jobs", "Support Skills", "Equipment", "Learn Skills", "Inventory"}:
        kind = "menu"
    elif mode == "party" or c3 in {">", "<"} or c1.lower().startswith("slot"):
        kind = "party"
    elif mode == "notes" or context == "Notes":
        kind = "note"
    elif context and context.lower().startswith("turn"):
        kind = "fight"

    if c3 in {">", "<"}:
        text = f"Set {c1} to {c2}"
        if c5 and c6:
            text += f". Set {c5} to {c6}"
        step = make_step(i, text, "party", context)
    elif not c2 and not c3:
        text = c1
        if context == "Buy":
            text = f"Buy {c1}"
            kind = "shop"
        elif context == "Sell":
            text = f"Sell {c1}"
            kind = "shop"
        elif context == "Notes":
            kind = "note"
        step = make_step(i, text, kind, context)
    else:
        if c2 in {"Equip", "Unequip", "Unequip All"} or c2.startswith("Equip") or c2.startswith("Unequip"):
            text = f"{c1} — {c2}"
            if c3:
                text += f" {c3}"
            if c6:
                text += f" ({c6})"
            kind = "menu"
        elif c1 == "Order Obtained":
            text = f"Give {c2}"
            who = c5 or c6
            if c5 and c6:
                text += f" to {c5} ({c6})"
            elif who:
                text += f" to {who}"
            kind = "menu"
        else:
            action = c2
            if c3 and c3 not in {">", "<"}:
                action = f"{c2}: {c3}" if context == "Jobs" else f"{c2} {c3}".strip()
            if not action and c4:
                action = c4
                c4 = ""
            text = f"{c1} — {action}" if action else c1
            # Target: column 6 when it isn't already consumed, and column 5 if it's a name.
            if c6 and not (c2 in {"Equip", "Unequip", "Unequip All"} or (c2 and c2.startswith("Equip"))):
                text += f" → {c6}"
            elif c5 and c5 not in {"Current Party"} and not c5.startswith("Slot") and not c5.startswith("Turn"):
                text += f" → {c5}"
        if mark:
            text += f" [{mark.replace(' ', '')}]"
        step = make_step(i, text, kind, context)

    notes = []
    gear_or_tip = c.get(7, "")
    if gear_or_tip and gear_or_tip != mark:
        # Parallel branch column (character name + action in col 8) vs a prose note.
        if c.get(8) and gear_or_tip[:1].isupper() and len(gear_or_tip.split()) <= 3:
            branch = gear_or_tip
            if c.get(8):
                branch += f" — {c[8]}"
            if c.get(12):
                branch += f" → {c[12]}"
            main_cmp = step["text"]
            if branch not in main_cmp:
                notes.append(f"Branch: {branch}")
        else:
            notes.append(gear_or_tip)
    elif c.get(8) and not gear_or_tip:
        notes.append(c[8])
    if c4 and c4 not in step["text"] and not (c3 in {">", "<"}):
        # Don't repeat identical side column.
        if c4 != c2:
            notes.append(f"Other column: {c4}")
    if c.get(9) and "Branch:" not in " ".join(notes):
        extra = c[9]
        if extra not in step["text"]:
            notes.append(extra)
    note = " ".join(notes).strip()
    if note:
        step["note"] = note
        if is_warn(note):
            step["warn"] = True
    if OPTIONAL_RE.search(step["text"]) or (note and OPTIONAL_RE.search(note)):
        step["optional"] = True
    if context and context not in {"Overworld", "Party", "Parties"} and context.lower() not in text.lower():
        step["ctx"] = context
    return step


def make_step(i, text, kind, context):
    text = re.sub(r"\s+", " ", text).strip(" —")
    step = {
        "id": f"r{i}",
        "text": text,
        "check": kind != "note",
        "kind": kind if kind != "note" else "note",
        "lines": [],
        "note": None,
        "warn": False,
        "optional": False,
        "lead": None,
    }
    if context and context not in {"Overworld", "Party", "Parties"} and context.lower() not in text.lower():
        step["ctx"] = context
    return step


IMPERATIVES = {
    "go", "steal", "get", "tag", "recruit", "warp", "take", "kill", "mug", "heal",
    "talk", "start", "exit", "reset", "use", "break", "purchase", "capture", "fight",
    "switch", "paint", "finish", "sail", "craft", "hear", "complete", "flee", "equip",
    "learn", "sell", "buy", "give", "walk", "optionally", "pick", "head", "enter",
    "leave", "return", "hire", "soothe", "challenge", "swap", "change", "put", "set",
    "light", "skip", "visit", "find", "collect", "board", "toggle", "rest", "save",
    "do", "make", "open", "grab", "fill", "unlock", "ambush", "provoke", "summon",
    "defend", "attack", "cast", "unequip", "wait", "run", "fast", "travel",
}


def is_bare_label(text: str) -> bool:
    if not text or text.endswith((".", "!", "?", ":")):
        return False
    words = text.split()
    if not words or len(words) > 4 or len(text) > 42:
        return False
    if words[0].lower() in IMPERATIVES:
        return False
    if words[0].lower() in {"turn", "t1", "t2", "t3", "t4", "t5"}:
        return False
    return True


def side_note(c, ignore_action=False):
    bits = []
    for k in (3, 4, 5, 7, 8, 9):
        v = c.get(k, "")
        if not v:
            continue
        if k == 7 and re.fullmatch(r"[\^v] ?\d?|[\^v]|[<>]", v):
            continue
        bits.append(v)
    # de-dupe
    out = []
    for b in bits:
        if b not in out:
            out.append(b)
    return " · ".join(out)


def join_note(a, b):
    if a and b:
        return f"{a} {b}"
    return a or b


def is_warn(note: str) -> bool:
    n = note.lower()
    return any(w in n for w in ("chance to die", "die to", "game over", "% chance", "don't", "do not"))


def step_blob(step: dict) -> str:
    return " ".join([step.get("text") or "", *(step.get("lines") or [])])


def cell_allowed(value: str) -> bool:
    if value.lower() in SCAFFOLD_CELLS:
        return True
    if MARK_RE.fullmatch(value):
        return True
    if re.fullmatch(r"T\d+", value):
        return True
    return False


def cell_in_blob(value: str, blob: str) -> bool:
    escaped = json.dumps(value, ensure_ascii=False)[1:-1]
    if value in blob or escaped in blob:
        return True
    quoted = re.fullmatch(r'"([^"]+)"', value)
    if quoted and quoted.group(1) in blob:
        return True
    lines = [part.strip() for part in value.splitlines() if part.strip()]
    if len(lines) > 1 and all(cell_in_blob(part, blob) for part in lines):
        return True
    return False


def harvest_side(cells: dict, pending: list[str], skip: set[int]) -> None:
    for key, value in sorted(cells.items()):
        if key in skip or cell_allowed(value) or TURN_CELL_RE.match(value):
            continue
        if value not in pending:
            pending.append(value)


def parse_changelog(rows) -> list[dict]:
    entries = []
    current_date = None
    for row in rows:
        cells = cells_of(row)
        if not cells:
            continue
        date = cells.get(1) or None
        text = cells.get(2) or ""
        if date and re.fullmatch(r"\d{1,2}/\d{1,2}/\d{2,4}", date):
            current_date = date
        elif date and not text:
            text = date
            date = current_date
        else:
            date = date or current_date
        extras = [cells[key] for key in sorted(cells) if key not in {1, 2}]
        if extras:
            text = " ".join(part for part in [text, *extras] if part).strip()
        if text:
            entries.append({"date": date, "text": text})
    return entries


def write_changelog(entries: list[dict]) -> None:
    CHANGELOG_OUT.parent.mkdir(parents=True, exist_ok=True)
    CHANGELOG_OUT.write_text(
        "/** Generated from the sheet changelog. Not route steps, and not searchable. */\n"
        "export type ChangelogEntry = { date: string | null; text: string };\n"
        "export const changelog: ChangelogEntry[] = "
        + json.dumps(entries, ensure_ascii=False, indent=2)
        + ";\n",
        encoding="utf-8",
    )


def attach_missing_cells(acts: list, rows) -> None:
    """Keep every non-scaffolding sheet cell on a step or it never reaches the app."""
    indexed = []
    for act in acts:
        for chapter in act["chapters"]:
            for block in chapter["blocks"]:
                for step in block["steps"]:
                    match = re.fullmatch(r"r(\d+)", step["id"])
                    if match:
                        indexed.append((int(match.group(1)) % 100000, step))
    indexed.sort(key=lambda pair: pair[0])
    blob = json.dumps(acts, ensure_ascii=False)
    attached = 0
    for index, row in enumerate(rows):
        cells = cells_of(row)
        if CHANGELOG_RE.match(cells.get(1, "")):
            break
        for value in cells.values():
            if cell_allowed(value) or cell_in_blob(value, blob):
                continue
            target = None
            for row_index, step in indexed:
                if row_index >= index:
                    target = step
                    break
            if target is None and indexed:
                target = indexed[-1][1]
            if target is None:
                continue
            target["note"] = join_note(target.get("note"), value)
            blob += "\n" + value
            attached += 1
    if attached:
        print("attached missing cells", attached)


def add_note(step: dict, tag: str, optional: bool = False) -> None:
    if tag not in (step.get("note") or ""):
        step["note"] = join_note(step.get("note"), tag)
    if optional:
        step["optional"] = True


def apply_revision_notes(acts: list) -> None:
    """Post-video sheet changes. Notes only — never warn flags."""
    rules = [
        (
            "08/13/2025",
            "Finisher's Claws were delayed until after Rai Mei.",
            lambda step, ctx: "Finisher's Claws" in step_blob(step),
            False,
        ),
        (
            "09/17/2025",
            "no shaggy aurochs; mighty leaf and rotten meat instead.",
            lambda step, ctx: "Mighty Leaf" in step_blob(step),
            False,
        ),
        (
            "09/17/2025",
            "no shaggy aurochs; mighty leaf and rotten meat instead.",
            lambda step, ctx: "Rotten Meat" in step_blob(step),
            True,
        ),
        (
            "12/03/2025",
            "no early Royal Guard's Helm; Thurston → Hikari 3 → Sand Lion.",
            lambda step, ctx: "Thurston" in step_blob(step),
            False,
        ),
        (
            "12/03/2025",
            "no Critical Scope; the video sets Critical Scope here.",
            lambda step, ctx: step.get("text") == "Fight Kunzo at night.",
            False,
        ),
        (
            "12/03/2025",
            "video does Sand Lion first (~1:02:00); sheet order is Thurston, then Hikari 3, then Sand Lion.",
            lambda step, ctx: step.get("text") == "Fight the Sand Lion during the day.",
            False,
        ),
        (
            "08/13/2025",
            "video shows Gigantes at ~1:12:35, before Hikari Ch.4; the sheet delays this fight until after Rai Mei.",
            lambda step, ctx: step.get("text") == "Fight Gigantes at night.",
            False,
        ),
        (
            "06/30/2026",
            "Coat of Arms + Aegis Shield replace Empowering Necklace.",
            lambda step, ctx: "Coat of Arms" in step_blob(step) or "Aegis Shield" in step_blob(step),
            True,
        ),
        (
            "06/30/2026",
            "still in the checklist; nothing equips it.",
            lambda step, ctx: "Empowering Necklace" in step.get("text", ""),
            True,
        ),
        (
            "07/04/2026",
            "omniscient eye: 8 Concoct hits.",
            lambda step, ctx: ctx["block"] == "Omniscient Eye" and "Concoct" in step_blob(step),
            False,
        ),
        (
            "07/04/2026",
            "omniscient eye: 8 Concoct hits.",
            lambda step, ctx: ctx["block"] == "Omniscient Eye"
            and step.get("ctx") in {"Turn 4", "Turn 5"}
            and "Concoct" in step_blob(step),
            True,
        ),
    ]
    for date, detail, match, every in rules:
        tag = f"Changed since the video ({date}): {detail}"
        placed = False
        for act in acts:
            for chapter in act["chapters"]:
                for block in chapter["blocks"]:
                    ctx = {"chapter": chapter["title"], "block": block["title"]}
                    for step in block["steps"]:
                        if not step.get("check"):
                            continue
                        if match(step, ctx):
                            add_note(step, tag)
                            placed = True
                            if not every:
                                break
                    if placed and not every:
                        break
                if placed and not every:
                    break
            if placed and not every:
                break
        if not placed:
            raise SystemExit(f"revision note did not match a step: {date} {detail}")

    lucky = "skip if turn order is lucky (only if Castti does not already act last)."
    marked = 0
    for act in acts:
        for chapter in act["chapters"]:
            for block in chapter["blocks"]:
                for step in block["steps"]:
                    if "Concoct" in step.get("text", "") and "Whimsical Leaf" in step_blob(step):
                        add_note(step, lucky, optional=True)
                        marked += 1
    if marked < 2:
        raise SystemExit("Whimsical Leaf concoct steps were not marked conditional")


def assign_stable_ids(acts: list) -> str:
    """Chapter slug, occurrence within the chapter, and a short hash of the text.

    Sheet row numbers are not part of the id, so a new row in one chapter
    leaves every other chapter's ids alone.
    """
    used_chapters: dict[str, int] = {}
    all_ids: list[str] = []
    for act in acts:
        for chapter in act["chapters"]:
            base = slug(chapter["title"])
            used_chapters[base] = used_chapters.get(base, 0) + 1
            chapter["id"] = base if used_chapters[base] == 1 else f"{base}-{used_chapters[base]}"
            seen_text: dict[str, int] = {}
            for index, block in enumerate(chapter["blocks"], start=1):
                block["id"] = f"{chapter['id']}-b{index}"
                for step in block["steps"]:
                    text = step["text"]
                    seen_text[text] = seen_text.get(text, 0) + 1
                    digest = hashlib.sha1(text.encode("utf-8")).hexdigest()[:6]
                    step["id"] = f"{chapter['id']}-{seen_text[text]}-{digest}"
                    all_ids.append(step["id"])
    if len(all_ids) != len(set(all_ids)):
        raise SystemExit("stable ids collided")
    return hashlib.sha1("\n".join(all_ids).encode("utf-8")).hexdigest()[:16]


if __name__ == "__main__":
    main()
