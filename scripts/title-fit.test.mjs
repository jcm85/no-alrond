import assert from "node:assert/strict";
import test from "node:test";
import { chromium } from "playwright";

const PAGE = "http://127.0.0.1:8080/";
const SIZES = [
  [1080, 1920],
  [1920, 1080],
  [390, 844],
  [360, 740],
  [375, 667],
  [1024, 768],
  [768, 1024],
  [844, 390],
];

test("the instruction is never clipped at phone and tablet sizes", async () => {
  const browser = await chromium.launch({ headless: true, args: ["--no-sandbox"] });
  try {
    for (const [width, height] of SIZES) {
      const page = await browser.newPage({ viewport: { width, height } });
      await page.addInitScript(() => {
        localStorage.removeItem("no-alrond-run-v2");
        localStorage.removeItem("no-alrond-picture-hidden");
      });
      await page.route(/\.(jpg|jpeg|png|webp)(\?|$)/i, (route) => route.abort());
      await page.goto(PAGE, { waitUntil: "domcontentloaded" });
      await page.getByRole("button", { name: "Done", exact: true }).waitFor({ timeout: 20000 });
      const clipped = await page.evaluate(async () => {
        const found = [];
        for (let guard = 0; guard < 1300; guard += 1) {
          const title = document.querySelector(".step-title");
          const kicker = document.querySelector(".step-kicker-full")?.textContent ?? "";
          const n = Number(/step\s+(\d+)/i.exec(kicker)?.[1] ?? 0);
          const done = [...document.querySelectorAll(".now-actions button")].find((button) => button.textContent.trim() === "Done");
          if (!title || !done || !n) break;
          if (title.scrollHeight > title.clientHeight && found.length < 8) {
            found.push({ n, hidden: title.scrollHeight - title.clientHeight });
          }
          const before = n;
          done.click();
          const start = performance.now();
          let advanced = false;
          while (performance.now() - start < 1500) {
            await new Promise((resolve) => requestAnimationFrame(resolve));
            const text = document.querySelector(".step-kicker-full")?.textContent ?? "";
            const next = Number(/step\s+(\d+)/i.exec(text)?.[1] ?? 0);
            if (next !== before) {
              advanced = true;
              break;
            }
            if (!document.querySelector(".now-actions button")) break;
          }
          if (!advanced) break;
        }
        return found;
      });
      assert.deepEqual(clipped, [], `${width}x${height} clipped titles ${JSON.stringify(clipped)}`);
      await page.close();
    }
  } finally {
    await browser.close();
  }
});
