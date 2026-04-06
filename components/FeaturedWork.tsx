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
        <div className="flex flex-col gap-6">
          {pairs.map((pair) => (
            <div
              key={pair.label}
              className="rounded-2xl overflow-hidden border border-black/5 shadow-sm bg-brand-cream"
            >
              <div className="grid grid-cols-2">
                {/* Before */}
                <div className="relative">
                  <div className="aspect-4/3 relative">
                    <Image
                      src={pair.before}
                      alt={`Before — ${pair.label}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 50vw, 33vw"
                    />
                  </div>
                  <span className="absolute top-2 left-2 bg-brand-dark/70 backdrop-blur-sm text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                    Before
                  </span>
                </div>
                {/* After */}
                <div className="relative">
                  <div className="aspect-4/3 relative">
                    <Image
                      src={pair.after}
                      alt={`After — ${pair.label}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 50vw, 33vw"
                    />
                  </div>
                  <span className="absolute top-2 left-2 bg-brand-green/90 backdrop-blur-sm text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                    After
                  </span>
                </div>
              </div>
              <div className="px-5 py-3 flex items-center justify-between">
                <p className="font-heading font-bold text-brand-dark text-sm">
                  {pair.label}
                </p>
                <p className="text-brand-charcoal/50 text-xs">{pair.location}</p>
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
