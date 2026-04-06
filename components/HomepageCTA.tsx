import Link from "next/link";

export default function HomepageCTA() {
  return (
    <section className="relative py-20 lg:py-28 overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-[url('/images/projects/project-2-after.jpg')] bg-cover bg-center"
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-brand-dark/80" aria-hidden="true" />

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <p className="text-brand-green-light font-semibold text-sm tracking-widest uppercase mb-4">
          Get Started
        </p>
        <h2 className="font-heading font-black text-white text-3xl sm:text-4xl lg:text-5xl leading-tight mb-4">
          Ready to Transform Your Yard?
        </h2>
        <p className="text-white/70 text-base sm:text-lg max-w-xl mx-auto leading-relaxed mb-10">
          Get a free, no-obligation quote for your property in Marvin, Waxhaw,
          or the surrounding area. No contracts, no pressure — just honest work.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="/quote"
            className="bg-brand-green hover:bg-brand-green-mid text-white font-bold text-base px-8 py-4 rounded-full shadow-lg transition-colors w-full sm:w-auto text-center"
          >
            Request a Free Quote
          </Link>
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
