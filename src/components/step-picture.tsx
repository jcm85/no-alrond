import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { stepPics, type StepPicture, type StepPictureFrame } from "@/data/step-pics";

export const PICTURE_HIDDEN_KEY = "no-alrond-picture-hidden";

const APPROXIMATE = "This frame is close to this step, not exact";

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

export function pictureFor(stepId: string | undefined) {
  if (!stepId) return undefined;
  return stepPics[stepId];
}

function framesOf(picture: StepPicture): StepPictureFrame[] {
  return [
    {
      image: picture.image,
      caption: picture.caption,
      videoTime: picture.videoTime,
      youtube_link: picture.youtube_link,
      confidence: picture.confidence,
    },
    ...(picture.extraImages ?? []),
  ];
}

export function StepPictureCard({
  picture,
  compact = false,
  eager = false,
  onHide,
}: {
  picture: StepPicture;
  compact?: boolean;
  eager?: boolean;
  onHide?: () => void;
}) {
  const frames = framesOf(picture);
  const [index, setIndex] = useState(0);
  const drag = useRef<{ x: number; y: number } | null>(null);
  useEffect(() => {
    setIndex(0);
  }, [picture.stepId]);
  const frame = frames[Math.min(index, frames.length - 1)] ?? frames[0];
  const heading = picture.kind === "battle" ? "Fight" : "Where to go";

  function move(delta: number) {
    setIndex((current) => Math.min(frames.length - 1, Math.max(0, current + delta)));
  }

  return (
    <article className={"step-pic rounded-card border border-line bg-surface p-3 " + (compact ? "step-pic-compact" : "")}>
      <div className="flex items-center justify-between gap-3">
        <h3 className="font-display text-lg font-semibold text-gold">{heading}</h3>
        {onHide ? (
          <button type="button" onClick={onHide} className="min-h-11 shrink-0 px-2 text-base text-gold">
            Hide picture
          </button>
        ) : null}
      </div>
      <div
        className="step-pic-body mt-2"
        onPointerDown={(event) => {
          if ((event.target as HTMLElement).closest("button, a")) return;
          drag.current = { x: event.clientX, y: event.clientY };
        }}
        onPointerUp={(event) => {
          if (!drag.current) return;
          const dx = event.clientX - drag.current.x;
          const dy = event.clientY - drag.current.y;
          drag.current = null;
          if (Math.abs(dx) < 48 || Math.abs(dx) < Math.abs(dy)) return;
          move(dx < 0 ? 1 : -1);
        }}
      >
        <img
          key={frame.image}
          src={frame.image}
          alt={frame.caption}
          width={1280}
          height={720}
          loading={eager ? "eager" : "lazy"}
          decoding="async"
          fetchPriority={eager ? "high" : "low"}
          className="step-pic-img w-full rounded-lg bg-bg object-contain"
        />
        {frame.confidence === "medium" ? (
          <p className="mt-2 text-sm leading-snug text-muted">
            <span
              className="mr-2 inline-block rounded-full border border-gold px-2 py-0.5 text-xs tracking-wide text-gold uppercase"
              title={APPROXIMATE}
            >
              approximate
            </span>
            {APPROXIMATE}
          </p>
        ) : null}
        <p className="step-pic-caption mt-2 text-base text-fg">{frame.caption}</p>
      </div>
      {frames.length > 1 ? (
        <div className="mt-2 flex items-center justify-between gap-2">
          <button
            type="button"
            className="inline-flex min-h-11 items-center gap-1 rounded-card border border-line px-3 text-base text-fg disabled:opacity-40"
            onClick={() => move(-1)}
            disabled={index === 0}
          >
            <ChevronLeft className="size-4" />
            Previous
          </button>
          <p className="text-base text-muted tabular-nums">
            {index + 1} / {frames.length}
          </p>
          <button
            type="button"
            className="inline-flex min-h-11 items-center gap-1 rounded-card border border-line px-3 text-base text-fg disabled:opacity-40"
            onClick={() => move(1)}
            disabled={index >= frames.length - 1}
          >
            Next
            <ChevronRight className="size-4" />
          </button>
        </div>
      ) : null}
      <a
        className="mt-2 inline-flex min-h-11 items-center text-base text-gold underline underline-offset-4"
        href={frame.youtube_link}
        target="_blank"
        rel="noreferrer"
      >
        Watch this moment ({frame.videoTime})
      </a>
    </article>
  );
}

export function preloadPicture(stepId: string | undefined) {
  const picture = pictureFor(stepId);
  if (!picture || typeof Image === "undefined") return;
  const img = new Image();
  img.src = picture.image;
}
