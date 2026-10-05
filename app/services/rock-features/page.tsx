import type { Metadata } from "next";
import Link from "next/link";
import PhotoSlot from "@/components/PhotoSlot";
import { PHONE_DISPLAY, PHONE_E164 } from "@/lib/services";
import { BUSINESS_ID } from "@/lib/site";

export const metadata: Metadata = {
  title: "Dry Creek Beds & Stone | Waxhaw NC | JDP Landscaping",
  description:
    "Dry creek beds, boulder placement, stone borders and retaining walls in Waxhaw, Marvin & Weddington NC. Free quotes — call (704) 989-6027.",
  alternates: { canonical: "/services/rock-features" },
  openGraph: {
    siteName: "JDP Landscaping",
    locale: "en_US",
    type: "website",
    title: "Rock & Stone Features | JDP Landscaping",
    description:
      "Dry creek beds, boulder placement, stone borders, and retaining walls across Waxhaw, Marvin, Weddington, and south Charlotte.",
    url: "/services/rock-features",
    images: [
      {
        url: "/images/og-card.jpg",
        width: 1200,
        height: 630,
        alt: "JDP Landscaping — dry creek bed and boulder stone work",
      },
    ],
  },
};

/* ------------------------------------------------------------------
 * PHOTOS — not yet supplied. Add a `src` to any slot to make it real.
 * Rock work is the visual service: wide finished shots do the selling.
 * ---------------------------------------------------------------- */
const photos = {
  // TEMPORARY — AI-generated reference image, not a JDP project, and it shows a
  // paver patio which JDP does not build. Swap for a real finished stone feature
  // as soon as one is photographed. See PHOTOS-NEEDED.md.
  feature: {
    src: "/images/rock/stone-fire-feature.jpg",
    alt: "Stone fire feature set into a finished outdoor living area at dusk",
  },
};

/* ------------------------------------------------------------------
 * CONFIRM WITH CLIENT — which of these does JDP actually build?
 * Retaining walls above a certain height may need engineering sign-off;
 * confirm what height JDP will take on before this page goes live.
 * ---------------------------------------------------------------- */
const features = [
  {
    name: "Dry Creek Beds",
    body: "A stone channel that carries runoff across the property and looks like it has always been there. Our most-requested piece of rock work, because it solves a drainage problem and reads as a feature.",
  },
  {
    name: "Boulder Placement",
    body: "Feature stone set with intent — anchoring a bed, breaking up a flat lawn, or holding a bank. Placement and burial depth are what separate a set boulder from a rock sitting on the grass.",
  },
  {
    name: "Stone Retaining Walls",
    body: "Boulder and stacked stone walls that hold a grade and give you usable, level ground where there was a slope. Built on proper base and drainage so they stay put.",
  },
  {
    name: "Stone Borders & Edging",
    body: "Clean stone edges that define beds, hold mulch where it belongs, and stop the slow creep of lawn into planting areas.",
  },
  {
    name: "River Rock & Gravel Beds",
    body: "Decorative stone in place of mulch for areas that stay wet, sit in deep shade, or simply need something that will not wash out every season.",
  },
  {
    name: "Erosion & Slope Stabilisation",
    body: "Rip-rap, terracing, and planted stone work for banks that are washing out. Stops the soil moving and looks considerably better than bare clay.",
  },
];

const why = [
  {
    title: "It solves two problems at once",
    body: "A dry creek bed is a drainage run that happens to look good. Done well, you get a working channel for runoff and a feature that lifts the whole yard.",
  },
  {
    title: "It does not need upkeep",
    body: "Stone does not need mulching every spring, does not wash out, and does not need replacing. It is one of the few landscape investments that largely looks after itself.",
  },
  {
    title: "It works in winter",
    body: "Rock and stone work can be built through the cold months when the ground is bare and plants are dormant — so it does not have to compete with the spring rush.",
  },
];

const faqs = [
  {
    question: "What does a dry creek bed cost?",
    answer:
      "It depends on length, width, the stone chosen, and how much excavation is involved. Nationally, a professionally installed bed of around fifty feet typically runs between $1,500 and $2,500. We price every job after walking the property.",
  },
  {
    question: "Is a dry creek bed just decorative, or does it actually drain?",
    answer:
      "Built properly, it genuinely moves water. It needs real fall along the run, the right base, and a sensible discharge point — the same engineering as a buried drain, just open to the sky. Built badly, it is a line of rocks that holds water. The difference is entirely in the preparation.",
  },
  {
    question: "How much does a stone retaining wall cost?",
    answer:
      "Boulder walls generally run $25 to $50 per square foot of wall face. A typical residential wall lands somewhere between $4,000 and $12,000, with natural stone at the higher end. Height, access, and drainage behind the wall all move the number.",
  },
  {
    question: "Where does the stone come from?",
    answer:
      "We source from regional stone yards and will walk you through the options before anything is ordered — colour and size change the look of a finished feature far more than people expect.",
  },
  {
    question: "Will a retaining wall need a permit?",
    answer:
      "Low decorative walls generally do not. Taller walls, and walls holding a significant load, can require permitting and in some cases engineering. We will tell you which category your project falls into before we quote it.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Landscaping",
  name: "Rock & Stone Landscape Features",
  // Reference the single LocalBusiness node declared in app/layout.tsx rather
  // than describing the business again — avoids a second, orphan entity.
  provider: { "@id": BUSINESS_ID },
  areaServed: [
    "Waxhaw",
    "Marvin",
    "Weddington",
    "Ballantyne",
    "Indian Trail",
    "Matthews",
    "Charlotte",
  ].map((name) => ({
    "@type": "City",
    name,
    addressRegion: "NC",
    addressCountry: "US",
  })),
  description:
    "Dry creek beds, boulder placement, stone retaining walls, stone borders, river rock beds, and slope stabilisation for residential properties in the Waxhaw, Marvin, Weddington, and south Charlotte area.",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Rock & Stone Features",
    itemListElement: features.map((f) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name: f.name },
    })),
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.question,
    acceptedAnswer: { "@type": "Answer", text: f.answer },
  })),
};

export default function RockFeaturesPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero */}
      <section className="relative overflow-hidden pt-40 pb-20 lg:pt-48 lg:pb-28">
        <div
          className="absolute inset-0 bg-[url('/images/top2.png')] bg-cover bg-center"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-brand-dark/88" aria-hidden="true" />
        <div className="relative z-10 mx-auto max-w-3xl px-4 text-center sm:px-6">
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-brand-green-light">
            Rock &amp; Stone Features
          </p>
          <h1 className="mb-4 font-heading text-3xl font-black leading-tight text-white sm:text-4xl lg:text-5xl">
            Stone Work That Looks Like It Belongs There
          </h1>
          <p className="mx-auto max-w-xl text-base leading-relaxed text-white/75 sm:text-lg">
            Dry creek beds, boulder placement, stone borders, and retaining walls for homeowners
            in Waxhaw, Marvin, Weddington, and south Charlotte. Built to hold up and to look
            right.
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

      {/* Before / after */}
      <section className="bg-brand-cream py-20 lg:py-28">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-brand-green">
              The Difference
            </p>
            <h2 className="mb-4 text-balance font-heading text-3xl font-black leading-tight text-brand-dark sm:text-4xl">
              From Problem Area to the Best Part of the Yard
            </h2>
            <p className="text-base text-brand-charcoal/70 sm:text-lg">
              Most rock work starts with a spot nobody liked — a washout, a bare bank, a corner
              that never grew grass. Set properly, stone turns it into the part of the yard people
              actually use.
            </p>
          </div>
          <PhotoSlot
            {...photos.feature}
            aspect="aspect-[16/10] sm:aspect-[16/9]"
            sizes="(min-width: 1024px) 1024px, 100vw"
            priority
          />
        </div>
      </section>

      {/* What we build */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-brand-green">
              What We Build
            </p>
            <h2 className="mb-4 text-balance font-heading text-3xl font-black leading-tight text-brand-dark sm:text-4xl">
              Rock Work, Done Properly
            </h2>
            <p className="text-base text-brand-charcoal/70 sm:text-lg">
              Stone is unforgiving — set it wrong and it looks wrong forever. Base preparation and
              placement are most of the job.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f) => (
              <div
                key={f.name}
                className="rounded-2xl border border-black/5 bg-brand-cream p-6 shadow-sm"
              >
                <h3 className="mb-2 font-heading text-lg font-bold text-brand-dark">{f.name}</h3>
                <p className="text-sm leading-relaxed text-brand-charcoal/70">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Why stone */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-brand-green">
              Why Stone
            </p>
            <h2 className="font-heading text-3xl font-black leading-tight text-brand-dark sm:text-4xl">
              Three Reasons It Is Worth Doing
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {why.map((w) => (
              <div key={w.title} className="rounded-2xl border border-black/5 bg-brand-cream p-6">
                <h3 className="mb-2 font-heading text-lg font-bold text-brand-dark">{w.title}</h3>
                <p className="text-sm leading-relaxed text-brand-charcoal/70">{w.body}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 rounded-2xl border border-brand-green/20 bg-brand-cream p-7 text-center">
            <p className="text-base leading-relaxed text-brand-charcoal/80">
              Not sure whether you need a <strong className="text-brand-dark">feature</strong> or a{" "}
              <strong className="text-brand-dark">fix</strong>? A dry creek bed is often both.{" "}
              <Link href="/services/drainage" className="font-semibold text-brand-green hover:underline">
                See our drainage work
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-brand-cream py-20 lg:py-28">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <div className="mb-12 text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-brand-green">
              Questions
            </p>
            <h2 className="font-heading text-3xl font-black leading-tight text-brand-dark sm:text-4xl">
              Stone Work, Answered Straight
            </h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-2xl border border-black/5 bg-white p-6 shadow-sm"
              >
                <summary className="flex cursor-pointer list-none items-start justify-between gap-4 font-heading text-lg font-bold text-brand-dark marker:hidden">
                  {faq.question}
                  <svg
                    className="mt-1 h-5 w-5 shrink-0 text-brand-green transition-transform group-open:rotate-45"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                </summary>
                <p className="mt-3 text-base leading-relaxed text-brand-charcoal/75">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden py-20 lg:py-28">
        <div
          className="absolute inset-0 bg-[url('/images/back2.png')] bg-cover bg-center"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-brand-dark/85" aria-hidden="true" />
        <div className="relative z-10 mx-auto max-w-3xl px-4 text-center sm:px-6">
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-brand-green-light">
            Get Started
          </p>
          <h2 className="mb-4 font-heading text-3xl font-black leading-tight text-white sm:text-4xl lg:text-5xl">
            Got a Spot That Needs Stone?
          </h2>
          <p className="mx-auto mb-10 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg">
            Send a photo of the area and we will tell you what would work there. Free quotes, no
            contracts, no pressure.
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
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              href="/services/drainage"
              className="rounded-full border border-white/25 px-6 py-3 text-sm font-semibold text-white/80 transition-colors hover:border-white/50 hover:text-white"
            >
              Drainage Solutions
            </Link>
            <Link
              href="/locations"
              className="rounded-full border border-white/25 px-6 py-3 text-sm font-semibold text-white/80 transition-colors hover:border-white/50 hover:text-white"
            >
              Areas We Serve
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
