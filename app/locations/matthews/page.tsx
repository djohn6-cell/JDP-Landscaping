import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Landscaping Services in Matthews, NC | JDP Landscaping",
  description:
    "JDP Landscaping serves Matthews, NC homeowners with professional mulching, trimming, removal, planting, and yard cleanup services. Locally owned and fully insured. Free quotes — no contracts. Call (704) 989-6027.",
  alternates: { canonical: "/locations/matthews" },
  openGraph: {
    title: "Landscaping Services in Matthews, NC | JDP Landscaping",
    description:
      "Professional landscaping for Matthews homeowners. Mulching, trimming, removal, planting, and cleanups. Free quotes — no contracts.",
    url: "/locations/matthews",
    images: [
      {
        url: "/images/projects/project-2-after.jpg",
        width: 1200,
        height: 630,
        alt: "JDP Landscaping — Matthews, NC landscaping project",
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
    name: "Matthews",
    addressRegion: "NC",
    addressCountry: "US",
  },
  description:
    "Professional landscaping services in Matthews, NC including mulching, trimming, shrub and tree removal, planting, and yard cleanups. Locally owned, fully insured, no contracts.",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Landscaping Services in Matthews, NC",
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
      "Fresh mulch around your beds to protect plants, hold moisture, and give your property a polished, well-kept appearance.",
  },
  {
    name: "Trimming",
    description:
      "Precise shrub and hedge trimming that keeps your yard looking neat through every season.",
  },
  {
    name: "Removal",
    description:
      "Overgrown shrubs, trees, and unwanted growth removed cleanly and hauled off the property.",
  },
  {
    name: "Planting",
    description:
      "Plants selected to thrive in your yard — the right choices for your soil, sunlight, and space.",
  },
  {
    name: "Yard Cleanup",
    description:
      "Seasonal cleanups that clear debris, tidy beds, and get your property looking its best.",
  },
];

export default function MatthewsPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      <section className="relative pt-40 pb-20 lg:pt-48 lg:pb-28 overflow-hidden">
        <div
          className="absolute inset-0 bg-[url('/images/back1.png')] bg-cover bg-[center_60%]"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-brand-dark/85" aria-hidden="true" />
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-brand-green-light font-semibold text-sm tracking-widest uppercase mb-4">
            Matthews, NC
          </p>
          <h1 className="font-heading font-black text-white text-3xl sm:text-4xl lg:text-5xl leading-tight mb-4">
            Landscaping Services in Matthews, NC
          </h1>
          <p className="text-white/70 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
            Mulching, trimming, removal, planting, and yard cleanups for Matthews
            homeowners. Free quotes, no contracts, honest work.
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
              Landscaping Built for Matthews Properties
            </h2>
            <p className="text-brand-charcoal/70 text-base sm:text-lg">
              Whether your Matthews yard needs a seasonal refresh or regular care, we
              show up and do the job right.
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
            Proud to Serve Matthews Homeowners
          </h2>
          <div className="space-y-4 text-brand-charcoal/80 text-base leading-relaxed">
            <p>
              Matthews is a community where homeowners take pride in their properties.
              Neighbors notice — and a well-maintained yard reflects the care you put
              into your home. JDP Landscaping helps Matthews residents keep their
              outdoor spaces in top shape, year-round.
            </p>
            <p>
              We handle everything from routine mulching and trimming to full cleanup
              jobs and new planting. If something is overgrown, out of place, or just
              overdue for attention, we can help.
            </p>
            <p>
              JDP Landscaping is locally owned, fully insured, and built on referrals.
              Our customers in Matthews know that when we quote a job, that&apos;s the
              price — no surprises, no pressure.
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
          className="absolute inset-0 bg-[url('/images/back2.png')] bg-cover bg-center"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-brand-dark/80" aria-hidden="true" />
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-brand-green-light font-semibold text-sm tracking-widest uppercase mb-4">
            Get Started
          </p>
          <h2 className="font-heading font-black text-white text-3xl sm:text-4xl lg:text-5xl leading-tight mb-4">
            Ready for a Free Quote in Matthews?
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
