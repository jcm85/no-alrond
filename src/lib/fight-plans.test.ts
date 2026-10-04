import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import test from "node:test";
import { fileURLToPath } from "node:url";
import { steps } from "./run-store.ts";
import { beforeFleeing, fightPlanCounts, planFor, planIsUnverified, turnLine } from "./fight-plans.ts";

test("every mapped fight step has a plan and the counts match the file", () => {
  assert.equal(fightPlanCounts.plans, 92);
  assert.equal(fightPlanCounts.steps, 523);
  const ids = new Set(steps.map((step) => step.id));
  let shown = 0;
  for (const step of steps) {
    const plan = planFor(step.id);
    if (!plan) continue;
    shown += 1;
    assert.equal(ids.has(step.id), true);
    assert.equal(typeof plan.id, "string");
  }
  assert.equal(shown, 523);
  assert.equal(planFor("true-vide-the-wicked-1-7a333a"), undefined);
});

test("turn lines, flee prep, and unverified badges use the file as given", () => {
  const opening = planFor("throne-ch-1-900-ca73a5");
  assert.ok(opening?.T?.[0]);
  assert.equal(
    turnLine(opening.T[0]),
    "T1 — 1st Person: Dagger / Axe x2 → Pursuer #1 · 2nd Person: Dagger / Axe → Pursuer #2 · 3rd Person: Dagger / Axe → Pursuer #2 · Everyone: Dagger / Axe x3",
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
  assert.match(card, /Fight plan/);
  assert.match(card, /unverified/);
  assert.match(now, /How combat works/);
});
