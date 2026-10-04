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
  "throne-ch-1-900-31bcfe",
  "throne-ch-1-1-8426d9",
  "hikari-ch-2-1-625d41",
  "agnea-ch-4-1-533e07",
  "majestic-mysterious-travellers-1-2b3658",
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

/** 640px-wide phone variant. Same basename, always webp, never imported into the bundle. */
export function pictureSmallSrc(image: string) {
  const file = image.split("/").pop() ?? image;
  const base = file.replace(/\.(jpe?g|png|webp)$/i, "");
  return `/step-pics/w640/${base}.webp`;
}

/** URL the thumbnail will actually request at this viewport. Desktop keeps the full frame. */
export function pictureRequestSrc(image: string) {
  if (typeof matchMedia !== "undefined" && matchMedia("(max-width: 899px)").matches) return pictureSmallSrc(image);
  return image;
}

function picturePath(url: string) {
  try {
    return new URL(url, "http://local").pathname;
  } catch {
    return url;
  }
}

const prefetched = new Map<string, HTMLImageElement>();
let preloadWait: { img: HTMLImageElement; onDone: () => void } | null = null;

function clearPreloadWait() {
  if (!preloadWait) return;
  preloadWait.img.removeEventListener("load", preloadWait.onDone);
  preloadWait.img.removeEventListener("error", preloadWait.onDone);
  preloadWait = null;
}

function livePicturePaths() {
  const paths = new Set<string>();
  if (typeof document === "undefined") return paths;
  for (const img of document.querySelectorAll<HTMLImageElement>("img.step-pic-img, img.pic-lightbox-img")) {
    if (img.currentSrc) paths.add(picturePath(img.currentSrc));
    const attr = img.getAttribute("src");
    if (attr) paths.add(picturePath(attr));
  }
  return paths;
}

/**
 * Which in-flight preloads may be aborted. The current step, and any URL a visible
 * image is already using, are protected so a fast tap-through cannot cancel them.
 */
export function prefetchCancelUrls(inflight: string[], nextUrls: string[], protectedUrls: string[]) {
  const next = new Set(nextUrls);
  const keep = new Set(protectedUrls.map(picturePath));
  return inflight.filter((url) => !next.has(url) && !keep.has(picturePath(url)));
}

/** Next steps only, at low priority. The visible image owns the current step. */
export function syncPicturePrefetch(currentId: string | undefined, nextIds: Array<string | undefined> = []) {
  if (typeof Image === "undefined") return () => undefined;
  clearPreloadWait();
  const currentPicture = pictureFor(currentId);
  const currentUrl = currentPicture ? pictureRequestSrc(currentPicture.image) : undefined;
  const next = new Set<string>();
  for (const id of nextIds) {
    const picture = pictureFor(id);
    if (!picture) continue;
    const url = pictureRequestSrc(picture.image);
    if (url && url !== currentUrl) next.add(url);
  }
  const protectedUrls = [...livePicturePaths()];
  if (currentUrl) protectedUrls.push(currentUrl);
  for (const url of prefetchCancelUrls([...prefetched.keys()], [...next], protectedUrls)) {
    const img = prefetched.get(url);
    if (!img) continue;
    img.onload = null;
    img.onerror = null;
    img.src = "";
    prefetched.delete(url);
  }
  const currentImg = typeof document !== "undefined" ? document.querySelector<HTMLImageElement>("img.step-pic-img") : null;
  if (currentImg && !currentImg.complete) {
    const onDone = () => {
      clearPreloadWait();
      syncPicturePrefetch(currentId, nextIds);
    };
    preloadWait = { img: currentImg, onDone };
    currentImg.addEventListener("load", onDone);
    currentImg.addEventListener("error", onDone);
    return clearPreloadWait;
  }
  for (const url of next) {
    if (prefetched.has(url)) continue;
    const img = new Image();
    img.setAttribute("fetchpriority", "low");
    prefetched.set(url, img);
    img.src = url;
  }
  return clearPreloadWait;
}

export function preloadPicture(stepId: string | undefined) {
  syncPicturePrefetch(undefined, [stepId]);
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
