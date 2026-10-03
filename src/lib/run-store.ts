import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { route, type Step } from "@/data/route";
import { legacyIds } from "@/data/legacy-ids";
import {
  RUN_KEY,
  preserveBackup,
  readMigration,
  type Kv,
  type RouteNotice,
  type StepRef,
  type StoredProgress,
} from "@/lib/migrate-progress";

export type Aside = { text: string; warn: boolean };

export type FlatStep = Step & {
  n: number;
  actId: string;
  act: string;
  chapterId: string;
  chapter: string;
  mark?: string;
  seconds?: number;
  videoSeconds?: number;
  orderNote?: string;
  blockId: string;
  block: string;
  blockKind: string;
  when?: string;
  foes?: string[];
  solo?: boolean;
  asides: Aside[];
};

const WARN_RE = /^do not|^don't|never|reload|chance to/i;

function isWarn(text: string | undefined) {
  return Boolean(text && WARN_RE.test(text));
}

export const chapterOrder: { id: string; title: string; actId: string }[] = [];
export const steps: FlatStep[] = [];

for (const act of route.acts) {
  for (const chapter of act.chapters) {
    chapterOrder.push({ id: chapter.id, title: chapter.title, actId: act.id });
    for (const block of chapter.blocks) {
      const pending: Aside[] = [];
      const blockSteps: FlatStep[] = [];
      const push = (step: Step) => {
        const asides = pending.splice(0);
        const made: FlatStep = {
          ...step,
          check: true,
          n: 0,
          actId: act.id,
          act: act.title,
          chapterId: chapter.id,
          chapter: chapter.title,
          mark: chapter.mark,
          seconds: chapter.seconds,
          videoSeconds: chapter.videoSeconds,
          orderNote: chapter.orderNote,
          blockId: block.id,
          block: block.title,
          blockKind: block.kind,
          when: block.when,
          foes: block.foes,
          solo: block.solo,
          asides,
          warn: Boolean(step.warn) || isWarn(step.note) || isWarn(step.text),
          kind: step.kind,
        };
        blockSteps.push(made);
        steps.push(made);
      };
      for (const step of block.steps) {
        if (!step.check) {
          const aside = { text: step.text, warn: Boolean(step.warn) || isWarn(step.text) || isWarn(step.note) };
          const previous = blockSteps[blockSteps.length - 1];
          if (previous) previous.asides.push(aside);
          else pending.push(aside);
          continue;
        }
        push(step);
      }
      const tail = blockSteps[blockSteps.length - 1];
      if (pending.length && tail) tail.asides.push(...pending);
    }
  }
}

steps.forEach((step, index) => {
  step.n = index + 1;
});

export function videoAt(seconds: number) {
  return `${route.meta.video}?t=${seconds}`;
}

const stepRefs: StepRef[] = steps.map((step) => ({
  id: step.id,
  chapter: step.chapter,
  text: step.text,
}));

function browserKv(): (Kv & Storage) | null {
  if (typeof window === "undefined") return null;
  try {
    return window.localStorage;
  } catch {
    return null;
  }
}

function backupCurrent(progress: StoredProgress) {
  const kv = browserKv();
  if (!kv) return;
  preserveBackup(kv, JSON.stringify({ state: progress, version: 2 }));
}

type RunState = {
  done: Record<string, boolean>;
  skipped: Record<string, boolean>;
  history: string[];
  jumps: number[];
  notice: RouteNotice | null;
  hydrated: boolean;
  complete: (id: string, how: "done" | "skip") => void;
  toggle: (id: string) => void;
  markThrough: (id: string) => void;
  undo: () => void;
  reset: () => void;
  dismissNotice: () => void;
  exportProgress: () => string;
  importProgress: (raw: string) => { ok: true } | { ok: false; error: string };
  markBeforeChapter: (chapterId: string) => void;
  setHydrated: (value: boolean) => void;
};

const fresh = {
  done: {} as Record<string, boolean>,
  skipped: {} as Record<string, boolean>,
  history: [] as string[],
  jumps: [] as number[],
  notice: null as RouteNotice | null,
};

function dropId(history: string[], jumps: number[], id: string) {
  const index = history.lastIndexOf(id);
  if (index < 0) return { history, jumps };
  const nextHistory = history.filter((_, item) => item !== index);
  const nextJumps = jumps.length ? [...jumps] : history.map(() => 1);
  while (nextJumps.reduce((sum, size) => sum + size, 0) < history.length) nextJumps.push(1);
  let cursor = 0;
  for (let i = 0; i < nextJumps.length; i += 1) {
    const size = nextJumps[i] ?? 0;
    if (index < cursor + size) {
      nextJumps[i] = size - 1;
      if (nextJumps[i] === 0) nextJumps.splice(i, 1);
      break;
    }
    cursor += size;
  }
  return { history: nextHistory, jumps: nextJumps };
}

export const useRun = create<RunState>()(
  persist(
    (set, get) => ({
      ...fresh,
      hydrated: false,
      setHydrated: (value) => set({ hydrated: value }),
      dismissNotice: () => set({ notice: null }),
      complete: (id, how) => {
        const { done, skipped, history, jumps } = get();
        if (done[id]) return;
        set({
          done: { ...done, [id]: true },
          skipped: how === "skip" ? { ...skipped, [id]: true } : skipped,
          history: [...history, id],
          jumps: [...jumps, 1],
        });
      },
      toggle: (id) => {
        const { done, skipped, history, jumps } = get();
        if (done[id]) {
          const nextDone = { ...done };
          const nextSkip = { ...skipped };
          delete nextDone[id];
          delete nextSkip[id];
          const dropped = dropId(history, jumps, id);
          set({ done: nextDone, skipped: nextSkip, ...dropped });
        } else {
          set({
            done: { ...done, [id]: true },
            history: [...history, id],
            jumps: [...jumps, 1],
          });
        }
      },
      markThrough: (id) => {
        const { done, history, jumps } = get();
        const nextDone = { ...done };
        const added: string[] = [];
        for (const step of steps) {
          if (!nextDone[step.id]) {
            nextDone[step.id] = true;
            added.push(step.id);
          }
          if (step.id === id) break;
        }
        if (!added.length) return;
        set({
          done: nextDone,
          history: [...history, ...added],
          jumps: [...jumps, added.length],
        });
      },
      undo: () => {
        const { history, done, skipped } = get();
        const jumps = get().jumps ?? [];
        const size = jumps[jumps.length - 1] ?? 1;
        const ids = history.slice(-size);
        if (!ids.length) return;
        const nextDone = { ...done };
        const nextSkip = { ...skipped };
        for (const id of ids) {
          delete nextDone[id];
          delete nextSkip[id];
        }
        set({
          done: nextDone,
          skipped: nextSkip,
          history: history.slice(0, -size),
          jumps: jumps.length ? jumps.slice(0, -1) : jumps,
        });
      },
      reset: () => {
        const { done, skipped, history } = get();
        backupCurrent({
          done,
          skipped,
          history,
          version: 2,
          routeRev: route.meta.rev,
          notice: get().notice,
        });
        set({ ...fresh });
      },
      exportProgress: () => {
        const { done, skipped, history } = get();
        return JSON.stringify(
          { version: 2, routeRev: route.meta.rev, done, skipped, history },
          null,
          2,
        );
      },
      importProgress: (raw) => {
        let data: unknown;
        try {
          data = JSON.parse(raw);
        } catch {
          return { ok: false, error: "That isn't valid progress JSON." };
        }
        if (!data || typeof data !== "object") {
          return { ok: false, error: "That isn't valid progress JSON." };
        }
        const body = data as Record<string, unknown>;
        if (body.version !== 2 || body.routeRev !== route.meta.rev) {
          return {
            ok: false,
            error: "That progress is from a different route revision and was not applied.",
          };
        }
        const known = new Set(steps.map((step) => step.id));
        const done: Record<string, boolean> = {};
        const skipped: Record<string, boolean> = {};
        if (body.done && typeof body.done === "object") {
          for (const [id, on] of Object.entries(body.done as Record<string, unknown>)) {
            if (on && known.has(id)) done[id] = true;
          }
        }
        if (body.skipped && typeof body.skipped === "object") {
          for (const [id, on] of Object.entries(body.skipped as Record<string, unknown>)) {
            if (on && done[id]) skipped[id] = true;
          }
        }
        const history = Array.isArray(body.history)
          ? body.history.filter((id): id is string => typeof id === "string" && Boolean(done[id]))
          : [];
        set({ done, skipped, history, jumps: history.map(() => 1), notice: null });
        return { ok: true };
      },
      markBeforeChapter: (chapterId) => {
        const { done, history, jumps } = get();
        const nextDone = { ...done };
        const added: string[] = [];
        for (const step of steps) {
          if (step.chapterId === chapterId) break;
          if (!nextDone[step.id]) {
            nextDone[step.id] = true;
            added.push(step.id);
          }
        }
        if (!added.length) return;
        set({
          done: nextDone,
          history: [...history, ...added],
          jumps: [...jumps, added.length],
        });
      },
    }),
    {
      name: RUN_KEY,
      version: 2,
      skipHydration: true,
      storage: createJSONStorage(() => ({
        getItem: () => {
          const kv = browserKv();
          if (!kv) return null;
          const result = readMigration(kv, route.meta.rev, legacyIds, stepRefs);
          if (!result.progress) return null;
          return JSON.stringify({ state: result.progress, version: 2 });
        },
        setItem: (_name, value) => {
          browserKv()?.setItem(RUN_KEY, value);
        },
        removeItem: () => {
          browserKv()?.removeItem(RUN_KEY);
        },
      })),
      partialize: (state) => ({
        done: state.done,
        skipped: state.skipped,
        history: state.history,
        jumps: state.jumps,
        version: 2 as const,
        routeRev: route.meta.rev,
        notice: state.notice,
      }),
      onRehydrateStorage: () => (state) => {
        state?.setHydrated(true);
      },
    },
  ),
);

export function playhead(done: Record<string, boolean>) {
  return steps.find((step) => !done[step.id]) ?? null;
}

export function remaining(done: Record<string, boolean>) {
  let left = 0;
  for (const step of steps) if (!done[step.id]) left += 1;
  return left;
}
