"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Hero background plays in two acts:
 *   1. /videos/hero.mp4 — wheelbarrow brand intro dissolving into one pass of
 *      the golden-hour lawn footage. Plays exactly once (no loop attribute).
 *   2. /videos/hero-loop.mp4 — the same footage as a seamless loop, stacked
 *      beneath the intro video. Its first frame matches the intro's last
 *      frame, so the swap on `ended` is invisible.
 * Text choreography starts immediately on load (independent of the video) —
 * JDP slams first, then the tagline, then the supporting content rises in.
 */
export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const introRef = useRef<HTMLVideoElement>(null);
  const loopRef = useRef<HTMLVideoElement>(null);
  const [videoPlaying, setVideoPlaying] = useState(false);
  const [loopActive, setLoopActive] = useState(false);
  const [revealText, setRevealText] = useState(false);

  useEffect(() => {
    const intro = introRef.current;
    const loopVid = loopRef.current;
    if (!intro || !loopVid) return;

    // Text choreography kicks off right away — not gated on the video
    setRevealText(true);

    // Pick the right sources for the device
    const isMobile = window.innerWidth < 640;
    intro.src = isMobile ? "/videos/hero-mobile.mp4" : "/videos/hero.mp4";
    intro.muted = true;
    intro.load();

    let loopLoaded = false;
    const loadLoop = () => {
      if (loopLoaded) return;
      loopLoaded = true;
      loopVid.src = isMobile ? "/videos/hero-mobile-loop.mp4" : "/videos/hero-loop.mp4";
      loopVid.muted = true;
      loopVid.load();
    };

    const onReady = () => {
      // Fade out poster as soon as the intro has data; give the loop file
      // the rest of the intro to buffer.
      setVideoPlaying(true);
      loadLoop();
    };
    intro.addEventListener("canplay", onReady);

    // Hand off to the loop when the intro finishes. If the loop isn't
    // buffered yet, the intro holds its (identical) last frame until it is.
    const startLoop = () => {
      loadLoop();
      const begin = () => {
        loopVid
          .play()
          .then(() => setLoopActive(true))
          .catch(() => setLoopActive(true));
      };
      if (loopVid.readyState >= 3) begin();
      else loopVid.addEventListener("canplaythrough", begin, { once: true });
    };
    intro.addEventListener("ended", startLoop);

    // Try autoplay immediately
    intro.play().catch(() => {});

    // Retry after the video has had time to buffer
    const retry = setTimeout(() => {
      if (!intro.paused || intro.ended) return;
      intro.play().catch(() => {});
    }, 1000);

    // On mobile, some browsers need a user gesture first
    const onInteraction = () => {
      if (!intro.ended && intro.paused) intro.play().catch(() => {});
      else if (intro.ended && loopVid.paused) loopVid.play().catch(() => {});
    };
    document.addEventListener("touchstart", onInteraction, { passive: true });
    document.addEventListener("scroll", onInteraction, { passive: true });
    document.addEventListener("click", onInteraction);

    return () => {
      clearTimeout(retry);
      intro.removeEventListener("canplay", onReady);
      intro.removeEventListener("ended", startLoop);
      document.removeEventListener("touchstart", onInteraction);
      document.removeEventListener("scroll", onInteraction);
      document.removeEventListener("click", onInteraction);
    };
  }, []);

  // Choreography starts at page load: JDP slams in immediately, the tagline
  // follows, and the supporting content rises in a quick stagger.
  const slam = (delay: string) =>
    revealText ? { cls: "hero-slam", style: { animationDelay: delay } } : { cls: "opacity-0", style: undefined };
  const rise = (delay: string) =>
    revealText ? { cls: "hero-rise", style: { animationDelay: delay } } : { cls: "opacity-0", style: undefined };

  const jdp = slam("0.1s");
  const tagline = slam("0.55s");
  const eyebrow = rise("0.9s");
  const integrity = rise("1.05s");
  const paragraph = rise("1.15s");
  const ctas = rise("1.25s");
  const badges = rise("1.4s");

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative flex h-screen min-h-[600px] w-full items-start justify-center overflow-hidden pt-32 sm:items-center sm:pt-0"
    >
      {/* Video background: loop sits beneath the play-once intro */}
      <div className="absolute inset-0" aria-hidden="true">
        <video
          ref={loopRef}
          className="hero-bg absolute inset-0 h-full w-full object-cover pointer-events-none select-none"
          muted
          loop
          playsInline
          controls={false}
          preload="none"
          aria-hidden="true"
          tabIndex={-1}
          disablePictureInPicture
          disableRemotePlayback
        />

        <video
          ref={introRef}
          className={`hero-bg absolute inset-0 h-full w-full object-cover pointer-events-none select-none transition-opacity duration-300 ${loopActive ? "opacity-0" : "opacity-100"}`}
          autoPlay
          muted
          playsInline
          controls={false}
          preload="auto"
          aria-hidden="true"
          tabIndex={-1}
          disablePictureInPicture
          disableRemotePlayback
        />

        {/* Poster fallback — covers native play-button chrome if autoplay is blocked */}
        <div
          className={`absolute inset-0 bg-cover bg-center pointer-events-none transition-opacity duration-300 ${videoPlaying ? "opacity-0" : "opacity-100"}`}
          style={{ backgroundImage: "url('/images/hero-poster.jpg')" }}
        />
      </div>

      {/* Cinematic overlay: vertical gradient for text contrast + soft vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 120% 90% at 50% 42%, transparent 32%, rgba(0,0,0,0.45) 100%), linear-gradient(to bottom, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.52) 35%, rgba(0,0,0,0.55) 62%, rgba(11,12,11,0.97) 100%)",
        }}
        aria-hidden="true"
      />

      {/* Hero content */}
      <div className="relative z-10 mx-auto w-full max-w-4xl px-4 text-center sm:px-6">
        <p
          className={`${eyebrow.cls} mx-auto mb-4 max-w-[19rem] text-[0.64rem] font-bold uppercase leading-tight tracking-[0.18em] text-brand-green-light sm:mb-5 sm:max-w-none sm:text-sm`}
          style={eyebrow.style}
        >
          Waxhaw&nbsp;&bull;&nbsp;Marvin&nbsp;&bull;&nbsp;Weddington&nbsp;&bull;&nbsp;Indian
          Land&nbsp;&bull;&nbsp;Surrounding Areas
        </p>

        {/* Brand lockup: JDP slams first, tagline slams under it */}
        <h1
          className="mx-auto mb-3 text-white sm:mb-4"
          style={{ fontFamily: "var(--font-montserrat), system-ui, sans-serif" }}
        >
          <span
            className={`${jdp.cls} block text-[clamp(4.6rem,24vw,6.5rem)] font-black leading-[0.85] tracking-[-0.04em] sm:text-[clamp(7rem,15vw,10rem)]`}
            style={jdp.style}
          >
            JDP
          </span>
          <span
            className={`${tagline.cls} mt-2 block whitespace-nowrap text-[clamp(0.84rem,4.1vw,1rem)] font-extrabold uppercase tracking-[0.24em] text-white/95 sm:mt-3 sm:text-[clamp(1.15rem,2.4vw,1.7rem)] sm:tracking-[0.3em]`}
            style={tagline.style}
          >
            Landscaping Done Right
          </span>
        </h1>

        {/* Integrity > Profit brand line */}
        <p
          className={`${integrity.cls} mb-4 text-[0.95rem] leading-none font-[family-name:var(--font-dm-sans)] font-bold italic tracking-[0.01em] text-brand-green-light sm:mb-6 sm:text-[1.45rem]`}
          style={integrity.style}
        >
          <span className="inline-grid grid-cols-[auto_1.12em_auto] items-center justify-center gap-x-[0.2em] whitespace-nowrap">
            <span>Integrity</span>
            <span className="inline-flex h-[0.84em] w-[1.12em] items-center justify-center not-italic">
              <svg
                aria-hidden="true"
                viewBox="0 0 20 20"
                className="h-[0.66em] w-[0.86em] overflow-visible"
                fill="none"
              >
                <path
                  d="M4 3.5L13 10L4 16.5"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <span>Profit</span>
          </span>
        </p>

        <p
          className={`${paragraph.cls} mx-auto mb-7 max-w-[19.5rem] text-[0.95rem] leading-relaxed text-white/75 sm:mb-10 sm:max-w-2xl sm:text-lg md:text-xl`}
          style={paragraph.style}
        >
          We maintain an amazing local reputation built on honesty, punctuality, and results that speak for themselves.
        </p>

        {/* CTA cluster: primary focal point */}
        <div className={`${ctas.cls} flex flex-col items-center gap-4 sm:gap-5`} style={ctas.style}>
          <div className="flex w-full flex-col items-stretch justify-center gap-3 sm:w-auto sm:flex-row sm:items-center sm:gap-4">
            {/* Primary CTA */}
            <a
              href="/quote"
              className="inline-flex min-h-14 w-full items-center justify-center gap-2.5 rounded-full bg-brand-green-light px-7 py-4 text-lg font-black text-white transition-all duration-300 hover:bg-brand-green sm:min-h-0 sm:w-auto sm:px-12 sm:py-6 sm:text-2xl"
              style={{
                boxShadow: "0 0 36px rgba(61,143,66,0.32), 0 6px 24px rgba(0,0,0,0.45)",
              }}
            >
              Get a Free Quote
              <ArrowRightIcon />
            </a>

            {/* Phone CTA: prominent secondary */}
            <a
              href="tel:+17049896027"
              className="inline-flex min-h-14 w-full items-center justify-center gap-2.5 rounded-full bg-white/95 px-6 py-4 text-sm font-bold text-brand-dark shadow-xl transition-all duration-300 hover:bg-white hover:shadow-2xl sm:min-h-0 sm:w-auto sm:px-10 sm:py-6 sm:text-xl"
            >
              <PhoneIcon />
              <span>(704) 989-6027</span>
            </a>
          </div>

          {/* Microcopy: removes objection at the moment of decision */}
          <p className="text-xs tracking-wide text-white/50 sm:text-sm">
            Free estimates: no contracts, no pressure.
          </p>
        </div>

        {/* Social proof badges: reinforce the decision, not compete with it */}
        <div
          className={`${badges.cls} mt-8 flex flex-col items-center justify-center gap-3 sm:mt-10 sm:flex-row sm:gap-6`}
          style={badges.style}
        >
          {/* Google badge */}
          <div className="flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-2 backdrop-blur-sm">
            <svg className="h-4 w-4 shrink-0" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                fill="#4285F4"
              />
              <path
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                fill="#34A853"
              />
              <path
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"
                fill="#FBBC05"
              />
              <path
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                fill="#EA4335"
              />
            </svg>
            <div className="flex text-xs text-yellow-400" aria-hidden="true">
              {"★★★★★"}
            </div>
            <span className="text-xs font-semibold text-white">5.0 on Google</span>
          </div>

          {/* Nextdoor badge */}
          <a
            href="https://nextdoor.com/pages/jdp-landscaping-waxhaw-nc/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-2 transition-colors hover:bg-white/20"
          >
            <svg
              className="h-4 w-4 shrink-0 text-[#8DB600]"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z" />
            </svg>
            <span className="text-xs font-semibold text-white">
              90+ Favorites on Nextdoor
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}

function ArrowRightIcon() {
  return (
    <svg
      className="h-5 w-5 shrink-0"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2.5}
        d="M13 7l5 5m0 0l-5 5m5-5H6"
      />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg
      className="h-5 w-5 shrink-0"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
      />
    </svg>
  );
}
