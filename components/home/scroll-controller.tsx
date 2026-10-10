"use client";

import { useEffect } from "react";

const DESKTOP_MIN = 820;

export const ScrollController = (): null => {
  useEffect(() => {
    const nav = document.getElementById("nav");
    const hs = document.getElementById("hs");
    const trk = document.getElementById("trk");
    const pg = document.getElementById("pg");
    const stk = document.querySelector<HTMLElement>(".stk");

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 },
    );

    document.querySelectorAll(".rv, .mk").forEach((el) => io.observe(el));

    const heroTimer = window.setTimeout(() => {
      document.querySelectorAll("#hero .mk").forEach((m) => {
        m.classList.add("in");
      });
    }, 150);

    let ticking = false;

    const isDesktop = (): boolean => window.innerWidth > DESKTOP_MIN;

    const syncTrackHeight = (): void => {
      if (!hs || !trk) {
        return;
      }

      if (!isDesktop()) {
        hs.style.height = "auto";
        trk.style.transform = "";
        if (pg) {
          pg.style.width = "0%";
        }
        return;
      }

      // Scroll distance should match horizontal travel so sticky never leaves a black void.
      const maxShift = Math.max(0, trk.scrollWidth - window.innerWidth);
      hs.style.height = `${maxShift + window.innerHeight}px`;
    };

    const stickyIsActive = (): boolean => {
      if (!hs || !stk || !isDesktop()) {
        return true;
      }
      const hsRect = hs.getBoundingClientRect();
      const stkRect = stk.getBoundingClientRect();
      // Only probe while clearly mid-pin — avoid false collapse at release edges.
      const deeplyPinned =
        hsRect.top < -50 && hsRect.bottom > window.innerHeight + 50;
      if (!deeplyPinned) {
        return true;
      }
      return stkRect.top > -2;
    };

    const updateScroll = (): void => {
      ticking = false;
      const y = window.scrollY;
      const w = window.innerWidth;

      nav?.classList.toggle("s", y > 50);

      if (w > DESKTOP_MIN && hs && trk && pg) {
        if (!stickyIsActive()) {
          // Fallback: collapse pin distance so the page doesn't scroll through empty black.
          hs.style.height = "auto";
          trk.style.transform = "";
          pg.style.width = "0%";
          return;
        }

        const rect = hs.getBoundingClientRect();
        const scrollSpan = Math.max(1, hs.offsetHeight - window.innerHeight);
        const progress = Math.min(1, Math.max(0, -rect.top / scrollSpan));
        const maxShift = Math.max(0, trk.scrollWidth - w);
        trk.style.transform = `translate3d(${-progress * maxShift}px, 0, 0)`;
        pg.style.width = `${progress * 100}%`;
      }
    };

    const onScroll = (): void => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(updateScroll);
      }
    };

    const onResize = (): void => {
      syncTrackHeight();
      onScroll();
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    window.addEventListener("load", onResize);

    const resizeObserver =
      typeof ResizeObserver !== "undefined" && trk
        ? new ResizeObserver(() => onResize())
        : null;
    if (trk) {
      resizeObserver?.observe(trk);
    }

    syncTrackHeight();
    updateScroll();

    return () => {
      window.clearTimeout(heroTimer);
      io.disconnect();
      resizeObserver?.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("load", onResize);
    };
  }, []);

  return null;
};
