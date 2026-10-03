/** Saved-progress safety for a route whose step ids changed. */

export const RUN_KEY = "no-alrond-run-v2";
export const BACKUP_KEY = "no-alrond-run-v1-backup";
export const LEGACY_KEY = "no-alrond-run-v1";

export type Kv = {
  getItem: (key: string) => string | null;
  setItem: (key: string, value: string) => void;
};

export type StepRef = { id: string; chapter: string; text: string };

export type RouteNotice = {
  carried: number;
  total: number;
};

export type StoredProgress = {
  done: Record<string, boolean>;
  skipped: Record<string, boolean>;
  history: string[];
  version: 2;
  routeRev: string;
  notice: RouteNotice | null;
};

export type MigrateResult = {
  progress: StoredProgress | null;
  backupWritten: boolean;
};

type LegacyIndex = Record<string, { chapter: string; text: string }>;

export function normText(value: string) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();
}

function pairKey(chapter: string, text: string) {
  return `${normText(chapter)}|${normText(text)}`;
}

function unwrap(raw: string): Record<string, unknown> | null {
  try {
    const data = JSON.parse(raw) as unknown;
    if (!data || typeof data !== "object") return null;
    const obj = data as Record<string, unknown>;
    if (obj.state && typeof obj.state === "object") return obj.state as Record<string, unknown>;
    return obj;
  } catch {
    return null;
  }
}

function asMap(value: unknown): Record<string, boolean> {
  if (!value || typeof value !== "object") return {};
  const out: Record<string, boolean> = {};
  for (const [key, on] of Object.entries(value as Record<string, unknown>)) {
    if (on) out[key] = true;
  }
  return out;
}

function asHistory(value: unknown): string[] {
  if (!Array.isArray(value)) return [];
  return value.filter((item): item is string => typeof item === "string");
}

function empty(rev: string, notice: RouteNotice | null): StoredProgress {
  return { done: {}, skipped: {}, history: [], version: 2, routeRev: rev, notice };
}

function unwrapState(raw: string | null): Record<string, unknown> | null {
  if (!raw) return null;
  try {
    const data = JSON.parse(raw) as unknown;
    if (!data || typeof data !== "object") return null;
    const obj = data as Record<string, unknown>;
    if (obj.state && typeof obj.state === "object") return obj.state as Record<string, unknown>;
    return obj;
  } catch {
    return null;
  }
}

function doneCount(raw: string | null): number {
  const state = unwrapState(raw);
  const done = state?.done;
  if (!done || typeof done !== "object") return 0;
  return Object.values(done as Record<string, unknown>).filter(Boolean).length;
}

function routeRevOf(raw: string | null): string | null {
  const state = unwrapState(raw);
  return typeof state?.routeRev === "string" ? state.routeRev : null;
}

/**
 * Keep one real backup per route revision.
 * A backup with no done steps does not count, so a later save can replace it.
 * A second revision is stored at `${BACKUP_KEY}-<rev>` and does not replace the first.
 */
export function preserveBackup(storage: Kv, raw: string): boolean {
  const existing = storage.getItem(BACKUP_KEY);
  if (doneCount(existing) === 0) {
    storage.setItem(BACKUP_KEY, raw);
    return true;
  }
  const incomingRev = routeRevOf(raw);
  const existingRev = routeRevOf(existing);
  if (!incomingRev || incomingRev === existingRev || doneCount(raw) === 0) return false;
  if (!/^[A-Za-z0-9._-]+$/.test(incomingRev)) return false;
  const key = `${BACKUP_KEY}-${incomingRev}`;
  if (doneCount(storage.getItem(key)) > 0) return false;
  storage.setItem(key, raw);
  return true;
}

function writeBackup(storage: Kv, raw: string) {
  return preserveBackup(storage, raw);
}

function persist(storage: Kv, progress: StoredProgress) {
  storage.setItem(RUN_KEY, JSON.stringify({ state: progress, version: 2 }));
}

function uniqueIds(entries: { id: string; chapter: string; text: string }[]) {
  const groups = new Map<string, string[]>();
  for (const entry of entries) {
    const key = pairKey(entry.chapter, entry.text);
    const list = groups.get(key) ?? [];
    list.push(entry.id);
    groups.set(key, list);
  }
  const unique = new Map<string, string>();
  for (const [key, ids] of groups) {
    if (ids.length === 1) unique.set(key, ids[0]);
  }
  return unique;
}

/** Carry a v1 blob only when chapter + text match exactly one old step and one new step. */
function carryLegacy(
  parsed: Record<string, unknown>,
  legacy: LegacyIndex,
  current: StepRef[],
  rev: string,
): StoredProgress {
  const oldEntries = Object.entries(legacy).map(([id, meta]) => ({
    id,
    chapter: meta.chapter,
    text: meta.text,
  }));
  const oldUnique = uniqueIds(oldEntries);
  const currentUnique = uniqueIds(current);
  const known = new Set(current.map((step) => step.id));
  const doneIn = asMap(parsed.done);
  const skippedIn = asMap(parsed.skipped);
  const historyIn = asHistory(parsed.history);
  const done: Record<string, boolean> = {};
  const skipped: Record<string, boolean> = {};
  const history: string[] = [];
  const seen = new Set<string>();
  const counted = new Set<string>();
  let total = 0;
  let carried = 0;

  const take = (oldId: string, skippedStep: boolean) => {
    if (counted.has(oldId)) return;
    counted.add(oldId);
    total += 1;
    const meta = legacy[oldId];
    if (!meta) return;
    const key = pairKey(meta.chapter, meta.text);
    if (!oldUnique.has(key)) return;
    const nextId = currentUnique.get(key);
    if (!nextId || !known.has(nextId) || seen.has(nextId)) return;
    seen.add(nextId);
    done[nextId] = true;
    if (skippedStep) skipped[nextId] = true;
    history.push(nextId);
    carried += 1;
  };

  const ordered = historyIn.filter((id) => doneIn[id] || skippedIn[id]);
  const rest = Object.keys(doneIn).filter((id) => !ordered.includes(id));
  for (const id of [...ordered, ...rest]) take(id, Boolean(skippedIn[id]));

  const notice = total > 0 ? { carried, total } : null;
  return { done, skipped, history, version: 2, routeRev: rev, notice };
}

function sanitizeMatching(parsed: Record<string, unknown>, current: StepRef[], rev: string): StoredProgress {
  const known = new Set(current.map((step) => step.id));
  const done: Record<string, boolean> = {};
  const skipped: Record<string, boolean> = {};
  for (const [id, on] of Object.entries(asMap(parsed.done))) {
    if (on && known.has(id)) done[id] = true;
  }
  for (const [id, on] of Object.entries(asMap(parsed.skipped))) {
    if (on && known.has(id) && done[id]) skipped[id] = true;
  }
  const history = asHistory(parsed.history).filter((id) => done[id]);
  const noticeRaw = parsed.notice;
  let notice: RouteNotice | null = null;
  if (noticeRaw && typeof noticeRaw === "object") {
    const obj = noticeRaw as Record<string, unknown>;
    if (typeof obj.carried === "number" && typeof obj.total === "number") {
      notice = { carried: obj.carried, total: obj.total };
    }
  }
  return { done, skipped, history, version: 2, routeRev: rev, notice };
}

function countMarked(parsed: Record<string, unknown> | null) {
  if (!parsed) return 0;
  return Object.keys(asMap(parsed.done)).length;
}

/**
 * Read v2 progress. A mismatched revision, or a v1 blob, is never applied by id.
 * The raw blob is copied to the backup key when that key is still empty.
 * v1 progress may be carried by a unique (chapter, text) pair.
 */
export function readMigration(
  storage: Kv,
  rev: string,
  legacy: LegacyIndex,
  current: StepRef[],
): MigrateResult {
  const rawV2 = storage.getItem(RUN_KEY);
  if (rawV2) {
    const parsed = unwrap(rawV2);
    if (parsed && parsed.version === 2 && parsed.routeRev === rev) {
      return { progress: sanitizeMatching(parsed, current, rev), backupWritten: false };
    }
    const backupWritten = writeBackup(storage, rawV2);
    const progress = empty(rev, { carried: 0, total: countMarked(parsed) });
    persist(storage, progress);
    return { progress, backupWritten };
  }

  const rawV1 = storage.getItem(LEGACY_KEY);
  if (!rawV1) return { progress: null, backupWritten: false };

  const backupWritten = writeBackup(storage, rawV1);
  const parsed = unwrap(rawV1);
  const progress = parsed ? carryLegacy(parsed, legacy, current, rev) : empty(rev, null);
  if (!progress.notice && countMarked(parsed) > 0) {
    progress.notice = { carried: 0, total: countMarked(parsed) };
  }
  persist(storage, progress);
  return { progress, backupWritten };
}
