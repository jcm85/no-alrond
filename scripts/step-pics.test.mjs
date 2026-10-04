import assert from "node:assert/strict";
import { readdirSync, readFileSync, statSync } from "node:fs";
import { join } from "node:path";
import test from "node:test";

const root = new URL("..", import.meta.url).pathname;
const dataPath = join(root, "src/data/step-pics.ts");
const routePath = join(root, "src/data/route.ts");
const picDir = join(root, "public/step-pics");

function loadPics() {
  const text = readFileSync(dataPath, "utf8");
  const raw = text.split("export const stepPics: Record<string, StepPicture> = ", 2)[1].trim().replace(/;$/, "");
  return { text, pics: JSON.parse(raw) };
}

function routeIds() {
  const text = readFileSync(routePath, "utf8");
  return new Set([...text.matchAll(/"id": "([^"]+)"/g)].map((match) => match[1]));
}

test("every step picture exists, matches a route step, and is not bundled", () => {
  const { text, pics } = loadPics();
  const ids = routeIds();
  const entries = Object.entries(pics);
  assert.equal(entries.length, 133);
  assert.equal(text.includes("import "), false);
  const files = new Set(readdirSync(picDir).filter((name) => name.endsWith(".jpg")));
  const used = new Set();
  let extras = 0;
  for (const [stepId, picture] of entries) {
    assert.equal(picture.stepId, stepId);
    assert.equal(ids.has(stepId), true, stepId);
    assert.ok(picture.kind === "travel" || picture.kind === "battle", picture.kind);
    assert.ok(picture.confidence === "high" || picture.confidence === "medium");
    assert.match(picture.image, /^\/step-pics\/[^/]+\.jpg$/);
    assert.match(picture.youtube_link, /^https:\/\/youtu\.be\/d6YOJxTfIeQ\?t=\d+$/);
    const name = picture.image.slice("/step-pics/".length);
    assert.equal(files.has(name), true, name);
    assert.equal(used.has(name), false, name);
    used.add(name);
    assert.ok(statSync(join(picDir, name)).size > 1000, name);
    const extra = picture.extraImages ?? [];
    if (extra.length) {
      extras += 1;
      assert.equal(stepId, "osvald-ch-3-1-a91bcd");
      assert.equal(extra.length, 1);
    }
    for (const frame of extra) {
      assert.equal(frame.kind, "travel");
      assert.match(frame.image, /^\/step-pics\/[^/]+\.jpg$/);
      const extraName = frame.image.slice("/step-pics/".length);
      assert.equal(files.has(extraName), true, extraName);
      assert.equal(used.has(extraName), false, extraName);
      used.add(extraName);
      assert.equal(frame.image === picture.image, false);
    }
  }
  assert.equal(extras, 1);
  assert.deepEqual([...files].filter((name) => !used.has(name)), []);
  assert.equal(files.size, 134);
});

test("webp screenshots cover the remaining steps and stay out of the bundle", () => {
  const extraPath = join(root, "src/data/step-pic-extra.ts");
  const extra = readFileSync(extraPath, "utf8");
  assert.equal(extra.includes("import "), false);
  assert.equal(/from\s+["'][^"']*\.webp["']/.test(extra), false);
  const ids = [...extra.matchAll(/"([^"]+)": \[/g)].map((match) => match[1]);
  assert.equal(ids.length, 1072);
  const webp = readdirSync(picDir).filter((name) => name.endsWith(".webp"));
  const jpg = readdirSync(picDir).filter((name) => name.endsWith(".jpg"));
  assert.equal(jpg.length, 134);
  assert.equal(webp.length, 1078);
  const webpSet = new Set(webp);
  for (const id of ids) {
    assert.equal(webpSet.has(`${id}.webp`), true, id);
    assert.ok(statSync(join(picDir, `${id}.webp`)).size > 1000, id);
  }
  const unwired = [
    "osvald-ch-4-1-f8b87e",
    "osvald-ch-4-1-244d34",
    "hikari-ch-4-1-c1711a",
    "hikari-ch-5-1-0aa391",
    "the-dancer-warrior-part-2-1-29976a",
    "journey-for-the-dawn-1-c2e428",
  ];
  for (const id of unwired) {
    assert.equal(ids.includes(id), false, id);
    assert.equal(webpSet.has(`${id}.webp`), true, id);
  }
  assert.equal(jpg.length + webp.length, 1212);
});
