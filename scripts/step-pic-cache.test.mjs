import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import test from "node:test";

const root = new URL("..", import.meta.url).pathname;
const cache = "public, max-age=604800, stale-while-revalidate=2592000";

test("step pictures cache for a week and revalidate", () => {
  const vercel = JSON.parse(readFileSync(join(root, "vercel.json"), "utf8"));
  const header = vercel.headers.find((item) => item.source === "/step-pics/(.*)");
  assert.ok(header, "vercel header");
  assert.equal(header.headers.find((item) => item.key === "Cache-Control").value, cache);
  const vite = readFileSync(join(root, "vite.config.ts"), "utf8");
  assert.match(vite, /STEP_PIC_CACHE = "public, max-age=604800, stale-while-revalidate=2592000"/);
  assert.equal(vite.includes("immutable"), false);
  const middleware = readFileSync(join(root, "server/middleware/step-pic-cache.ts"), "utf8");
  assert.match(middleware, /public, max-age=604800, stale-while-revalidate=2592000/);
  assert.equal(middleware.includes("immutable"), false);
});
