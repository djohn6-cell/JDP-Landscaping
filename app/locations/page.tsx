import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Landscaping Service Areas | JDP Landscaping | Charlotte NC Area",
  description:
    "JDP Landscaping serves Charlotte, Matthews, Huntersville, Concord, University City, Marvin, Waxhaw, and surrounding areas in the greater Charlotte, NC region. Free quotes — no contracts.",
  alternates: { canonical: "/locations" },
  openGraph: {
    title: "Landscaping Service Areas | JDP Landscaping",
    description:
      "Serving the greater Charlotte, NC area with professional landscaping — mulching, trimming, removal, planting, and cleanups.",
    url: "/locations",
    images: [
      {
        url: "/images/projects/project-2-after.jpg",
        width: 1200,
        height: 630,
        alt: "JDP Landscaping — Charlotte area landscaping project",
      },
    ],
  },
};

const locations = [
  {
    name: "Charlotte",
    href: "/locations/charlotte",
    description:
      "Serving homeowners and property managers across Charlotte, including Ballantyne and Pineville.",
  },
  {
    name: "Matthews",
    href: "/locations/matthews",
    description:
      "Quality landscaping for Matthews homeowners — mulching, trimming, cleanups, and more.",
  },
  {
    name: "Huntersville",
    href: "/locations/huntersville",
    description:
      "Full-service landscaping for Huntersville properties in northern Mecklenburg County.",
  },
  {
    name: "Concord",
    href: "/locations/concord",
    description:
      "Professional landscaping services for Concord and Cabarrus County residents.",
  },
  {
    name: "University City",
    href: "/locations/university-city",
    description:
      "Landscaping services for University City and northeast Charlotte neighborhoods.",
  },
];

export default function LocationsPage() {
  return (
    <main>
      <section className="relative pt-40 pb-20 lg:pt-48 lg:pb-28 overflow-hidden">
        <div
          className="absolute inset-0 bg-[url('/images/top2.png')] bg-cover bg-center"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-brand-dark/85" aria-hidden="true" />
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-brand-green-light font-semibold text-sm tracking-widest uppercase mb-4">
            Service Areas
          </p>
          <h1 className="font-heading font-black text-white text-3xl sm:text-4xl lg:text-5xl leading-tight mb-4">
            Landscaping Services Across the Charlotte, NC Area
          </h1>
          <p className="text-white/70 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
            JDP Landscaping serves homeowners and property managers throughout the
            greater Charlotte region. Find your area below.
          </p>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {locations.map((loc) => (
              <Link
                key={loc.href}
                href={loc.href}
                className="group bg-brand-cream hover:bg-white rounded-2xl p-7 border border-black/[0.06] shadow-sm hover:shadow-md transition-all"
              >
                <div className="flex items-start justify-between mb-3">
                  <h2 className="font-heading font-bold text-brand-dark text-xl group-hover:text-brand-green transition-colors">
                    {loc.name}
                  </h2>
                  <svg
                    className="w-5 h-5 text-brand-green opacity-0 group-hover:opacity-100 transition-opacity shrink-0 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </div>
                <p className="text-brand-charcoal/70 text-sm leading-relaxed">
                  {loc.description}
                </p>
              </Link>
            ))}
          </div>

          <div className="max-w-2xl">
            <h2 className="font-heading font-bold text-brand-dark text-2xl sm:text-3xl mb-4">
              Also Serving Marvin, Waxhaw, Indian Trail, Stallings, Mint Hill &amp; More
            </h2>
            <p className="text-brand-charcoal/75 text-base leading-relaxed mb-6">
              Our service area extends throughout Mecklenburg, Union, and Cabarrus
              Counties. If you&apos;re not sure whether we cover your area, give us a call
              at{" "}
              <a href="tel:+17049896027" className="text-brand-green font-semibold hover:underline">
                (704) 989-6027
              </a>{" "}
              or request a free quote and include your address.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/quote"
                className="bg-brand-green hover:bg-brand-green-mid text-white font-bold text-sm px-6 py-3 rounded-full transition-colors"
              >
                Request a Free Quote
              </Link>
              <Link
                href="/our-work"
                className="text-brand-green border border-brand-green hover:bg-brand-cream font-semibold text-sm px-6 py-3 rounded-full transition-colors"
              >
                See Our Work
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
