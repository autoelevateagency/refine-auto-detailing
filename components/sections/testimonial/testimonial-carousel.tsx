"use client";

import { useEffect, useEffectEvent, useRef, useState } from "react";

import type { Dictionary } from "@/data/dictionary";

type TestimonialCarouselProps = {
  dict: Dictionary["testimonial"];
};

const AUTO_MS = 7000;

const QuoteLines = ({ text }: { text: string }): React.ReactNode => {
  const lines = text.split("\n");
  return (
    <>
      {lines.map((line, i) => (
        <span key={`${line}-${i}`}>
          {line}
          {i < lines.length - 1 ? <br /> : null}
        </span>
      ))}
    </>
  );
};

const Chevron = ({ dir }: { dir: "prev" | "next" }): React.ReactNode => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
    {dir === "prev" ? (
      <path
        d="M14.5 6.5L9 12l5.5 5.5"
        stroke="currentColor"
        strokeWidth="1.4"
      />
    ) : (
      <path
        d="M9.5 6.5L15 12l-5.5 5.5"
        stroke="currentColor"
        strokeWidth="1.4"
      />
    )}
  </svg>
);

export const TestimonialCarousel = ({
  dict,
}: TestimonialCarouselProps): React.ReactNode => {
  const items = dict.items;
  const count = items.length;
  const [index, setIndex] = useState(0);
  const [dir, setDir] = useState<1 | -1>(1);
  const [paused, setPaused] = useState(false);
  const [inView, setInView] = useState(true);
  const touchStartX = useRef<number | null>(null);
  const rootRef = useRef<HTMLDivElement>(null);

  const goTo = useEffectEvent((next: number, direction?: 1 | -1): void => {
    if (count === 0) {
      return;
    }
    const normalized = ((next % count) + count) % count;
    if (normalized === index) {
      return;
    }
    setDir(direction ?? (normalized > index ? 1 : -1));
    setIndex(normalized);
  });

  useEffect(() => {
    const root = rootRef.current;
    if (!root) {
      return;
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        setInView(Boolean(entry?.isIntersecting));
      },
      { threshold: 0.35 },
    );
    io.observe(root);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (count <= 1 || paused || !inView) {
      return;
    }
    const id = window.setInterval(() => {
      goTo(index + 1, 1);
    }, AUTO_MS);
    return () => window.clearInterval(id);
  }, [count, paused, inView, index, goTo]);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent): void => {
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        goTo(index - 1, -1);
      }
      if (event.key === "ArrowRight") {
        event.preventDefault();
        goTo(index + 1, 1);
      }
    };

    root.addEventListener("keydown", onKeyDown);
    return () => root.removeEventListener("keydown", onKeyDown);
  }, [goTo, index]);

  const onTouchStart = (event: React.TouchEvent<HTMLDivElement>): void => {
    touchStartX.current = event.changedTouches[0]?.clientX ?? null;
  };

  const onTouchEnd = (event: React.TouchEvent<HTMLDivElement>): void => {
    const start = touchStartX.current;
    const end = event.changedTouches[0]?.clientX;
    touchStartX.current = null;
    if (start === null || end === undefined) {
      return;
    }
    const delta = end - start;
    if (Math.abs(delta) < 48) {
      return;
    }
    if (delta > 0) {
      goTo(index - 1, -1);
    } else {
      goTo(index + 1, 1);
    }
  };

  if (count === 0) {
    return null;
  }

  const current = items[index] ?? items[0];
  const indexLabel = `${String(index + 1).padStart(2, "0")}`;
  const totalLabel = `${String(count).padStart(2, "0")}`;
  const autoActive = !paused && inView && count > 1;

  return (
    <div
      ref={rootRef}
      className="tst-carousel"
      tabIndex={0}
      aria-roledescription="carousel"
      aria-label={dict.eyebrow}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      <div className="tst-head">
        <span className="l cy tst-eyebrow">{dict.eyebrow}</span>
        <span className="l tst-count" aria-hidden="true">
          <b>{indexLabel}</b>
          <i />
          <span>{totalLabel}</span>
        </span>
      </div>

      <div className="tst-track" aria-live="polite" aria-atomic="true">
        {items.map((item, i) => {
          const isOn = i === index;
          return (
            <blockquote
              key={`${item.attribution}-${i}`}
              className={`tst-slide${isOn ? " is-on" : ""}${isOn ? (dir === 1 ? " from-right" : " from-left") : ""}`}
              aria-hidden={!isOn}
            >
              <h3 className="d">
                <QuoteLines text={item.quote} />
                <em>{item.quoteEmphasis}</em>
              </h3>
              <footer className="at l">
                <i aria-hidden="true" />
                <div className="tst-person">
                  <span className="tst-name">{item.attribution}</span>
                  <span className="tst-role">{item.role}</span>
                </div>
                <span className="loc">{item.location}</span>
              </footer>
            </blockquote>
          );
        })}
      </div>

      <div className="tst-controls">
        <div className="tst-nav">
          <button
            type="button"
            className="tst-arrow"
            onClick={() => goTo(index - 1, -1)}
            aria-label={dict.prevAria}
          >
            <Chevron dir="prev" />
            <span className="l">{dict.prevLabel}</span>
          </button>
          <button
            type="button"
            className="tst-arrow"
            onClick={() => goTo(index + 1, 1)}
            aria-label={dict.nextAria}
          >
            <span className="l">{dict.nextLabel}</span>
            <Chevron dir="next" />
          </button>
        </div>

        <div className="tst-auto" aria-hidden="true">
          <i
            key={`${index}-${autoActive ? "run" : "pause"}`}
            className={autoActive ? "is-running" : "is-paused"}
          />
        </div>

        <div className="tst-dots" role="tablist" aria-label={dict.eyebrow}>
          {items.map((item, i) => (
            <button
              key={`dot-${item.attribution}-${i}`}
              type="button"
              role="tab"
              className={`tst-dot${i === index ? " is-on" : ""}`}
              aria-label={`${dict.goToAria} ${i + 1}`}
              aria-selected={i === index}
              onClick={() => goTo(i, i > index ? 1 : -1)}
            />
          ))}
        </div>
      </div>

      <span className="sr-only">
        {current.attribution}: {current.quote.replace(/\n/g, " ")}
        {current.quoteEmphasis}
      </span>
    </div>
  );
};
