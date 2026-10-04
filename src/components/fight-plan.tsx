import { beforeFleeing, planFor, planIsUnverified, turnLine } from "@/lib/fight-plans";

function Unverified() {
  return <span className="fight-tag">unverified</span>;
}

export function FightPlan({ stepId }: { stepId: string }) {
  const plan = planFor(stepId);
  if (!plan) return null;
  const unverified = planIsUnverified(plan);
  if (plan.flee === 1) {
    return (
      <section className="fight-plan" aria-label="Fight plan">
        <p className="fight-plan-head">
          <span>Fight plan</span>
          {unverified ? <Unverified /> : null}
        </p>
        <p className="fight-plan-flee">Flee</p>
        {plan.prep?.length ? <p className="fight-plan-turn">{beforeFleeing(plan.prep)}</p> : null}
      </section>
    );
  }
  return (
    <section className="fight-plan" aria-label="Fight plan">
      <p className="fight-plan-head">
        <span>Fight plan</span>
        {unverified ? <Unverified /> : null}
      </p>
      {plan.e?.length ? (
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
      ) : null}
      {plan.T?.map((turn, index) => (
        <p key={`${turn.t}-${index}`} className="fight-plan-turn">
          {turnLine(turn)}
        </p>
      ))}
      {plan.why ? (
        <details className="fight-plan-why">
          <summary>Why</summary>
          <p>{plan.why}</p>
        </details>
      ) : null}
    </section>
  );
}
