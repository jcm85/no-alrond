import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import test from "node:test";
import { fileURLToPath } from "node:url";

const css = readFileSync(join(dirname(fileURLToPath(import.meta.url)), "../styles.css"), "utf8");

test("the undo toast stays in the header and does not float over Done", () => {
  const rule = /\.undo-toast\s*\{([^}]+)\}/.exec(css)?.[1];
  assert.ok(rule, "undo toast rule");
  assert.match(rule, /pointer-events:\s*none/);
  assert.doesNotMatch(rule, /position:\s*fixed/);
  assert.doesNotMatch(rule, /bottom:/);
  const button = /\.undo-toast button\s*\{([^}]+)\}/.exec(css)?.[1];
  assert.ok(button);
  assert.match(button, /pointer-events:\s*auto/);
});
