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
const hints = (data as { hints?: Record<string, { t: number; h?: string }> }).hints ?? {};

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
  const label = turn.h ? `T${turn.t} · ${turn.h}` : `T${turn.t}`;
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

const stepText = new Map(steps.map((step) => [step.id, step.text]));
const stepsByUid = new Map<number, string[]>();
for (const step of steps) {
  const uid = stepUids[step.id];
  if (uid == null) continue;
  const list = stepsByUid.get(uid);
  if (list) list.push(step.id);
  else stepsByUid.set(uid, [step.id]);
}

function core(text: string) {
  return text
    .toLowerCase()
    .replace(/\[[^\]]*\]/g, " ")
    .replace(/\([^)]*\)/g, " ")
    .replace(/['’]/g, "")
    .replace(/[—–]/g, " ")
    .replace(/[^a-z0-9+/# ]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function stepBody(text: string) {
  const stripped = text.replace(/\[[^\]]*\]/g, " ");
  const parts = stripped.split(/\s*[—–]\s*/);
  return core(parts.length > 1 ? parts.slice(1).join(" ") : stripped);
}

function actionScore(stepTextValue: string, who: string, action: string) {
  const step = stepBody(stepTextValue);
  const act = core(action);
  if (!step || !act) return 0;
  let score = 0;
  if (step === act) score = 100;
  else if (act.length >= 4 && step.includes(act)) score = 80 + Math.min(act.length, 40);
  else if (act.length >= 4 && act.includes(step)) score = 60 + Math.min(step.length, 40);
  else {
    const tokens = act.split(" ").filter((token) => token.length > 2 || /^x\d+$/.test(token));
    if (tokens.length) {
      const hit = tokens.filter((token) => step.includes(token)).length;
      if (hit === tokens.length) score = 40 + hit;
      else if (hit / tokens.length >= 0.67 && hit >= 2) score = 20 + hit;
    }
  }
  if (!score) return 0;
  const name = core(who);
  const whole = core(stepTextValue);
  if (name && whole.startsWith(name)) score += 15;
  else if (name && whole.includes(name)) score += 5;
  return score;
}

function actionMatches(stepTextValue: string, action: string) {
  return actionScore(stepTextValue, "", action) > 0;
}

function hintIndex(turns: FightPlanTurn[], hint: { t: number; h?: string }) {
  return turns.findIndex((turn) => turn.t === hint.t && (hint.h == null ? turn.h == null : turn.h === hint.h));
}

function explicitTurn(text: string) {
  const turn = text.match(/^\s*turn\s+(\d+)/i);
  if (turn) return Number(turn[1]);
  const onT = text.match(/\bon\s+t(\d+)\b/i);
  if (onT) return Number(onT[1]);
  return null;
}

/** Later step id → index into that plan's T. The first step of a fight is not indexed. */
const turnIndexByStep = new Map<string, number>();
for (const [uid, ids] of stepsByUid) {
  const plan = plans[String(uid)];
  const turns = plan?.T ?? [];
  if (!turns.length || plan?.flee === 1) continue;
  let cursor = -1;
  for (const id of ids) {
    if (firstStepByUid.get(uid) === id) continue;
    const hint = hints[id];
    if (hint) {
      const hinted = hintIndex(turns, hint);
      if (hinted >= 0) {
        turnIndexByStep.set(id, hinted);
        cursor = hinted;
        continue;
      }
    }
    const text = stepText.get(id) ?? "";
    const wanted = explicitTurn(text);
    const hits: number[] = [];
    for (let index = 0; index < turns.length; index += 1) {
      const turn = turns[index];
      if (!turn) continue;
      if (wanted != null && turn.t !== wanted) continue;
      if (turn.a.some(([, action]) => actionMatches(text, action))) hits.push(index);
    }
    let picked = hits.find((index) => index >= cursor);
    if (picked == null && wanted != null) {
      const found = turns.findIndex((turn, index) => turn.t === wanted && index >= cursor);
      if (found >= 0) picked = found;
    }
    if (picked == null && cursor < 0 && hits.length) picked = hits[0];
    if (picked == null) continue;
    turnIndexByStep.set(id, picked);
    cursor = picked;
  }
}

export function matchedTurnIndex(stepId: string | undefined) {
  if (!stepId) return null;
  const index = turnIndexByStep.get(stepId);
  return index == null ? null : index;
}

/** Which action in this turn the step text is asking the player to do. */
export function matchedActionIndex(stepId: string | undefined, turn: FightPlanTurn) {
  const text = stepId ? stepText.get(stepId) : undefined;
  if (!text) return null;
  let best = -1;
  let bestScore = 0;
  turn.a.forEach(([who, action], index) => {
    const score = actionScore(text, who, action);
    if (score > bestScore) {
      bestScore = score;
      best = index;
    }
  });
  return best >= 0 ? best : null;
}

/** Later battle steps (not the lead, not a flee) and how many landed on a turn. */
export function planTurnMatchRate() {
  let later = 0;
  let matched = 0;
  for (const step of steps) {
    const plan = planFor(step.id);
    if (!plan || isFirstPlanStep(step.id) || plan.flee === 1 || !plan.T?.length) continue;
    later += 1;
    if (turnIndexByStep.has(step.id)) matched += 1;
  }
  return { later, matched };
}
