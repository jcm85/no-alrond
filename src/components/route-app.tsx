import { useEffect, useMemo, useRef, useState, type ReactNode } from "react";
import { Camera, Check, Info, List, RotateCcw, Search, Undo2 } from "lucide-react";
import { changelog } from "@/data/changelog";
import { route, type Block } from "@/data/route";
import { RUN_KEY } from "@/lib/migrate-progress";
import { StepPictureCard } from "@/components/step-picture";
import { pictureFor, preloadPicture, usePictureHidden } from "@/lib/step-pictures";
import {
  chapterOrder,
  playhead,
  remaining,
  steps,
  useRun,
  videoAt,
  type FlatStep,
} from "@/lib/run-store";

type Tab = "now" | "route" | "find";
type RouteFilter = "all" | "left" | "skipped";
type ConfirmState =
  | { kind: "chapter"; id: string; count: number }
  | { kind: "through"; id: string; count: number }
  | { kind: "carried"; id: string; count: number }
  | null;

const KIND_LABEL: Record<string, string> = {
  travel: "Overworld",
  fight: "Fight",
  menu: "Menu",
  shop: "Shop",
  setup: "Setup",
  do: "Step",
  party: "Party",
  note: "Note",
};

export function RouteApp() {
  const done = useRun((s) => s.done);
  const skipped = useRun((s) => s.skipped);
  const history = useRun((s) => s.history);
  const notice = useRun((s) => s.notice);
  const hydrated = useRun((s) => s.hydrated);
  const complete = useRun((s) => s.complete);
  const toggle = useRun((s) => s.toggle);
  const markThrough = useRun((s) => s.markThrough);
  const undo = useRun((s) => s.undo);
  const reset = useRun((s) => s.reset);
  const dismissNotice = useRun((s) => s.dismissNotice);
  const markBeforeChapter = useRun((s) => s.markBeforeChapter);
  const setHydrated = useRun((s) => s.setHydrated);

  const [tab, setTab] = useState<Tab>("now");
  const [actId, setActId] = useState(route.acts[0]?.id ?? "");
  const [query, setQuery] = useState("");
  const [chapterPick, setChapterPick] = useState<string | null>(null);
  const [about, setAbout] = useState(false);
  const [confirm, setConfirm] = useState<ConfirmState>(null);
  const [routeFilter, setRouteFilter] = useState<RouteFilter>("all");
  const [openChapters, setOpenChapters] = useState<Record<string, boolean>>({});
  const [highlightId, setHighlightId] = useState<string | null>(null);
  const [toast, setToast] = useState<string | null>(null);

  useEffect(() => {
    void Promise.resolve(useRun.persist.rehydrate()).finally(() => setHydrated(true));
  }, [setHydrated]);

  useEffect(() => {
    function onStorage(event: StorageEvent) {
      if (event.key === RUN_KEY && event.newValue) void useRun.persist.rehydrate();
    }
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  useEffect(() => {
    if (!toast) return;
    const timer = window.setTimeout(() => setToast(null), 6000);
    return () => window.clearTimeout(timer);
  }, [toast]);

  const current = playhead(done);
  const latestCarried =
    notice && notice.carried > 0 ? [...steps].reverse().find((step) => done[step.id]) : undefined;
  const left = remaining(done);
  const total = steps.length;
  const doneCount = total - left;
  const skippedCount = steps.reduce((count, step) => count + (skipped[step.id] ? 1 : 0), 0);
  const pctLabel = formatPct(doneCount, total);
  const pctWidth = total ? (doneCount / total) * 100 : 0;
  const chapterSpot = current ? chapterOrder.findIndex((item) => item.id === current.chapterId) + 1 : chapterOrder.length;

  function finish(id: string, how: "done" | "skip") {
    const step = steps.find((item) => item.id === id);
    if (!step || done[id]) return;
    complete(id, how);
    setToast(`${how === "skip" ? "Skipped" : "Done"}: ${step.text}`);
  }

  useEffect(() => {
    function onKey(event: KeyboardEvent) {
      if (!hydrated || event.repeat || event.metaKey || event.ctrlKey || event.altKey) return;
      const target = event.target as HTMLElement | null;
      const tag = target?.tagName;
      if (tag === "BUTTON" || tag === "A" || tag === "SELECT" || tag === "INPUT" || tag === "TEXTAREA") return;
      if (target?.closest("[role='dialog']")) return;
      if (about || confirm || tab !== "now") return;
      if (event.key === "Escape") return;
      if ((event.key === " " || event.key === "Enter") && target === document.body) {
        if (!current) return;
        event.preventDefault();
        finish(current.id, "done");
      } else if (event.key === "s" || event.key === "S") {
        if (!current) return;
        event.preventDefault();
        finish(current.id, "skip");
      } else if (event.key === "z" || event.key === "Z" || event.key === "Backspace") {
        event.preventDefault();
        undo();
        setToast(null);
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  });

  const act = route.acts.find((item) => item.id === actId) ?? route.acts[0];

  const find = useMemo(() => searchSteps(query, chapterPick), [query, chapterPick]);

  useEffect(() => {
    if (tab !== "route" || !highlightId) return;
    const node = document.getElementById(`step-${highlightId}`);
    node?.scrollIntoView({ block: "center" });
  }, [tab, highlightId, actId]);

  function goTo(step: FlatStep) {
    setActId(step.actId);
    setHighlightId(step.id);
    setOpenChapters((currentOpen) => ({ ...currentOpen, [step.chapterId]: true }));
    setTab("route");
  }

  function checkStep(step: FlatStep) {
    if (done[step.id]) {
      toggle(step.id);
      return;
    }
    const before = undoneBefore(done, step.id);
    if (before > 0) {
      setConfirm({ kind: "through", id: step.id, count: before + 1 });
      return;
    }
    toggle(step.id);
    setToast(`Done: ${step.text}`);
  }

  return (
    <div className="min-h-dvh bg-bg text-fg">
      <header className="sticky top-0 z-20 border-b border-line bg-bg/95 backdrop-blur-sm">
        <div className="app-shell flex items-center gap-3 py-3">
          <Mark />
          <div className="min-w-0 flex-1">
            <p className="text-sm tracking-widest text-gold uppercase">All superbosses</p>
            <h1 className="truncate font-display text-2xl leading-tight font-semibold text-fg">No Alrond</h1>
          </div>
          <button
            type="button"
            className="grid size-12 place-items-center rounded-full text-muted hover:bg-raise hover:text-fg"
            onClick={() => setAbout((value) => !value)}
            disabled={!hydrated}
            aria-expanded={about}
            aria-label="About this route"
          >
            <Info className="size-5" />
          </button>
        </div>
        <div className="app-shell pb-3">
          <div className="mb-2 flex items-baseline justify-between gap-3 text-base text-muted">
            <span>
              {hydrated
                ? `${left.toLocaleString()} left · ${skippedCount.toLocaleString()} skipped · chapter ${chapterSpot}/${chapterOrder.length}`
                : "Loading progress"}
            </span>
            <span className="tabular-nums text-fg">{hydrated ? pctLabel : ""}</span>
          </div>
          <div
            className="h-3 overflow-hidden rounded-full bg-track"
            role="progressbar"
            aria-valuemin={0}
            aria-valuemax={total}
            aria-valuenow={hydrated ? doneCount : 0}
            aria-valuetext={hydrated ? pctLabel : "Loading"}
          >
            <div
              className="h-full bg-gold"
              style={{ width: doneCount > 0 ? `max(${pctWidth}%, 0.75rem)` : "0%" }}
            />
          </div>
        </div>
      </header>

      <main className="app-shell pt-4 pb-28">
        {!hydrated ? <p className="text-lg text-muted">Loading your saved progress…</p> : null}
        {hydrated && notice ? (
          <div role="status" className="mb-4 rounded-card border border-gold bg-surface p-4">
            <p className="text-lg text-fg">
              {notice.carried === 0
                ? "The route was updated. Your old progress can't be carried over safely."
                : `${notice.carried} of ${notice.total} carried over. Next unchecked step is ${current?.n ?? "the end"}.`}
            </p>
            <div className="mt-3 flex flex-wrap gap-3">
              <button type="button" onClick={() => reset()} className="min-h-12 rounded-card bg-gold px-4 py-3 font-semibold text-ink">
                Start over
              </button>
              {latestCarried ? (
                <button
                  type="button"
                  onClick={() => {
                    const holes = undoneBefore(done, latestCarried.id);
                    goTo(latestCarried);
                    if (holes > 0) setConfirm({ kind: "carried", id: latestCarried.id, count: holes });
                    else dismissNotice();
                  }}
                  className="min-h-12 rounded-card border border-gold px-4 py-3 text-gold"
                >
                  Jump to latest carried step {latestCarried.n}
                </button>
              ) : null}
              <button
                type="button"
                onClick={() => {
                  setTab("route");
                  dismissNotice();
                }}
                className="min-h-12 rounded-card border border-line px-4 py-3"
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
            onDone={() => current && finish(current.id, "done")}
            onSkip={() => current && finish(current.id, "skip")}
            onUndo={() => {
              undo();
              setToast(null);
            }}
            canUndo={history.length > 0}
            upcoming={upcoming(done, 6)}
            onOpenRoute={() => current && goTo(current)}
          />
        ) : null}

        {hydrated && tab === "route" ? (
          <section>
            <div className="act-row mb-3 flex gap-2 overflow-x-auto pb-1">
              {route.acts.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  aria-pressed={item.id === act?.id}
                  onClick={() => setActId(item.id)}
                  className={
                    "min-h-11 shrink-0 rounded-full border px-4 py-2 text-base " +
                    (item.id === act?.id ? "border-gold bg-gold text-ink" : "border-line bg-surface text-fg")
                  }
                >
                  {item.title}
                </button>
              ))}
              <span className="act-more shrink-0 self-center px-2 text-sm text-muted">More</span>
            </div>
            <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
              <p className="text-base text-muted">{act?.title}</p>
              <div className="flex flex-wrap gap-2">
                <FilterButton active={routeFilter === "all"} onClick={() => setRouteFilter("all")} label="All steps" />
                <FilterButton active={routeFilter === "left"} onClick={() => setRouteFilter("left")} label="Still to do" />
                <FilterButton
                  active={routeFilter === "skipped"}
                  onClick={() => setRouteFilter("skipped")}
                  label={`Skipped (${skippedCount})`}
                />
              </div>
            </div>
            {act?.chapters.map((chapter) => {
              const chapterSteps = steps.filter((step) => step.chapterId === chapter.id);
              const open = chapterSteps.some((step) => !done[step.id]);
              const collapsed =
                routeFilter === "all" &&
                !open &&
                !openChapters[chapter.id] &&
                chapter.id !== current?.chapterId &&
                !chapterSteps.some((step) => step.id === highlightId);
              if (routeFilter === "left" && !open) return null;
              if (routeFilter === "skipped" && !chapterSteps.some((step) => skipped[step.id])) return null;
              const ahead = chapterSteps.filter((step) => !done[step.id]).length;
              return (
                <article key={chapter.id} className="mb-8">
                  <div className="mb-3 flex items-start justify-between gap-3">
                    <div className="min-w-0">
                      <h2 className="font-display text-2xl leading-tight font-semibold">{chapter.title}</h2>
                      <p className="mt-1 text-base text-muted">
                        {ahead} left
                        {chapter.mark ? ` · Chapter starts in video ≈ ${chapter.mark}` : ""}
                        {chapter.orderNote ? ` · ${chapter.orderNote}` : ""}
                      </p>
                    </div>
                    <div className="flex shrink-0 flex-col items-end gap-2">
                      {chapter.seconds != null ? (
                        <a
                          className="text-base text-gold underline underline-offset-4"
                          href={videoAt(chapter.videoSeconds ?? chapter.seconds)}
                          target="_blank"
                          rel="noreferrer"
                        >
                          Watch from here
                        </a>
                      ) : null}
                      <button
                        type="button"
                        className="min-h-11 rounded-card border border-line px-3 text-base text-fg"
                        onClick={() => {
                          const count = undoneBeforeChapter(done, chapter.id);
                          if (count === 0) {
                            setTab("now");
                            return;
                          }
                          setConfirm({ kind: "chapter", id: chapter.id, count });
                        }}
                      >
                        Start here
                      </button>
                    </div>
                  </div>
                  {collapsed ? (
                    <button
                      type="button"
                      className="text-base text-gold"
                      onClick={() => setOpenChapters((value) => ({ ...value, [chapter.id]: true }))}
                    >
                      Show completed steps
                    </button>
                  ) : (
                    chapter.blocks.map((block) => (
                      <BlockCard
                        key={block.id}
                        block={block}
                        done={done}
                        skipped={skipped}
                        filter={routeFilter}
                        currentId={current?.id ?? null}
                        highlightId={highlightId}
                        onCheck={checkStep}
                      />
                    ))
                  )}
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
                onChange={(event) => {
                  setQuery(event.target.value);
                  setChapterPick(null);
                }}
                placeholder="Skill, item, town, boss"
                className="w-full rounded-card border border-line bg-surface px-4 py-3 text-lg text-fg outline-none placeholder:text-muted focus:border-gold"
                autoCapitalize="none"
                autoCorrect="off"
              />
            </label>
            {find.chips.length > 0 ? (
              <div className="mb-3 flex flex-wrap gap-2">
                {find.chips.map((chip) => (
                  <button
                    key={chip.id}
                    type="button"
                    aria-pressed={chapterPick === chip.id}
                    onClick={() => setChapterPick(chip.id)}
                    className={
                      "min-h-11 rounded-full border px-3 text-base " +
                      (chapterPick === chip.id ? "border-gold bg-gold text-ink" : "border-line text-fg")
                    }
                  >
                    {chip.title}
                  </button>
                ))}
              </div>
            ) : null}
            {query.trim().length < 2 ? (
              <p className="text-base text-muted">Search the route. Two letters is enough.</p>
            ) : find.total === 0 ? (
              <p className="text-base text-muted">Nothing matches.</p>
            ) : (
              <>
                {find.total > find.shown.length ? (
                  <p className="mb-3 text-base text-muted">
                    {find.shown.length} of {find.total}, refine
                  </p>
                ) : null}
                <ul className="flex flex-col gap-2">
                  {find.shown.map((step) => (
                    <li key={step.id}>
                      <button
                        type="button"
                        onClick={() => goTo(step)}
                        className="flex w-full flex-col gap-1 rounded-card border border-line bg-surface px-4 py-3 text-left"
                      >
                        <span className="text-sm text-gold">{findLabel(step)}</span>
                        <span className="text-lg">{step.text}</span>
                        <span className="text-base text-muted">
                          Go to step
                          {step.ctx ? ` · ${step.ctx}` : ""}
                          {step.kind !== "do" && KIND_LABEL[step.kind] && KIND_LABEL[step.kind] !== "Step"
                            ? ` · ${KIND_LABEL[step.kind]}`
                            : ""}
                          {skipped[step.id] ? " · Skipped" : ""}
                        </span>
                      </button>
                    </li>
                  ))}
                </ul>
              </>
            )}
          </section>
        ) : null}
      </main>

      {toast ? (
        <div className="fixed inset-x-0 bottom-20 z-30">
          <div className="app-shell">
            <div role="status" className="flex items-center justify-between gap-4 rounded-card border border-gold bg-raise px-4 py-3">
              <p className="min-w-0 text-base">{toast}</p>
              <button
                type="button"
                className="min-h-11 shrink-0 rounded-card border border-line px-3 text-base text-gold"
                onClick={() => {
                  undo();
                  setToast(null);
                }}
              >
                Undo
              </button>
            </div>
          </div>
        </div>
      ) : null}

      <nav className="safe-bottom fixed inset-x-0 bottom-0 z-20 border-t border-line bg-bg/95 backdrop-blur-sm">
        <div className="app-shell grid grid-cols-3 !px-0">
          <TabButton active={tab === "now"} onClick={() => setTab("now")} label="Now" icon={<Check className="size-5" />} />
          <TabButton active={tab === "route"} onClick={() => setTab("route")} label="Route" icon={<List className="size-5" />} />
          <TabButton active={tab === "find"} onClick={() => setTab("find")} label="Find" icon={<Search className="size-5" />} />
        </div>
      </nav>

      {confirm ? (
        <Confirm
          title={
            confirm.kind === "chapter"
              ? "Start at this chapter?"
              : confirm.kind === "carried"
                ? `Mark the ${confirm.count} steps before it as done?`
                : "Mark all steps before this as done?"
          }
          body={`Marks ${confirm.count} steps done.`}
          confirm={confirm.kind === "chapter" ? "Start here" : "Mark them"}
          onCancel={() => setConfirm(null)}
          onConfirm={() => {
            if (confirm.kind === "chapter") markBeforeChapter(confirm.id);
            else markThrough(confirm.id);
            setToast(`Marked ${confirm.count} steps`);
            setConfirm(null);
            if (confirm.kind === "carried") dismissNotice();
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
  upcoming: upcomingSteps,
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
  const picture = pictureFor(current?.id);
  const [pictureHidden, setPictureHidden] = usePictureHidden();
  const showPictureRef = useRef<HTMLButtonElement>(null);
  const pendingShowFocus = useRef(false);
  useEffect(() => {
    if (!pictureHidden || !pendingShowFocus.current) return;
    pendingShowFocus.current = false;
    showPictureRef.current?.focus();
  }, [pictureHidden]);
  useEffect(() => {
    if (!current) return;
    preloadPicture(steps[current.n]?.id);
  }, [current]);
  if (!current) {
    return (
      <section className="rounded-card border border-gold bg-surface px-5 py-8">
        <p className="text-sm tracking-widest text-gold uppercase">Clear</p>
        <h2 className="step-title mt-2">The route is done.</h2>
        <p className="mt-3 text-lg text-muted">
          Galdera, Vide, and all four extra battles are checked off. {doneCount.toLocaleString()} steps.
        </p>
      </section>
    );
  }

  return (
    <div className="now-layout">
      {picture && !pictureHidden ? (
        <StepPictureCard
          picture={picture}
          eager
          onHide={() => {
            pendingShowFocus.current = true;
            setPictureHidden(true);
          }}
        />
      ) : null}
      <section className="now-main">
        {picture && pictureHidden ? (
          <button
            ref={showPictureRef}
            type="button"
            onClick={() => setPictureHidden(false)}
            className="mb-3 min-h-11 text-base text-gold"
          >
            Show picture
          </button>
        ) : null}
        <p className="text-base text-muted">{placeLabel(current)}</p>
        <div className="now-card mt-3 rounded-card border border-line bg-surface p-4">
          <div className="flex items-center justify-between gap-3">
            <p className="text-sm tracking-widest text-gold uppercase">
              Step {current.n}
              {current.ctx ? ` · ${current.ctx}` : ` · ${KIND_LABEL[current.blockKind] ?? "Step"}`}
            </p>
            {current.optional ? <span className="text-base text-muted">Optional</span> : null}
          </div>
          {current.when ? <p className="mt-2 text-base text-gold">{current.when}</p> : null}
          {current.lead ? <p className="mt-2 text-base text-gold">{current.lead}</p> : null}
          {current.foes && current.foes.length > 0 && isFirstInBlock(current) ? (
            <ul className="mt-3 flex flex-col gap-1 border-l-2 border-ember pl-3 text-base text-muted">
              {current.foes.map((foe) => (
                <li key={foe}>{foe}</li>
              ))}
            </ul>
          ) : null}
          <h2 className="step-title mt-3">{current.text}</h2>
          {current.lines && current.lines.length > 0 ? (
            <ul className="mt-3 flex flex-col gap-1 text-lg text-fg">
              {current.lines.map((line) => (
                <li key={line} className="border-t border-line pt-1">
                  {line}
                </li>
              ))}
            </ul>
          ) : null}
          {current.note ? <Note text={current.note} warn={Boolean(current.warn)} /> : null}
          {current.asides.map((aside) => (
            <Note key={aside.text} text={aside.text} warn={aside.warn} />
          ))}
          {current.mark && isFirstInChapter(current) ? (
            <a
              className="mt-3 inline-block text-base text-gold underline underline-offset-4"
              href={
                current.videoSeconds != null
                  ? videoAt(current.videoSeconds)
                  : current.seconds != null
                    ? videoAt(current.seconds)
                    : route.meta.video
              }
              target="_blank"
              rel="noreferrer"
            >
              Chapter starts in video ≈ {current.mark}
              {current.orderNote ? ` · ${current.orderNote}` : ""}
            </a>
          ) : null}
          <div className="now-actions mt-5 flex gap-6">
            <button type="button" onClick={onDone} className="min-h-14 flex-1 rounded-card bg-gold px-4 py-3 text-lg font-semibold text-ink">
              Done
            </button>
            <button type="button" onClick={onSkip} className="min-h-14 min-w-24 rounded-card border border-line px-4 py-3 text-lg text-fg">
              Skip
            </button>
          </div>
        </div>
        <div className="now-tools mt-3 flex items-center justify-between">
          <button
            type="button"
            onClick={onUndo}
            disabled={!canUndo}
            className="inline-flex min-h-11 items-center gap-2 py-2 text-base text-muted disabled:opacity-40"
          >
            <Undo2 className="size-4" />
            Undo
          </button>
          <button type="button" onClick={onOpenRoute} className="min-h-11 py-2 text-base text-gold">
            Open in the route
          </button>
        </div>
      </section>
      {upcomingSteps.length > 0 ? (
        <ol className="upcoming flex flex-col rounded-card border border-line bg-surface px-4">
          {upcomingSteps.map((step) => (
            <li key={step.id} className="border-t border-line py-3 text-base text-muted first:border-t-0">
              <span className="mr-2 text-gold tabular-nums">{step.n}</span>
              {step.ctx ? <span className="mr-2 text-fg">{step.ctx}</span> : null}
              {step.text}
            </li>
          ))}
        </ol>
      ) : null}
    </div>
  );
}

function BlockCard({
  block,
  done,
  skipped,
  filter,
  currentId,
  highlightId,
  onCheck,
}: {
  block: Block;
  done: Record<string, boolean>;
  skipped: Record<string, boolean>;
  filter: RouteFilter;
  currentId: string | null;
  highlightId: string | null;
  onCheck: (step: FlatStep) => void;
}) {
  const [openPic, setOpenPic] = useState<string | null>(null);
  const visible = steps.filter((step) => {
    if (step.blockId !== block.id) return false;
    if (filter === "left") return !done[step.id];
    if (filter === "skipped") return Boolean(skipped[step.id]);
    return true;
  });
  if (visible.length === 0 && !(block.foes && block.foes.length)) return null;
  const solo = block.solo && visible.length === 1 && visible[0]?.text === block.title;

  return (
    <div className="mb-3 overflow-hidden rounded-card border border-line bg-surface">
      {solo ? null : (
        <div className="flex items-baseline justify-between gap-3 border-b border-line px-3 py-2">
          <h3 className="text-base font-medium">{block.title}</h3>
          <span className="text-sm tracking-wide text-muted uppercase">{KIND_LABEL[block.kind] ?? block.kind}</span>
        </div>
      )}
      {block.when ? <p className="px-3 pt-2 text-base text-gold">{block.when}</p> : null}
      {block.foes && block.foes.length > 0 ? (
        <ul className="mx-3 mt-2 border-l-2 border-ember pl-3 text-base text-muted">
          {block.foes.map((foe) => (
            <li key={foe} className="py-0.5">
              {foe}
            </li>
          ))}
        </ul>
      ) : null}
      <ul>
        {visible.map((step) => (
          <li
            key={step.id}
            id={`step-${step.id}`}
            className={
              "scroll-mt-36 border-t border-line " +
              (step.id === highlightId ? "bg-raise ring-2 ring-gold ring-inset" : "")
            }
          >
            <div className="flex items-start gap-2 px-2 py-1">
              <button
                type="button"
                onClick={() => onCheck(step)}
                aria-pressed={Boolean(done[step.id])}
                aria-label={done[step.id] ? `Mark not done: ${step.text}` : `Mark done: ${step.text}`}
                className="mt-2 grid size-11 shrink-0 place-items-center"
              >
                <Box on={Boolean(done[step.id])} />
              </button>
              <div className="min-w-0 flex-1 py-3 pr-2">
                <p className="text-sm text-muted">
                  Step {step.n}
                  {step.id === currentId ? <span className="ml-2 text-gold">NOW</span> : null}
                  {step.ctx ? <span className="ml-2 text-gold">{step.ctx}</span> : null}
                </p>
                {step.lead ? <p className="text-base text-gold">{step.lead}</p> : null}
                <p className={"text-lg break-words " + (done[step.id] ? "text-muted line-through" : "text-fg")}>
                  {step.text}
                </p>
                {step.lines && step.lines.length > 0 ? (
                  <p className="mt-1 text-base text-muted">{step.lines.join(" · ")}</p>
                ) : null}
                {step.note ? <Note text={step.note} warn={Boolean(step.warn)} /> : null}
                {step.asides.map((aside) => (
                  <Note key={aside.text} text={aside.text} warn={aside.warn} />
                ))}
                {skipped[step.id] ? <p className="mt-1 text-base text-muted">Skipped</p> : null}
                {step.optional && !done[step.id] ? <p className="mt-1 text-base text-muted">Optional</p> : null}
              </div>
              {pictureFor(step.id) ? (
                <button
                  type="button"
                  className="mt-2 grid size-11 shrink-0 place-items-center text-gold"
                  aria-expanded={openPic === step.id}
                  aria-label={openPic === step.id ? `Hide picture: ${step.text}` : `Show picture: ${step.text}`}
                  onClick={() => setOpenPic((current) => (current === step.id ? null : step.id))}
                >
                  <Camera className="size-5" aria-hidden="true" />
                </button>
              ) : null}
            </div>
            {openPic === step.id && pictureFor(step.id) ? (
              <div className="px-3 pb-3">
                <StepPictureCard picture={pictureFor(step.id)!} compact />
              </div>
            ) : null}
          </li>
        ))}
      </ul>
    </div>
  );
}

function Note({ text, warn }: { text: string; warn: boolean }) {
  return (
    <p className={"mt-2 rounded-md px-2 py-1 text-base " + (warn ? "bg-raise text-ember" : "text-muted")}>
      {warn ? <span aria-hidden="true">⚠ </span> : null}
      {text}
    </p>
  );
}

function Box({ on }: { on: boolean }) {
  return (
    <span
      className={
        "grid size-7 place-items-center rounded-md border " +
        (on ? "border-gold bg-gold text-ink" : "border-line bg-bg text-transparent")
      }
      aria-hidden="true"
    >
      <Check className="size-4" />
    </span>
  );
}

function FilterButton({ active, onClick, label }: { active: boolean; onClick: () => void; label: string }) {
  return (
    <button
      type="button"
      aria-pressed={active}
      onClick={onClick}
      className={"min-h-11 rounded-full border px-3 text-base " + (active ? "border-gold text-gold" : "border-line text-muted")}
    >
      {label}
    </button>
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
      aria-current={active ? "page" : undefined}
      className={"flex min-h-14 flex-col items-center justify-center gap-1 text-sm " + (active ? "text-gold" : "text-muted")}
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
        <button type="button" onClick={onClose} className="min-h-11 text-base text-gold">
          Close
        </button>
      </div>
      <p className="mt-2 text-base text-muted">{route.meta.note}</p>
      <p className="mt-2 text-base text-muted">
        On the Now tab, Space or Enter marks the current step done when nothing else is focused. S skips. Z or Backspace
        undoes. A skip or a done step can also be undone from the note that appears at the bottom.
      </p>
      <a className="mt-3 inline-block text-base text-gold underline underline-offset-4" href={route.meta.video} target="_blank" rel="noreferrer">
        Watch the run
      </a>
      <p className="mt-3 text-base text-muted">
        Pictures are snapshots from{" "}
        <a className="text-gold underline underline-offset-4" href="https://youtu.be/d6YOJxTfIeQ" target="_blank" rel="noreferrer">
          Chewy's All Superbosses run
        </a>
        .
      </p>
      <h3 className="mt-4 font-display text-lg font-semibold">Sheet changelog</h3>
      <ul className="mt-2 flex flex-col gap-2">
        {changelog.map((entry) => (
          <li key={`${entry.date ?? "note"}-${entry.text.slice(0, 40)}`} className="text-base text-muted">
            {entry.date ? <span className="text-fg">{entry.date}. </span> : null}
            {entry.text}
          </li>
        ))}
      </ul>
      <div className="mt-4 flex flex-wrap gap-2">
        <button
          type="button"
          className="min-h-11 rounded-card border border-line px-3 text-base"
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
      <label className="mt-3 block text-base text-muted">
        Paste progress
        <textarea
          value={paste}
          onChange={(event) => setPaste(event.target.value)}
          rows={4}
          className="mt-1 w-full rounded-card border border-line bg-bg px-3 py-2 text-base text-fg"
        />
      </label>
      <button
        type="button"
        className="mt-2 min-h-11 rounded-card border border-line px-3 text-base"
        onClick={() => {
          const result = importProgress(paste);
          setMessage(result.ok ? "Progress restored." : result.error);
        }}
      >
        Restore pasted progress
      </button>
      {message ? <p className="mt-2 text-base text-muted">{message}</p> : null}
      <div className="mt-4">
        {armed ? (
          <button
            type="button"
            onClick={() => {
              reset();
              setArmed(false);
              onClose();
            }}
            className="inline-flex min-h-11 items-center gap-2 rounded-card border border-ember px-3 text-base text-ember"
          >
            <RotateCcw className="size-4" />
            Confirm reset
          </button>
        ) : (
          <button type="button" onClick={() => setArmed(true)} className="inline-flex min-h-11 items-center gap-2 text-base text-muted">
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
  const cancelRef = useRef<HTMLButtonElement>(null);
  const confirmRef = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    cancelRef.current?.focus();
  }, []);
  useEffect(() => {
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") {
        event.preventDefault();
        onCancel();
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onCancel]);

  return (
    <div className="fixed inset-0 z-40 grid place-items-end bg-bg/70 p-4 sm:place-items-center">
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="confirm-title"
        className="w-full max-w-sm rounded-card border border-line bg-raise p-4"
        onKeyDown={(event) => {
          if (event.key !== "Tab") return;
          const first = cancelRef.current;
          const last = confirmRef.current;
          if (!first || !last) return;
          if (event.shiftKey && document.activeElement === first) {
            event.preventDefault();
            last.focus();
          } else if (!event.shiftKey && document.activeElement === last) {
            event.preventDefault();
            first.focus();
          }
        }}
      >
        <h2 id="confirm-title" className="font-display text-xl font-semibold">
          {title}
        </h2>
        <p className="mt-2 text-base text-muted">{body}</p>
        <div className="mt-4 grid grid-cols-2 gap-3">
          <button ref={cancelRef} type="button" onClick={onCancel} className="min-h-12 rounded-card border border-line py-3 text-base">
            Cancel
          </button>
          <button ref={confirmRef} type="button" onClick={onConfirm} className="min-h-12 rounded-card bg-gold py-3 text-base font-semibold text-ink">
            {confirm}
          </button>
        </div>
      </div>
    </div>
  );
}

function Mark() {
  return (
    <svg viewBox="0 0 32 32" className="size-10 shrink-0 text-gold" aria-hidden="true">
      <rect x="1.5" y="1.5" width="29" height="29" rx="8" className="fill-surface stroke-gold" strokeWidth="1.5" />
      <path d="M16 6 L18 13.2 L25.2 16 L18 18.8 L16 26 L14 18.8 L6.8 16 L14 13.2 Z" className="fill-gold" />
    </svg>
  );
}

function upcoming(done: Record<string, boolean>, count: number) {
  const list: FlatStep[] = [];
  let seen = false;
  for (const step of steps) {
    if (!done[step.id]) {
      if (!seen) {
        seen = true;
        continue;
      }
      list.push(step);
      if (list.length === count) break;
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

function placeLabel(step: FlatStep) {
  const parts = step.act === step.chapter ? [step.chapter] : [step.act, step.chapter];
  if (step.block !== step.chapter && step.block !== step.text) parts.push(step.block);
  return parts.join(" · ");
}

function findLabel(step: FlatStep) {
  return step.block === step.chapter ? `Step ${step.n} · ${step.chapter}` : `Step ${step.n} · ${step.chapter} · ${step.block}`;
}

function formatPct(doneCount: number, total: number) {
  if (!total || doneCount <= 0) return "0%";
  const raw = (doneCount / total) * 100;
  if (raw < 10) return `${raw.toFixed(1)}%`;
  return `${Math.round(raw)}%`;
}

function undoneBefore(done: Record<string, boolean>, id: string) {
  let count = 0;
  for (const step of steps) {
    if (step.id === id) break;
    if (!done[step.id]) count += 1;
  }
  return count;
}

function undoneBeforeChapter(done: Record<string, boolean>, chapterId: string) {
  let count = 0;
  for (const step of steps) {
    if (step.chapterId === chapterId) break;
    if (!done[step.id]) count += 1;
  }
  return count;
}

function searchSteps(query: string, chapterPick: string | null) {
  const q = query.trim().toLowerCase();
  const chips = q.length < 2 ? [] : chapterOrder.filter((chapter) => chapter.title.toLowerCase().includes(q));
  if (q.length < 2) return { shown: [] as FlatStep[], total: 0, chips };
  const pool = chapterPick ? steps.filter((step) => step.chapterId === chapterPick) : steps;
  const matched = pool.filter((step) => haystack(step).includes(q) || (chapterPick !== null && step.chapterId === chapterPick));
  const ranked = [...matched].sort((a, b) => {
    const aStart = a.text.toLowerCase().startsWith(q) ? 0 : 1;
    const bStart = b.text.toLowerCase().startsWith(q) ? 0 : 1;
    return aStart - bStart || a.n - b.n;
  });
  const narrowed = ranked.length === 0 && chips.length === 1 ? steps.filter((step) => step.chapterId === chips[0]?.id) : ranked;
  return { shown: narrowed.slice(0, 40), total: narrowed.length, chips };
}

function haystack(step: FlatStep) {
  return [step.text, step.note, ...(step.lines ?? []), ...step.asides.map((aside) => aside.text)]
    .filter(Boolean)
    .join(" ")
    .toLowerCase();
}
