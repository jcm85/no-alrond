import data from "@/data/fight-plans.json";

export type FightPlanEnemy = {
  n: string;
  s?: string;
  w?: string[];
  hp?: string;
  v: 0 | 1;
};

export type FightPlanTurn = {
  t: number;
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

export function planFor(stepId: string | undefined): FightPlan | undefined {
  if (!stepId) return undefined;
  const uid = stepUids[stepId];
  if (uid == null) return undefined;
  return plans[String(uid)];
}

export function planIsUnverified(plan: FightPlan) {
  return plan.u === 1 || plan.c === "l";
}

export function turnLine(turn: FightPlanTurn) {
  const actions = turn.a.map(([who, action]) => `${who}: ${action}`).join(" · ");
  return `T${turn.t} — ${actions}`;
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
