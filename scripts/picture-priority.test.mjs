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
    assert.match(thumb.src, /\/step-pics\/w640\//, thumb.src);
    assert.equal(thumb.currentSrc.endsWith(thumb.src) || thumb.src.endsWith(new URL(thumb.currentSrc).pathname), true);
    assert.equal(
      paths.some((path) => /\/step-pics\/[^/]+\.(webp|jpe?g)$/.test(path) && !path.includes("/w640/")),
      false,
      `phone downloaded a full frame: ${paths.join(" ")}`,
    );
    await page.getByRole("button", { name: /Enlarge picture/ }).click();
    await page.locator(".pic-lightbox-img").waitFor();
    const full = await page.locator(".pic-lightbox-img").getAttribute("src");
    assert.equal(full?.includes("/w640/"), false, full ?? "");
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

    const tablet = await browser.newPage({ viewport: { width: 1024, height: 768 } });
    const tabletPaths = [];
    tablet.on("request", (request) => {
      if (request.url().includes("/step-pics/")) tabletPaths.push(pathOf(request.url()));
    });
    await tablet.addInitScript(() => {
      localStorage.removeItem("no-alrond-run-v2");
      localStorage.removeItem("no-alrond-picture-hidden");
    });
    await tablet.goto(PAGE, { waitUntil: "networkidle" });
    const thumb1024 = await tablet.evaluate(() => document.querySelector("img.step-pic-img")?.currentSrc ?? "");
    assert.match(thumb1024, /\/step-pics\/w640\//, thumb1024);
    assert.equal(tabletPaths.some((path) => path.includes("/w640/")), true);
    assert.equal(
      tabletPaths.some((path) => /\/step-pics\/[^/]+\.(webp|jpe?g)$/.test(path) && !path.includes("/w640/")),
      false,
      tabletPaths.join(" "),
    );
    await tablet.close();
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

test("a desktop curated jpg still loads when the steps before it are tapped quickly", async () => {
  const browser = await chromium.launch({ headless: true, args: ["--no-sandbox"] });
  try {
    const page = await browser.newPage({ viewport: { width: 1400, height: 900 } });
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
      await new Promise((resolve) => setTimeout(resolve, 400));
      try {
        await route.continue();
      } catch {
        /* cancelled */
      }
    });
    const jpg = "/step-pics/partitio-ch-2-1-9fbb5f.jpg";
    await page.addInitScript(() => {
      localStorage.setItem(
        "no-alrond-run-v2",
        JSON.stringify({
          state: {
            done: {},
            skipped: {},
            history: [],
            jumps: [],
            version: 2,
            routeRev: "6ce74051ed6f76bb",
            notice: null,
            resumeAfterId: "throne-ch-1-900-f44214",
          },
          version: 2,
        }),
      );
      localStorage.removeItem("no-alrond-picture-hidden");
    });
    await page.goto(PAGE, { waitUntil: "domcontentloaded" });
    const done = page.getByRole("button", { name: "Done", exact: true });
    await done.waitFor({ timeout: 20000 });
    const kicker = () => page.locator(".step-kicker-full").textContent();
    let previous = await kicker();
    assert.match(previous ?? "", /Step 117/);
    for (let i = 0; i < 3; i += 1) {
      await done.click();
      await page.waitForFunction((before) => document.querySelector(".step-kicker-full")?.textContent !== before, previous);
      previous = await kicker();
    }
    assert.match(previous ?? "", /Step 120/, previous ?? "");
    const jpgRequests = () => started.filter((path) => path === jpg);
    await page.waitForTimeout(200);
    assert.ok(jpgRequests().length >= 1, `jpg was not requested; recent ${started.slice(-8).join(" ")}`);
    const shown = await page.waitForFunction(() => {
      const img = document.querySelector("img.step-pic-img");
      return img && img.complete && img.naturalWidth > 0 ? img.currentSrc : "";
    }, null, { timeout: 8000 });
    const currentSrc = await shown.jsonValue();
    assert.equal(aborted.includes(jpg), false, `jpg aborted; aborted ${aborted.join(" ")}`);
    assert.match(currentSrc, /partitio-ch-2-1-9fbb5f\.jpe?g/, currentSrc);
    await page.close();
  } finally {
    await browser.close();
  }
});

test("a phone step requests one 640px file, and a revisit does not download it again", async () => {
  const browser = await chromium.launch({ headless: true, args: ["--no-sandbox"] });
  try {
    const page = await browser.newPage({ viewport: { width: 390, height: 844 } });
    const requested = [];
    page.on("request", (request) => {
      if (request.resourceType() === "image" && request.url().includes("/step-pics/")) requested.push(pathOf(request.url()));
    });
    await page.addInitScript(() => {
      localStorage.removeItem("no-alrond-run-v2");
      localStorage.removeItem("no-alrond-picture-hidden");
    });
    await page.goto(PAGE, { waitUntil: "domcontentloaded" });
    const done = page.getByRole("button", { name: "Done", exact: true });
    await done.waitFor({ timeout: 20000 });
    const steps = 8;
    let previous = await page.locator(".step-kicker-full").textContent();
    for (let i = 0; i < steps - 1; i += 1) {
      await done.click();
      await page.waitForFunction((before) => document.querySelector(".step-kicker-full")?.textContent !== before, previous);
      previous = await page.locator(".step-kicker-full").textContent();
    }
    await page.waitForTimeout(200);
    const full = requested.filter((path) => !path.includes("/w640/"));
    assert.deepEqual(full, [], `full-size files: ${full.join(" ")}`);
    const counts = new Map();
    for (const path of requested) counts.set(path, (counts.get(path) ?? 0) + 1);
    const dupes = [...counts.entries()].filter(([, count]) => count > 1);
    assert.deepEqual(dupes, [], `downloaded twice: ${dupes.map(([path]) => path).join(" ")}`);
    assert.ok(requested.length <= steps + 2, `${requested.length} image requests for ${steps} steps`);
    assert.ok(requested.length >= steps, `only ${requested.length} images for ${steps} steps`);
    const seen = requested.length;
    await page.waitForFunction(() => {
      const button = document.querySelector(".undo-toast button");
      return button instanceof HTMLButtonElement && !button.disabled;
    });
    await page.locator(".undo-toast").getByRole("button", { name: "Undo", exact: true }).click();
    await page.waitForTimeout(250);
    assert.equal(requested.length, seen, `revisit downloaded ${requested.slice(seen).join(" ")}`);
    await page.close();
  } finally {
    await browser.close();
  }
});
