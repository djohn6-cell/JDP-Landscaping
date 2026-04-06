import Image from "next/image";

export default function AboutPreview() {
  return (
    <section id="about" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Owner photo */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/owner.jpeg"
                alt="JDP Landscaping owner — Charlotte, NC"
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            {/* Accent block */}
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-brand-green rounded-2xl -z-10" aria-hidden="true" />
          </div>

          {/* Text */}
          <div>
            <p className="text-brand-green font-semibold text-sm tracking-widest uppercase mb-4">
              Serving Charlotte, Marvin &amp; Surrounding Areas
            </p>
            <h2 className="font-heading font-black text-brand-dark text-3xl sm:text-4xl lg:text-5xl leading-tight mb-6">
              A Landscaping Company Built on Doing Right by You
            </h2>
            <div className="space-y-4 text-brand-charcoal/80 text-base sm:text-lg leading-relaxed">
              <p>
                JDP Landscaping was built on referrals — and that&apos;s not an
                accident. When we do good work and treat people honestly, they
                tell their neighbors. That&apos;s how we grow, and it keeps us
                accountable to every yard we touch.
              </p>
              <p>
                Whether you know exactly what you need or just want someone to
                come take a look, we&apos;re easy to reach and happy to help.
                No overselling. No pressure. Just honest work at a fair price.
              </p>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a
                href="tel:+17049896027"
                className="flex items-center gap-2 bg-brand-green hover:bg-brand-green-mid text-white font-bold px-6 py-3.5 rounded-full transition-colors w-fit"
              >
                <PhoneIcon />
                Call (704) 989-6027
              </a>
              <a
                href="/quote"
                className="flex items-center gap-2 text-brand-green border border-brand-green hover:bg-brand-cream font-semibold px-6 py-3.5 rounded-full transition-colors w-fit"
              >
                Request a Free Quote
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function PhoneIcon() {
  return (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
  );
}
