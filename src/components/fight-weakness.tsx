import { fightNotes, weakOrder, type WeakName } from "@/data/fight-notes";

const SHORT: Record<WeakName, string> = {
  Sword: "Sw",
  Spear: "Spear",
  Dagger: "Da",
  Axe: "Ax",
  Bow: "Bo",
  Staff: "St",
  Fire: "Fi",
  Ice: "Ic",
  Lightning: "Li",
  Wind: "Wi",
  Light: "Lt",
  Dark: "Dk",
};

function Chips({ weak }: { weak: readonly string[] }) {
  const known = new Set(weak);
  return (
    <span className="weak-row">
      {weakOrder.map((name, index) => {
        const on = known.has(name);
        return (
          <span key={name} className="contents">
            {index === 6 ? <span className="weak-gap" aria-hidden="true" /> : null}
            <span className={on ? "weak-chip is-weak" : "weak-chip is-unknown"} title={on ? name : `${name} unknown`}>
              <span className="sr-only">{on ? name : `${name} unknown`}</span>
              <span aria-hidden="true">{on ? SHORT[name] : "?"}</span>
            </span>
          </span>
        );
      })}
    </span>
  );
}

export function FightWeakness({ stepId }: { stepId: string }) {
  const note = fightNotes[stepId];
  if (!note) return null;
  return (
    <div className="fight-weak mt-2 text-base text-muted">
      {note.ignoresWeakness ? <p className="fight-tag">ignores weakness</p> : null}
      <ul className="mt-1 flex flex-col gap-1">
        {note.enemies.map((enemy) => (
          <li key={enemy.name} className="flex flex-wrap items-center gap-1">
            <span className="text-fg">{enemy.name}</span>
            {!note.ignoresWeakness && enemy.weak ? <Chips weak={enemy.weak} /> : null}
            {!note.ignoresWeakness && !enemy.weak ? <span>weak: unverified</span> : null}
            {enemy.shield ? <span>shield {enemy.shield}</span> : null}
            <span>{enemy.confidence}</span>
            {enemy.recheck ? <span>re-check on screen after a phase change</span> : null}
          </li>
        ))}
      </ul>
    </div>
  );
}
