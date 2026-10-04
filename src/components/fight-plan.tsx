import { useState } from "react";
import {
  beforeFleeing,
  isFirstPlanStep,
  matchedActionIndex,
  matchedTurnIndex,
  planEnemyLabel,
  planFor,
  planIsUnverified,
  turnLine,
  type FightPlan as FightPlanData,
  type FightPlanTurn,
} from "@/lib/fight-plans";

const PLAN_OPEN_KEY = "no-alrond-plan-open";

function readPlanOpen(planId: string) {
  if (typeof localStorage === "undefined") return false;
  try {
    const raw = localStorage.getItem(PLAN_OPEN_KEY);
    if (!raw) return false;
    const map = JSON.parse(raw) as Record<string, unknown>;
    return map[planId] === true;
  } catch {
    return false;
  }
}

function writePlanOpen(planId: string, open: boolean) {
  try {
    const raw = localStorage.getItem(PLAN_OPEN_KEY);
    const map = raw ? (JSON.parse(raw) as Record<string, unknown>) : {};
    map[planId] = open;
    localStorage.setItem(PLAN_OPEN_KEY, JSON.stringify(map));
  } catch {
    /* private mode or a full store */
  }
}

function Unverified() {
  return <span className="fight-tag">unverified</span>;
}

function Enemies({ plan, preview = false }: { plan: FightPlanData; preview?: boolean }) {
  if (!plan.e?.length) return null;
  return (
    <ul className="fight-plan-enemies">
      {plan.e.map((enemy, index) => (
        <li
          key={`${enemy.n}-${index}`}
          className={"fight-plan-enemy" + (preview && index > 0 ? " fight-plan-extra" : "")}
        >
          <span className="text-fg">{enemy.n}</span>
          {enemy.s ? <span>shield {enemy.s}</span> : null}
          {enemy.w?.map((name) => (
            <span key={name} className="weak-chip is-weak">
              {name}
            </span>
          ))}
          {enemy.v === 0 ? <Unverified /> : null}
        </li>
      ))}
    </ul>
  );
}

function Turns({ turns, keyFrom = 0 }: { turns: FightPlanData["T"]; keyFrom?: number }) {
  return (
    <>
      {turns?.map((turn, index) => (
        <p key={`${turn.t}-${turn.h ?? ""}-${keyFrom + index}`} className="fight-plan-turn">
          {turnLine(turn)}
        </p>
      ))}
    </>
  );
}

function HighlightedTurn({ turn, actionIndex }: { turn: FightPlanTurn; actionIndex: number | null }) {
  const label = turn.h ? `T${turn.t} · ${turn.h}` : `T${turn.t}`;
  return (
    <p className="fight-plan-turn fight-plan-turn-full">
      {label} —{" "}
      {turn.a.map(([who, action], index) => (
        <span key={`${who}-${index}`}>
          {index > 0 ? " · " : null}
          <span className={index === actionIndex ? "fight-plan-you" : undefined}>
            {who}: {action}
          </span>
        </span>
      ))}
    </p>
  );
}

function shortTurn(turn: FightPlanTurn, actionIndex: number | null) {
  const label = turn.h ? `T${turn.t} · ${turn.h}` : `T${turn.t}`;
  const picked = actionIndex != null ? turn.a[actionIndex] : turn.a[0];
  if (!picked) return `${label}`;
  return `${label} — ${picked[0]}: ${picked[1]}`;
}

function FullPlan({ plan }: { plan: FightPlanData }) {
  const unverified = planIsUnverified(plan);
  if (plan.flee === 1) {
    return (
      <>
        <p className="fight-plan-head">
          <span>Fight plan</span>
          {unverified ? <Unverified /> : null}
        </p>
        <p className="fight-plan-flee">Flee</p>
        {plan.prep?.length ? <p className="fight-plan-turn">{beforeFleeing(plan.prep)}</p> : null}
      </>
    );
  }
  return (
    <>
      <p className="fight-plan-head">
        <span>Fight plan</span>
        {unverified ? <Unverified /> : null}
      </p>
      <Enemies plan={plan} />
      <Turns turns={plan.T} />
      {plan.why ? (
        <details className="fight-plan-why">
          <summary>Why</summary>
          <p>{plan.why}</p>
        </details>
      ) : null}
    </>
  );
}

export function FightPlan({ stepId, variant = "now" }: { stepId: string; variant?: "now" | "route" }) {
  const plan = planFor(stepId);
  const lead = isFirstPlanStep(stepId);
  const planId = plan?.id ?? "";
  const [openFor, setOpenFor] = useState("");
  const [open, setOpen] = useState(false);
  if (planId !== openFor) {
    setOpenFor(planId);
    setOpen(planId ? readPlanOpen(planId) : false);
  }
  if (!plan) return null;
  const unverified = planIsUnverified(plan);
  function toggle() {
    setOpen((value) => {
      const next = !value;
      if (planId) writePlanOpen(planId, next);
      return next;
    });
  }

  if (variant === "route") {
    if (!lead) return null;
    return (
      <section className={"fight-plan" + (open ? " is-open" : "")} aria-label="Fight plan">
        <button type="button" className="fight-plan-jump" aria-expanded={open} onClick={toggle}>
          <span className="text-fg">{planEnemyLabel(plan)}</span>
          {unverified ? <Unverified /> : null}
          <span className="text-gold">{open ? "Hide fight plan" : "Show fight plan"}</span>
        </button>
        {open ? <FullPlan plan={plan} /> : null}
      </section>
    );
  }

  if (plan.flee === 1 && !lead) return null;

  const turnIndex = !lead ? matchedTurnIndex(stepId) : null;
  const turns = plan.T ?? [];
  const currentTurn = turnIndex == null ? undefined : turns[turnIndex];
  if (!lead && turnIndex != null && currentTurn) {
    const nextTurn = turns[turnIndex + 1];
    const actionIndex = matchedActionIndex(stepId, currentTurn);
    const hasMore = Boolean(plan.e?.length) || Boolean(plan.why) || turns.length > (nextTurn ? 2 : 1);
    return (
      <section className={"fight-plan is-matched" + (open ? " is-open" : "")} aria-label="Fight plan">
        {unverified ? (
          <p className="fight-plan-head">
            <span>Fight plan</span>
            <Unverified />
          </p>
        ) : null}
        <HighlightedTurn turn={currentTurn} actionIndex={actionIndex} />
        <p className={"fight-plan-turn fight-plan-turn-short" + (actionIndex != null ? " fight-plan-you" : "")}>
          {shortTurn(currentTurn, actionIndex)}
        </p>
        {nextTurn ? <p className="fight-plan-turn fight-plan-next">{turnLine(nextTurn)}</p> : null}
        {hasMore ? (
          <>
            <button type="button" className="fight-plan-more" aria-expanded={open} onClick={toggle}>
              {open ? "Hide full plan" : "Show full plan"}
            </button>
            <div className="fight-plan-rest">
              <Turns turns={turns.filter((_, index) => index !== turnIndex && index !== turnIndex + 1)} />
              <Enemies plan={plan} />
              {plan.why ? (
                <details className="fight-plan-why">
                  <summary>Why</summary>
                  <p>{plan.why}</p>
                </details>
              ) : null}
            </div>
          </>
        ) : null}
      </section>
    );
  }

  if (!lead) {
    return (
      <section className={"fight-plan" + (open ? " is-open" : "")} aria-label="Fight plan">
        <button type="button" className="fight-plan-jump" aria-expanded={open} onClick={toggle}>
          <span className="text-fg">{planEnemyLabel(plan)}</span>
          {unverified ? <Unverified /> : null}
          <span className="text-gold">{open ? "Hide fight plan" : "Show fight plan"}</span>
        </button>
        {open ? <FullPlan plan={plan} /> : null}
      </section>
    );
  }

  if (plan.flee === 1) {
    return (
      <section className="fight-plan is-lead" aria-label="Fight plan">
        <FullPlan plan={plan} />
      </section>
    );
  }

  const hasMore = (plan.e?.length ?? 0) > 1 || turns.length > 1 || Boolean(plan.why);
  return (
    <section className={"fight-plan is-lead" + (open ? " is-open" : "")} aria-label="Fight plan">
      <p className="fight-plan-head">
        <span>Fight plan</span>
        {unverified ? <Unverified /> : null}
      </p>
      <Enemies plan={plan} preview />
      <Turns turns={turns.slice(0, 1)} />
      {hasMore ? (
        <>
          <div className="fight-plan-rest">
            <Turns turns={turns.slice(1)} keyFrom={1} />
            {plan.why ? (
              <details className="fight-plan-why">
                <summary>Why</summary>
                <p>{plan.why}</p>
              </details>
            ) : null}
          </div>
          <button
            type="button"
            className="fight-plan-more"
            aria-expanded={open}
            onClick={toggle}
          >
            {open ? "Hide full plan" : "Show full plan"}
          </button>
        </>
      ) : null}
    </section>
  );
}
