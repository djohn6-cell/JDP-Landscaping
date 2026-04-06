
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

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60" aria-hidden="true" />

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

        <p className="text-white/80 text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          Honest, high-quality landscaping built to last. Get a free quote with
          no pressure, and call us for anything you need around your property.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="/quote"
            className="bg-brand-green hover:bg-brand-green-mid text-white font-bold text-base px-8 py-4 rounded-full shadow-lg transition-colors w-full sm:w-auto text-center"
          >
            Get a Free Quote
          </a>
          <a
            href="tel:+17049896027"
            className="flex items-center gap-2 text-white border border-white/30 hover:border-white/60 font-semibold text-base px-8 py-4 rounded-full transition-colors w-full sm:w-auto justify-center"
          >
            <PhoneIcon />
            Call (704) 989-6027
          </a>
        </div>
      </div>


    </section>
  );
}

function PhoneIcon() {
  return (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
      />
    </svg>
  );
}
