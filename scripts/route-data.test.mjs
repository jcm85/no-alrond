import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";
import { mkdtempSync, readFileSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import test from "node:test";

const root = new URL("..", import.meta.url).pathname;
const routePath = join(root, "src/data/route.ts");
const csvPath = join(root, "scripts/sheets/no-alrond.csv");
const generator = join(root, "scripts/build-route.py");

function loadRoute(file = routePath) {
  const text = readFileSync(file, "utf8");
  const raw = text.split("export const route: RouteData = ", 2)[1].trim().replace(/;$/, "");
  return { text, data: JSON.parse(raw) };
}

function flat(data) {
  const chapters = [];
  const steps = [];
  for (const act of data.acts) {
    for (const chapter of act.chapters) {
      chapters.push(chapter);
      for (const block of chapter.blocks) {
        for (const step of block.steps) {
          steps.push({ ...step, chapter: chapter.title, chapterId: chapter.id });
        }
      }
    }
  }
  return { chapters, steps };
}

function idsOf(data) {
  return flat(data).steps.map((step) => step.id);
}

test("meta.steps counts checkable steps, and notes stay notes", () => {
  const { data } = loadRoute();
  const { steps } = flat(data);
  const checks = steps.filter((step) => step.check);
  const notes = steps.filter((step) => !step.check);
  assert.equal(data.meta.steps, checks.length);
  assert.ok(notes.length > 0, "non-check objects are sheet notes");
  assert.ok(notes.every((step) => step.kind === "note"));
  assert.equal(data.meta.sheetDate, "2026-07-04");
  assert.match(data.meta.note, /No Alrond \(more consistent\)/);
  assert.match(data.meta.note, /2025-06-08/);
  assert.match(data.meta.note, /7\/4\/2026/);
  assert.equal(data.meta.category, "All superbosses, no Alrond");
  assert.match(data.meta.rev, /^[0-9a-f]{16}$/);
});

test("No Alrond strings are present and the Alrond route is gone", () => {
  const { text, data } = loadRoute();
  const { steps } = flat(data);
  const blob = steps.map((step) => step.text).join("\n");
  for (const phrase of [
    "EXP Augmentor",
    "Brooch of Joy",
    "Easier Inquiries",
    "Thieving Tips and Tricks",
    "Windy Refrain",
    "Thief Licence",
    "Wind Whisperer",
    "Do not add Hikari to the party.",
    "Recruit Castti, but do not add her to the party.",
    "Hikari — Conqueror's Sword x4",
    "Purchase The Curious Legend of the Great Wall",
  ]) {
    assert.ok(blob.includes(phrase), phrase);
  }
  assert.equal(blob.split("Hikari — Conqueror's Sword x4").length - 1, 4);
  for (const phrase of ["Bribe Alrond", "EXP x100", "Mooneater", "Sunken Gold", "Thrash", "Conquerer's"]) {
    assert.equal(text.includes(phrase), false, phrase);
  }
  const alrondLines = text.split("\n").filter((line) => /alrond/i.test(line));
  assert.equal(alrondLines.length, 3);
  const stray = steps.filter((step) => /alrond/i.test(step.text));
  assert.equal(stray.length, 1);
  assert.match(stray[0].text, /After telling Alrond about the ship/);
});

test("Hikari Ch.5 comes before Galdera, and Agnea Ch.5 comes after", () => {
  const { chapters } = flat(loadRoute().data);
  const titles = chapters.map((chapter) => chapter.title);
  const hikari = titles.indexOf("Hikari Ch. 5");
  const galdera = titles.indexOf("Galdera");
  const agnea = titles.indexOf("Agnea Ch. 5");
  assert.ok(hikari >= 0 && galdera > hikari && agnea > galdera);
  const byTitle = Object.fromEntries(chapters.map((chapter) => [chapter.title, chapter]));
  assert.equal(byTitle["Hikari Ch. 5"].mark, "1:21:53");
  assert.equal(byTitle["Hikari Ch. 5"].seconds, 4913);
  assert.equal(byTitle.Galdera.mark, "2:14:42");
  assert.equal(byTitle.Galdera.seconds, 8082);
  assert.equal(byTitle["Vide, the Wicked"].mark, "3:03:15");
  assert.equal(byTitle["Vide, the Wicked"].seconds, 10995);
  assert.equal(byTitle["Majestic Mysterious Travellers"].mark, "3:05:45");
  assert.equal(byTitle["Majestic Mysterious Travellers"].seconds, 11145);
  assert.ok(chapters.filter((chapter) => typeof chapter.seconds === "number").length >= 20);
});

test("early Gravell sells the Warlord's Spear and keeps the Conqueror's Sword", () => {
  const { chapters, steps } = flat(loadRoute().data);
  const titles = chapters.map((chapter) => chapter.title);
  const both = steps.find((step) =>
    step.text.includes("Conqueror's Sword") && step.text.includes("Warlord's Spear"),
  );
  assert.ok(both);
  assert.ok(steps.some((step) => step.text === "Sell Warlord's Spear"));
  const swordSell = steps.find((step) => step.text === "Sell Conqueror's Sword");
  assert.ok(swordSell);
  assert.ok(titles.indexOf(swordSell.chapter) > titles.indexOf("Hikari Ch. 5"));
  assert.equal(
    steps.some((step) => step.text.includes("Conquerer's")),
    false,
  );
});

test("post-video changes are notes on at least one step each", () => {
  const { steps } = flat(loadRoute().data);
  for (const date of ["08/13/2025", "09/17/2025", "12/03/2025", "06/30/2026", "07/04/2026"]) {
    const hit = steps.filter(
      (step) => step.check && step.note && step.note.includes(`Changed since the video (${date})`),
    );
    assert.ok(hit.length >= 1, date);
    assert.equal(
      hit.some((step) => step.warn === true && String(step.note).trim().startsWith("Changed since the video")),
      false,
      `${date} must be a note, not a warning`,
    );
  }
});

test("ids are stable chapter hashes, not sheet row numbers", () => {
  const { chapters, steps } = flat(loadRoute().data);
  assert.ok(steps.every((step) => /^[a-z0-9-]+-\d+-[0-9a-f]{6}$/.test(step.id)));
  assert.equal(steps.some((step) => /^r\d+$/.test(step.id)), false);
  assert.equal(chapters.some((chapter) => /-\d{3,}$/.test(chapter.id)), false);
  assert.equal(new Set(steps.map((step) => step.id)).size, steps.length);
});

test("regenerating the same sheet keeps ids, and another chapter's row does not move them", () => {
  const dir = mkdtempSync(join(tmpdir(), "no-alrond-"));
  const again = join(dir, "again.ts");
  const shifted = join(dir, "shifted.ts");
  execFileSync("python3", [generator, csvPath, again], { encoding: "utf8" });
  const original = idsOf(loadRoute().data);
  assert.deepEqual(idsOf(loadRoute(again).data), original);

  const lines = readFileSync(csvPath, "utf8").split("\n");
  lines.splice(2, 0, ",ZZZ inserted probe step.,,,,,,,,,,,,,,");
  const probe = join(dir, "probe.csv");
  writeFileSync(probe, lines.join("\n"));
  execFileSync("python3", [generator, probe, shifted], { encoding: "utf8" });
  const before = flat(loadRoute().data);
  const after = flat(loadRoute(shifted).data);
  const later = (pack) =>
    pack.steps.filter((step) => step.chapter !== "Throne Ch.1").map((step) => step.id);
  assert.deepEqual(later(after), later(before));
  assert.notDeepEqual(
    before.steps.filter((step) => step.chapter === "Throne Ch.1").map((step) => step.id),
    after.steps.filter((step) => step.chapter === "Throne Ch.1").map((step) => step.id),
  );
});

function parseCsv(text) {
  const rows = [];
  let row = [];
  let cur = "";
  let quoted = false;
  for (let i = 0; i < text.length; i += 1) {
    const ch = text[i];
    if (quoted) {
      if (ch === '"') {
        if (text[i + 1] === '"') {
          cur += '"';
          i += 1;
        } else quoted = false;
      } else cur += ch;
    } else if (ch === '"') quoted = true;
    else if (ch === ",") {
      row.push(cur);
      cur = "";
    } else if (ch === "\n") {
      row.push(cur);
      rows.push(row);
      row = [];
      cur = "";
    } else if (ch !== "\r") cur += ch;
  }
  if (cur.length || row.length) {
    row.push(cur);
    rows.push(row);
  }
  return rows;
}

const SCAFFOLD = new Set([
  "Formation",
  "Change Party",
  "Idle Party Members",
  "Current Party",
  "Order Obtained",
  "Primary",
  "Secondary",
  "Idle",
  "Current",
  "Enemy",
]);

function cellAllowed(value) {
  if (SCAFFOLD.has(value)) return true;
  if (/^[\^v]$/.test(value) || /^[\^v] \d+$/.test(value)) return true;
  if (value === ">" || value === "<") return true;
  if (/^T\d+$/.test(value)) return true;
  return false;
}

test("the changelog is not a step, and chapter marks never go backwards", () => {
  const { text, data } = loadRoute();
  const { chapters, steps } = flat(data);
  const checks = steps.filter((step) => step.check);
  assert.equal(steps.at(-1).text, "GGs!");
  assert.equal(checks.at(-1).text, "GGs!");
  assert.equal(data.meta.steps, checks.length);
  // 1,160 after the changelog cut, plus the two Turn 5.5 actions.
  assert.equal(checks.length, 1162);
  const dated = steps.filter((step) => /^\d{1,2}\/\d{1,2}\/\d{2,4}/.test(step.text));
  assert.deepEqual(
    dated.map((step) => step.text),
    [],
  );
  assert.equal(text.includes("Changelog"), false);
  assert.equal(text.includes("Mooneater"), false);
  for (const phrase of [
    "Turn 5.5 — Partitio: Ancient Cursed Talisman",
    "Turn 5.5 — Osvald: Decaying Dragon's Essence",
    "skip lychee if Agnea has full latent",
    "weeds can give a speed buff, which messes up the strat",
    "H'aanit can get a patience turn here",
    "At the Flamechurch flame",
    "At the Toto'haha flame",
    "Osvald Chapter 5",
    "skip if turn order is lucky",
  ]) {
    assert.equal(text.includes(phrase), true, phrase);
  }
  let previous = -1;
  for (const chapter of chapters) {
    assert.equal(typeof chapter.seconds, "number", chapter.title);
    assert.ok(chapter.seconds >= previous, `${chapter.title} ${chapter.seconds} < ${previous}`);
    previous = chapter.seconds;
  }
  const byTitle = Object.fromEntries(chapters.map((chapter) => [chapter.title, chapter]));
  assert.equal(byTitle["Hikari Ch. 3"].mark, "1:09:47");
  assert.equal(byTitle["Hikari Ch. 3"].seconds, 1 * 3600 + 9 * 60 + 47);
  assert.ok(byTitle["Castti Ch.2: Sai Route"].seconds >= byTitle["Hikari Ch. 3"].seconds);
  assert.equal(byTitle["Castti Ch.2: Sai Route"].videoSeconds, 1 * 3600 + 2 * 60);
  assert.equal(byTitle["Foreign Assassins"].seconds >= byTitle["Castti Ch.2: Sai Route"].seconds, true);
});

test("every non-empty sheet cell is in the route or on the scaffolding allowlist", () => {
  const routeText = readFileSync(routePath, "utf8");
  const rows = parseCsv(readFileSync(csvPath, "utf8"));
  const missing = [];
  for (const row of rows) {
    const title = (row[1] || "").trim();
    if (/^change ?log$/i.test(title)) break;
    for (const cell of row) {
      const value = cell.trim();
      if (!value || cellAllowed(value)) continue;
      const escaped = JSON.stringify(value).slice(1, -1);
      if (routeText.includes(value) || routeText.includes(escaped)) continue;
      const lines = value.split(/\n/).map((part) => part.trim()).filter(Boolean);
      if (lines.length > 1 && lines.every((part) => routeText.includes(part) || routeText.includes(JSON.stringify(part).slice(1, -1)))) {
        continue;
      }
      missing.push(value.slice(0, 140));
    }
  }
  assert.deepEqual(missing, []);
});
