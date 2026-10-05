import type { Metadata } from "next";
import Link from "next/link";
import { PHONE_DISPLAY, PHONE_E164, SERVICES } from "@/lib/services";

export const metadata: Metadata = {
  title: "Services | Waxhaw & South Charlotte | JDP Landscaping",
  description:
    "Mulching, trimming, removal, planting, cleanups, yard drainage and stone features across Waxhaw and south Charlotte. Free quotes, no contracts.",
  alternates: { canonical: "/services" },
  openGraph: {
    siteName: "JDP Landscaping",
    locale: "en_US",
    type: "website",
    title: "Our Services | JDP Landscaping",
    description:
      "Everything JDP Landscaping does — from routine mulching and trimming to yard drainage and stone features.",
    url: "/services",
    images: [
      {
        url: "/images/og-card.jpg",
        width: 1200,
        height: 630,
        alt: "JDP Landscaping — landscaping, drainage, and stone services",
      },
    ],
  },
};

export default function ServicesPage() {
  return (
    <main>
      <section className="relative overflow-hidden pt-40 pb-20 lg:pt-48 lg:pb-28">
        <div
          className="absolute inset-0 bg-[url('/images/top2.png')] bg-cover bg-center"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-brand-dark/85" aria-hidden="true" />
        <div className="relative z-10 mx-auto max-w-3xl px-4 text-center sm:px-6">
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-brand-green-light">
            Our Services
          </p>
          <h1 className="mb-4 text-balance font-heading text-3xl font-black leading-tight text-white sm:text-4xl lg:text-5xl">
            Everything We Do Around Your Property
          </h1>
          <p className="mx-auto max-w-xl text-base leading-relaxed text-white/75 sm:text-lg">
            From the regular upkeep that keeps a yard sharp to the bigger projects that fix what is
            actually wrong with it.
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

      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((service) => {
              const card = (
                <>
                  <div className="mb-3 flex items-start justify-between gap-3">
                    <h3 className="font-heading text-xl font-bold text-brand-dark transition-colors group-hover:text-brand-green">
                      {service.name}
                    </h3>
                    {service.slug ? (
                      <svg
                        className="mt-0.5 h-5 w-5 shrink-0 text-brand-green opacity-0 transition-opacity group-hover:opacity-100"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    ) : null}
                  </div>
                  <p className="text-sm leading-relaxed text-brand-charcoal/70">{service.short}</p>
                  {service.slug ? (
                    <span className="mt-4 inline-block font-accent text-xs font-bold uppercase tracking-widest text-brand-green">
                      Learn more
                    </span>
                  ) : null}
                </>
              );

              return service.slug ? (
                <Link
                  key={service.name}
                  href={`/services/${service.slug}`}
                  className="group rounded-2xl border border-black/[0.06] bg-brand-cream p-7 shadow-sm transition-all hover:bg-white hover:shadow-md"
                >
                  {card}
                </Link>
              ) : (
                <div
                  key={service.name}
                  className="group rounded-2xl border border-black/[0.06] bg-brand-cream p-7 shadow-sm"
                >
                  {card}
                </div>
              );
            })}
          </div>

          <div className="max-w-2xl">
            <h2 className="mb-4 font-heading text-2xl font-bold text-brand-dark sm:text-3xl">
              Not Sure What You Need?
            </h2>
            <p className="mb-6 text-base leading-relaxed text-brand-charcoal/75">
              Most people call us because something is bothering them about the yard, not because
              they know what the fix is called. Describe the problem or send a photo — we will tell
              you what it needs and what it costs. Call or text{" "}
              <a
                href={`tel:${PHONE_E164}`}
                className="font-semibold text-brand-green hover:underline"
              >
                {PHONE_DISPLAY}
              </a>
              .
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/quote"
                className="rounded-full bg-brand-green px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-brand-green-mid"
              >
                Request a Free Quote
              </Link>
              <Link
                href="/our-work"
                className="rounded-full border border-brand-green px-6 py-3 text-sm font-semibold text-brand-green transition-colors hover:bg-brand-cream"
              >
                See Our Work
              </Link>
              <Link
                href="/locations"
                className="rounded-full border border-black/15 px-6 py-3 text-sm font-semibold text-brand-charcoal/70 transition-colors hover:border-black/30 hover:text-brand-dark"
              >
                Areas We Serve
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
