import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Services from "@/components/Services";

export const metadata: Metadata = {
  title: "Landscaping Projects & Services in Charlotte NC | JDP Landscaping",
  description:
    "See our landscaping services and real project results in Charlotte, Marvin, Waxhaw, and surrounding areas. Trimming, mulching, planting, removal, and more. Free quotes — call (704) 989-6027.",
  alternates: { canonical: "/our-work" },
  openGraph: {
    title: "Landscaping Projects & Services in Charlotte NC | JDP Landscaping",
    description:
      "Real landscaping results from real Charlotte properties. See what we do and how we do it.",
    url: "/our-work",
    images: [
      {
        url: "/images/projects/project-2-after.jpg",
        width: 1200,
        height: 630,
        alt: "JDP Landscaping project transformation — Charlotte, NC",
      },
    ],
  },
};

const pairs = [
  {
    before: "/images/projects/property-transform-before.png",
    after: "/images/projects/property-transform-after.png",
    label: "Property Transformation",
  },
  {
    before: "/images/projects/IMG_4413.jpg",
    after: "/images/projects/IMG_4410.jpg",
    label: "Landscaping & Cleanup",
  },
];

const singles = [
  { src: "/images/projects/our-work-shrub-trimming.png", label: "Shrub trimming and shaping" },
  { src: "/images/projects/our-work-driveway-crew.png", label: "Mulch bed installation and edging" },
  { src: "/images/projects/project-5.jpg", label: "Mulch island and landscape bed" },
  { src: "/images/projects/project-7.jpg", label: "Bulk mulch delivery and spreading" },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "JDP Landscaping Services",
  itemListElement: [
    { "@type": "Service", position: 1, serviceType: "Lawn Trimming", provider: { "@type": "LocalBusiness", name: "JDP Landscaping" }, areaServed: ["Charlotte, NC", "Marvin, NC", "Waxhaw, NC"] },
    { "@type": "Service", position: 2, serviceType: "Landscaping Mulching", provider: { "@type": "LocalBusiness", name: "JDP Landscaping" }, areaServed: ["Charlotte, NC", "Marvin, NC", "Waxhaw, NC"] },
    { "@type": "Service", position: 3, serviceType: "Tree and Shrub Removal", provider: { "@type": "LocalBusiness", name: "JDP Landscaping" }, areaServed: ["Charlotte, NC", "Marvin, NC", "Waxhaw, NC"] },
    { "@type": "Service", position: 4, serviceType: "Garden Planting", provider: { "@type": "LocalBusiness", name: "JDP Landscaping" }, areaServed: ["Charlotte, NC", "Marvin, NC", "Waxhaw, NC"] },
    { "@type": "Service", position: 5, serviceType: "Yard Cleanup", provider: { "@type": "LocalBusiness", name: "JDP Landscaping" }, areaServed: ["Charlotte, NC", "Marvin, NC", "Waxhaw, NC"] },
  ],
};

export default function OurWorkPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      {/* Page Hero */}
      <section className="relative pt-40 pb-20 lg:pt-48 lg:pb-28 overflow-hidden">
        <div
          className="absolute inset-0 bg-[url('/images/top.png')] bg-cover bg-center"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-brand-dark/85" aria-hidden="true" />
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-brand-green-light font-semibold text-sm tracking-widest uppercase mb-4">
            Our Work
          </p>
          <h1 className="font-heading font-black text-white text-3xl sm:text-4xl lg:text-5xl leading-tight mb-4">
            Landscaping Services in Charlotte, NC
          </h1>
          <p className="text-white/70 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
            From trimming and mulching to full property transformations —
            serving Charlotte, Marvin, Waxhaw, and surrounding areas.
          </p>
        </div>
      </section>

      {/* Services (reused component) */}
      <Services />

      {/* Before & After Gallery */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Section header */}
          <div className="text-center max-w-2xl mx-auto mb-5">
            <p className="text-brand-green font-semibold text-sm tracking-widest uppercase mb-3">
              Real Results
            </p>
            <h2 className="font-heading font-black text-brand-dark text-3xl sm:text-4xl lg:text-5xl leading-tight mb-4">
              See the Difference
            </h2>
            <p className="text-brand-charcoal/70 text-base sm:text-lg leading-relaxed">
              Real transformations from real properties across Charlotte,
              Ballantyne, Matthews, and surrounding communities.
            </p>
          </div>

          {/* Trust micro-bar */}
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 mb-14 text-sm text-brand-charcoal/50">
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-green inline-block" aria-hidden="true" />
              Charlotte · Ballantyne · Matthews · Waxhaw
            </span>
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-green inline-block" aria-hidden="true" />
              Free Estimates — No Contracts
            </span>
          </div>

          {/* Before/After pairs */}
          <div className="space-y-8 mb-14">
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
                        alt={`${pair.label} before — JDP Landscaping Charlotte NC`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
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
                        alt={`${pair.label} after — JDP Landscaping Charlotte NC`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" aria-hidden="true" />
                    </div>
                    <span className="absolute top-3 left-3 bg-brand-green text-white text-xs font-black px-3.5 py-1.5 rounded-full uppercase tracking-wider shadow-sm">
                      After
                    </span>
                  </div>
                </div>
                {/* Card footer */}
                <div className="px-6 py-4 flex items-center justify-between bg-white border-t border-black/[0.05]">
                  <div>
                    <p className="font-heading font-bold text-brand-dark text-sm leading-snug">
                      {pair.label}
                    </p>
                    <p className="text-brand-charcoal/40 text-xs mt-0.5">Charlotte, NC</p>
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

          {/* Project photo grid */}
          <div>
            <p className="text-brand-charcoal/40 text-xs uppercase tracking-widest mb-5 text-center">
              More Projects
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
              {singles.map((photo) => (
                <div
                  key={photo.src}
                  className="group relative aspect-[4/3] rounded-xl overflow-hidden bg-brand-cream shadow-sm"
                >
                  <Image
                    src={photo.src}
                    alt={`${photo.label} — JDP Landscaping Charlotte NC`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 50vw, 25vw"
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-brand-dark/65 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    aria-hidden="true"
                  />
                  <p className="absolute bottom-0 inset-x-0 px-3 py-2.5 text-white text-xs font-semibold leading-snug translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    {photo.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Showcase Video */}
      <section className="py-14 lg:py-20 bg-brand-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-brand-charcoal/70 text-xs uppercase tracking-widest mb-2">
              Watch Our Work
            </p>
            <h2 className="font-heading font-black text-brand-dark text-3xl sm:text-4xl">
              Quality You Can See in Motion
            </h2>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-xl aspect-9/16 w-full max-w-sm mx-auto">
            <video
              src="/videos/showcase.mp4"
              controls
              preload="none"
              className="w-full h-full object-cover"
              aria-label="JDP Landscaping project showcase — Charlotte NC"
            />
          </div>
        </div>
      </section>

      {/* Page CTA */}
      <section className="relative py-20 lg:py-28 overflow-hidden">
        <div
          className="absolute inset-0 bg-[url('/images/top2.png')] bg-cover bg-center"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-brand-dark/80" aria-hidden="true" />
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-brand-green-light font-semibold text-sm tracking-widest uppercase mb-4">
            Get Started
          </p>
          <h2 className="font-heading font-black text-white text-3xl sm:text-4xl lg:text-5xl leading-tight mb-4">
            Like What You See?
          </h2>
          <p className="text-white/70 text-base sm:text-lg max-w-xl mx-auto leading-relaxed mb-10">
            Get a free quote for your property. No contracts, no pressure — just
            honest work.
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
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              Call (704) 989-6027
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
