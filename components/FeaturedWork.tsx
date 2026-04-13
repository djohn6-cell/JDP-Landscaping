import Image from "next/image";
import Link from "next/link";

const pairs = [
  {
    before: "/images/projects/ba1-before.jpg",
    after: "/images/projects/ba1-after.jpg",
    label: "Mulch Bed Refresh",
    location: "Charlotte, NC",
  },
  {
    before: "/images/projects/ba2-before.jpg",
    after: "/images/projects/ba2-after.jpg",
    label: "Front Entry Mulching",
    location: "Waxhaw, NC",
  },
  {
    before: "/images/projects/ba3-before.jpg",
    after: "/images/projects/ba3-after.jpg",
    label: "Shrub & Tree Removal",
    location: "Charlotte, NC",
  },
];

export default function FeaturedWork() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-brand-green font-semibold text-sm tracking-widest uppercase mb-4">
            Real Results
          </p>
          <h2 className="font-heading font-black text-brand-dark text-3xl sm:text-4xl lg:text-5xl leading-tight mb-4">
            See the Difference
          </h2>
          <p className="text-brand-charcoal/70 text-base sm:text-lg">
            Every job is a transformation. Here&apos;s what that looks like.
          </p>
        </div>

        {/* 3 before/after pairs */}
        <div className="flex flex-col gap-8">
          {pairs.map((pair) => (
            <div
              key={pair.label}
              className="rounded-2xl overflow-hidden bg-white border border-black/[0.06] shadow-[0_4px_20px_rgba(0,0,0,0.07)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.11)] transition-shadow duration-300"
            >
              <div className="grid grid-cols-1 md:grid-cols-2">
                {/* Before */}
                <div className="relative md:border-r md:border-black/[0.06]">
                  <div className="aspect-[3/2] relative">
                    <Image
                      src={pair.before}
                      alt={`Before — ${pair.label}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" aria-hidden="true" />
                  </div>
                  <span className="absolute top-3 left-3 bg-white/95 text-brand-dark text-xs font-black px-3.5 py-1.5 rounded-full uppercase tracking-wider shadow-sm">
                    Before
                  </span>
                </div>
                {/* After */}
                <div className="relative border-t border-black/[0.06] md:border-t-0">
                  <div className="aspect-[3/2] relative">
                    <Image
                      src={pair.after}
                      alt={`After — ${pair.label}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" aria-hidden="true" />
                  </div>
                  <span className="absolute top-3 left-3 bg-brand-green text-white text-xs font-black px-3.5 py-1.5 rounded-full uppercase tracking-wider shadow-sm">
                    After
                  </span>
                </div>
              </div>
              <div className="px-6 py-4 flex items-center justify-between bg-white border-t border-black/[0.05]">
                <div>
                  <p className="font-heading font-bold text-brand-dark text-sm leading-snug">
                    {pair.label}
                  </p>
                  <p className="text-brand-charcoal/40 text-xs mt-0.5">{pair.location}</p>
                </div>
                <div className="w-8 h-8 rounded-full bg-brand-green/10 flex items-center justify-center flex-shrink-0" aria-hidden="true">
                  <svg className="w-3.5 h-3.5 text-brand-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/our-work"
            className="inline-flex items-center gap-2 bg-brand-green hover:bg-brand-green-mid text-white font-bold text-base px-8 py-4 rounded-full shadow-lg transition-colors"
          >
            View All Projects
            <ArrowIcon />
          </Link>
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
