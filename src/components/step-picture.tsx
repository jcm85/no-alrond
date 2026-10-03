import { useCallback, useEffect, useLayoutEffect, useRef, useState, type Ref } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { StepPicture, StepPictureFrame } from "@/data/step-pics";
import { focusableIn, holdBackground, nextTabIndex, pickVisibleHide, restoreFocusChoice } from "@/lib/picture-focus";
import { frameHeading, watchFromLabel } from "@/lib/step-pictures";

const APPROXIMATE = "This frame is close to this step, not exact";

function framesOf(picture: StepPicture): StepPictureFrame[] {
  return [
    {
      image: picture.image,
      caption: picture.caption,
      videoTime: picture.videoTime,
      youtube_link: picture.youtube_link,
      confidence: picture.confidence,
      kind: picture.kind,
    },
    ...(picture.extraImages ?? []),
  ];
}

function visibleHideButton() {
  const buttons = [...document.querySelectorAll<HTMLButtonElement>(".step-pic-hide")].map((button) => ({
    button,
    label: button.textContent ?? "",
    visible: button.getClientRects().length > 0,
  }));
  return pickVisibleHide(buttons)?.button ?? null;
}

function PictureLightbox({
  frame,
  heading,
  onClose,
  onPrev,
  onNext,
  index,
  count,
  opener,
}: {
  frame: StepPictureFrame;
  heading: string;
  onClose: () => void;
  onPrev?: () => void;
  onNext?: () => void;
  index: number;
  count: number;
  opener: HTMLElement | null;
}) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    const release = holdBackground(dialog);
    closeRef.current?.focus();
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") {
        event.preventDefault();
        event.stopPropagation();
        onClose();
        return;
      }
      if (event.key !== "Tab") return;
      const items = focusableIn(dialog as HTMLDivElement);
      if (!items.length) return;
      event.preventDefault();
      event.stopPropagation();
      const current = items.indexOf(document.activeElement as HTMLElement);
      items[nextTabIndex(items.length, current, event.shiftKey)]?.focus();
    }
    document.addEventListener("keydown", onKey, true);
    return () => {
      document.removeEventListener("keydown", onKey, true);
      release();
      const hide = visibleHideButton();
      const target = restoreFocusChoice(
        opener ? { connected: opener.isConnected, node: opener } : null,
        hide ? { connected: true, node: hide } : null,
      );
      target?.node.focus();
    };
  }, [onClose, opener]);

  return (
    <div ref={dialogRef} className="pic-lightbox" role="dialog" aria-modal="true" aria-label={heading}>
      <div className="pic-lightbox-head flex items-center justify-between gap-3">
        <p className="font-display text-lg font-semibold text-gold">{heading}</p>
        <button ref={closeRef} type="button" onClick={onClose} className="min-h-11 shrink-0 px-3 text-base text-gold">
          Close
        </button>
      </div>
      <img src={frame.image} alt={frame.caption} width={1280} height={720} className="pic-lightbox-img" />
      <div className="pic-lightbox-side">
        {frame.confidence === "medium" ? (
          <p className="text-sm leading-snug text-muted">
            <span className="mr-2 inline-block rounded-full border border-gold px-2 py-0.5 text-xs tracking-wide text-gold uppercase">
              approximate
            </span>
            {APPROXIMATE}
          </p>
        ) : null}
        <p className="text-base text-fg">{frame.caption}</p>
        {count > 1 ? (
          <div className="flex items-center justify-between gap-2">
            <button type="button" className="min-h-11 px-3 text-base text-gold disabled:opacity-40" onClick={onPrev} disabled={index === 0}>
              Previous
            </button>
            <p className="text-base text-muted tabular-nums">
              {index + 1} / {count}
            </p>
            <button type="button" className="min-h-11 px-3 text-base text-gold disabled:opacity-40" onClick={onNext} disabled={index >= count - 1}>
              Next
            </button>
          </div>
        ) : null}
        <a
          className="inline-flex min-h-11 items-center text-base text-gold underline underline-offset-4"
          href={frame.youtube_link}
          target="_blank"
          rel="noreferrer"
        >
          {watchFromLabel(frame.youtube_link)}
        </a>
      </div>
    </div>
  );
}

export function StepPictureCard({
  picture,
  compact = false,
  eager = false,
  onHide,
  hideRef,
  takeHideFocus = false,
  onHideFocused,
}: {
  picture: StepPicture;
  compact?: boolean;
  eager?: boolean;
  onHide?: () => void;
  hideRef?: Ref<HTMLButtonElement>;
  takeHideFocus?: boolean;
  onHideFocused?: () => void;
}) {
  const frames = framesOf(picture);
  const [index, setIndex] = useState(0);
  const [open, setOpen] = useState(false);
  const [collapsedId, setCollapsedId] = useState<string | null>(null);
  const collapsed = collapsedId === picture.stepId;
  const drag = useRef<{ x: number; y: number } | null>(null);
  const suppressClick = useRef(false);
  const openerRef = useRef<HTMLElement | null>(null);
  useEffect(() => {
    setIndex(0);
    setOpen(false);
  }, [picture.stepId]);
  useLayoutEffect(() => {
    const narrow = window.matchMedia("(max-width: 1279px)").matches;
    if (!narrow || collapsed) return;
    const title = document.querySelector(".step-title");
    const done = [...document.querySelectorAll("button")].find((button) => button.textContent?.trim() === "Done");
    const nav = document.querySelector("nav");
    const card = document.querySelector(".now-card");
    if (!title || !done || !nav || !card) return;
    const titleBox = title.getBoundingClientRect();
    const doneBox = done.getBoundingClientRect();
    const navBox = nav.getBoundingClientRect();
    const cardBox = card.getBoundingClientRect();
    const overlaps = titleBox.bottom > doneBox.top + 1;
    const doneCut = doneBox.bottom > navBox.top + 1 || doneBox.bottom > cardBox.bottom + 1;
    const titleCut = titleBox.top < cardBox.top - 1 || titleBox.bottom > cardBox.bottom + 1;
    if (overlaps || doneCut || titleCut) setCollapsedId(picture.stepId);
  }, [picture.stepId, collapsed, index]);
  useEffect(() => {
    if (!takeHideFocus) return;
    let cancelled = false;
    const frame = requestAnimationFrame(() => {
      if (cancelled) return;
      const narrow = window.matchMedia("(max-width: 1279px)").matches;
      const card = document.querySelector(".step-pic");
      const cardVisible = !!card && getComputedStyle(card).display !== "none" && !document.querySelector(".step-pic-fallback");
      const title = document.querySelector(".step-title");
      const done = [...document.querySelectorAll("button")].find((button) => button.textContent?.trim() === "Done");
      if (
        cardVisible &&
        narrow &&
        title &&
        done &&
        title.getBoundingClientRect().bottom > done.getBoundingClientRect().top + 1
      ) {
        return;
      }
      const hide = visibleHideButton();
      if (!hide) return;
      hide.focus();
      if (document.activeElement === hide) onHideFocused?.();
    });
    return () => {
      cancelled = true;
      cancelAnimationFrame(frame);
    };
  }, [picture.stepId, collapsed, index, takeHideFocus, onHideFocused]);
  const frame = frames[Math.min(index, frames.length - 1)] ?? frames[0];
  const heading = frameHeading(picture.kind, frame.kind);

  function move(delta: number) {
    setIndex((current) => Math.min(frames.length - 1, Math.max(0, current + delta)));
  }

  const closeLightbox = useCallback(() => setOpen(false), []);
  function openFrom(event: { currentTarget: HTMLElement }) {
    openerRef.current = event.currentTarget;
    setOpen(true);
  }

  if (collapsed) {
    return (
      <>
        <div className="step-pic-fallback">
          <button type="button" className="step-pic-chip" onClick={openFrom}>
            Show picture
          </button>
          {frames.length > 1 ? (
            <span className="inline-flex items-center gap-1">
              <button type="button" className="min-h-11 px-2 text-base text-gold disabled:opacity-40" onClick={() => move(-1)} disabled={index === 0}>
                Previous
              </button>
              <span className="text-base text-gold">{heading}</span>
              <button
                type="button"
                className="min-h-11 px-2 text-base text-gold disabled:opacity-40"
                onClick={() => move(1)}
                disabled={index >= frames.length - 1}
              >
                Next
              </button>
            </span>
          ) : null}
          <a className="step-pic-watch" href={frame.youtube_link} target="_blank" rel="noreferrer">
            {watchFromLabel(frame.youtube_link)}
          </a>
          {onHide ? (
            <button ref={hideRef} type="button" onClick={onHide} className="step-pic-hide min-h-11 px-2 text-base text-gold">
              Hide picture
            </button>
          ) : null}
        </div>
        {open ? (
          <PictureLightbox
            frame={frame}
            heading={heading}
            onClose={closeLightbox}
            onPrev={() => move(-1)}
            onNext={() => move(1)}
            index={index}
            count={frames.length}
            opener={openerRef.current}
          />
        ) : null}
      </>
    );
  }

  return (
    <>
      <div className="step-pic-short">
        <button type="button" className="step-pic-chip" onClick={openFrom}>
          Show picture
        </button>
        {frames.length > 1 ? (
          <span className="inline-flex items-center gap-1">
            <button type="button" className="min-h-11 px-2 text-base text-gold disabled:opacity-40" onClick={() => move(-1)} disabled={index === 0}>
              Previous
            </button>
            <span className="text-base text-gold">{heading}</span>
            <button
              type="button"
              className="min-h-11 px-2 text-base text-gold disabled:opacity-40"
              onClick={() => move(1)}
              disabled={index >= frames.length - 1}
            >
              Next
            </button>
          </span>
        ) : null}
        <a className="step-pic-watch" href={frame.youtube_link} target="_blank" rel="noreferrer">
          {watchFromLabel(frame.youtube_link)}
        </a>
        {onHide ? (
          <button type="button" onClick={onHide} className="step-pic-hide min-h-11 px-2 text-base text-gold">
            Hide picture
          </button>
        ) : null}
      </div>
      <article className={"step-pic rounded-card border border-line bg-surface p-3 " + (compact ? "step-pic-compact" : "")}>
        <div className="flex items-center justify-between gap-3">
          <h3 className="font-display text-lg font-semibold text-gold">{heading}</h3>
          {onHide ? (
            <button ref={hideRef} type="button" onClick={onHide} className="step-pic-hide min-h-11 shrink-0 px-2 text-base text-gold">
              Hide picture
            </button>
          ) : null}
        </div>
        <div
          className="step-pic-body mt-2"
          onPointerDown={(event) => {
            if ((event.target as HTMLElement).closest("a")) return;
            drag.current = { x: event.clientX, y: event.clientY };
          }}
          onPointerUp={(event) => {
            if (!drag.current) return;
            const dx = event.clientX - drag.current.x;
            const dy = event.clientY - drag.current.y;
            drag.current = null;
            if (Math.abs(dx) < 48 || Math.abs(dx) < Math.abs(dy)) return;
            suppressClick.current = true;
            move(dx < 0 ? 1 : -1);
          }}
        >
          <button
            type="button"
            className="step-pic-zoom"
            aria-label={`Enlarge picture: ${heading}`}
            onClick={(event) => {
              if (suppressClick.current) {
                suppressClick.current = false;
                return;
              }
              openFrom(event);
            }}
          >
            <img
              key={frame.image}
              src={frame.image}
              alt=""
              width={1280}
              height={720}
              loading={eager ? "eager" : "lazy"}
              decoding="async"
              fetchPriority={eager ? "high" : "low"}
              className="step-pic-img"
            />
          </button>
          {frame.confidence === "medium" ? (
            <p className="step-pic-note mt-2 text-sm leading-snug text-muted">
              <span
                className="step-pic-badge mr-2 inline-block rounded-full border border-gold px-2 py-0.5 text-xs tracking-wide text-gold uppercase"
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
          <div className="step-pic-nav mt-2 flex items-center justify-between gap-2">
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
          className="step-pic-watch mt-2 inline-flex min-h-11 items-center text-base text-gold underline underline-offset-4"
          href={frame.youtube_link}
          target="_blank"
          rel="noreferrer"
        >
          {watchFromLabel(frame.youtube_link)}
        </a>
      </article>
      {open ? (
        <PictureLightbox
          frame={frame}
          heading={heading}
          onClose={closeLightbox}
          onPrev={() => move(-1)}
          onNext={() => move(1)}
          index={index}
          count={frames.length}
          opener={openerRef.current}
        />
      ) : null}
    </>
  );
}
