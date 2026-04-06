
export default function Hero() {
  return (
    <section
      id="hero"
      className="relative w-full h-screen min-h-[600px] flex items-center justify-center overflow-hidden"
    >
      {/* Video background */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/videos/hero.mp4"
        autoPlay
        muted
        loop
        playsInline
        poster="/images/projects/project-2-after.jpg"
        aria-hidden="true"
      />

      {/* Slightly darker overlay for stronger CTA contrast */}
      <div className="absolute inset-0 bg-black/65" aria-hidden="true" />

      {/* Hero content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <p className="text-brand-green-light text-sm sm:text-base font-bold tracking-[0.2em] uppercase mb-4">
          Waxhaw, Marvin and Surrounding Areas
        </p>

        <h1 className="font-heading font-black text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight mb-6">
          Outdoor Spaces Done Right —{" "}
          <span className="text-brand-green-light italic">
            Integrity Over Profit
          </span>
        </h1>

        <p className="text-white/80 text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
          Honest, high-quality landscaping built to last. Get a free quote with
          no pressure, and call us for anything you need around your property.
        </p>

        {/* CTA cluster — primary focal point */}
        <div className="flex flex-col items-center gap-4">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-stretch sm:items-center w-full sm:w-auto">
            {/* Primary CTA */}
            <a
              href="/quote"
              className="inline-flex items-center justify-center gap-2.5 bg-brand-green-light hover:bg-brand-green text-white font-black text-lg sm:text-xl px-10 py-5 rounded-full transition-all duration-300 w-full sm:w-auto"
              style={{ boxShadow: "0 0 40px rgba(61,143,66,0.5), 0 4px 20px rgba(0,0,0,0.4)" }}
            >
              Get a Free Quote
              <ArrowRightIcon />
            </a>

            {/* Phone CTA — solid white, visually equal weight to primary */}
            <a
              href="tel:+17049896027"
              className="inline-flex items-center justify-center gap-3 bg-white/95 hover:bg-white text-brand-dark font-bold text-base sm:text-lg px-8 py-5 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-auto"
            >
              <PhoneIcon />
              <span>(704) 989-6027</span>
            </a>
          </div>

          {/* Microcopy — removes objection at the moment of decision */}
          <p className="text-white/50 text-sm tracking-wide">
            Free estimates — no contracts, no pressure.
          </p>
        </div>

        {/* Social proof badges — reinforce the decision, not compete with it */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
          {/* Google badge */}
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2">
            <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            <div className="flex text-yellow-400 text-xs">★★★★★</div>
            <span className="text-white text-xs font-semibold">5.0 on Google</span>
          </div>

          {/* Nextdoor badge */}
          <a
            href="https://nextdoor.com/pages/jdp-landscaping-waxhaw-nc/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-colors rounded-full px-4 py-2"
          >
            <svg className="w-4 h-4 text-[#8DB600] shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z"/>
            </svg>
            <span className="text-white text-xs font-semibold">74 Recommendations on Nextdoor</span>
          </a>
        </div>
      </div>
    </section>
  );
}

function ArrowRightIcon() {
  return (
    <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
      />
    </svg>
  );
}
