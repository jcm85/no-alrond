import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import test from "node:test";
import { fileURLToPath } from "node:url";

const css = readFileSync(join(dirname(fileURLToPath(import.meta.url)), "../styles.css"), "utf8");

/** Done tops measured with the fixed action bar at these viewports. */
const coveredCases = [
  { name: "375x667", height: 667, doneTop: 549, doneBottom: 595 },
  { name: "390x844", height: 844, doneTop: 726, doneBottom: 772 },
  { name: "1024x768", height: 768, doneTop: 640, doneBottom: 696 },
  { name: "844x390", height: 390, doneTop: 278, doneBottom: 318 },
];

test("Done is not covered by the undo toast at 375x667, 390x844, 1024x768, and 844x390", () => {
  const rule = /\.undo-toast\s*\{([^}]+)\}/.exec(css)?.[1];
  assert.ok(rule, "undo toast rule");
  assert.match(rule, /pointer-events:\s*none/);
  const button = /\.undo-toast button\s*\{([^}]+)\}/.exec(css)?.[1];
  assert.ok(button);
  assert.match(button, /pointer-events:\s*auto/);
  const rem = Number(/bottom:\s*calc\(([0-9.]+)rem/.exec(rule)?.[1]);
  assert.ok(rem > 0, "toast bottom offset");
  const toastHeight = 72;
  for (const item of coveredCases) {
    const toastBottom = item.height - rem * 16;
    const toastTop = toastBottom - toastHeight;
    const overlaps = toastTop < item.doneBottom && toastBottom > item.doneTop;
    assert.equal(overlaps, false, item.name);
  }
});
