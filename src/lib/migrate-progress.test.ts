import assert from "node:assert/strict";
import test from "node:test";
import { legacyIds } from "../data/legacy-ids.ts";
import { route } from "../data/route.ts";
import {
  BACKUP_KEY,
  LEGACY_KEY,
  RUN_KEY,
  readMigration,
  type Kv,
  type StepRef,
} from "./migrate-progress.ts";

function memory(): Kv & { dump: Map<string, string> } {
  const dump = new Map<string, string>();
  return {
    dump,
    getItem: (key) => dump.get(key) ?? null,
    setItem: (key, value) => {
      dump.set(key, value);
    },
  };
}

function currentSteps(): StepRef[] {
  const list: StepRef[] = [];
  for (const act of route.acts) {
    for (const chapter of act.chapters) {
      for (const block of chapter.blocks) {
        for (const step of block.steps) {
          if (!step.check) continue;
          list.push({ id: step.id, chapter: chapter.title, text: step.text });
        }
      }
    }
  }
  return list;
}

const rev = route.meta.rev;
const current = currentSteps();

test("a v1 blob containing r614 does not mark r614 or any other step", () => {
  const storage = memory();
  const blob = JSON.stringify({
    state: { done: { r614: true }, skipped: {}, history: ["r614"] },
    version: 0,
  });
  storage.setItem(LEGACY_KEY, blob);
  const result = readMigration(storage, rev, legacyIds, current);
  assert.deepEqual(result.progress?.done, {});
  assert.deepEqual(result.progress?.skipped, {});
  assert.deepEqual(result.progress?.history, []);
  assert.equal(result.progress?.routeRev, rev);
  assert.equal(result.progress?.notice?.carried, 0);
  assert.equal(result.progress?.notice?.total, 1);
  assert.equal(result.backupWritten, true);
  assert.ok(storage.getItem(BACKUP_KEY)?.includes("r614"));
  assert.equal(storage.getItem(LEGACY_KEY), blob);
  const saved = JSON.parse(storage.getItem(RUN_KEY) ?? "{}") as {
    state: { done: Record<string, boolean> };
  };
  assert.deepEqual(saved.state.done, {});
  assert.equal(JSON.stringify(saved.state.done).includes("r614"), false);
});

test("a mismatched route revision is not applied, even when an id still exists", () => {
  const storage = memory();
  const kept = current[10]?.id;
  assert.ok(kept);
  storage.setItem(
    RUN_KEY,
    JSON.stringify({
      state: {
        done: { [kept]: true, r614: true },
        skipped: {},
        history: [kept],
        version: 2,
        routeRev: "not-this-route",
      },
      version: 2,
    }),
  );
  const result = readMigration(storage, rev, legacyIds, current);
  assert.equal(result.progress?.done[kept], undefined);
  assert.equal(result.progress?.done.r614, undefined);
  assert.equal(Object.keys(result.progress?.done ?? {}).length, 0);
  assert.ok(storage.getItem(BACKUP_KEY)?.includes(kept));
});

test("matching route revision restores progress", () => {
  const storage = memory();
  const kept = current[3]?.id;
  assert.ok(kept);
  storage.setItem(
    RUN_KEY,
    JSON.stringify({
      state: {
        done: { [kept]: true },
        skipped: {},
        history: [kept],
        version: 2,
        routeRev: rev,
        notice: null,
      },
      version: 2,
    }),
  );
  const result = readMigration(storage, rev, legacyIds, current);
  assert.equal(result.progress?.done[kept], true);
  assert.equal(result.progress?.notice, null);
  assert.equal(result.backupWritten, false);
});

test("a unique chapter and text can be carried off a v1 id", () => {
  const storage = memory();
  const sample = current.find((step) => {
    const olds = Object.values(legacyIds).filter(
      (meta) => meta.chapter === step.chapter && meta.text === step.text,
    );
    const news = current.filter((item) => item.chapter === step.chapter && item.text === step.text);
    return olds.length === 1 && news.length === 1;
  });
  assert.ok(sample);
  const oldId = Object.entries(legacyIds).find(
    ([, meta]) => meta.chapter === sample.chapter && meta.text === sample.text,
  )?.[0];
  assert.ok(oldId);
  assert.notEqual(oldId, sample.id);
  storage.setItem(
    LEGACY_KEY,
    JSON.stringify({ state: { done: { [oldId]: true }, skipped: {}, history: [oldId] } }),
  );
  const result = readMigration(storage, rev, legacyIds, current);
  assert.equal(result.progress?.done[sample.id], true);
  assert.equal(result.progress?.done[oldId], undefined);
  assert.equal(result.progress?.notice?.carried, 1);
  assert.equal(result.progress?.notice?.total, 1);
});
