#!/usr/bin/env node
/**
 * npm test entry. Expands the test globs in process (Node 20 does not expand
 * a quoted glob) and runs TypeScript tests through tsx, which Node 20 can
 * load. `--experimental-strip-types` is Node 22 only.
 */
import { spawnSync } from "node:child_process";
import { readdirSync, statSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(fileURLToPath(new URL(".", import.meta.url)), "..");

function walk(dir, suffix, acc = []) {
  for (const name of readdirSync(dir)) {
    const path = join(dir, name);
    if (statSync(path).isDirectory()) walk(path, suffix, acc);
    else if (name.endsWith(suffix)) acc.push(path);
  }
  return acc;
}

function run(args) {
  const result = spawnSync(process.execPath, args, { cwd: root, stdio: "inherit" });
  if (result.status !== 0) process.exit(result.status ?? 1);
}

const mjs = walk(join(root, "scripts"), ".test.mjs");
if (!mjs.length) {
  console.error("no scripts/**/*.test.mjs files");
  process.exit(1);
}
run(["--test", ...mjs]);

const ts = [
  "src/lib/migrate-progress.test.ts",
  "src/lib/step-pictures.test.ts",
  "src/lib/app-data/app-data.test.ts",
  "src/lib/app-data/readiness-schedule.test.ts",
  "src/lib/auth/gate-identity.test.ts",
  "src/lib/auth/sign-in-gate.test.ts",
].map((rel) => join(root, rel));
run(["--import", "tsx", "--test", ...ts]);
