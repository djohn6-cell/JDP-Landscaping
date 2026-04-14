import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Landscaping Services in Huntersville, NC | JDP Landscaping",
  description:
    "JDP Landscaping serves Huntersville, NC with professional mulching, trimming, removal, planting, and yard cleanup services. Locally owned and fully insured. Free quotes — no contracts. Call (704) 989-6027.",
  alternates: { canonical: "/locations/huntersville" },
  openGraph: {
    title: "Landscaping Services in Huntersville, NC | JDP Landscaping",
    description:
      "Professional landscaping for Huntersville homeowners. Mulching, trimming, removal, planting, and cleanups. Free quotes — no contracts.",
    url: "/locations/huntersville",
    images: [
      {
        url: "/images/projects/project-2-after.jpg",
        width: 1200,
        height: 630,
        alt: "JDP Landscaping — Huntersville, NC landscaping project",
      },
    ],
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Landscaping",
  provider: {
    "@type": "LocalBusiness",
    name: "JDP Landscaping",
    telephone: "+17049896027",
    url: "https://jdplandscaping.com",
  },
  areaServed: {
    "@type": "City",
    name: "Huntersville",
    addressRegion: "NC",
    addressCountry: "US",
  },
  description:
    "Professional landscaping services in Huntersville, NC including mulching, trimming, shrub and tree removal, planting, and yard cleanups. Locally owned, fully insured, no contracts.",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Landscaping Services in Huntersville, NC",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Mulching" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Lawn Trimming" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Shrub and Tree Removal" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Planting" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Yard Cleanup" } },
    ],
  },
};

const services = [
  {
    name: "Mulching",
    description:
      "Professional mulch installation for garden beds — protecting plant roots, suppressing weeds, and giving your property a clean finished look.",
  },
  {
    name: "Trimming",
    description:
      "Hedge and shrub trimming that keeps growth controlled and your property looking sharp all season long.",
  },
  {
    name: "Removal",
    description:
      "Trees, shrubs, stumps, and overgrowth cleared and hauled off — leaving your yard clean and open.",
  },
  {
    name: "Planting",
    description:
      "New plantings selected and installed to complement your property and thrive in the Huntersville climate.",
  },
  {
    name: "Yard Cleanup",
    description:
      "Seasonal and storm-related cleanups that remove debris and get your outdoor space back in order.",
  },
];

export default function HuntersvillePage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      <section className="relative pt-40 pb-20 lg:pt-48 lg:pb-28 overflow-hidden">
        <div
          className="absolute inset-0 bg-[url('/images/top.png')] bg-cover bg-center"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-brand-dark/85" aria-hidden="true" />
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-brand-green-light font-semibold text-sm tracking-widest uppercase mb-4">
            Huntersville, NC
          </p>
          <h1 className="font-heading font-black text-white text-3xl sm:text-4xl lg:text-5xl leading-tight mb-4">
            Landscaping Services in Huntersville, NC
          </h1>
          <p className="text-white/70 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
            Mulching, trimming, removal, planting, and yard cleanups for Huntersville
            homeowners. Free quotes, no contracts.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/quote"
              className="bg-brand-green hover:bg-brand-green-mid text-white font-bold px-8 py-4 rounded-full transition-colors text-center"
            >
              Get a Free Quote
            </Link>
            <a
              href="tel:+17049896027"
              className="text-white border border-white/30 hover:border-white/60 font-semibold px-8 py-4 rounded-full transition-colors text-center"
            >
              Call (704) 989-6027
            </a>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-brand-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-brand-green font-semibold text-sm tracking-widest uppercase mb-4">
              What We Do
            </p>
            <h2 className="font-heading font-black text-brand-dark text-3xl sm:text-4xl leading-tight mb-4">
              Quality Landscaping for Huntersville Properties
            </h2>
            <p className="text-brand-charcoal/70 text-base sm:text-lg">
              From new installs to seasonal maintenance — we take care of your outdoor
              space so you don&apos;t have to.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <div
                key={service.name}
                className="bg-white rounded-2xl p-6 shadow-sm border border-black/5"
              >
                <h3 className="font-heading font-bold text-brand-dark text-lg mb-2">
                  {service.name}
                </h3>
                <p className="text-brand-charcoal/70 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-heading font-black text-brand-dark text-2xl sm:text-3xl leading-tight mb-6">
            Serving Huntersville with the Same Care We Bring to Every Job
          </h2>
          <div className="space-y-4 text-brand-charcoal/80 text-base leading-relaxed">
            <p>
              Huntersville has grown quickly — and with growth comes plenty of
              properties that need reliable, quality landscaping. Whether your home is
              part of an established neighborhood or a newer development, JDP
              Landscaping brings the same care and attention to every job.
            </p>
            <p>
              We work with homeowners who want a dependable crew they can count on
              season after season. No high-pressure sales. No contracts. Just show up,
              do the work, and leave the property looking better than we found it.
            </p>
            <p>
              JDP Landscaping is fully insured and locally owned. If you&apos;re in
              Huntersville or the surrounding area, reach out for a free estimate.
            </p>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/our-work"
              className="text-brand-green border border-brand-green hover:bg-brand-cream font-semibold text-sm px-6 py-3 rounded-full transition-colors"
            >
              See Our Work
            </Link>
            <Link
              href="/faq"
              className="text-brand-charcoal/70 hover:text-brand-dark font-semibold text-sm px-6 py-3 rounded-full border border-black/15 hover:border-black/30 transition-colors"
            >
              Common Questions
            </Link>
            <Link
              href="/locations"
              className="text-brand-charcoal/70 hover:text-brand-dark font-semibold text-sm px-6 py-3 rounded-full border border-black/15 hover:border-black/30 transition-colors"
            >
              All Service Areas
            </Link>
          </div>
        </div>
      </section>

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
            Ready for a Free Quote in Huntersville?
          </h2>
          <p className="text-white/70 text-base sm:text-lg max-w-xl mx-auto leading-relaxed mb-10">
            Free estimates, no contracts, no pressure. Just reach out.
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
              className="flex items-center justify-center gap-2 text-white border border-white/30 hover:border-white/60 font-semibold text-base px-8 py-4 rounded-full transition-colors w-full sm:w-auto"
            >
              Call (704) 989-6027
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
