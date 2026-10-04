import { useEffect, useState } from "react";
import { stepPicExtra } from "@/data/step-pic-extra";
import { stepPics, type PictureConfidence, type PictureKind, type StepPicture } from "@/data/step-pics";
import { steps } from "@/lib/run-store";

const CONFIDENCE: Record<"h" | "m" | "l", PictureConfidence> = {
  h: "high",
  m: "medium",
  l: "low",
};

export const PICTURE_HIDDEN_KEY = "no-alrond-picture-hidden";

export function usePictureHidden() {
  const [hidden, setHidden] = useState(false);
  useEffect(() => {
    try {
      setHidden(window.localStorage.getItem(PICTURE_HIDDEN_KEY) === "1");
    } catch {
      /* private mode */
    }
  }, []);
  function setPictureHidden(next: boolean) {
    setHidden(next);
    try {
      window.localStorage.setItem(PICTURE_HIDDEN_KEY, next ? "1" : "0");
    } catch {
      /* private mode */
    }
  }
  return [hidden, setPictureHidden] as const;
}

/** Menu, party, shop, and item frames are a weak match unless a high-confidence text-evidence source exists. The route has no "item" kind; inventory context and buy/sell/purchase lines count as item steps. */
const FORCED_LOW = new Set([
  "partitio-ch-4-1-52f067",
  "journey-for-the-dawn-1-24db21",
  "masterly-mysterious-travellers-1-8d0b0d",
]);

const stepById = new Map(steps.map((step) => [step.id, step]));

export function weakPictureStep(step: { kind: string; ctx?: string; text: string }) {
  return (
    step.kind === "menu" ||
    step.kind === "party" ||
    step.kind === "shop" ||
    step.kind === "item" ||
    step.ctx === "Inventory" ||
    /^(?:Buy |Sell |Purchase |Items\b)/.test(step.text)
  );
}

function withApproxPolicy(picture: StepPicture, stepId: string): StepPicture {
  if (FORCED_LOW.has(stepId)) return { ...picture, approx: true, confidence: "low" };
  const step = stepById.get(stepId);
  if (!step || !weakPictureStep(step)) return picture;
  if (picture.confidence === "high" && picture.source === "text-evidence") return picture;
  return picture.approx ? picture : { ...picture, approx: true };
}

export function pictureFor(stepId: string | undefined): StepPicture | undefined {
  if (!stepId) return undefined;
  const curated = stepPics[stepId];
  if (curated) return withApproxPolicy(curated, stepId);
  const extra = stepPicExtra[stepId];
  if (!extra) return undefined;
  const [seconds, videoTime, confidence, approx] = extra;
  return withApproxPolicy(
    {
      stepId,
      image: `/step-pics/${stepId}.webp`,
      caption: "",
      kind: "travel",
      videoTime,
      youtube_link: `https://youtu.be/d6YOJxTfIeQ?t=${seconds}`,
      confidence: CONFIDENCE[confidence],
      approx: approx === 1,
    },
    stepId,
  );
}

const prefetched = new Map<string, HTMLImageElement>();

/** Keep image requests for the current step and the next two. Drop the rest so a fast tap-through does not finish downloads the player has already left. */
export function syncPicturePrefetch(stepIds: Array<string | undefined>) {
  if (typeof Image === "undefined") return;
  const keep = new Set<string>();
  for (const id of stepIds) {
    const picture = pictureFor(id);
    if (picture) keep.add(picture.image);
  }
  for (const [url, img] of prefetched) {
    if (keep.has(url)) continue;
    img.onload = null;
    img.onerror = null;
    img.src = "";
    prefetched.delete(url);
  }
  for (const url of keep) {
    if (prefetched.has(url)) continue;
    const img = new Image();
    prefetched.set(url, img);
    img.src = url;
  }
}

export function preloadPicture(stepId: string | undefined) {
  syncPicturePrefetch([stepId]);
}

export function frameHeading(pictureKind: PictureKind, frameKind?: PictureKind) {
  return (frameKind ?? pictureKind) === "battle" ? "Fight" : "Where to go";
}

/** Clock label taken from the link's t= so the button and the URL agree. */
export function watchFromLabel(youtubeLink: string) {
  const match = /[?&]t=(\d+)/.exec(youtubeLink);
  const total = match ? Number(match[1]) : 0;
  const hours = Math.floor(total / 3600);
  const minutes = Math.floor((total % 3600) / 60);
  const seconds = total % 60;
  const sec = String(seconds).padStart(2, "0");
  const clock =
    hours > 0 ? `${hours}:${String(minutes).padStart(2, "0")}:${sec}` : `${minutes}:${sec}`;
  return `Watch from ${clock}`;
}
