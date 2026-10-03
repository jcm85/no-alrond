import assert from "node:assert/strict";
import test from "node:test";
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

test("watch label time equals the link t for every frame", () => {
  const pictures = Object.values(stepPics);
  assert.equal(pictures.length, 127);
  const frames = pictures.flatMap((picture) => [picture, ...(picture.extraImages ?? [])]);
  assert.equal(frames.length, 128);
  for (const frame of frames) {
    const label = watchFromLabel(frame.youtube_link);
    assert.equal(labelSeconds(label), linkSeconds(frame.youtube_link), frame.youtube_link);
  }
  assert.equal(watchFromLabel(stepPics["galdera-1-107476"].youtube_link), "Watch from 2:14:48");
  assert.equal(linkSeconds(stepPics["galdera-1-107476"].youtube_link), 8088);
  assert.equal(watchFromLabel(stepPics["galdera-1-95ea15"].youtube_link), "Watch from 2:14:48");
  assert.equal(linkSeconds(stepPics["galdera-1-95ea15"].youtube_link), 8088);
  assert.equal(watchFromLabel(stepPics["castti-ch-2-sai-route-1-655e3d"].youtube_link), "Watch from 1:12:24");
  assert.equal(linkSeconds(stepPics["castti-ch-2-sai-route-1-655e3d"].youtube_link), 4344);
});

test("the guard outpost door is a travel frame", () => {
  const extra = stepPics["osvald-ch-3-1-a91bcd"].extraImages?.[0];
  assert.ok(extra);
  assert.equal(frameHeading("battle", extra.kind), "Where to go");
  assert.equal(frameHeading("battle"), "Fight");
});
