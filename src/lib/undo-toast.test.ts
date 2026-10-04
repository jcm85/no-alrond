import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import test from "node:test";
import { fileURLToPath } from "node:url";

const css = readFileSync(join(dirname(fileURLToPath(import.meta.url)), "../styles.css"), "utf8");

test("the undo control stays in the action row and clears the nav", () => {
  const rule = /\.undo-toast\s*\{([^}]+)\}/.exec(css)?.[1];
  assert.ok(rule, "undo toast rule");
  assert.match(rule, /display:\s*contents/);
  assert.doesNotMatch(css, /\.undo-toast\s*\{[^}]*position:\s*fixed/);
  assert.doesNotMatch(css, /\.undo-toast\s*\{[^}]*position:\s*absolute/);
  const button = /\.undo-toast button\s*\{([^}]+)\}/.exec(css)?.[1];
  assert.ok(button);
  assert.match(button, /min-height:\s*2\.75rem/);
});

test("the old-save notice is an in-flow card with reachable actions", () => {
  const rule = /\.route-notice\s*\{([^}]+)\}/.exec(css)?.[1];
  assert.ok(rule, "notice rule");
  assert.match(rule, /position:\s*relative/);
  assert.doesNotMatch(rule, /position:\s*absolute/);
  assert.doesNotMatch(rule, /position:\s*fixed/);
  assert.doesNotMatch(css, /\.notice-review\s*\{[^}]*display:\s*none/);
  const button = /\.route-notice button\s*\{([^}]+)\}/.exec(css)?.[1];
  assert.ok(button);
  assert.match(button, /min-height:\s*2\.75rem/);
});
