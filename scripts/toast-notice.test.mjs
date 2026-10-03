import assert from "node:assert/strict";
import test from "node:test";
import { chromium } from "playwright";

const URL = "http://127.0.0.1:8080/";

const TOAST_SIZES = [
  [1080, 1920],
  [1920, 1080],
  [768, 1024],
  [390, 844],
  [844, 390],
];

const NOTICE_SIZES = [
  [390, 844],
  [375, 667],
  [360, 740],
  [844, 390],
];

function overlaps(a, b) {
  if (!a || !b || a.width < 1 || b.width < 1) return false;
  return a.top < b.bottom - 1 && a.bottom > b.top + 1 && a.left < b.right - 1 && a.right > b.left + 1;
}

async function readLayout(page) {
  return page.evaluate(() => {
    function box(el) {
      if (!el) return null;
      const rect = el.getBoundingClientRect();
      return { top: rect.top, bottom: rect.bottom, left: rect.left, right: rect.right, width: rect.width, height: rect.height };
    }
    const title = document.querySelector(".step-title");
    const done = [...document.querySelectorAll("button")].find((button) => button.textContent?.trim() === "Done");
    const progress = document.querySelector(".app-progress");
    const toast = document.querySelector(".undo-toast");
    const card = document.querySelector(".now-card");
    return {
      title: box(title),
      done: box(done),
      progress: box(progress),
      toast: box(toast),
      cardHeight: card ? card.getBoundingClientRect().height : 0,
    };
  });
}

test("undo toast overlay does not move the card and layout shift stays 0", async () => {
  const browser = await chromium.launch({ headless: true, args: ["--no-sandbox"] });
  try {
    for (const [width, height] of TOAST_SIZES) {
      const page = await browser.newPage({ viewport: { width, height } });
      await page.addInitScript(() => {
        localStorage.removeItem("no-alrond-run-v2");
        localStorage.removeItem("no-alrond-picture-hidden");
      });
      await page.route(/\.(jpg|jpeg|png|webp)(\?|$)/i, (route) => route.abort());
      await page.goto(URL, { waitUntil: "domcontentloaded" });
      const done = page.getByRole("button", { name: "Done", exact: true });
      await done.waitFor({ timeout: 20000 });
      await done.click();
      const undo = page.locator(".undo-toast").getByRole("button", { name: "Undo", exact: true });
      await undo.waitFor({ timeout: 5000 });
      await page.evaluate(() => new Promise((resolve) => requestAnimationFrame(() => requestAnimationFrame(resolve))));
      await page.evaluate(() => {
        window.__cls = 0;
        new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            if (!entry.hadRecentInput) window.__cls += entry.value;
          }
        }).observe({ type: "layout-shift", buffered: false });
      });
      const during = await readLayout(page);
      assert.equal(overlaps(during.toast, during.title), false, `${width}x${height} toast covers the title`);
      assert.equal(overlaps(during.toast, during.done), false, `${width}x${height} toast covers Done`);
      assert.equal(overlaps(during.toast, during.progress), false, `${width}x${height} toast covers the progress line`);
      await undo.waitFor({ state: "hidden", timeout: 8000 });
      const after = await readLayout(page);
      const cls = await page.evaluate(() => window.__cls);
      assert.equal(cls, 0, `${width}x${height} layout shift ${cls}`);
      assert.equal(after.title.top, during.title.top, `${width}x${height} title moved`);
      assert.equal(after.done.top, during.done.top, `${width}x${height} Done moved`);
      assert.equal(after.progress.top, during.progress.top, `${width}x${height} progress moved`);
      assert.equal(after.cardHeight, during.cardHeight, `${width}x${height} card resized`);
      await page.close();
    }
  } finally {
    await browser.close();
  }
});

test("old-save notice buttons are reachable on phone sizes and the header stays clear", async () => {
  const browser = await chromium.launch({ headless: true, args: ["--no-sandbox"] });
  try {
    for (const [width, height] of NOTICE_SIZES) {
      const page = await browser.newPage({ viewport: { width, height } });
      await page.addInitScript(() => {
        localStorage.setItem(
          "no-alrond-run-v2",
          JSON.stringify({
            state: {
              done: { "throne-ch-1-1-df6557": true },
              skipped: {},
              history: ["throne-ch-1-1-df6557"],
              jumps: [1],
              version: 2,
              routeRev: "old-save",
              notice: null,
              resumeAfterId: null,
            },
            version: 2,
          }),
        );
      });
      await page.goto(URL, { waitUntil: "domcontentloaded" });
      await page.getByRole("button", { name: "Review the new steps" }).waitFor({ timeout: 20000 });
      const labels = [
        "Jump past them",
        "Review the new steps",
        "Start over",
        /Jump to latest carried step/,
        "Pick a chapter to start from",
        "Dismiss",
      ];
      for (const label of labels) {
        const button = page.getByRole("button", { name: label });
        await button.scrollIntoViewIfNeeded();
        const box = await button.boundingBox();
        assert.ok(box, `${width}x${height} missing ${label}`);
        assert.ok(box.height >= 44, `${width}x${height} ${label} target ${box.height}`);
        assert.ok(box.y >= -1 && box.y + box.height <= height + 1, `${width}x${height} ${label} outside the viewport`);
        const hittable = await button.evaluate((el) => {
          const rect = el.getBoundingClientRect();
          const hit = document.elementFromPoint(rect.left + rect.width / 2, rect.top + rect.height / 2);
          return !!hit && (hit === el || el.contains(hit));
        });
        assert.equal(hittable, true, `${width}x${height} ${label} is covered`);
      }
      const header = await page.evaluate(() => {
        function exposed(el) {
          const rect = el.getBoundingClientRect();
          const hit = document.elementFromPoint(rect.left + Math.min(20, rect.width / 2), rect.top + rect.height / 2);
          return !!hit && (hit === el || el.contains(hit));
        }
        const notice = document.querySelector(".route-notice").getBoundingClientRect();
        return {
          title: exposed(document.querySelector("h1")),
          progress: exposed(document.querySelector(".app-progress")),
          noticeTop: notice.top,
          noticeBottom: notice.bottom,
          height: window.innerHeight,
        };
      });
      assert.equal(header.title, true, `${width}x${height} notice covers the app name`);
      assert.equal(header.progress, true, `${width}x${height} notice covers the progress line`);
      assert.ok(header.noticeTop >= 0, `${width}x${height} notice above the viewport`);
      assert.ok(header.noticeBottom <= header.height + 1, `${width}x${height} notice below the viewport`);
      const doneState = await page.evaluate(() => {
        const done = [...document.querySelectorAll("button")].find((button) => button.textContent?.trim() === "Done");
        const nav = document.querySelector("nav");
        const rect = done.getBoundingClientRect();
        let clipped = false;
        let node = done.parentElement;
        while (node) {
          const style = getComputedStyle(node);
          if (/hidden|auto|scroll|clip/.test(`${style.overflow} ${style.overflowY}`)) {
            const box = node.getBoundingClientRect();
            if (rect.bottom > box.bottom + 1 || rect.top < box.top - 1) clipped = true;
          }
          node = node.parentElement;
        }
        return { bottom: rect.bottom, height: rect.height, navTop: nav.getBoundingClientRect().top, clipped };
      });
      assert.ok(doneState.height > 20, `${width}x${height} Done missing while the notice is open`);
      assert.equal(doneState.clipped, false, `${width}x${height} Done is clipped`);
      assert.ok(doneState.bottom <= doneState.navTop + 1, `${width}x${height} Done is under the nav`);
      await page.close();
    }
  } finally {
    await browser.close();
  }
});
