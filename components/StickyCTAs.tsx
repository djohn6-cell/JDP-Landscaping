"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function StickyCTAs() {
  const pathname = usePathname();
  const [heroInView, setHeroInView] = useState(true);

  useEffect(() => {
    if (pathname !== "/") {
      return;
    }

    const hero = document.getElementById("hero");
    if (!hero) {
      const fallback = window.setTimeout(() => setHeroInView(false), 0);
      return () => window.clearTimeout(fallback);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setHeroInView(entry.isIntersecting);
      },
      {
        threshold: 0.35,
        rootMargin: "0px 0px -12% 0px",
      }
    );

    observer.observe(hero);

    return () => observer.disconnect();
  }, [pathname]);

  const showHomepageCTAs = pathname !== "/" || !heroInView;

  return (
    <>
      {/* Vertical brand text - right edge */}
      <div
        className={`fixed right-0 bottom-24 z-30 hidden select-none transition-all duration-300 xl:block ${
          showHomepageCTAs
            ? "pointer-events-none translate-x-0 opacity-100"
            : "pointer-events-none translate-x-4 opacity-0"
        }`}
        aria-hidden="true"
      >
        <span className="vertical-brand text-white/10 font-heading font-black text-sm tracking-widest uppercase">
          JDP LANDSCAPING
        </span>
      </div>

      {/* Mobile bottom bar */}
      <div
        className={`fixed bottom-0 left-0 right-0 z-40 flex border-t border-white/10 bg-brand-dark transition-all duration-300 lg:hidden ${
          showHomepageCTAs
            ? "translate-y-0 opacity-100"
            : "pointer-events-none translate-y-full opacity-0"
        }`}
        aria-hidden={!showHomepageCTAs}
      >
        <a
          href="tel:+17049896027"
          className="flex-1 flex items-center justify-center gap-2 bg-brand-dark py-3.5 text-sm font-bold text-white transition-colors hover:bg-white/10"
          tabIndex={showHomepageCTAs ? 0 : -1}
        >
          <PhoneIcon />
          Call Now
        </a>
        <a
          href="/quote"
          className="flex-1 flex items-center justify-center gap-2 bg-brand-green py-3.5 text-sm font-bold text-white transition-colors"
          tabIndex={showHomepageCTAs ? 0 : -1}
        >
          <QuoteIcon />
          Free Quote
        </a>
      </div>
    </>
  );
}

function PhoneIcon() {
  return (
    <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
      />
    </svg>
  );
}

function QuoteIcon() {
  return (
    <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
      />
    </svg>
  );
}
