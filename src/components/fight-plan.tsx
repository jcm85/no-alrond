import { useEffect, useState } from "react";
import {
  beforeFleeing,
  isFirstPlanStep,
  planEnemyLabel,
  planFor,
  planIsUnverified,
  turnLine,
  type FightPlan as FightPlanData,
} from "@/lib/fight-plans";

function Unverified() {
  return <span className="fight-tag">unverified</span>;
}

function Enemies({ plan }: { plan: FightPlanData }) {
  if (!plan.e?.length) return null;
  return (
    <ul className="fight-plan-enemies">
      {plan.e.map((enemy, index) => (
        <li key={`${enemy.n}-${index}`} className="fight-plan-enemy">
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
  const [open, setOpen] = useState(false);
  useEffect(() => {
    setOpen(false);
  }, [stepId]);
  if (!plan) return null;
  const unverified = planIsUnverified(plan);

  if (variant === "route" || !lead) {
    const hint = variant === "route" ? "Show fight plan" : "Fight plan: see first step";
    return (
      <section className={"fight-plan" + (open ? " is-open" : "")} aria-label="Fight plan">
        <button
          type="button"
          className="fight-plan-jump"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          <span className="text-fg">{planEnemyLabel(plan)}</span>
          {unverified ? <Unverified /> : null}
          <span className="text-gold">{open ? "Hide fight plan" : hint}</span>
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

  const turns = plan.T ?? [];
  const hasMore = turns.length > 1 || Boolean(plan.why);
  return (
    <section className={"fight-plan is-lead" + (open ? " is-open" : "")} aria-label="Fight plan">
      <p className="fight-plan-head">
        <span>Fight plan</span>
        {unverified ? <Unverified /> : null}
      </p>
      <Enemies plan={plan} />
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
            onClick={() => setOpen((value) => !value)}
          >
            {open ? "Hide full plan" : "Show full plan"}
          </button>
        </>
      ) : null}
    </section>
  );
}
