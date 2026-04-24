import Image from "next/image";
import Link from "next/link";

export default function OurWorkCTA() {
  return (
    <section className="bg-white py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Image collage */}
          <div className="grid grid-cols-2 gap-3">
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl shadow-md">
              <Image
                src="/images/projects/home-ourwork-before.png"
                alt="Before mulching project at a Charlotte-area property"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 50vw, 25vw"
              />
              <span className="absolute top-2 left-2 rounded-full bg-brand-dark/70 px-3 py-1 text-xs font-bold uppercase tracking-wide text-white backdrop-blur-sm">
                Before
              </span>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl shadow-md">
              <Image
                src="/images/projects/home-ourwork-after.png"
                alt="After mulching project at a Charlotte-area property"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 50vw, 25vw"
              />
              <span className="absolute top-2 left-2 rounded-full bg-brand-green/90 px-3 py-1 text-xs font-bold uppercase tracking-wide text-white backdrop-blur-sm">
                After
              </span>
            </div>
            <div className="relative col-span-2 aspect-[16/7] overflow-hidden rounded-xl shadow-md">
              <Image
                src="/images/services/planting.jpg"
                alt="Landscaping transformation - JDP Landscaping Charlotte NC"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>

          {/* Text + CTA */}
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-brand-green">
              Our Work
            </p>
            <h2 className="mb-4 font-heading text-3xl font-black leading-tight text-brand-dark sm:text-4xl">
              See What a Real Transformation Looks Like
            </h2>
            <p className="mb-8 text-base leading-relaxed text-brand-charcoal/70">
              Every project is a before and after. Browse real results from
              properties across Charlotte, Marvin, and Waxhaw - then let&apos;s
              talk about yours.
            </p>
            <Link
              href="/our-work"
              className="inline-flex items-center gap-2 rounded-full bg-brand-green px-8 py-4 text-base font-bold text-white shadow-lg transition-colors hover:bg-brand-green-mid"
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
    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M17 8l4 4m0 0l-4 4m4-4H3"
      />
    </svg>
  );
}
