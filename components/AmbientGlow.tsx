"use client";

import { useEffect, useRef } from "react";

/**
 * Page-wide ambient light: one large, very soft neutral glow that lazily
 * trails the cursor across the whole page (fixed position, blend: screen).
 * Desktop fine-pointer only; hidden for reduced motion and touch devices.
 */
export default function AmbientGlow() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!window.matchMedia("(pointer: fine)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let raf = 0;
    let tx = 0;
    let ty = 0;
    let cx = 0;
    let cy = 0;
    let active = false;

    const loop = () => {
      // Slow lerp: the light drifts toward the cursor and settles late,
      // like a light source being carried, not a cursor decoration.
      cx += (tx - cx) * 0.028;
      cy += (ty - cy) * 0.028;
      el.style.transform = `translate3d(${cx}px, ${cy}px, 0) translate(-50%, -50%)`;
      raf = requestAnimationFrame(loop);
    };

    const onMove = (e: PointerEvent) => {
      tx = e.clientX;
      ty = e.clientY;
      if (!active) {
        active = true;
        cx = tx;
        cy = ty;
        el.style.opacity = "1";
        raf = requestAnimationFrame(loop);
      }
    };

    const onLeave = () => {
      el.style.opacity = "0";
    };
    const onEnter = () => {
      if (active) el.style.opacity = "1";
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    document.documentElement.addEventListener("pointerleave", onLeave);
    document.documentElement.addEventListener("pointerenter", onEnter);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", onMove);
      document.documentElement.removeEventListener("pointerleave", onLeave);
      document.documentElement.removeEventListener("pointerenter", onEnter);
    };
  }, []);

  return <div ref={ref} className="ambient-glow" aria-hidden="true" />;
}
