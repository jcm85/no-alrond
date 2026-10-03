import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import test from "node:test";
import { fileURLToPath } from "node:url";
import { stepPics } from "../data/step-pics.ts";
import { frameHeading, watchFromLabel } from "./step-pictures.ts";

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
  assert.equal(pictures.length, 127);
  const frames = pictures.flatMap((picture) => [picture, ...(picture.extraImages ?? [])]);
  assert.equal(frames.length, 128);
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
  assert.equal(watchFromLabel(stepPics["castti-ch-2-sai-route-1-655e3d"].youtube_link), "Watch from 1:12:31");
  assert.equal(linkSeconds(stepPics["castti-ch-2-sai-route-1-655e3d"].youtube_link), 4351);
});

test("the guard outpost door is a travel frame", () => {
  const extra = stepPics["osvald-ch-3-1-a91bcd"].extraImages?.[0];
  assert.ok(extra);
  assert.equal(frameHeading("battle", extra.kind), "Where to go");
  assert.equal(frameHeading("battle"), "Fight");
  assert.equal(watchFromLabel(extra.youtube_link), "Watch from 38:39");
});
