import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { route, type Step } from "@/data/route";
import { legacyIds } from "@/data/legacy-ids";
import {
  BACKUP_KEY,
  RUN_KEY,
  readMigration,
  type Kv,
  type RouteNotice,
  type StepRef,
  type StoredProgress,
} from "@/lib/migrate-progress";

export type FlatStep = Step & {
  actId: string;
  act: string;
  chapterId: string;
  chapter: string;
  mark?: string;
  seconds?: number;
  blockId: string;
  block: string;
  blockKind: string;
  when?: string;
  foes?: string[];
  solo?: boolean;
};

export const steps: FlatStep[] = [];

for (const act of route.acts) {
  for (const chapter of act.chapters) {
    for (const block of chapter.blocks) {
      const sheetNotes = block.steps.filter((s) => !s.check).map((s) => s.text);
      let first = true;
      for (const step of block.steps) {
        if (!step.check) continue;
        const extra = first ? sheetNotes.join(" ") : "";
        first = false;
        steps.push({
          ...step,
          actId: act.id,
          act: act.title,
          chapterId: chapter.id,
          chapter: chapter.title,
          mark: chapter.mark,
          seconds: chapter.seconds,
          blockId: block.id,
          block: block.title,
          blockKind: block.kind,
          when: block.when,
          foes: block.foes,
          solo: block.solo,
          note: [extra, step.note].filter(Boolean).join(" ") || undefined,
        });
      }
    }
  }
}

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
  kv.setItem(BACKUP_KEY, JSON.stringify({ state: progress, version: 2 }));
}

type RunState = {
  done: Record<string, boolean>;
  skipped: Record<string, boolean>;
  history: string[];
  notice: RouteNotice | null;
  hydrated: boolean;
  complete: (id: string, how: "done" | "skip") => void;
  toggle: (id: string) => void;
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
  notice: null as RouteNotice | null,
};

export const useRun = create<RunState>()(
  persist(
    (set, get) => ({
      ...fresh,
      hydrated: false,
      setHydrated: (value) => set({ hydrated: value }),
      dismissNotice: () => set({ notice: null }),
      complete: (id, how) => {
        const { done, skipped, history } = get();
        if (done[id]) return;
        set({
          done: { ...done, [id]: true },
          skipped: how === "skip" ? { ...skipped, [id]: true } : skipped,
          history: [...history, id],
        });
      },
      toggle: (id) => {
        const { done, skipped, history } = get();
        if (done[id]) {
          const nextDone = { ...done };
          const nextSkip = { ...skipped };
          delete nextDone[id];
          delete nextSkip[id];
          set({
            done: nextDone,
            skipped: nextSkip,
            history: history.filter((h) => h !== id),
          });
        } else {
          set({
            done: { ...done, [id]: true },
            history: [...history, id],
          });
        }
      },
      undo: () => {
        const { history, done, skipped } = get();
        const id = history[history.length - 1];
        if (!id) return;
        const nextDone = { ...done };
        const nextSkip = { ...skipped };
        delete nextDone[id];
        delete nextSkip[id];
        set({ done: nextDone, skipped: nextSkip, history: history.slice(0, -1) });
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
        set({ done, skipped, history, notice: null });
        return { ok: true };
      },
      markBeforeChapter: (chapterId) => {
        const { done, history } = get();
        const nextDone = { ...done };
        const added: string[] = [];
        for (const step of steps) {
          if (step.chapterId === chapterId) break;
          if (!nextDone[step.id]) {
            nextDone[step.id] = true;
            added.push(step.id);
          }
        }
        set({ done: nextDone, history: [...history, ...added] });
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
