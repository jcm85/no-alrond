import { combatGuide, fleeGuide } from "@/data/combat-guide";

export function CombatGuide() {
  return (
    <details className="combat-guide mb-3 rounded-card border border-line bg-surface px-4 py-2">
      <summary className="flex min-h-11 cursor-pointer items-center text-base font-medium">How combat works</summary>
      <ol className="mt-2 flex list-decimal flex-col gap-2 pl-5 text-base text-muted">
        {combatGuide.map((line) => (
          <li key={line.title}>
            <span className="text-fg">{line.title}.</span> {line.text}
          </li>
        ))}
      </ol>
      <h3 className="mt-3 text-base font-medium text-fg">Flee</h3>
      <ul className="mt-1 flex flex-col gap-2 text-base text-muted">
        {fleeGuide.map((line) => (
          <li key={line.title}>
            <span className="text-fg">{line.title}.</span> {line.text}
          </li>
        ))}
      </ul>
      <p className="mt-3 text-base text-muted">A ? means unconfirmed. Follow the step text.</p>
    </details>
  );
}
