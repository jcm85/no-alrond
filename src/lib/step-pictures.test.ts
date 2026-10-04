import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import test from "node:test";
import { fileURLToPath } from "node:url";
import { stepPicExtra } from "../data/step-pic-extra.ts";
import { stepPics } from "../data/step-pics.ts";
import { frameHeading, pictureFor, watchFromLabel } from "./step-pictures.ts";
import { steps } from "./run-store.ts";

function linkSeconds(youtubeLink: string) {
  const match = /[?&]t=(\d+)/.exec(youtubeLink);
  assert.ok(match, youtubeLink);
  return Number(match[1]);
}

function labelSeconds(label: string) {
  assert.match(label, /^Watch from \d+:\d{2}(?::\d{2})?$/);
  const parts = label.slice("Watch from ".length).split(":").map(Number);
  if (parts.length === 2) return parts[0] * 60 + parts[1];
  return parts[0] * 3600 + parts[1] * 60 + parts[2];
}

/** Same lead-in as scripts/build-step-pics.py: round half up, then three seconds early. */
function leadSeconds(source: number) {
  return Math.max(0, Math.floor(source + 0.5) - 3);
}

test("watch label time equals the link t, and t is the frame minus 3 seconds", () => {
  const manifestPath = join(dirname(fileURLToPath(import.meta.url)), "../../scripts/step-pics/manifest.json");
  const manifest = JSON.parse(readFileSync(manifestPath, "utf8")) as Record<
    string,
    { sourceFrameSeconds: number; extraImages?: { sourceFrameSeconds?: number }[] }
  >;
  const pictures = Object.values(stepPics);
  assert.equal(pictures.length, 133);
  const frames = pictures.flatMap((picture) => [picture, ...(picture.extraImages ?? [])]);
  assert.equal(frames.length, 134);
  for (const frame of frames) {
    const label = watchFromLabel(frame.youtube_link);
    assert.equal(labelSeconds(label), linkSeconds(frame.youtube_link), frame.youtube_link);
  }
  for (const [stepId, item] of Object.entries(manifest)) {
    const picture = stepPics[stepId];
    if (!picture) continue;
    const expected = leadSeconds(item.sourceFrameSeconds);
    assert.equal(linkSeconds(picture.youtube_link), expected, stepId);
    assert.equal(labelSeconds(watchFromLabel(picture.youtube_link)), expected, stepId);
    const extras = item.extraImages ?? [];
    assert.equal((picture.extraImages ?? []).length, extras.length, stepId);
    extras.forEach((extra, index) => {
      assert.equal(typeof extra.sourceFrameSeconds, "number", stepId);
      const extraExpected = leadSeconds(extra.sourceFrameSeconds ?? 0);
      const frame = picture.extraImages?.[index];
      assert.ok(frame);
      assert.equal(linkSeconds(frame.youtube_link), extraExpected, stepId);
    });
  }
  assert.equal(watchFromLabel(stepPics["galdera-1-107476"].youtube_link), "Watch from 2:18:03");
  assert.equal(linkSeconds(stepPics["galdera-1-107476"].youtube_link), 8283);
  assert.equal(watchFromLabel(stepPics["galdera-1-95ea15"].youtube_link), "Watch from 2:15:09");
  assert.equal(linkSeconds(stepPics["galdera-1-95ea15"].youtube_link), 8109);
  const corrected: Record<string, [string, number, "high" | "medium"]> = {
    "castti-ch-2-sai-route-1-655e3d": ["Watch from 1:02:06", 3726, "high"],
    "hikari-ch-4-1-9974b8": ["Watch from 1:12:29", 4349, "high"],
    "agnea-ch-2-1-8f3c27": ["Watch from 1:38:03", 5883, "high"],
    "agnea-ch-2-1-1dfd88": ["Watch from 1:43:24", 6204, "high"],
    "ochette-ch-3-1-8de399": ["Watch from 2:05:15", 7515, "high"],
    "masterly-mysterious-travellers-1-476306": ["Watch from 3:07:32", 11252, "medium"],
    "true-vide-phase-1-1-0625d2": ["Watch from 3:09:41", 11381, "high"],
    "true-vide-phase-2-1-9517f0": ["Watch from 3:11:46", 11506, "high"],
    "castti-ch-2-sai-route-1-93d74f": ["Watch from 1:10:30", 4230, "high"],
    "foreign-assassins-1-b8556e": ["Watch from 1:10:30", 4230, "high"],
  };
  for (const [stepId, [label, seconds, confidence]] of Object.entries(corrected)) {
    const picture = stepPics[stepId];
    assert.ok(picture, stepId);
    assert.equal(watchFromLabel(picture.youtube_link), label, stepId);
    assert.equal(linkSeconds(picture.youtube_link), seconds, stepId);
    assert.equal(picture.confidence, confidence, stepId);
    assert.equal(picture.caption.includes("Corrected from"), false, stepId);
  }
});

test("every route step has a screenshot and only approx frames are tagged", () => {
  let jpg = 0;
  let webp = 0;
  let approx = 0;
  for (const step of steps) {
    const picture = pictureFor(step.id);
    assert.ok(picture, step.id);
    assert.equal(picture.image.includes(step.id), true, step.id);
    if (picture.image.endsWith(".jpg")) jpg += 1;
    else if (picture.image.endsWith(".webp")) webp += 1;
    else assert.fail(picture.image);
    if (picture.approx) {
      approx += 1;
      assert.equal(picture.image.endsWith(".webp"), true, step.id);
    }
    if (picture.image.endsWith(".webp")) {
      const file = join(dirname(fileURLToPath(import.meta.url)), "../../public", picture.image);
      assert.equal(readFileSync(file).byteLength > 1000, true, picture.image);
    }
  }
  assert.equal(steps.length, 1205);
  assert.equal(jpg, 133);
  assert.equal(webp, 1072);
  assert.equal(jpg + webp, 1205);
  assert.equal(approx, 640);
  assert.equal(Object.keys(stepPicExtra).length, 1072);
  const heldBack = [
    "osvald-ch-4-1-f8b87e",
    "osvald-ch-4-1-244d34",
    "hikari-ch-4-1-c1711a",
    "hikari-ch-5-1-0aa391",
    "the-dancer-warrior-part-2-1-29976a",
    "journey-for-the-dawn-1-c2e428",
  ];
  for (const id of heldBack) {
    assert.equal(stepPicExtra[id], undefined, id);
    assert.equal(steps.some((step) => step.id === id), false, id);
  }
});

test("the guard outpost door is a travel frame", () => {
  const extra = stepPics["osvald-ch-3-1-a91bcd"].extraImages?.[0];
  assert.ok(extra);
  assert.equal(frameHeading("battle", extra.kind), "Where to go");
  assert.equal(frameHeading("battle"), "Fight");
  assert.equal(watchFromLabel(extra.youtube_link), "Watch from 38:39");
});
