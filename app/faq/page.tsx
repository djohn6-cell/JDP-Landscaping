import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Frequently Asked Questions | JDP Landscaping | Charlotte NC",
  description:
    "Answers to common questions about JDP Landscaping — services offered, service area, how to get a quote, scheduling, insurance, and more. Serving Charlotte, Marvin, Waxhaw, and surrounding areas.",
  alternates: { canonical: "/faq" },
  openGraph: {
    title: "Frequently Asked Questions | JDP Landscaping",
    description:
      "Common questions about JDP Landscaping services, service area, and process.",
    url: "/faq",
    images: [
      {
        url: "/images/projects/project-2-after.jpg",
        width: 1200,
        height: 630,
        alt: "JDP Landscaping — Charlotte, NC landscaping project",
      },
    ],
  },
};

const faqs = [
  {
    question: "What services does JDP Landscaping offer?",
    answer:
      "We offer mulching, lawn trimming, shrub and tree removal, planting, and seasonal yard cleanups. Whether you need routine maintenance or a full property transformation, we handle it all.",
  },
  {
    question: "What areas does JDP Landscaping serve?",
    answer:
      "We serve Charlotte, Marvin, Waxhaw, Ballantyne, Pineville, Matthews, Indian Trail, Stallings, Mint Hill, Huntersville, Concord, and surrounding communities in the greater Charlotte, NC area.",
  },
  {
    question: "How do I get a free quote?",
    answer:
      "You can fill out our online quote request form or call or text us directly at (704) 989-6027. We typically respond within one business day.",
  },
  {
    question: "Is JDP Landscaping insured?",
    answer:
      "Yes. JDP Landscaping is fully insured, so your property is covered from start to finish on every job.",
  },
  {
    question: "Do you require long-term contracts?",
    answer:
      "No. We don't require long-term contracts or pressure you into ongoing commitments. Each job is straightforward — honest work at a fair price.",
  },
  {
    question: "What information should I include when requesting a quote?",
    answer:
      "Tell us your property address or general service area, what type of work you're looking for, and any details about the project. A general description is a great starting point — we're happy to take a look and talk through what makes sense for your property.",
  },
  {
    question: "Do you work with commercial properties as well as residential?",
    answer:
      "We work with homeowners, property managers, and anyone who takes pride in their outdoor space — both residential and commercial.",
  },
  {
    question: "What does mulching involve and why does it matter?",
    answer:
      "Mulching adds a fresh layer of material around your plants and beds. It protects roots, retains moisture, reduces weeds, and gives your landscape a clean, finished appearance. Most properties benefit from a fresh application once or twice a year.",
  },
  {
    question: "How often should shrubs and hedges be trimmed?",
    answer:
      "Most shrubs and hedges benefit from trimming once or twice per season depending on the species and how quickly they grow. Regular trimming keeps plants healthy, controls growth, and keeps your property looking sharp.",
  },
  {
    question: "What is included in a yard cleanup?",
    answer:
      "Our cleanups cover debris removal, bed clearing, and general property tidying. We handle seasonal cleanups and post-storm work to get your yard back in shape quickly.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function FAQPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <section className="relative pt-40 pb-20 lg:pt-48 lg:pb-28 overflow-hidden">
        <div
          className="absolute inset-0 bg-[url('/images/top.png')] bg-cover bg-center"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-brand-dark/85" aria-hidden="true" />
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-brand-green-light font-semibold text-sm tracking-widest uppercase mb-4">
            Common Questions
          </p>
          <h1 className="font-heading font-black text-white text-3xl sm:text-4xl lg:text-5xl leading-tight mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-white/70 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
            Everything you need to know about our services, process, and service area.
          </p>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="space-y-8">
            {faqs.map((faq) => (
              <div
                key={faq.question}
                className="border-b border-black/[0.08] pb-8 last:border-0 last:pb-0"
              >
                <h2 className="font-heading font-bold text-brand-dark text-lg sm:text-xl mb-3">
                  {faq.question}
                </h2>
                <p className="text-brand-charcoal/75 text-base leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-14 pt-10 border-t border-black/[0.08]">
            <p className="text-brand-charcoal/60 text-sm mb-5">
              Still have questions? We&apos;re easy to reach.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/quote"
                className="bg-brand-green hover:bg-brand-green-mid text-white font-bold text-sm px-6 py-3 rounded-full transition-colors"
              >
                Request a Free Quote
              </Link>
              <Link
                href="/our-work"
                className="text-brand-green border border-brand-green hover:bg-brand-cream font-semibold text-sm px-6 py-3 rounded-full transition-colors"
              >
                See Our Work
              </Link>
              <a
                href="tel:+17049896027"
                className="text-brand-charcoal/70 hover:text-brand-dark font-semibold text-sm px-6 py-3 rounded-full border border-black/15 hover:border-black/30 transition-colors"
              >
                Call (704) 989-6027
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
