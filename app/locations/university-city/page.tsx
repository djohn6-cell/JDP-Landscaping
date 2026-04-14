import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Landscaping Services in University City, Charlotte NC | JDP Landscaping",
  description:
    "JDP Landscaping serves University City and northeast Charlotte with professional mulching, trimming, removal, planting, and yard cleanup services. Locally owned and fully insured. Free quotes — no contracts. Call (704) 989-6027.",
  alternates: { canonical: "/locations/university-city" },
  openGraph: {
    title: "Landscaping Services in University City, Charlotte NC | JDP Landscaping",
    description:
      "Professional landscaping for University City and northeast Charlotte. Mulching, trimming, removal, planting, and cleanups. Free quotes — no contracts.",
    url: "/locations/university-city",
    images: [
      {
        url: "/images/projects/project-2-after.jpg",
        width: 1200,
        height: 630,
        alt: "JDP Landscaping — University City Charlotte, NC landscaping project",
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
    "@type": "Place",
    name: "University City",
    addressLocality: "Charlotte",
    addressRegion: "NC",
    addressCountry: "US",
  },
  description:
    "Professional landscaping services in University City and northeast Charlotte, NC including mulching, trimming, shrub and tree removal, planting, and yard cleanups. Locally owned, fully insured, no contracts.",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Landscaping Services in University City, Charlotte NC",
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
      "Fresh mulch installed neatly around garden beds — protecting plants, holding moisture, and improving curb appeal.",
  },
  {
    name: "Trimming",
    description:
      "Shrub and hedge trimming that keeps your property neat and well-defined through every season.",
  },
  {
    name: "Removal",
    description:
      "Overgrown shrubs, trees, and unwanted growth removed and hauled away cleanly.",
  },
  {
    name: "Planting",
    description:
      "New plants installed in the right locations to thrive in your yard and complement your existing landscape.",
  },
  {
    name: "Yard Cleanup",
    description:
      "Thorough cleanups after storms or between seasons — clearing debris and refreshing your outdoor space.",
  },
];

export default function UniversityCityPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      <section className="relative bg-brand-dark pt-40 pb-20 lg:pt-48 lg:pb-28 overflow-hidden">
        <div
          className="absolute inset-0 bg-[url('/images/newnew.png')] bg-cover bg-center opacity-15"
          aria-hidden="true"
        />
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-brand-green-light font-semibold text-sm tracking-widest uppercase mb-4">
            University City · Charlotte, NC
          </p>
          <h1 className="font-heading font-black text-white text-3xl sm:text-4xl lg:text-5xl leading-tight mb-4">
            Landscaping Services in University City, Charlotte NC
          </h1>
          <p className="text-white/70 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
            Mulching, trimming, removal, planting, and yard cleanups for University
            City and northeast Charlotte. Free quotes, no contracts.
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
              Full-Service Landscaping for University City Properties
            </h2>
            <p className="text-brand-charcoal/70 text-base sm:text-lg">
              Northeast Charlotte is a growing area, and keeping up with your property
              takes consistent, quality work. That&apos;s what we deliver.
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
            Landscaping for University City and Northeast Charlotte
          </h2>
          <div className="space-y-4 text-brand-charcoal/80 text-base leading-relaxed">
            <p>
              University City is a growing part of Charlotte with a mix of established
              neighborhoods and newer housing. JDP Landscaping serves homeowners and
              property managers throughout this area with the same reliable, honest
              approach we bring to every job.
            </p>
            <p>
              Whether your yard needs a one-time mulch refresh, a major cleanup after
              storm damage, or ongoing care through the seasons, we can help. We work
              around your schedule and always leave the property in better shape than
              we found it.
            </p>
            <p>
              JDP Landscaping is locally owned, fully insured, and focused on earning
              your trust through honest work and fair pricing.
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
            Ready for a Free Quote in University City?
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
