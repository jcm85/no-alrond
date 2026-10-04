import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import test from "node:test";
import { fileURLToPath } from "node:url";
import { steps } from "./run-store.ts";
import {
  beforeFleeing,
  fightPlanCounts,
  isFirstPlanStep,
  matchedTurnIndex,
  planFor,
  planIsUnverified,
  planTurnMatchRate,
  turnLine,
} from "./fight-plans.ts";

test("every mapped fight step has a plan and the counts match the file", () => {
  assert.equal(fightPlanCounts.plans, 94);
  assert.equal(fightPlanCounts.steps, 502);
  const ids = new Set(steps.map((step) => step.id));
  let shown = 0;
  let leads = 0;
  for (const step of steps) {
    const plan = planFor(step.id);
    if (!plan) continue;
    shown += 1;
    if (isFirstPlanStep(step.id)) leads += 1;
    assert.equal(ids.has(step.id), true);
    assert.equal(typeof plan.id, "string");
    for (const turn of plan.T ?? []) {
      assert.equal(turn.a.length > 0, true, step.id);
      assert.equal(turnLine(turn).startsWith("T0 — :"), false, step.id);
    }
  }
  assert.equal(shown, 502);
  assert.equal(leads, 94);
  assert.equal(planFor("true-vide-the-wicked-1-7a333a"), undefined);
  assert.equal(planFor("throne-ch-1-1-f37a8d"), undefined);
  for (const id of [
    "throne-ch-1-900-5d721c",
    "throne-ch-1-1-aa8862",
    "hikari-ch-2-1-d1d344",
    "castti-ch-4-1-f2de05",
    "temenos-ch-4-1-80edba",
  ]) {
    assert.equal(planFor(id), undefined, id);
    assert.equal(isFirstPlanStep(id), false, id);
  }
  assert.equal(planFor("the-scholar-merchant-part-2-1-e7680a")?.id, "the-scholar-merchant-part-2-b3");
  assert.equal(isFirstPlanStep("the-scholar-merchant-part-2-1-e7680a"), false);
  assert.equal(isFirstPlanStep("throne-ch-1-900-263edd"), true);
  assert.equal(planFor("throne-ch-1-900-263edd")?.id, "throne-ch-1-b21");
  assert.equal(isFirstPlanStep("the-apothecary-hunter-part-1-1-38a592"), true);
  assert.equal(isFirstPlanStep("the-apothecary-hunter-part-1-1-e74ce0"), false);
});

test("turn lines, flee prep, and unverified badges use the file as given", () => {
  const opening = planFor("throne-ch-1-900-ca73a5");
  assert.ok(opening?.T?.[0]);
  assert.equal(
    turnLine(opening.T[0]),
    "T1 — First to act: Dagger / Axe x2 → Pursuer #1 · Second to act: Dagger / Axe → Pursuer #2 · Third to act: Dagger / Axe → Pursuer #2 · All: Dagger / Axe x3",
  );
  const grouped = planFor("osvald-ch-4-1-78ced9");
  const headed = grouped?.T?.find((turn) => turn.h);
  assert.ok(headed);
  assert.equal(
    turnLine(headed),
    "T1 · first encounter — Any character: Fire Soulstone (M) · Ochette: Capture → Snow Yak",
  );
  assert.equal(
    turnLine({ t: 1, h: "Party 1 (opening)", a: [["Throne", "Attack"]] }),
    "T1 · Party 1 (opening) — Throne: Attack",
  );
  assert.equal(planIsUnverified(opening), false);
  const flee = planFor("partitio-ch-2-1-1d25ed");
  assert.equal(flee?.flee, 1);
  assert.equal(flee?.prep, undefined);
  const prep = planFor("osvald-ch-3-1-cb44c6");
  assert.equal(prep?.flee, 1);
  assert.ok(prep?.prep);
  assert.match(beforeFleeing(prep.prep), /^Before fleeing: /);
  assert.match(beforeFleeing(prep.prep), /Wind Soulstone \(M\)/);
  const tagged = planFor("partitio-ch-2-1-333eee");
  assert.equal(planIsUnverified(tagged!), true);
  assert.equal(tagged?.e?.some((enemy) => enemy.v === 0), true);
  const card = readFileSync(join(dirname(fileURLToPath(import.meta.url)), "../components/fight-plan.tsx"), "utf8");
  const now = readFileSync(join(dirname(fileURLToPath(import.meta.url)), "../components/route-app.tsx"), "utf8");
  assert.equal(now.includes("FightWeakness"), false);
  assert.equal(now.includes("How weaknesses work"), false);
  assert.match(card, /if \(!plan\) return null/);
  assert.equal(card.includes("see first step"), false);
  assert.match(card, /Show full plan/);
  assert.match(card, /Show fight plan/);
  assert.match(card, /sessionStorage/);
  const rate = planTurnMatchRate();
  assert.equal(rate.later > 300, true);
  assert.equal(rate.matched / rate.later >= 0.95, true);
  assert.equal(matchedTurnIndex("throne-ch-1-1-df6557"), 0);
  assert.equal(matchedTurnIndex("throne-ch-1-900-4aece1"), null);
  assert.equal(matchedTurnIndex("throne-ch-1-1-79e189"), 1);
  assert.equal(matchedTurnIndex("true-vide-the-wicked-1-5c18c2"), 0);
  assert.equal(matchedTurnIndex("throne-ch-1-900-ca73a5"), null);
  assert.match(card, /unverified/);
  assert.match(now, /How combat works/);
});
