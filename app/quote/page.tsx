import type { Metadata } from "next";
import QuoteForm from "@/components/QuoteForm";

export const metadata: Metadata = {
  title: "Request a Free Quote | JDP Landscaping | Marvin & Waxhaw NC",
  description:
    "Get a free, no-obligation landscaping quote for your property in Marvin, Waxhaw, and surrounding areas. Tell us what you need and we'll get back to you quickly.",
};

export default function QuotePage() {
  return (
    <main>
      {/* Hero strip */}
      <section className="relative bg-brand-dark pt-36 pb-16 sm:pt-40 sm:pb-20">
        <div className="absolute inset-0 bg-[url('/images/projects/project-2-after.jpg')] bg-cover bg-center opacity-15" aria-hidden="true" />
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-brand-green-light font-semibold text-sm tracking-widest uppercase mb-4">
            Free Estimate
          </p>
          <h1 className="font-heading font-black text-white text-3xl sm:text-4xl lg:text-5xl leading-tight mb-4">
            Get a Free Quote
          </h1>
          <p className="text-white/70 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
            No contracts, no pressure. Just honest work at a fair price.
          </p>
        </div>
      </section>

      {/* Trust strip */}
      <div className="bg-brand-cream border-b border-black/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-4 flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-sm text-brand-charcoal/70">
          <span className="flex items-center gap-2">
            <CheckCircle />
            Locally Owned &amp; Operated
          </span>
          <span className="hidden sm:inline text-black/20">|</span>
          <span className="flex items-center gap-2">
            <CheckCircle />
            Fully Insured
          </span>
          <span className="hidden sm:inline text-black/20">|</span>
          <span className="flex items-center gap-2">
            <CheckCircle />
            Serving Marvin, Waxhaw &amp; Surrounding Areas
          </span>
        </div>
      </div>

      {/* Form section */}
      <QuoteForm standalone />

      {/* Reassurance */}
      <section className="bg-brand-cream pb-20 lg:pb-28">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-brand-charcoal/60 text-sm leading-relaxed">
            Questions?{" "}
            <a
              href="tel:+17049896027"
              className="text-brand-green font-semibold hover:underline"
            >
              Call (704) 989-6027
            </a>{" "}
            — we&apos;re happy to talk through anything.
          </p>
        </div>
      </section>
    </main>
  );
}

function CheckCircle() {
  return (
    <svg className="w-4 h-4 text-brand-green shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}
