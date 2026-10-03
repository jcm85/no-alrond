import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import test from "node:test";
import { fileURLToPath } from "node:url";

const css = readFileSync(join(dirname(fileURLToPath(import.meta.url)), "../styles.css"), "utf8");

test("the undo toast overlays the page and stays out of the document flow", () => {
  const rule = /\.undo-toast\s*\{([^}]+)\}/.exec(css)?.[1];
  assert.ok(rule, "undo toast rule");
  assert.match(rule, /position:\s*fixed/);
  assert.match(rule, /pointer-events:\s*none/);
  assert.doesNotMatch(css, /\.undo-toast\s*\{[^}]*position:\s*absolute/);
  assert.doesNotMatch(css, /\.undo-toast\s*\{[^}]*bottom:/);
  const button = /\.undo-toast button\s*\{([^}]+)\}/.exec(css)?.[1];
  assert.ok(button);
  assert.match(button, /pointer-events:\s*auto/);
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
