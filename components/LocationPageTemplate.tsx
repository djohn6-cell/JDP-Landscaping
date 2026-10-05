import Link from "next/link";
import type { Location } from "@/lib/locations";
import { PHONE_DISPLAY, PHONE_E164, SERVICES } from "@/lib/services";
import { BUSINESS_ID, SITE_URL } from "@/lib/site";

/**
 * Shared layout for every /locations/<slug> page.
 *
 * All seven location pages are near-identical by design — only the town copy in
 * `lib/locations.ts` differs. Keeping the markup in one place means a change to
 * the CTA, schema, or service list happens once instead of seven times.
 */
export default function LocationPageTemplate({ location }: { location: Location }) {
  const { name, county, heroSub, intro, drainageNote } = location;

  return (
    <main>
      <section className="relative overflow-hidden pt-40 pb-20 lg:pt-48 lg:pb-28">
        <div
          className="absolute inset-0 bg-[url('/images/back1.png')] bg-cover bg-[center_60%]"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-brand-dark/85" aria-hidden="true" />
        <div className="relative z-10 mx-auto max-w-3xl px-4 text-center sm:px-6">
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-brand-green-light">
            {name}, NC
          </p>
          <h1 className="mb-4 font-heading text-3xl font-black leading-tight text-white sm:text-4xl lg:text-5xl">
            Landscaping &amp; Drainage in {name}, NC
          </h1>
          <p className="mx-auto max-w-xl text-base leading-relaxed text-white/75 sm:text-lg">
            {heroSub}
          </p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/quote"
              className="rounded-full bg-brand-green px-8 py-4 text-center font-bold text-white transition-colors hover:bg-brand-green-mid"
            >
              Get a Free Quote
            </Link>
            <a
              href={`tel:${PHONE_E164}`}
              className="rounded-full border border-white/30 px-8 py-4 text-center font-semibold text-white transition-colors hover:border-white/60"
            >
              Call {PHONE_DISPLAY}
            </a>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-brand-cream py-20 lg:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-brand-green">
              What We Do
            </p>
            <h2 className="mb-4 font-heading text-3xl font-black leading-tight text-brand-dark sm:text-4xl">
              Full-Property Care for {name} Homes
            </h2>
            <p className="text-base text-brand-charcoal/70 sm:text-lg">
              Whether your {name} yard needs a seasonal refresh, regular care, or a real fix, we
              show up and do the job right.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((service) => {
              const inner = (
                <>
                  <h3 className="mb-2 font-heading text-lg font-bold text-brand-dark transition-colors group-hover:text-brand-green">
                    {service.name}
                  </h3>
                  <p className="text-sm leading-relaxed text-brand-charcoal/70">{service.short}</p>
                </>
              );
              return service.slug ? (
                <Link
                  key={service.name}
                  href={`/services/${service.slug}`}
                  className="group rounded-2xl border border-black/5 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
                >
                  {inner}
                </Link>
              ) : (
                <div
                  key={service.name}
                  className="group rounded-2xl border border-black/5 bg-white p-6 shadow-sm"
                >
                  {inner}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Local drainage angle */}
      <section className="bg-white pt-20 pb-10 lg:pt-28 lg:pb-14">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <div className="rounded-2xl border border-brand-green/20 bg-brand-cream p-7 sm:p-9">
            <p className="mb-3 font-accent text-xs font-bold uppercase tracking-[0.14em] text-brand-green">
              Water Problems in {name}
            </p>
            <h2 className="mb-4 font-heading text-2xl font-black leading-tight text-brand-dark sm:text-3xl">
              Why So Many {name} Yards Hold Water
            </h2>
            <p className="mb-6 text-base leading-relaxed text-brand-charcoal/80">{drainageNote}</p>
            <Link
              href="/services/drainage"
              className="inline-block rounded-full bg-brand-green px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-brand-green-mid"
            >
              See How We Fix Drainage
            </Link>
          </div>
        </div>
      </section>

      {/* Local copy */}
      <section className="bg-white pb-20 lg:pb-28">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <h2 className="mb-6 font-heading text-2xl font-black leading-tight text-brand-dark sm:text-3xl">
            Proud to Serve {name} Homeowners
          </h2>
          <div className="space-y-4 text-base leading-relaxed text-brand-charcoal/80">
            {intro.map((paragraph) => (
              <p key={paragraph.slice(0, 40)}>{paragraph}</p>
            ))}
          </div>
          <p className="mt-6 text-sm text-brand-charcoal/60">Serving {county} and the surrounding area.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/quote"
              className="rounded-full bg-brand-green px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-brand-green-mid"
            >
              Get a Free Quote
            </Link>
            <Link
              href="/our-work"
              className="rounded-full border border-brand-green px-6 py-3 text-sm font-semibold text-brand-green transition-colors hover:bg-brand-cream"
            >
              See Our Work
            </Link>
            <Link
              href="/faq"
              className="rounded-full border border-black/15 px-6 py-3 text-sm font-semibold text-brand-charcoal/70 transition-colors hover:border-black/30 hover:text-brand-dark"
            >
              Common Questions
            </Link>
            <Link
              href="/locations"
              className="rounded-full border border-black/15 px-6 py-3 text-sm font-semibold text-brand-charcoal/70 transition-colors hover:border-black/30 hover:text-brand-dark"
            >
              All Service Areas
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden py-20 lg:py-28">
        <div
          className="absolute inset-0 bg-[url('/images/back2.png')] bg-cover bg-center"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-brand-dark/80" aria-hidden="true" />
        <div className="relative z-10 mx-auto max-w-3xl px-4 text-center sm:px-6">
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-brand-green-light">
            Get Started
          </p>
          <h2 className="mb-4 font-heading text-3xl font-black leading-tight text-white sm:text-4xl lg:text-5xl">
            Ready for a Free Quote in {name}?
          </h2>
          <p className="mx-auto mb-10 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg">
            Free estimates, no contracts, no pressure. Just reach out.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/quote"
              className="w-full rounded-full bg-brand-green px-8 py-4 text-center text-base font-bold text-white shadow-lg transition-colors hover:bg-brand-green-mid sm:w-auto"
            >
              Request a Free Quote
            </Link>
            <a
              href={`tel:${PHONE_E164}`}
              className="flex w-full items-center justify-center gap-2 rounded-full border border-white/30 px-8 py-4 text-base font-semibold text-white transition-colors hover:border-white/60 sm:w-auto"
            >
              Call {PHONE_DISPLAY}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

/** Service + FAQ schema for a location page. */
export function locationSchema(location: Location) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${SITE_URL}/locations/${location.slug}#service`,
    name: `Landscaping, Drainage & Stone Work in ${location.name}, NC`,
    url: `${SITE_URL}/locations/${location.slug}`,
    serviceType: "Landscaping",
    provider: { "@id": BUSINESS_ID },
    areaServed: {
      "@type": "City",
      name: location.name,
      addressRegion: "NC",
      addressCountry: "US",
    },
    description: `Landscaping, yard drainage, and stone work in ${location.name}, NC including mulching, trimming, shrub and tree removal, planting, cleanups, French drains, and dry creek beds. Locally owned, fully insured, no contracts.`,
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `Landscaping & Drainage Services in ${location.name}, NC`,
      itemListElement: SERVICES.flatMap((s) =>
        s.schemaNames.map((name) => ({
          "@type": "Offer",
          itemOffered: { "@type": "Service", name },
        }))
      ),
    },
  };
}
