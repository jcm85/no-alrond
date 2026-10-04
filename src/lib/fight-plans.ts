import data from "@/data/fight-plans.json";
import { steps } from "@/lib/run-store";

export type FightPlanEnemy = {
  n: string;
  s?: string;
  w?: string[];
  hp?: string;
  v: 0 | 1;
};

export type FightPlanTurn = {
  t: number;
  h?: string;
  a: [string, string][];
};

export type FightPlan = {
  id: string;
  t: string;
  c?: "h" | "m" | "l";
  u?: 1;
  flee?: 1;
  prep?: [number, string[]][];
  e?: FightPlanEnemy[];
  T?: FightPlanTurn[];
  why?: string;
};

const plans = data.plans as unknown as Record<string, FightPlan>;
const stepUids = data.steps as Record<string, number>;

/** Earliest route step that uses each plan. Later steps of the same fight stay compact. */
const firstStepByUid = new Map<number, string>();
for (const step of steps) {
  const uid = stepUids[step.id];
  if (uid == null || firstStepByUid.has(uid)) continue;
  firstStepByUid.set(uid, step.id);
}

export function planFor(stepId: string | undefined): FightPlan | undefined {
  if (!stepId) return undefined;
  const uid = stepUids[stepId];
  if (uid == null) return undefined;
  return plans[String(uid)];
}

export function isFirstPlanStep(stepId: string | undefined) {
  if (!stepId) return false;
  const uid = stepUids[stepId];
  if (uid == null) return false;
  return firstStepByUid.get(uid) === stepId;
}

export function planEnemyLabel(plan: FightPlan) {
  if (plan.flee === 1 && !plan.e?.length) return "Flee";
  return plan.e?.[0]?.n ?? plan.t;
}

export function planIsUnverified(plan: FightPlan) {
  return plan.u === 1 || plan.c === "l";
}

export function turnLine(turn: FightPlanTurn) {
  const actions = turn.a.map(([who, action]) => `${who}: ${action}`).join(" · ");
  const label = turn.h ? `T${turn.t} (${turn.h})` : `T${turn.t}`;
  return `${label} — ${actions}`;
}

/** One line. Turn numbers stay when the prep covers more than one turn. */
export function beforeFleeing(prep: [number, string[]][]) {
  if (prep.length === 1) {
    const [, actions] = prep[0];
    return `Before fleeing: ${actions.join(" · ")}`;
  }
  const parts = prep.map(([turn, actions]) => `T${turn} ${actions.join(" · ")}`);
  return `Before fleeing: ${parts.join(" · ")}`;
}

export const fightPlanCounts = {
  plans: Object.keys(plans).length,
  steps: Object.keys(stepUids).length,
};
