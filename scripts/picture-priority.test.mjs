import assert from "node:assert/strict";
import test from "node:test";
import { chromium } from "playwright";

const PAGE = "http://127.0.0.1:8080/";

function pathOf(value) {
  const match = /\/step-pics\/[^?#]*/.exec(String(value));
  return match ? match[0] : String(value);
}

test("phones load the 640 variant and the lightbox loads the full frame", async () => {
  const browser = await chromium.launch({ headless: true, args: ["--no-sandbox"] });
  try {
    const page = await browser.newPage({ viewport: { width: 390, height: 844 } });
    const paths = [];
    page.on("request", (request) => {
      if (request.url().includes("/step-pics/")) paths.push(pathOf(request.url()));
    });
    await page.addInitScript(() => {
      localStorage.removeItem("no-alrond-run-v2");
      localStorage.removeItem("no-alrond-picture-hidden");
    });
    await page.goto(PAGE, { waitUntil: "networkidle" });
    const thumb = await page.evaluate(() => {
      const img = document.querySelector("img.step-pic-img");
      return { src: img?.getAttribute("src") ?? "", currentSrc: img?.currentSrc ?? "" };
    });
    assert.match(thumb.currentSrc, /\/step-pics\/w640\//, thumb.currentSrc);
    assert.equal(thumb.src.includes("/w640/"), false, thumb.src);
    assert.ok(paths.some((path) => path.includes("/step-pics/w640/")), paths.join(" "));
    assert.equal(
      paths.some((path) => path === thumb.src),
      false,
      `phone downloaded the full frame ${thumb.src}`,
    );
    await page.getByRole("button", { name: /Enlarge picture/ }).click();
    await page.locator(".pic-lightbox-img").waitFor();
    const full = await page.locator(".pic-lightbox-img").getAttribute("src");
    assert.equal(full, thumb.src);
    await page.waitForTimeout(300);
    assert.ok(paths.includes(full), `lightbox did not request ${full}`);
    await page.close();

    const desktop = await browser.newPage({ viewport: { width: 1080, height: 1920 } });
    const desktopPaths = [];
    desktop.on("request", (request) => {
      if (request.url().includes("/step-pics/")) desktopPaths.push(pathOf(request.url()));
    });
    await desktop.addInitScript(() => {
      localStorage.removeItem("no-alrond-run-v2");
      localStorage.removeItem("no-alrond-picture-hidden");
    });
    await desktop.goto(PAGE, { waitUntil: "networkidle" });
    const portrait = await desktop.evaluate(() => {
      const img = document.querySelector("img.step-pic-img");
      const zoom = document.querySelector(".step-pic-zoom")?.getBoundingClientRect();
      const card = document.querySelector(".now-card")?.getBoundingClientRect();
      return {
        currentSrc: img?.currentSrc ?? "",
        zoom: zoom ? { width: Math.round(zoom.width), height: Math.round(zoom.height) } : null,
        card: card ? Math.round(card.height) : 0,
      };
    });
    assert.equal(portrait.currentSrc.includes("/w640/"), false, portrait.currentSrc);
    assert.ok(portrait.zoom && portrait.zoom.width > 800 && portrait.zoom.height > 450, JSON.stringify(portrait.zoom));
    assert.ok(portrait.card > 800 && portrait.card < 980, `card ${portrait.card}`);
    assert.equal(
      desktopPaths.some((path) => path.includes("/step-pics/w640/")),
      false,
      desktopPaths.join(" "),
    );
    await desktop.close();
  } finally {
    await browser.close();
  }
});

test("fast walking does not cancel the current step image", async () => {
  const browser = await chromium.launch({ headless: true, args: ["--no-sandbox"] });
  try {
    const page = await browser.newPage({ viewport: { width: 390, height: 844 } });
    const aborted = [];
    const started = [];
    page.on("request", (request) => {
      if (request.url().includes("/step-pics/")) started.push(pathOf(request.url()));
    });
    page.on("requestfailed", (request) => {
      const reason = request.failure()?.errorText ?? "";
      if (request.url().includes("/step-pics/") && reason.includes("ERR_ABORTED")) aborted.push(pathOf(request.url()));
    });
    await page.route(/\/step-pics\//, async (route) => {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      try {
        await route.continue();
      } catch {
        /* the page cancelled this one */
      }
    });
    await page.addInitScript(() => {
      localStorage.removeItem("no-alrond-run-v2");
      localStorage.removeItem("no-alrond-picture-hidden");
    });
    await page.goto(PAGE, { waitUntil: "domcontentloaded" });
    const done = page.getByRole("button", { name: "Done", exact: true });
    await done.waitFor({ timeout: 20000 });
    const kicker = () => page.locator(".step-kicker-full").textContent();
    let previous = await kicker();
    for (let i = 0; i < 6; i += 1) {
      await done.click();
      await page.waitForFunction((before) => document.querySelector(".step-kicker-full")?.textContent !== before, previous);
      previous = await kicker();
    }
    const number = Number(/step\s+(\d+)/i.exec(previous ?? "")?.[1] ?? 0);
    assert.ok(number >= 7, `fast Done taps stayed on ${previous}`);
    const current = await page.evaluate(() => {
      const img = document.querySelector("img.step-pic-img");
      if (!img) return "";
      const chosen = img.currentSrc || img.parentElement?.querySelector("source")?.getAttribute("srcset") || img.getAttribute("src") || "";
      return new URL(chosen, location.origin).pathname;
    });
    assert.ok(started.includes(current), `never requested ${current}; recent ${started.slice(-6).join(" ")}`);
    assert.equal(aborted.includes(current), false, `cancelled current ${current}; aborted ${aborted.join(" ")}`);
    await page.close();
  } finally {
    await browser.close();
  }
});
