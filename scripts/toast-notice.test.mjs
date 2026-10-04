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
      const placed = await page.evaluate(() => {
        function box(el) {
          if (!el) return null;
          const rect = el.getBoundingClientRect();
          return { top: rect.top, bottom: rect.bottom, left: rect.left, right: rect.right, width: rect.width, height: rect.height };
        }
        return { nav: box(document.querySelector("nav")), card: box(document.querySelector(".now-card")), picture: box(document.querySelector(".step-pic")) };
      });
      assert.equal(overlaps(during.toast, during.title), false, `${width}x${height} toast covers the title`);
      assert.equal(overlaps(during.toast, during.done), false, `${width}x${height} toast covers Done`);
      assert.equal(overlaps(during.toast, during.progress), false, `${width}x${height} toast covers the progress line`);
      assert.equal(overlaps(during.toast, placed.card), false, `${width}x${height} toast covers the card`);
      assert.equal(overlaps(during.toast, placed.picture), false, `${width}x${height} toast covers the picture`);
      assert.ok(during.toast.top >= placed.nav.top - 1 && during.toast.bottom <= placed.nav.bottom + 1, `${width}x${height} toast is outside the nav`);
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
      const review = page.getByRole("button", { name: "Review", exact: true });
      await review.waitFor({ timeout: 20000 });
      const collapsed = await page.evaluate(() => {
        const notice = document.querySelector(".route-notice").getBoundingClientRect();
        const h1 = document.querySelector("h1").getBoundingClientRect();
        return { noticeHeight: notice.height, noticeTop: notice.top, headerBottom: h1.bottom, viewport: window.innerHeight };
      });
      assert.ok(collapsed.noticeTop >= collapsed.headerBottom - 1, `${width}x${height} notice covers the header`);
      assert.ok(collapsed.noticeHeight <= Math.max(72, collapsed.viewport * 0.12), `${width}x${height} notice is ${collapsed.noticeHeight}px`);
      const reviewBox = await review.boundingBox();
      assert.ok(reviewBox && reviewBox.height >= 44, `${width}x${height} Review target`);
      await review.click();
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
      const doneHit = await page.getByRole("button", { name: "Done", exact: true }).evaluate((el) => {
        const rect = el.getBoundingClientRect();
        const hit = document.elementFromPoint(rect.left + rect.width / 2, rect.top + rect.height / 2);
        return !!hit && (hit === el || el.contains(hit));
      });
      assert.equal(doneHit, true, `${width}x${height} the open notice covers Done`);
      await page.close();
    }
  } finally {
    await browser.close();
  }
});

async function metaText(page) {
  return page.locator(".now-card-meta").innerText();
}

test("space and enter mark done from the step details, and picture controls do not", async () => {
  const browser = await chromium.launch({ headless: true, args: ["--no-sandbox"] });
  try {
    const page = await browser.newPage({ viewport: { width: 1080, height: 1920 } });
    await page.addInitScript(() => {
      localStorage.removeItem("no-alrond-run-v2");
      localStorage.removeItem("no-alrond-picture-hidden");
      localStorage.removeItem("no-alrond-run-v1-backup");
    });
    await page.route(/\.(jpg|jpeg|png|webp)(\?|$)/i, (route) => route.abort());
    await page.goto(URL, { waitUntil: "domcontentloaded" });
    const details = page.getByRole("region", { name: "Step details" });
    await details.waitFor({ timeout: 20000 });
    const box = await details.boundingBox();
    await page.mouse.click(box.x + 16, box.y + Math.max(12, box.height - 10));
    const arrows = await page.evaluate(() => {
      const region = document.querySelector(".now-card-body");
      const event = new KeyboardEvent("keydown", { key: "ArrowDown", bubbles: true, cancelable: true });
      region.dispatchEvent(event);
      return event.defaultPrevented;
    });
    assert.equal(arrows, false, "ArrowDown on the step details is swallowed");
    const first = await metaText(page);
    await page.keyboard.press(" ");
    await page.waitForFunction((before) => document.querySelector(".now-card-meta")?.textContent !== before, first);
    const second = await metaText(page);
    assert.notEqual(second, first);
    await details.click();
    await page.keyboard.press("Enter");
    await page.waitForFunction((before) => document.querySelector(".now-card-meta")?.textContent !== before, second);
    for (let i = 0; i < 27; i += 1) {
      await details.focus();
      await page.keyboard.press(" ");
    }
    const hide = page.getByRole("button", { name: "Hide picture", exact: true });
    await hide.waitFor({ timeout: 10000 });
    const pictured = await metaText(page);
    await hide.focus();
    await page.keyboard.press(" ");
    await page.getByRole("button", { name: "Show picture", exact: true }).waitFor({ timeout: 5000 });
    assert.equal(await metaText(page), pictured, "Hide picture Space marked the step done");
    await page.getByRole("button", { name: "Show picture", exact: true }).click();
    await hide.waitFor({ timeout: 5000 });
    await page.getByRole("button", { name: /Enlarge picture/ }).click();
    const dialog = page.locator(".pic-lightbox");
    await dialog.waitFor({ timeout: 5000 });
    await dialog.getByRole("link", { name: /Watch from/ }).focus();
    await page.keyboard.press(" ");
    await page.waitForTimeout(200);
    assert.equal(await metaText(page), pictured, "lightbox Space marked the step done");
    await page.keyboard.press("Escape");
    await dialog.waitFor({ state: "hidden", timeout: 5000 });
    const undo = page.locator(".now-tools").getByRole("button", { name: "Undo", exact: true });
    await undo.focus();
    await page.keyboard.press(" ");
    await page.waitForFunction((before) => document.querySelector(".now-card-meta")?.textContent !== before, pictured);
    const afterUndo = await metaText(page);
    assert.notEqual(afterUndo, pictured);
    await details.focus();
    await page.keyboard.press(" ");
    await page.waitForFunction((before) => document.querySelector(".now-card-meta")?.textContent !== before, afterUndo);
    assert.equal(await metaText(page), pictured, "Undo then Space did not return to the pictured step");
    await page.close();
  } finally {
    await browser.close();
  }
});

test("about closes on escape, holds the page, and restores focus", async () => {
  const browser = await chromium.launch({ headless: true, args: ["--no-sandbox"] });
  try {
    const page = await browser.newPage({ viewport: { width: 390, height: 844 } });
    await page.addInitScript(() => localStorage.removeItem("no-alrond-run-v2"));
    await page.goto(URL, { waitUntil: "domcontentloaded" });
    const about = page.getByRole("button", { name: "About this route" });
    await about.waitFor({ timeout: 20000 });
    await about.click();
    const dialog = page.getByRole("dialog", { name: "The sheet, as a checklist" });
    await dialog.waitFor();
    const inert = await page.evaluate(() => ({
      header: document.querySelector("header")?.hasAttribute("inert") ?? false,
      nav: document.querySelector("nav")?.hasAttribute("inert") ?? false,
      card: Boolean(document.querySelector(".now-layout")?.hasAttribute("inert")),
    }));
    assert.equal(inert.header, true, "header stays active behind About");
    assert.equal(inert.nav, true, "nav stays active behind About");
    assert.equal(inert.card, true, "card stays active behind About");
    await page.keyboard.press("Escape");
    await dialog.waitFor({ state: "hidden" });
    const focus = await page.evaluate(() => document.activeElement?.getAttribute("aria-label"));
    assert.equal(focus, "About this route");
    const released = await page.evaluate(() => ({
      header: document.querySelector("header")?.hasAttribute("inert") ?? false,
      nav: document.querySelector("nav")?.hasAttribute("inert") ?? false,
    }));
    assert.equal(released.header, false);
    assert.equal(released.nav, false);
    await page.close();
  } finally {
    await browser.close();
  }
});

test("start over confirms and restore brings the backup back", async () => {
  const browser = await chromium.launch({ headless: true, args: ["--no-sandbox"] });
  try {
    const page = await browser.newPage({ viewport: { width: 1080, height: 1920 } });
    await page.addInitScript(() => {
      localStorage.removeItem("no-alrond-run-v2");
      localStorage.removeItem("no-alrond-run-v1-backup");
    });
    await page.goto(URL, { waitUntil: "domcontentloaded" });
    const done = page.getByRole("button", { name: "Done", exact: true });
    await done.waitFor({ timeout: 20000 });
    await done.click();
    const stepped = await metaText(page);
    await page.getByRole("button", { name: "About this route" }).click();
    await page.getByRole("button", { name: "Reset progress" }).click();
    await page.getByRole("heading", { name: "Start over?" }).waitFor();
    await page.getByText("Your progress is backed up on this device.").waitFor();
    await page.getByRole("button", { name: "Cancel", exact: true }).click();
    assert.equal(await metaText(page), stepped, "Cancel cleared progress");
    await page.getByRole("button", { name: "About this route" }).click();
    await page.getByRole("button", { name: "Reset progress" }).click();
    await page.getByRole("button", { name: "Start over", exact: true }).click();
    await page.waitForFunction((before) => document.querySelector(".now-card-meta")?.textContent !== before, stepped);
    const backupAfterReset = await page.evaluate(() => localStorage.getItem("no-alrond-run-v1-backup"));
    assert.ok(backupAfterReset && backupAfterReset.includes("true"), "reset did not keep a backup");
    await page.getByRole("button", { name: "About this route" }).click();
    await page.getByRole("button", { name: "Reset progress" }).click();
    await page.getByRole("button", { name: "Start over", exact: true }).click();
    const backupAfterEmpty = await page.evaluate(() => localStorage.getItem("no-alrond-run-v1-backup"));
    assert.equal(backupAfterEmpty, backupAfterReset, "an empty reset overwrote the backup");
    await page.getByRole("button", { name: "About this route" }).click();
    await page.getByRole("button", { name: "Restore backed-up progress" }).click();
    await page.getByText("Backed-up progress restored.").waitFor();
    await page.getByRole("button", { name: "Close", exact: true }).click();
    assert.equal(await metaText(page), stepped, "restore did not bring the backed-up step back");
    await page.close();
  } finally {
    await browser.close();
  }
});

test("the watch link sits with the step text and picture steps keep it out of the picture", async () => {
  const browser = await chromium.launch({ headless: true, args: ["--no-sandbox"] });
  try {
    const page = await browser.newPage({ viewport: { width: 1080, height: 1920 } });
    await page.addInitScript(() => {
      localStorage.removeItem("no-alrond-run-v2");
      localStorage.removeItem("no-alrond-picture-hidden");
    });
    await page.route(/\.(jpg|jpeg|png|webp)(\?|$)/i, (route) => route.abort());
    await page.goto(URL, { waitUntil: "domcontentloaded" });
    const details = page.getByRole("region", { name: "Step details" });
    await details.waitFor({ timeout: 20000 });
    const expected = [
      "Watch from 1:07",
      "Watch from 1:25",
      "Watch from 1:28",
      "Watch from 1:38",
      "Watch from 1:40",
      "Watch from 1:41",
      "Watch from 1:44",
      "Watch from 1:47",
      "Watch from 1:50",
    ];
    for (const label of expected) {
      const link = page.locator(".now-card-head .step-watch");
      await link.waitFor();
      assert.equal(await link.innerText(), label);
      assert.equal(await page.locator(".step-pic").count(), 0, `${label} still has a picture slot`);
      assert.equal(await page.locator(".step-pic .step-watch, .step-pic-short .step-watch, .step-pic-fallback .step-watch").count(), 0);
      await details.focus();
      const before = await metaText(page);
      await page.keyboard.press(" ");
      await page.waitForFunction((text) => document.querySelector(".now-card-meta")?.textContent !== text, before);
    }
    for (let i = 0; i < 20; i += 1) {
      await details.focus();
      const before = await metaText(page);
      await page.keyboard.press(" ");
      await page.waitForFunction((text) => document.querySelector(".now-card-meta")?.textContent !== text, before);
    }
    await page.locator(".step-pic").waitFor({ timeout: 10000 });
    const picturedLink = page.locator(".now-card-head .step-watch");
    assert.equal(await picturedLink.count(), 1);
    assert.match(await picturedLink.innerText(), /^Watch from /);
    assert.equal(await page.locator(".step-pic .step-watch").count(), 0, "picture card still holds the watch link");
    await page.close();
  } finally {
    await browser.close();
  }
});
