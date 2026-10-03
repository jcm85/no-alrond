import { useEffect, useMemo, useState, type ReactNode } from "react";
import {
  Check,
  Info,
  List,
  RotateCcw,
  Search,
  Undo2,
} from "lucide-react";
import { route, type Block, type Step } from "@/data/route";
import { RUN_KEY } from "@/lib/migrate-progress";
import { playhead, remaining, steps, useRun, videoAt, type FlatStep } from "@/lib/run-store";

type Tab = "now" | "route" | "find";

const KIND_LABEL: Record<string, string> = {
  travel: "Overworld",
  fight: "Fight",
  menu: "Menu",
  shop: "Shop",
  setup: "Setup",
};

export function RouteApp() {
  const done = useRun((s) => s.done);
  const skipped = useRun((s) => s.skipped);
  const history = useRun((s) => s.history);
  const notice = useRun((s) => s.notice);
  const hydrated = useRun((s) => s.hydrated);
  const complete = useRun((s) => s.complete);
  const toggle = useRun((s) => s.toggle);
  const undo = useRun((s) => s.undo);
  const reset = useRun((s) => s.reset);
  const dismissNotice = useRun((s) => s.dismissNotice);
  const markBeforeChapter = useRun((s) => s.markBeforeChapter);
  const setHydrated = useRun((s) => s.setHydrated);

  const [tab, setTab] = useState<Tab>("now");
  const [actId, setActId] = useState(route.acts[0]?.id ?? "");
  const [query, setQuery] = useState("");
  const [about, setAbout] = useState(false);
  const [confirmChapter, setConfirmChapter] = useState<string | null>(null);
  const [leftOnly, setLeftOnly] = useState(false);

  useEffect(() => {
    void Promise.resolve(useRun.persist.rehydrate()).finally(() => setHydrated(true));
  }, [setHydrated]);

  useEffect(() => {
    function onStorage(event: StorageEvent) {
      if (event.key === RUN_KEY && event.newValue) {
        void useRun.persist.rehydrate();
      }
    }
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  const current = playhead(done);
  const left = remaining(done);
  const total = steps.length;
  const doneCount = total - left;
  const pct = total ? Math.round((doneCount / total) * 100) : 0;

  useEffect(() => {
    function onKey(event: KeyboardEvent) {
      const target = event.target as HTMLElement | null;
      if (!hydrated) return;
      if (target && (target.tagName === "INPUT" || target.tagName === "TEXTAREA")) return;
      if (event.key === " " || event.key === "Enter") {
        if (!current) return;
        event.preventDefault();
        complete(current.id, "done");
      } else if (event.key === "Backspace") {
        undo();
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [complete, current, hydrated, undo]);

  const act = route.acts.find((item) => item.id === actId) ?? route.acts[0];

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (q.length < 2) return [];
    return steps.filter((step) => haystack(step).includes(q)).slice(0, 40);
  }, [query]);

  return (
    <div className="min-h-dvh bg-bg text-fg">
      <header className="sticky top-0 z-20 border-b border-line bg-bg/95 backdrop-blur-sm">
        <div className="mx-auto flex w-full max-w-2xl items-center gap-3 px-4 py-3">
          <Mark />
          <div className="min-w-0 flex-1">
            <p className="text-xs tracking-widest text-gold uppercase">All superbosses</p>
            <h1 className="truncate font-display text-xl leading-tight font-semibold text-fg">
              No Alrond
            </h1>
          </div>
          <button
            type="button"
            className="grid size-11 place-items-center rounded-full text-muted hover:bg-raise hover:text-fg"
            onClick={() => setAbout((v) => !v)}
            disabled={!hydrated}
            aria-expanded={about}
            aria-label="About this route"
          >
            <Info className="size-5" />
          </button>
        </div>
        <div className="mx-auto w-full max-w-2xl px-4 pb-3">
          <div className="mb-1.5 flex items-baseline justify-between text-xs text-muted">
            <span>
              {hydrated
                ? `${doneCount.toLocaleString()} / ${total.toLocaleString()} steps`
                : "Loading progress"}
            </span>
            <span className="tabular-nums">{hydrated ? `${pct}%` : ""}</span>
          </div>
          <div className="h-1 overflow-hidden rounded-full bg-line" aria-hidden="true">
            <div className="h-full bg-gold" style={{ width: `${pct}%` }} />
          </div>
        </div>
      </header>

      <main className="mx-auto w-full max-w-2xl px-4 pt-4 pb-28">
        {!hydrated ? (
          <p className="text-base text-muted">Loading your saved progress…</p>
        ) : null}
        {hydrated && notice ? (
          <div role="status" className="mb-4 rounded-card border border-gold bg-surface p-4">
            <p className="text-base text-fg">
              {notice.carried === 0
                ? "The route was updated. Your old progress can't be carried over safely."
                : `${notice.carried} of ${notice.total} carried over.`}
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              <button
                type="button"
                onClick={() => reset()}
                className="rounded-card bg-gold px-4 py-3 text-sm font-semibold text-ink"
              >
                Start over
              </button>
              <button
                type="button"
                onClick={() => {
                  setTab("route");
                  dismissNotice();
                }}
                className="rounded-card border border-line px-4 py-3 text-sm"
              >
                Pick a chapter to start from
              </button>
            </div>
          </div>
        ) : null}
        {hydrated && about ? <About onClose={() => setAbout(false)} /> : null}

        {hydrated && tab === "now" ? (
          <Now
            current={current}
            doneCount={doneCount}
            onDone={() => current && complete(current.id, "done")}
            onSkip={() => current && complete(current.id, "skip")}
            onUndo={undo}
            canUndo={history.length > 0}
            upcoming={upcoming(done)}
            onOpenRoute={() => {
              if (current) setActId(current.actId);
              setTab("route");
            }}
          />
        ) : null}

        {hydrated && tab === "route" ? (
          <section>
            <div className="mb-3 flex gap-2 overflow-x-auto pb-1">
              {route.acts.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setActId(item.id)}
                  className={
                    "shrink-0 rounded-full border px-3 py-2 text-sm " +
                    (item.id === act?.id
                      ? "border-gold bg-gold text-ink"
                      : "border-line bg-surface text-fg")
                  }
                >
                  {item.title}
                </button>
              ))}
            </div>
            <div className="mb-4 flex items-center justify-between gap-3">
              <p className="text-sm text-muted">{act?.title}</p>
              <button
                type="button"
                onClick={() => setLeftOnly((v) => !v)}
                className={
                  "rounded-full border px-3 py-2 text-sm " +
                  (leftOnly ? "border-gold text-gold" : "border-line text-muted")
                }
              >
                {leftOnly ? "Still to do" : "All steps"}
              </button>
            </div>
            {act?.chapters.map((chapter) => {
              const chapterSteps = steps.filter((s) => s.chapterId === chapter.id);
              const open = chapterSteps.some((s) => !done[s.id]);
              if (leftOnly && !open) return null;
              const ahead = chapterSteps.filter((s) => !done[s.id]).length;
              return (
                <article key={chapter.id} className="mb-8">
                  <div className="mb-3 flex items-start justify-between gap-3">
                    <div>
                      <h2 className="font-display text-2xl leading-tight font-semibold">
                        {chapter.title}
                      </h2>
                      <p className="mt-1 text-sm text-muted">
                        {ahead} left
                        {chapter.mark ? ` · Chapter starts ≈ ${chapter.mark}` : ""}
                      </p>
                    </div>
                    <div className="flex shrink-0 flex-col items-end gap-2">
                      {chapter.seconds ? (
                        <a
                          className="text-sm text-gold underline underline-offset-4"
                          href={videoAt(chapter.seconds)}
                          target="_blank"
                          rel="noreferrer"
                        >
                          Watch from here
                        </a>
                      ) : null}
                      <button
                        type="button"
                        className="text-sm text-muted underline underline-offset-4"
                        onClick={() => setConfirmChapter(chapter.id)}
                      >
                        Start here
                      </button>
                    </div>
                  </div>
                  {chapter.blocks.map((block) => (
                    <BlockCard
                      key={block.id}
                      block={block}
                      done={done}
                      skipped={skipped}
                      leftOnly={leftOnly}
                      onToggle={toggle}
                    />
                  ))}
                </article>
              );
            })}
          </section>
        ) : null}

        {hydrated && tab === "find" ? (
          <section>
            <label className="mb-3 block">
              <span className="sr-only">Search the route</span>
              <input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Skill, item, town, boss"
                className="w-full rounded-card border border-line bg-surface px-4 py-3 text-fg outline-none placeholder:text-muted focus:border-gold"
                autoCapitalize="none"
                autoCorrect="off"
              />
            </label>
            {query.trim().length < 2 ? (
              <p className="text-sm text-muted">Search the thousand steps. Two letters is enough.</p>
            ) : results.length === 0 ? (
              <p className="text-sm text-muted">Nothing matches.</p>
            ) : (
              <ul className="flex flex-col gap-2">
                {results.map((step) => (
                  <li key={step.id}>
                    <button
                      type="button"
                      onClick={() => toggle(step.id)}
                      className="flex w-full items-start gap-3 rounded-card border border-line bg-surface px-3 py-3 text-left"
                    >
                      <Box on={Boolean(done[step.id])} />
                      <span className="min-w-0">
                        <span className="block text-xs text-gold">
                          {step.act} · {step.chapter}
                        </span>
                        <span className={"mt-1 block " + (done[step.id] ? "text-muted line-through" : "")}>
                          {step.text}
                        </span>
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </section>
        ) : null}
      </main>

      <nav className="safe-bottom fixed inset-x-0 bottom-0 z-20 border-t border-line bg-bg/95 backdrop-blur-sm">
        <div className="mx-auto grid w-full max-w-2xl grid-cols-3">
          <TabButton active={tab === "now"} onClick={() => setTab("now")} label="Now" icon={<Check className="size-5" />} />
          <TabButton active={tab === "route"} onClick={() => setTab("route")} label="Route" icon={<List className="size-5" />} />
          <TabButton active={tab === "find"} onClick={() => setTab("find")} label="Find" icon={<Search className="size-5" />} />
        </div>
      </nav>

      {confirmChapter ? (
        <Confirm
          title="Start at this chapter?"
          body="Every step before it will be marked done. You can still uncheck them."
          confirm="Start here"
          onCancel={() => setConfirmChapter(null)}
          onConfirm={() => {
            markBeforeChapter(confirmChapter);
            setConfirmChapter(null);
            setTab("now");
          }}
        />
      ) : null}
    </div>
  );
}

function Now({
  current,
  doneCount,
  onDone,
  onSkip,
  onUndo,
  canUndo,
  upcoming,
  onOpenRoute,
}: {
  current: FlatStep | null;
  doneCount: number;
  onDone: () => void;
  onSkip: () => void;
  onUndo: () => void;
  canUndo: boolean;
  upcoming: FlatStep[];
  onOpenRoute: () => void;
}) {
  if (!current) {
    return (
      <section className="rounded-card border border-gold bg-surface px-5 py-8">
        <p className="text-xs tracking-widest text-gold uppercase">Clear</p>
        <h2 className="mt-2 font-display text-3xl leading-tight font-semibold">
          The route is done.
        </h2>
        <p className="mt-3 text-muted">
          Galdera, Vide, and all four extra battles are checked off. {doneCount.toLocaleString()} steps.
        </p>
      </section>
    );
  }

  const showTitle = !current.solo || current.block !== current.text;

  return (
    <section>
      <p className="text-sm text-muted">
        {current.act} · {current.chapter}
      </p>
      <div className="mt-3 rounded-card border border-line bg-surface p-4">
        <div className="flex items-center justify-between gap-3">
          <p className="text-xs tracking-widest text-gold uppercase">
            {KIND_LABEL[current.blockKind] ?? "Step"}
            {current.ctx ? ` · ${current.ctx}` : ""}
          </p>
          {current.optional ? <span className="text-xs text-muted">Optional</span> : null}
        </div>
        {showTitle ? (
          <p className="mt-2 text-sm text-muted">{current.block}</p>
        ) : null}
        {current.when ? <p className="mt-2 text-sm text-gold">{current.when}</p> : null}
        {current.lead ? <p className="mt-2 text-sm text-gold">{current.lead}</p> : null}
        {current.foes && current.foes.length > 0 && isFirstInBlock(current) ? (
          <ul className="mt-3 flex flex-col gap-1 border-l-2 border-ember pl-3 text-sm text-muted">
            {current.foes.map((foe) => (
              <li key={foe}>{foe}</li>
            ))}
          </ul>
        ) : null}
        <h2 className="mt-3 font-display text-3xl leading-tight font-semibold text-balance">
          {current.text}
        </h2>
        {current.lines && current.lines.length > 0 ? (
          <ul className="mt-3 flex flex-col gap-1 text-base text-fg">
            {current.lines.map((line) => (
              <li key={line} className="border-t border-line pt-1">
                {line}
              </li>
            ))}
          </ul>
        ) : null}
        {current.note ? (
          <p className={"mt-3 text-sm " + (current.warn ? "text-ember" : "text-muted")}>{current.note}</p>
        ) : null}
        {current.mark && isFirstInChapter(current) ? (
          <a
            className="mt-3 inline-block text-sm text-gold underline underline-offset-4"
            href={current.seconds != null ? videoAt(current.seconds) : route.meta.video}
            target="_blank"
            rel="noreferrer"
          >
            Chapter starts ≈ {current.mark}
          </a>
        ) : null}
        <div className="mt-5 grid grid-cols-4 gap-2">
          <button
            type="button"
            onClick={onDone}
            className="col-span-3 rounded-card bg-gold px-4 py-3 font-semibold text-ink"
          >
            Done
          </button>
          <button
            type="button"
            onClick={onSkip}
            className="rounded-card border border-line px-3 py-3 text-sm text-muted"
          >
            Skip
          </button>
        </div>
      </div>

      <div className="mt-3 flex items-center justify-between">
        <button
          type="button"
          onClick={onUndo}
          disabled={!canUndo}
          className="inline-flex items-center gap-2 py-2 text-sm text-muted disabled:opacity-40"
        >
          <Undo2 className="size-4" />
          Undo
        </button>
        <button type="button" onClick={onOpenRoute} className="py-2 text-sm text-gold">
          Open in the route
        </button>
      </div>

      {upcoming.length > 0 ? (
        <ol className="mt-2 flex flex-col">
          {upcoming.map((step, index) => (
            <li key={step.id} className="border-t border-line py-3 text-sm text-muted">
              <span className="mr-2 text-gold tabular-nums">{index + 1}</span>
              {step.ctx ? <span className="mr-2 text-fg">{step.ctx}</span> : null}
              {step.text}
            </li>
          ))}
        </ol>
      ) : null}
    </section>
  );
}

function BlockCard({
  block,
  done,
  skipped,
  leftOnly,
  onToggle,
}: {
  block: Block;
  done: Record<string, boolean>;
  skipped: Record<string, boolean>;
  leftOnly: boolean;
  onToggle: (id: string) => void;
}) {
  const visible = block.steps.filter((step) => !leftOnly || !step.check || !done[step.id]);
  if (visible.length === 0 && !(block.foes && block.foes.length)) return null;
  const solo = block.solo && block.steps.length === 1 && block.steps[0]?.text === block.title;

  return (
    <div className="mb-3 overflow-hidden rounded-card border border-line bg-surface">
      {solo ? null : (
        <div className="flex items-baseline justify-between gap-3 border-b border-line px-3 py-2">
          <h3 className="text-sm font-medium">{block.title}</h3>
          <span className="text-xs tracking-wide text-muted uppercase">
            {KIND_LABEL[block.kind] ?? block.kind}
          </span>
        </div>
      )}
      {block.when ? <p className="px-3 pt-2 text-sm text-gold">{block.when}</p> : null}
      {block.foes && block.foes.length > 0 ? (
        <ul className="mx-3 mt-2 border-l-2 border-ember pl-3 text-sm text-muted">
          {block.foes.map((foe) => (
            <li key={foe} className="py-0.5">
              {foe}
            </li>
          ))}
        </ul>
      ) : null}
      <ul>
        {visible.map((step) => (
          <StepRow
            key={step.id}
            step={step}
            on={Boolean(done[step.id])}
            skip={Boolean(skipped[step.id])}
            onToggle={onToggle}
          />
        ))}
      </ul>
    </div>
  );
}

function StepRow({
  step,
  on,
  skip,
  onToggle,
}: {
  step: Step;
  on: boolean;
  skip: boolean;
  onToggle: (id: string) => void;
}) {
  if (!step.check) {
    return (
      <li className="px-3 py-2 text-sm text-muted">
        {step.text}
      </li>
    );
  }
  return (
    <li>
      <button
        type="button"
        onClick={() => onToggle(step.id)}
        className="flex w-full items-start gap-3 px-3 py-3 text-left"
        aria-pressed={on}
      >
        <Box on={on} />
        <span className="min-w-0 flex-1">
          {step.ctx ? <span className="mb-0.5 block text-xs text-gold">{step.ctx}</span> : null}
          {step.lead ? <span className="mb-0.5 block text-xs text-gold">{step.lead}</span> : null}
          <span className={on ? "text-muted line-through" : "text-fg"}>{step.text}</span>
          {step.lines && step.lines.length > 0 ? (
            <span className="mt-1 block text-sm text-muted">{step.lines.join(" · ")}</span>
          ) : null}
          {step.note ? (
            <span className={"mt-1 block text-sm " + (step.warn ? "text-ember" : "text-muted")}>
              {step.note}
            </span>
          ) : null}
          {skip ? <span className="mt-1 block text-xs text-muted">Skipped</span> : null}
          {step.optional && !on ? <span className="mt-1 block text-xs text-muted">Optional</span> : null}
        </span>
      </button>
    </li>
  );
}

function Box({ on }: { on: boolean }) {
  return (
    <span
      className={
        "mt-0.5 grid size-6 shrink-0 place-items-center rounded-md border " +
        (on ? "border-gold bg-gold text-ink" : "border-line bg-bg text-transparent")
      }
      aria-hidden="true"
    >
      <Check className="size-4" />
    </span>
  );
}

function TabButton({
  active,
  onClick,
  label,
  icon,
}: {
  active: boolean;
  onClick: () => void;
  label: string;
  icon: ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={"flex flex-col items-center gap-1 py-2 text-xs " + (active ? "text-gold" : "text-muted")}
    >
      {icon}
      {label}
    </button>
  );
}

function About({ onClose }: { onClose: () => void }) {
  const reset = useRun((s) => s.reset);
  const exportProgress = useRun((s) => s.exportProgress);
  const importProgress = useRun((s) => s.importProgress);
  const [armed, setArmed] = useState(false);
  const [paste, setPaste] = useState("");
  const [message, setMessage] = useState("");
  return (
    <section className="mb-4 rounded-card border border-line bg-surface p-4">
      <div className="flex items-start justify-between gap-3">
        <h2 className="font-display text-xl font-semibold">The sheet, as a checklist</h2>
        <button type="button" onClick={onClose} className="text-sm text-gold">
          Close
        </button>
      </div>
      <p className="mt-2 text-sm text-muted">{route.meta.note}</p>
      <p className="mt-2 text-sm text-muted">
        Runner {route.meta.runner}. Category: {route.meta.category}. Sheet touched {route.meta.sheetDate}.{" "}
        {route.meta.steps.toLocaleString()} player steps. Space or Enter checks the current one.
      </p>
      <a
        className="mt-3 inline-block text-sm text-gold underline underline-offset-4"
        href={route.meta.video}
        target="_blank"
        rel="noreferrer"
      >
        Watch the run
      </a>
      <div className="mt-4 flex flex-wrap gap-2">
        <button
          type="button"
          className="rounded-card border border-line px-3 py-2 text-sm"
          onClick={() => {
            const json = exportProgress();
            setPaste(json);
            setMessage("Progress copied below. Paste it on another device to restore.");
            void navigator.clipboard?.writeText(json).catch(() => undefined);
          }}
        >
          Copy progress
        </button>
      </div>
      <label className="mt-3 block text-sm text-muted">
        Paste progress
        <textarea
          value={paste}
          onChange={(event) => setPaste(event.target.value)}
          rows={4}
          className="mt-1 w-full rounded-card border border-line bg-bg px-3 py-2 text-sm text-fg"
        />
      </label>
      <button
        type="button"
        className="mt-2 rounded-card border border-line px-3 py-2 text-sm"
        onClick={() => {
          const result = importProgress(paste);
          setMessage(result.ok ? "Progress restored." : result.error);
        }}
      >
        Restore pasted progress
      </button>
      {message ? <p className="mt-2 text-sm text-muted">{message}</p> : null}
      <div className="mt-4">
        {armed ? (
          <button
            type="button"
            onClick={() => {
              reset();
              setArmed(false);
              onClose();
            }}
            className="inline-flex items-center gap-2 rounded-card border border-ember px-3 py-2 text-sm text-ember"
          >
            <RotateCcw className="size-4" />
            Confirm reset
          </button>
        ) : (
          <button
            type="button"
            onClick={() => setArmed(true)}
            className="inline-flex items-center gap-2 text-sm text-muted"
          >
            <RotateCcw className="size-4" />
            Reset progress
          </button>
        )}
      </div>
    </section>
  );
}

function Confirm({
  title,
  body,
  confirm,
  onConfirm,
  onCancel,
}: {
  title: string;
  body: string;
  confirm: string;
  onConfirm: () => void;
  onCancel: () => void;
}) {
  return (
    <div className="fixed inset-0 z-40 grid place-items-end bg-bg/70 p-4 sm:place-items-center">
      <div className="w-full max-w-sm rounded-card border border-line bg-raise p-4">
        <h2 className="font-display text-xl font-semibold">{title}</h2>
        <p className="mt-2 text-sm text-muted">{body}</p>
        <div className="mt-4 grid grid-cols-2 gap-2">
          <button type="button" onClick={onCancel} className="rounded-card border border-line py-3 text-sm">
            Cancel
          </button>
          <button type="button" onClick={onConfirm} className="rounded-card bg-gold py-3 text-sm font-semibold text-ink">
            {confirm}
          </button>
        </div>
      </div>
    </div>
  );
}

function Mark() {
  return (
    <svg viewBox="0 0 32 32" className="size-9 shrink-0 text-gold" aria-hidden="true">
      <rect x="1.5" y="1.5" width="29" height="29" rx="8" className="fill-surface stroke-gold" strokeWidth="1.5" />
      <path
        d="M16 6 L18 13.2 L25.2 16 L18 18.8 L16 26 L14 18.8 L6.8 16 L14 13.2 Z"
        className="fill-gold"
      />
    </svg>
  );
}

function upcoming(done: Record<string, boolean>) {
  const list: FlatStep[] = [];
  let seen = false;
  for (const step of steps) {
    if (!done[step.id]) {
      if (!seen) {
        seen = true;
        continue;
      }
      list.push(step);
      if (list.length === 3) break;
    }
  }
  return list;
}

function isFirstInBlock(step: FlatStep) {
  return steps.find((item) => item.blockId === step.blockId)?.id === step.id;
}

function isFirstInChapter(step: FlatStep) {
  return steps.find((item) => item.chapterId === step.chapterId)?.id === step.id;
}

function haystack(step: FlatStep) {
  return [step.text, step.note, step.ctx, step.block, step.chapter, step.act, ...(step.lines ?? [])]
    .filter(Boolean)
    .join(" ")
    .toLowerCase();
}
