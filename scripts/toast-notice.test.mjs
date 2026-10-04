import assert from "node:assert/strict";
import test from "node:test";
import { chromium } from "playwright";

const URL = "http://127.0.0.1:8080/";

const TOAST_SIZES = [
  [1080, 1920],
  [1920, 1080],
  [390, 844],
  [360, 740],
  [375, 667],
  [1024, 768],
  [768, 1024],
  [844, 390],
];

const NOTICE_SIZES = [
  [390, 844],
  [375, 667],
  [360, 740],
  [844, 390],
];

function edges(box) {
  if (!box || box.width < 1) return null;
  const left = box.left ?? box.x;
  const top = box.top ?? box.y;
  if (left == null || top == null) return null;
  return { left, top, right: box.right ?? left + box.width, bottom: box.bottom ?? top + box.height, width: box.width, height: box.height };
}

function overlaps(a, b) {
  const ea = edges(a);
  const eb = edges(b);
  if (!ea || !eb) return false;
  return ea.top < eb.bottom - 1 && ea.bottom > eb.top + 1 && ea.left < eb.right - 1 && ea.right > eb.left + 1;
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
      const before = await readLayout(page);
      const skipBefore = await page.getByRole("button", { name: "Skip", exact: true }).boundingBox();
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
      const undoBox = await undo.boundingBox();
      assert.ok(undoBox && undoBox.height >= 44, `${width}x${height} Undo is ${undoBox?.height}px`);
      const skip = page.getByRole("button", { name: "Skip", exact: true });
      const skipBox = await skip.boundingBox();
      assert.ok(skipBox && skipBox.height >= 44, `${width}x${height} Skip left the action row`);
      const doneBox = await done.boundingBox();
      assert.ok(doneBox && doneBox.width >= 120, `${width}x${height} Done is ${doneBox?.width}px wide`);
      assert.ok(doneBox.width >= skipBox.width, `${width}x${height} Done ${doneBox.width}px is narrower than Skip ${skipBox.width}px`);
      assert.equal(overlaps(undoBox, skipBox), false, `${width}x${height} Undo covers Skip`);
      assert.equal(overlaps(doneBox, undoBox), false, `${width}x${height} Undo covers Done`);
      assert.equal(overlaps(doneBox, skipBox), false, `${width}x${height} Done covers Skip`);
      const hits = await page.evaluate(() => {
        const row = document.querySelector(".now-actions");
        const button = (name) => [...row.querySelectorAll("button")].find((el) => el.textContent.trim() === name);
        const hit = (el, ratio) => {
          const rect = el.getBoundingClientRect();
          const target = document.elementFromPoint(rect.left + rect.width * ratio, rect.top + rect.height / 2);
          return target === el || el.contains(target);
        };
        const doneEl = button("Done");
        const undoEl = button("Undo");
        const skipEl = button("Skip");
        return {
          doneEdge: hit(doneEl, 0.9),
          doneCenter: hit(doneEl, 0.5),
          undoCenter: hit(undoEl, 0.5),
          skipCenter: hit(skipEl, 0.5),
        };
      });
      assert.equal(hits.doneEdge, true, `${width}x${height} a tap at 90% of Done hits Undo`);
      assert.equal(hits.doneCenter, true, `${width}x${height} Done center is covered`);
      assert.equal(hits.undoCenter, true, `${width}x${height} Undo center is covered`);
      assert.equal(hits.skipCenter, true, `${width}x${height} Skip center is covered`);
      assert.ok(skipBefore, `${width}x${height} Skip was missing`);
      assert.ok(Math.abs(skipBox.x - skipBefore.x) < 1 && Math.abs(skipBox.y - skipBefore.y) < 1, `${width}x${height} Skip moved when Undo appeared`);
      const tabs = await page.locator("nav button").all();
      for (const tab of tabs) {
        const tabBox = await tab.boundingBox();
        assert.equal(overlaps(undoBox, tabBox), false, `${width}x${height} Undo covers a nav tab`);
      }
      const findHit = await page.getByRole("button", { name: "Find", exact: true }).evaluate((el) => {
        const rect = el.getBoundingClientRect();
        const hit = document.elementFromPoint(rect.left + rect.width / 2, rect.top + rect.height / 2);
        return hit === el || el.contains(hit);
      });
      assert.equal(findHit, true, `${width}x${height} Find is not tappable`);
      const metaDuring = await page.locator(".now-card-meta").innerText();
      await page.getByRole("button", { name: "Find", exact: true }).click();
      await page.getByRole("button", { name: "Now", exact: true }).click();
      assert.equal(await page.locator(".now-card-meta").innerText(), metaDuring, `${width}x${height} Find undid the step`);
      assert.equal(overlaps(undoBox, during.title), false, `${width}x${height} Undo covers the title`);
      assert.equal(during.title.top, before.title.top, `${width}x${height} title moved when Undo appeared`);
      assert.equal(during.done.top, before.done.top, `${width}x${height} Done moved when Undo appeared`);
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
      assert.ok(collapsed.noticeHeight <= 140, `${width}x${height} notice is ${collapsed.noticeHeight}px`);
      const sentence = await page.evaluate(() => {
        const p = document.querySelector(".route-notice-banner p");
        const style = getComputedStyle(p);
        return {
          text: p.textContent,
          cut: p.scrollHeight > p.clientHeight + 2 || p.scrollWidth > p.clientWidth + 2,
          ellipsis: style.textOverflow === "ellipsis" && style.whiteSpace === "nowrap",
        };
      });
      assert.equal(sentence.cut, false, `${width}x${height} notice sentence is cut off: ${sentence.text}`);
      assert.equal(sentence.ellipsis, false, `${width}x${height} notice sentence uses an ellipsis`);
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
      const openPanel = await page.evaluate(() => {
        const panel = document.querySelector(".route-notice-actions");
        const title = document.querySelector(".step-title");
        const style = getComputedStyle(panel);
        const prect = panel.getBoundingClientRect();
        const trect = title.getBoundingClientRect();
        const hit = document.elementFromPoint(trect.left + 8, trect.top + Math.min(12, trect.height / 2));
        return {
          height: prect.height,
          overflow: style.overflowY,
          titleClear: !!hit && (hit === title || title.contains(hit)),
          overlapsTitle: prect.top < trect.bottom - 1 && prect.bottom > trect.top + 1,
        };
      });
      if (width === 844 && height === 390) {
        assert.ok(openPanel.height >= 100, `${width}x${height} notice panel is ${openPanel.height}px`);
        assert.match(openPanel.overflow, /auto|scroll/, `${width}x${height} notice panel does not scroll`);
      }
      if (!openPanel.overlapsTitle) {
        assert.equal(openPanel.titleClear, true, `${width}x${height} the open notice covers the step title`);
      }
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
    for (const name of ["Watch the run", "Chewy's All Superbosses run"]) {
      const link = dialog.getByRole("link", { name, exact: true });
      const box = await link.boundingBox();
      assert.ok(box && box.height >= 44, `${name} tap target is ${box?.height}px`);
    }
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
    await page.getByRole("button", { name: "About this route" }).click();
    await page.getByRole("button", { name: "Restore backed-up progress" }).click();
    await page.getByRole("heading", { name: "Restore the backup?" }).waitFor();
    await page.getByText("This replaces the progress on screen with the backup saved on this device.").waitFor();
    await page.getByRole("button", { name: "Cancel", exact: true }).click();
    assert.equal(await metaText(page), stepped, "Cancel restore replaced current progress");
    await page.close();
  } finally {
    await browser.close();
  }
});

test("eight rapid Done taps count one through eight and Done stays the wide button", async () => {
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
      const numberOf = async () => {
        const text = await page.locator(".step-kicker-full").textContent();
        return Number(/step\s+(\d+)/i.exec(text ?? "")?.[1] ?? 0);
      };
      const start = await numberOf();
      for (let i = 1; i <= 8; i += 1) {
        if (i > 1) {
          await page.waitForFunction(() => {
            const undo = document.querySelector(".undo-toast button");
            return undo instanceof HTMLButtonElement && !undo.disabled;
          });
        }
        const box = await done.boundingBox();
        assert.ok(box && box.width >= 120 && box.height >= 44, `${width}x${height} Done is ${box?.width}x${box?.height}`);
        const skipBox = await page.getByRole("button", { name: "Skip", exact: true }).boundingBox();
        assert.ok(skipBox && box.width >= skipBox.width, `${width}x${height} Done ${box.width}px vs Skip ${skipBox?.width}px`);
        await page.mouse.click(box.x + box.width * 0.9, box.y + box.height / 2);
        const expected = start + i;
        await page.waitForFunction((next) => {
          const text = document.querySelector(".step-kicker-full")?.textContent ?? "";
          const match = /step\s+(\d+)/i.exec(text);
          return match ? Number(match[1]) === next : false;
        }, expected);
        assert.equal(await numberOf(), expected, `${width}x${height} tap ${i}`);
      }
      const boxes = await page.evaluate(() => {
        const row = document.querySelector(".now-actions");
        const button = (name) => [...row.querySelectorAll("button")].find((el) => el.textContent.trim() === name);
        const rect = (el) => {
          const box = el.getBoundingClientRect();
          return { left: box.left, top: box.top, right: box.right, bottom: box.bottom, width: box.width, height: box.height };
        };
        return { done: rect(button("Done")), undo: rect(button("Undo")), skip: rect(button("Skip")) };
      });
      assert.equal(overlaps(boxes.done, boxes.undo), false, `${width}x${height} Done overlaps Undo`);
      assert.equal(overlaps(boxes.done, boxes.skip), false, `${width}x${height} Done overlaps Skip`);
      assert.equal(overlaps(boxes.undo, boxes.skip), false, `${width}x${height} Undo overlaps Skip`);
      assert.ok(boxes.undo.height >= 44 && boxes.skip.height >= 44, `${width}x${height} action height`);
      await page.close();
    }
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
      assert.equal(await page.locator(".step-pic img").count(), 1, `${label} is missing its screenshot`);
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
    await page.setViewportSize({ width: 390, height: 844 });
    const phoneLink = page.locator(".now-card-head .step-watch");
    const phoneLabel = await phoneLink.getAttribute("aria-label");
    assert.match(phoneLabel ?? "", /^Watch from \d+:\d{2}/);
    assert.equal(await phoneLink.innerText(), (phoneLabel ?? "").replace(/^Watch from /, ""));
    await page.close();
  } finally {
    await browser.close();
  }
});
