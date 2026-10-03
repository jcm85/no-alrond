import assert from "node:assert/strict";
import test from "node:test";
import { combatGuide, fleeGuide } from "../data/combat-guide.ts";
import { fightNotes, weakOrder } from "../data/fight-notes.ts";
import { route } from "../data/route.ts";
import { readMigration, RUN_KEY, type Kv, type StepRef } from "./migrate-progress.ts";
import { playhead } from "./run-store.ts";
import { watchFromLabel } from "./step-pictures.ts";

function checks() {
  const list: { id: string; text: string; chapter: string; watch?: number; sheet?: string; note?: string }[] = [];
  for (const act of route.acts) {
    for (const chapter of act.chapters) {
      for (const block of chapter.blocks) {
        for (const step of block.steps) {
          if (!step.check) continue;
          list.push({
            id: step.id,
            text: step.text,
            chapter: chapter.title,
            watch: step.watch,
            sheet: step.sheet,
            note: step.note,
          });
        }
      }
    }
  }
  return list;
}

function memory(): Kv {
  const dump = new Map<string, string>();
  return {
    getItem: (key) => dump.get(key) ?? null,
    setItem: (key, value) => {
      dump.set(key, value);
    },
  };
}

test("frame-confirmed opening steps sit before the old first step, and that id is unchanged", () => {
  const steps = checks();
  assert.equal(steps[0]?.text.startsWith("Win the tutorial fight"), true);
  assert.equal(steps[1]?.text, "Skip the cutscene. Close the Basic Controls popup.");
  assert.match(steps[2]?.text ?? "", /stairs/);
  assert.match(steps[3]?.text ?? "", /Climb up/);
  assert.match(steps[4]?.text ?? "", /walkway/);
  assert.match(steps[5]?.text ?? "", /Climb down/);
  assert.match(steps[6]?.text ?? "", /Ambush/);
  assert.equal(steps[7]?.text, "Skip the cutscene.");
  assert.match(steps[8]?.text ?? "", /stone bridge/);
  const oldFirst = steps.findIndex((step) => step.id === "throne-ch-1-1-df6557");
  assert.equal(oldFirst, 9);
  assert.match(steps[oldFirst]?.text ?? "", /Pursuer #1/);
  assert.equal(steps[0]?.watch, 67);
  assert.equal(watchFromLabel(`https://youtu.be/d6YOJxTfIeQ?t=${steps[0]?.watch}`), "Watch from 1:07");
});

test("prologue gaps and the other frame-confirmed steps keep their wording", () => {
  const steps = checks();
  const parlor = steps.find((step) => step.text.includes("Wait until Mother comes?"));
  assert.ok(parlor);
  assert.ok(parlor.watch != null && parlor.watch > 0);
  assert.ok(steps.some((step) => step.text.includes("Diamante")));
  assert.ok(steps.some((step) => step.text.includes("forced Guard fight")));
  assert.ok(steps.some((step) => step.text.includes("Hear the beginning of Castti")));
  assert.ok(steps.some((step) => step.text.includes("Snowhares")));
  assert.equal(
    steps.some((step) => /transcript only|needs a frame check|Unverified location/i.test(step.text)),
    false,
  );
});

test("old step ids still exist, new steps are separate, and a save carries by id", () => {
  const steps = checks();
  const ids = new Set(steps.map((step) => step.id));
  assert.equal(ids.size, steps.length);
  assert.equal(route.meta.steps, 1205);
  for (const id of ["throne-ch-1-1-df6557", "throne-ch-1-1-84df79", "osvald-ch-3-1-bbc69f"]) {
    assert.equal(ids.has(id), true, id);
  }
  const fresh = steps[0];
  assert.ok(fresh);
  assert.equal(fresh.id.startsWith("throne-ch-1-900-"), true);
  const storage = memory();
  storage.setItem(
    RUN_KEY,
    JSON.stringify({
      state: { done: { "throne-ch-1-1-df6557": true, [fresh.id]: true }, history: [], version: 2, routeRev: "old-save" },
      version: 2,
    }),
  );
  const current: StepRef[] = steps.map((step) => ({ id: step.id, chapter: step.chapter, text: step.text }));
  const result = readMigration(storage, route.meta.rev, {}, current);
  assert.equal(result.progress?.done["throne-ch-1-1-df6557"], true);
  assert.equal(result.progress?.done[fresh.id], true);
  const onlyOld = memory();
  onlyOld.setItem(
    RUN_KEY,
    JSON.stringify({
      state: { done: { "throne-ch-1-1-df6557": true }, history: ["throne-ch-1-1-df6557"], version: 2, routeRev: "older" },
      version: 2,
    }),
  );
  const carried = readMigration(onlyOld, route.meta.rev, {}, current);
  assert.equal(carried.progress?.done["throne-ch-1-1-df6557"], true);
  assert.equal(carried.progress?.done[fresh.id], undefined);
  assert.equal(carried.progress?.notice?.added, 41);
  assert.equal(carried.progress?.resumeAfterId, "throne-ch-1-1-df6557");
  const done = carried.progress?.done ?? {};
  const resumed = playhead(done, carried.progress?.resumeAfterId);
  assert.notEqual(resumed?.id, fresh.id);
  const resumedAt = steps.findIndex((step) => step.id === resumed?.id);
  const anchorAt = steps.findIndex((step) => step.id === "throne-ch-1-1-df6557");
  assert.ok(resumedAt > anchorAt);
});

test("fight wording names a confirmed actor and does not invent a weapon", () => {
  const steps = checks();
  const ice = steps.find((step) => step.sheet === "Turn 1 — Icewind");
  assert.equal(ice?.text, "Osvald: Icewind");
  const attack = steps.find((step) => step.sheet === "Anyone — Attack");
  assert.equal(attack?.text, "Osvald: Attack (weapon unclear)");
  assert.equal(steps.filter((step) => step.text === "Hikari — Conqueror's Sword x4").length, 4);
  assert.equal(steps.filter((step) => step.text === "Anyone — Flee").length, 4);
  assert.equal(steps.filter((step) => step.sheet === "Anyone — Run").length, 2);
  assert.match(steps.find((step) => step.id === "throne-ch-1-1-84df79")?.note ?? "", /not available in boss fights/);
  const birdian = steps.find((step) => step.text.includes("Fire Soulstone / Fireball"));
  assert.equal(birdian?.text, "Anyone — Fire Soulstone / Fireball x2 (if already broken)");
  assert.equal(steps.filter((step) => step.text.includes("under 210 HP")).length, 1);
  assert.equal(steps.some((step) => step.text.includes("sheet check")), false);
  const summit = steps.findIndex((step) => step.text.includes("make for the summit"));
  const warp = steps.findIndex((step) => step.text === "After finishing the chapter, warp to Timberain.");
  const edmund = steps.findIndex((step) => step.text.includes("follow Edmund"));
  assert.ok(summit > 0 && summit < warp && edmund === warp + 1);
  assert.equal(steps[summit]?.watch, 5435);
  assert.equal(steps[edmund]?.watch, 5576);
  assert.equal(steps.find((step) => step.id === "castti-ch-2-sai-route-1-655e3d")?.watch, 3725);
  assert.equal(watchFromLabel("https://youtu.be/d6YOJxTfIeQ?t=3725"), "Watch from 1:02:05");
});

test("weakness chips stay in game order and never guess a conflict", () => {
  assert.deepEqual(weakOrder, [
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
  ]);
  const pursuer = fightNotes["throne-ch-1-1-df6557"];
  assert.ok(pursuer);
  assert.deepEqual(pursuer.enemies[0]?.weak, ["Sword", "Dagger", "Axe", "Dark"]);
  assert.equal(pursuer.enemies[0]?.shield, "1");
  assert.equal(pursuer.enemies[0]?.confidence, "verified");
  assert.equal(pursuer.enemies[1]?.confidence, "unverified");
  assert.equal(pursuer.enemies[1]?.weak, undefined);
  const snake = fightNotes["throne-ch-1-1-db0eeb"];
  assert.equal(snake?.enemies[0]?.confidence, "single-source");
  assert.deepEqual(snake?.enemies[0]?.weak, ["Sword", "Light", "Dark"]);
  const hhb = fightNotes["osvald-ch-3-1-bbc69f"];
  assert.equal(hhb?.ignoresWeakness, true);
  const blob = JSON.stringify(fightNotes);
  assert.equal(blob.includes("Break at 0"), false);
  assert.equal(blob.includes("Lajackal"), false);
  assert.equal(blob.includes("Duorduor"), false);
  assert.equal(blob.includes("HHB ="), false);
  const galdera = Object.values(fightNotes).find((note) =>
    note.enemies.some((enemy) => enemy.name.includes("Galdera")),
  );
  assert.equal(galdera?.enemies.some((enemy) => enemy.recheck), true);
});

test("the combat guide has eight mechanics lines and does not state unconfirmed codes as fact", () => {
  assert.equal(combatGuide.length, 8);
  const text = [...combatGuide, ...fleeGuide].map((line) => line.text).join("\n");
  assert.match(text, /unconfirmed \(\?\)/);
  assert.match(text, /Chewy: a broken enemy always lets you flee/);
  assert.equal(/guaranteed/i.test(text), false);
  assert.equal(text.includes("HHB"), false);
  assert.match(fleeGuide.map((line) => line.text).join("\n"), /Flee is not available in boss fights/);
});
