import Image from "next/image";
import Link from "next/link";

export default function OurWorkCTA() {
  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Image collage */}
          <div className="grid grid-cols-2 gap-3">
            <div className="aspect-[4/3] relative rounded-xl overflow-hidden shadow-md">
              <Image
                src="/images/projects/ba1-before.jpg"
                alt="Before landscaping — JDP Landscaping Charlotte NC"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 50vw, 25vw"
              />
              <span className="absolute top-2 left-2 bg-brand-dark/70 backdrop-blur-sm text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                Before
              </span>
            </div>
            <div className="aspect-[4/3] relative rounded-xl overflow-hidden shadow-md">
              <Image
                src="/images/projects/ba1-after.jpg"
                alt="After landscaping — JDP Landscaping Charlotte NC"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 50vw, 25vw"
              />
              <span className="absolute top-2 left-2 bg-brand-green/90 backdrop-blur-sm text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                After
              </span>
            </div>
            <div className="col-span-2 aspect-[16/7] relative rounded-xl overflow-hidden shadow-md">
              <Image
                src="/images/services/planting.jpg"
                alt="Landscaping transformation — JDP Landscaping Charlotte NC"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>

          {/* Text + CTA */}
          <div>
            <p className="text-brand-green font-semibold text-sm tracking-widest uppercase mb-4">
              Our Work
            </p>
            <h2 className="font-heading font-black text-brand-dark text-3xl sm:text-4xl leading-tight mb-4">
              See What a Real Transformation Looks Like
            </h2>
            <p className="text-brand-charcoal/70 text-base leading-relaxed mb-8">
              Every project is a before and after. Browse real results from
              properties across Charlotte, Marvin, and Waxhaw — then let&apos;s
              talk about yours.
            </p>
            <Link
              href="/our-work"
              className="inline-flex items-center gap-2 bg-brand-green hover:bg-brand-green-mid text-white font-bold text-base px-8 py-4 rounded-full shadow-lg transition-colors"
            >
              View Our Projects
              <ArrowIcon />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function ArrowIcon() {
  return (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
    </svg>
  );
}
