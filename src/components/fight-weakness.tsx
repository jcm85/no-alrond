import { useEffect, useState } from "react";
import { fightNotes, type FightEnemy, type FightNote } from "@/data/fight-notes";

function EnemyLine({ enemy, ignores }: { enemy: FightEnemy; ignores: boolean }) {
  const weak = !ignores && enemy.weak && enemy.weak.length > 0 ? enemy.weak : null;
  return (
    <li className="flex flex-wrap items-center gap-x-2 gap-y-1">
      <span className="text-fg">{enemy.name}</span>
      {ignores ? <span className="fight-tag">ignores weakness</span> : null}
      {!ignores && weak
        ? weak.map((name) => (
            <span key={name} className="weak-chip is-weak">
              {name}
            </span>
          ))
        : null}
      {!ignores && !weak ? (
        <span>
          <span className="weak-chip is-unknown" aria-hidden="true">
            ?
          </span>{" "}
          <span>weak: unverified</span>
        </span>
      ) : null}
      {enemy.shield ? <span>shield {enemy.shield}</span> : null}
      <span>{enemy.confidence}</span>
      {enemy.recheck ? <span>re-check on screen after a phase change</span> : null}
    </li>
  );
}

function Summary({ note }: { note: FightNote }) {
  const names = note.enemies.map((enemy) => enemy.name).join(", ");
  return (
    <span className="text-fg">
      Weaknesses
      <span className="text-muted"> · {names}</span>
    </span>
  );
}

export function FightWeakness({ stepId, onShowGuide }: { stepId: string; onShowGuide?: () => void }) {
  const note = fightNotes[stepId];
  const [open, setOpen] = useState(false);
  useEffect(() => {
    setOpen(false);
  }, [stepId]);
  if (!note) return null;
  const many = note.enemies.length > 1;
  const ignores = Boolean(note.ignoresWeakness);
  return (
    <div className="fight-weak mt-2 text-base text-muted">
      {many ? (
        <button
          type="button"
          className="weak-toggle min-h-11 text-left"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          <Summary note={note} />
          <span className="ml-2 text-gold">{open ? "Hide" : "Show"}</span>
        </button>
      ) : null}
      {!many || open ? (
        <ul className="mt-1 flex flex-col gap-1">
          {note.enemies.map((enemy) => (
            <EnemyLine key={enemy.name} enemy={enemy} ignores={ignores} />
          ))}
        </ul>
      ) : null}
      {onShowGuide ? (
        <button type="button" className="mt-1 min-h-11 text-gold underline underline-offset-4" onClick={onShowGuide}>
          How weaknesses work
        </button>
      ) : null}
    </div>
  );
}
