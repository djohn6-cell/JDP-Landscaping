import type { Metadata } from "next";
import Link from "next/link";
import { ALSO_SERVED, LOCATIONS } from "@/lib/locations";
import { PHONE_DISPLAY, PHONE_E164 } from "@/lib/services";

export const metadata: Metadata = {
  title: "Service Areas | Waxhaw, NC | JDP Landscaping",
  description:
    "Landscaping, drainage and stone work across Waxhaw, Marvin, Weddington, Ballantyne, Indian Trail, Matthews and south Charlotte. Free quotes.",
  alternates: { canonical: "/locations" },
  openGraph: {
    siteName: "JDP Landscaping",
    locale: "en_US",
    type: "website",
    title: "Service Areas | JDP Landscaping",
    description:
      "Serving Waxhaw, Marvin, Weddington, and the south Charlotte area with landscaping, drainage, and stone features.",
    url: "/locations",
    images: [
      {
        url: "/images/og-card.jpg",
        width: 1200,
        height: 630,
        alt: "JDP Landscaping — Waxhaw and south Charlotte service area",
      },
    ],
  },
};

export default function LocationsPage() {
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
            Service Areas
          </p>
          <h1 className="mb-4 font-heading text-3xl font-black leading-tight text-white sm:text-4xl lg:text-5xl">
            Serving Waxhaw, Marvin &amp; South Charlotte
          </h1>
          <p className="mx-auto max-w-xl text-base leading-relaxed text-white/75 sm:text-lg">
            We are based in Waxhaw and work across Union County and south Mecklenburg. Find your
            area below.
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

      <section className="bg-brand-cream py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {LOCATIONS.map((loc) => (
              <Link
                key={loc.slug}
                href={`/locations/${loc.slug}`}
                className="group rounded-2xl border border-black/[0.06] bg-brand-cream p-7 shadow-sm transition-all hover:bg-white hover:shadow-md"
              >
                <div className="mb-1 flex items-start justify-between">
                  <h3 className="font-heading text-xl font-bold text-brand-dark transition-colors group-hover:text-brand-green">
                    {loc.name}
                  </h3>
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
                </div>
                <p className="mb-3 font-accent text-[11px] font-bold uppercase tracking-[0.12em] text-brand-green/70">
                  {loc.county}
                </p>
                <p className="text-sm leading-relaxed text-brand-charcoal/70">{loc.blurb}</p>
                <span className="mt-4 inline-block font-accent text-xs font-bold uppercase tracking-widest text-brand-green">
                  View {loc.name} &rarr;
                </span>
              </Link>
            ))}
          </div>

          <div className="max-w-2xl">
            <h2 className="mb-4 font-heading text-2xl font-bold text-brand-dark sm:text-3xl">
              Also Serving {ALSO_SERVED.slice(0, -1).join(", ")} &amp;{" "}
              {ALSO_SERVED[ALSO_SERVED.length - 1]}
            </h2>
            <p className="mb-6 text-base leading-relaxed text-brand-charcoal/75">
              Our service area covers Union County and southern Mecklenburg County. If you are not
              sure whether we reach your area, give us a call at{" "}
              <a
                href={`tel:${PHONE_E164}`}
                className="font-semibold text-brand-green hover:underline"
              >
                {PHONE_DISPLAY}
              </a>{" "}
              or request a free quote and include your address.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/quote"
                className="rounded-full bg-brand-green px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-brand-green-mid"
              >
                Request a Free Quote
              </Link>
              <Link
                href="/services"
                className="rounded-full border border-brand-green px-6 py-3 text-sm font-semibold text-brand-green transition-colors hover:bg-brand-cream"
              >
                All Services
              </Link>
              <Link
                href="/our-work"
                className="rounded-full border border-black/15 px-6 py-3 text-sm font-semibold text-brand-charcoal/70 transition-colors hover:border-black/30 hover:text-brand-dark"
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
