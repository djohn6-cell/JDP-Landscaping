import type { Metadata } from "next";
import Link from "next/link";
import PhotoSlot from "@/components/PhotoSlot";
import { PHONE_DISPLAY, PHONE_E164 } from "@/lib/services";
import { BUSINESS_ID } from "@/lib/site";

export const metadata: Metadata = {
  title: "French Drains & Drainage | Waxhaw NC | JDP Landscaping",
  description:
    "Standing water in your yard? French drains, surface drains, and dry creek beds in Waxhaw, Marvin & Weddington NC. Free quotes — (704) 989-6027.",
  alternates: { canonical: "/services/drainage" },
  openGraph: {
    siteName: "JDP Landscaping",
    locale: "en_US",
    type: "website",
    title: "Yard Drainage & French Drains | JDP Landscaping",
    description:
      "Standing water, soggy spots, and runoff heading for the house — solved at the source. Serving Waxhaw, Marvin, Weddington, and south Charlotte.",
    url: "/services/drainage",
    images: [
      {
        url: "/images/og-card.jpg",
        width: 1200,
        height: 630,
        alt: "JDP Landscaping — yard drainage and French drain installation",
      },
    ],
  },
};

/* ------------------------------------------------------------------
 * PHOTOS — not yet supplied. Add a `src` to any slot to make it real.
 * The drainage "before" must show STANDING WATER; without it there is
 * no before/after story. See the six-clip shot list in the growth plan.
 * ---------------------------------------------------------------- */
const photos = {
  // Real JDP job, supplied Oct 2026. Note this pair is "drain line in" ->
  // "finished dry creek bed", NOT "standing water" -> "dry" — the copy in this
  // section was corrected to match what the photos actually show.
  heroBefore: {
    src: "/images/drainage/drain-line-before.jpg",
    alt: "Buried drain line and cleanouts running through a gravel bed before the stone was placed",
    tag: "Before",
  },
  heroAfter: {
    src: "/images/drainage/dry-creek-bed-after.jpg",
    alt: "The finished dry creek bed of river rock carrying water along the same run",
    tag: "After",
  },
};

/* ------------------------------------------------------------------
 * CONFIRM WITH CLIENT — which of these does JDP actually install?
 * Remove anything not offered before this page goes live.
 * ---------------------------------------------------------------- */
const solutions = [
  {
    name: "French Drains",
    body: "A perforated pipe set in gravel below grade that collects water out of the soil and carries it somewhere it can safely go. The standard fix for ground that stays saturated long after the rain stops.",
  },
  {
    name: "Surface & Catch Basin Drains",
    body: "Grated inlets set into the low points that take standing water off the surface fast, piped out to a proper discharge point instead of sitting in the lawn.",
  },
  {
    name: "Downspout Extensions",
    body: "Roof water buried and carried well clear of the foundation. Often the cheapest fix on the list, and frequently the one that solves the whole problem.",
  },
  {
    name: "Dry Creek Beds",
    body: "A stone channel that moves water across the property and looks like it belongs there. Does the job of a drain and reads as a landscape feature.",
  },
  {
    name: "Grading & Swales",
    body: "Reshaping the ground so water runs away from the house instead of toward it. Sometimes the right answer is the dirt, not the pipe.",
  },
  {
    name: "Erosion Control",
    body: "Stabilising slopes and washed-out areas with stone, plantings, or structure so the soil stops moving every time it storms.",
  },
];

const signs = [
  "Water stands in the same spot for a day or more after rain",
  "A patch of lawn stays soggy and the grass is thin or gone",
  "Water runs toward the house instead of away from it",
  "Mulch washes out of the beds every heavy storm",
  "Gutters discharge right at the foundation",
  "Soil is visibly eroding on a slope",
  "The crawl space or basement smells damp",
  "Moss or algae is taking over a shaded, wet area",
];

const steps = [
  {
    n: "01",
    title: "We walk the property",
    body: "We look at where the water comes from, where it collects, and where it can realistically be sent. Ideally we see it during or just after a rain.",
  },
  {
    n: "02",
    title: "We tell you what it needs",
    body: "A written quote with the approach and the price. If the fix is a cheap downspout extension rather than a full drain line, we will say so.",
  },
  {
    n: "03",
    title: "We dig and install",
    body: "Trenching, filter fabric, washed stone, and pipe set with proper fall to a discharge point that works.",
  },
  {
    n: "04",
    title: "We put the yard back",
    body: "Backfilled, graded, and cleaned up. The yard should look like we were never there, apart from the part that now stays dry.",
  },
];

const faqs = [
  {
    question: "What does a French drain cost?",
    answer:
      "It depends on the length of the run, how deep it has to go, and where the water can be discharged. Nationally most yard drainage projects land somewhere between $3,000 and $4,000, though small fixes come in well under that and large or complicated jobs run higher. We quote every job after seeing the property — no guessing over the phone.",
  },
  {
    question: "How long does a drainage job take?",
    answer:
      "Most residential drainage installs are a one to three day job depending on the length of the run and how much access the equipment has. We give you a realistic window with the quote.",
  },
  {
    question: "Will it wreck my lawn?",
    answer:
      "There is a trench while we work, and it is not pretty. But we backfill, re-grade, and clean up as part of the job. Within a season you should not be able to tell where the line runs.",
  },
  {
    question: "Can you work in winter?",
    answer:
      "Yes — and winter is often the better time. The ground is bare, plants are dormant, and there is far less to disturb or work around. Drainage is one of the few landscaping jobs that does not need to wait for spring.",
  },
  {
    question: "Where does the water actually go?",
    answer:
      "To a legal, sensible discharge point — daylighting at a lower elevation on the property, a drainage easement, or a dry well where that is the right answer. We work that out before we quote, because a drain that has nowhere to discharge is not a drain.",
  },
  {
    question: "Do I need a permit?",
    answer:
      "Most straightforward residential yard drainage does not require a permit, but it varies by municipality and by what we are tying into. If a job needs one we will tell you before we start.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Drainage Service",
  name: "Yard Drainage & French Drain Installation",
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
    "French drains, surface drains, downspout extensions, dry creek beds, grading, and erosion control for residential properties in the Waxhaw, Marvin, Weddington, and south Charlotte area.",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Drainage Solutions",
    itemListElement: solutions.map((s) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name: s.name },
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

export default function DrainagePage() {
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
          className="absolute inset-0 bg-[url('/images/back1.png')] bg-cover bg-[center_60%]"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-brand-dark/88" aria-hidden="true" />
        <div className="relative z-10 mx-auto max-w-3xl px-4 text-center sm:px-6">
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-brand-green-light">
            Drainage Solutions
          </p>
          <h1 className="mb-4 font-heading text-3xl font-black leading-tight text-white sm:text-4xl lg:text-5xl">
            Standing Water in the Yard? We Fix That.
          </h1>
          <p className="mx-auto max-w-xl text-base leading-relaxed text-white/75 sm:text-lg">
            French drains, surface drains, downspout extensions, and dry creek beds for
            homeowners in Waxhaw, Marvin, Weddington, and south Charlotte. We find where the
            water is coming from and give it somewhere to go.
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
              From Buried Drain Line to Finished Creek Bed
            </h2>
            <p className="text-base text-brand-charcoal/70 sm:text-lg">
              The pipe does the work underground. The stone on top is what you actually live with
              &mdash; so we finish the job properly rather than leaving you a gravel scar.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:gap-6">
            <PhotoSlot {...photos.heroBefore} aspect="aspect-[3/4]" sizes="(min-width: 640px) 50vw, 50vw" />
            <PhotoSlot {...photos.heroAfter} aspect="aspect-[3/4]" sizes="(min-width: 640px) 50vw, 50vw" />
          </div>
        </div>
      </section>

      {/* Warning signs */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-brand-green">
              Do You Have a Problem?
            </p>
            <h2 className="mb-4 text-balance font-heading text-3xl font-black leading-tight text-brand-dark sm:text-4xl">
              Signs Your Yard Needs Drainage
            </h2>
            <p className="text-base text-brand-charcoal/70 sm:text-lg">
              If more than one of these sounds like your property, water is not leaving the way
              it should.
            </p>
          </div>
          <ul className="grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">
            {signs.map((sign) => (
              <li key={sign} className="flex items-start gap-3">
                <svg
                  className="mt-0.5 h-5 w-5 shrink-0 text-brand-green"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-base leading-relaxed text-brand-charcoal/80">{sign}</span>
              </li>
            ))}
          </ul>

          <div className="mt-12 rounded-2xl border border-brand-green/20 bg-brand-cream p-7 text-center sm:p-9">
            <p className="mb-5 text-base leading-relaxed text-brand-charcoal/80 sm:text-lg">
              Recognise two or more? Send us a photo of where the water sits and we will tell you
              what it needs &mdash; no charge, no pressure.
            </p>
            <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href="/quote"
                className="w-full rounded-full bg-brand-green px-7 py-3.5 text-center text-sm font-bold text-white transition-colors hover:bg-brand-green-mid sm:w-auto"
              >
                Get a Free Quote
              </Link>
              <a
                href={`tel:${PHONE_E164}`}
                className="w-full rounded-full border border-brand-green px-7 py-3.5 text-center text-sm font-semibold text-brand-green transition-colors hover:bg-white sm:w-auto"
              >
                Call {PHONE_DISPLAY}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="bg-brand-cream py-20 lg:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-brand-green">
              What We Install
            </p>
            <h2 className="mb-4 text-balance font-heading text-3xl font-black leading-tight text-brand-dark sm:text-4xl">
              The Right Fix for the Actual Problem
            </h2>
            <p className="text-base text-brand-charcoal/70 sm:text-lg">
              Not every wet yard needs a full drain line. We quote what the property needs, not
              what sells best.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {solutions.map((s) => (
              <div
                key={s.name}
                className="rounded-2xl border border-black/5 bg-white p-6 shadow-sm"
              >
                <h3 className="mb-2 font-heading text-lg font-bold text-brand-dark">{s.name}</h3>
                <p className="text-sm leading-relaxed text-brand-charcoal/70">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process + photos */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-brand-green">
              How It Works
            </p>
            <h2 className="mb-4 text-balance font-heading text-3xl font-black leading-tight text-brand-dark sm:text-4xl">
              What the Job Actually Involves
            </h2>
            <p className="text-base text-brand-charcoal/70 sm:text-lg">
              Most people have never seen a drain go in. Here is the whole process, including the
              parts that are easy to skip and shouldn&apos;t be.
            </p>
          </div>

          <ol className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step) => (
              <li key={step.n} className="rounded-2xl border border-black/5 bg-brand-cream p-6">
                <span className="font-accent text-sm font-bold tracking-widest text-brand-green">
                  {step.n}
                </span>
                <h3 className="mb-2 mt-2 font-heading text-lg font-bold text-brand-dark">
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed text-brand-charcoal/70">{step.body}</p>
              </li>
            ))}
          </ol>
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
              Drainage, Answered Straight
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
            Tired of the Same Puddle Every Storm?
          </h2>
          <p className="mx-auto mb-10 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg">
            Send us a photo of where the water sits and we will tell you what it needs. Free
            quotes, no contracts, no pressure.
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
              href="/services/rock-features"
              className="rounded-full border border-white/25 px-6 py-3 text-sm font-semibold text-white/80 transition-colors hover:border-white/50 hover:text-white"
            >
              Rock &amp; Stone Features
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
