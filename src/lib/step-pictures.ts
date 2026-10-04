import { useEffect, useState } from "react";
import { stepPicExtra } from "@/data/step-pic-extra";
import { stepPics, type PictureConfidence, type PictureKind, type StepPicture } from "@/data/step-pics";

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

export function pictureFor(stepId: string | undefined): StepPicture | undefined {
  if (!stepId) return undefined;
  const curated = stepPics[stepId];
  if (curated) return curated;
  const extra = stepPicExtra[stepId];
  if (!extra) return undefined;
  const [seconds, videoTime, confidence, approx] = extra;
  return {
    stepId,
    image: `/step-pics/${stepId}.webp`,
    caption: "",
    kind: "travel",
    videoTime,
    youtube_link: `https://youtu.be/d6YOJxTfIeQ?t=${seconds}`,
    confidence: CONFIDENCE[confidence],
    approx: approx === 1,
  };
}

export function preloadPicture(stepId: string | undefined) {
  const picture = pictureFor(stepId);
  if (!picture || typeof Image === "undefined") return;
  const img = new Image();
  img.src = picture.image;
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
