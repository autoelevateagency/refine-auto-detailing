"use client";

import { useEffect } from "react";

export const ScrollController = (): null => {
  useEffect(() => {
    const nav = document.getElementById("nav");
    const car = document.getElementById("car");
    const hs = document.getElementById("hs");
    const trk = document.getElementById("trk");
    const pg = document.getElementById("pg");

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

    const updateScroll = (): void => {
      ticking = false;
      const y = window.scrollY;
      const w = window.innerWidth;

      nav?.classList.toggle("s", y > 50);

      if (car && y < window.innerHeight * 1.2) {
        car.style.transform = `translate3d(${y * -0.06}px, ${y * 0.12}px, 0)`;
      }

      if (w > 820 && hs && trk && pg) {
        const rect = hs.getBoundingClientRect();
        const scrollSpan = hs.offsetHeight - window.innerHeight;
        const progress = Math.min(1, Math.max(0, -rect.top / scrollSpan));
        const maxShift = trk.scrollWidth - w + 40;
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
      if (hs && trk) {
        hs.style.height =
          window.innerWidth > 820
            ? `${trk.scrollWidth + window.innerHeight * 0.6}px`
            : "auto";
      }
      onScroll();
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    window.addEventListener("load", onResize);
    onResize();
    updateScroll();

    return () => {
      window.clearTimeout(heroTimer);
      io.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("load", onResize);
    };
  }, []);

  return null;
};
