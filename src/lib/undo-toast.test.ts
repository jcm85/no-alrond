import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import test from "node:test";
import { fileURLToPath } from "node:url";

const root = dirname(fileURLToPath(import.meta.url));
const css = readFileSync(join(root, "../styles.css"), "utf8");
const app = readFileSync(join(root, "../components/route-app.tsx"), "utf8");

test("the undo control keeps its own column between Done and Skip", () => {
  const column = /\.undo-slot,\s*\.undo-toast\s*\{([^}]+)\}/.exec(css)?.[1];
  assert.ok(column, "undo column rule");
  assert.match(column, /flex:\s*0\s+0\s+4rem/);
  assert.match(column, /width:\s*4rem/);
  assert.match(column, /min-height:\s*2\.75rem/);
  assert.doesNotMatch(css, /\.undo-toast\s*\{[^}]*position:\s*fixed/);
  assert.doesNotMatch(css, /\.undo-toast\s*\{[^}]*position:\s*absolute/);
  assert.doesNotMatch(css, /\.undo-toast\s*\{[^}]*display:\s*contents/);
  const button = /\.undo-toast button\s*\{([^}]+)\}/.exec(css)?.[1];
  assert.ok(button);
  assert.match(button, /min-height:\s*2\.75rem/);
  assert.doesNotMatch(button, /position:\s*absolute/);
  assert.doesNotMatch(button, /position:\s*fixed/);
  assert.match(app, /setTimeout\(\(\) => setUndoLive\(true\), 300\)/);
  assert.match(app, /className="step-skip/);
  assert.match(app, /className="undo-slot"/);
  const undoButton = /disabled=\{!undoLive\}[\s\S]{0,80}className="([^"]+)"/.exec(app)?.[1];
  assert.ok(undoButton, "undo button class");
  assert.match(undoButton, /border-line/);
  assert.match(undoButton, /text-fg/);
  assert.doesNotMatch(undoButton, /border-gold/);
  assert.doesNotMatch(undoButton, /text-gold/);
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
