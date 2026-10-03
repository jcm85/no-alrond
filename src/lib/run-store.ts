import { create } from "zustand";
import { persist } from "zustand/middleware";
import { route, type Step } from "@/data/route";

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

type RunState = {
  done: Record<string, boolean>;
  skipped: Record<string, boolean>;
  history: string[];
  hydrated: boolean;
  complete: (id: string, how: "done" | "skip") => void;
  toggle: (id: string) => void;
  undo: () => void;
  reset: () => void;
  markBeforeChapter: (chapterId: string) => void;
  setHydrated: (value: boolean) => void;
};

export const useRun = create<RunState>()(
  persist(
    (set, get) => ({
      done: {},
      skipped: {},
      history: [],
      hydrated: false,
      setHydrated: (value) => set({ hydrated: value }),
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
      reset: () => set({ done: {}, skipped: {}, history: [] }),
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
      name: "no-alrond-run-v1",
      skipHydration: true,
      partialize: (state) => ({
        done: state.done,
        skipped: state.skipped,
        history: state.history,
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
