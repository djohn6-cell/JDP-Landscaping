"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Stat counter: renders the final value (SSR/SEO-safe), then counts up from
 * zero the first time it scrolls into view. Skipped for reduced motion.
 */
export default function CountUp({
  value,
  decimals = 0,
  suffix = "",
  duration = 1.4,
  className = "",
}: {
  value: number;
  decimals?: number;
  suffix?: string;
  duration?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(() => value.toFixed(decimals));

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let raf = 0;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        io.disconnect();
        const t0 = performance.now();
        const tick = (t: number) => {
          const p = Math.min((t - t0) / (duration * 1000), 1);
          const eased = 1 - Math.pow(1 - p, 3);
          setDisplay((value * eased).toFixed(decimals));
          if (p < 1) raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);
      },
      { threshold: 0.6 },
    );
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [value, decimals, duration]);

  return (
    <span ref={ref} className={className}>
      {display}
      {suffix}
    </span>
  );
}
