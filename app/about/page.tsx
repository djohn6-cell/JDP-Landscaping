import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About JDP Landscaping | Charlotte, Marvin & Waxhaw NC",
  description:
    "JDP Landscaping is built on honesty, referrals, and doing right by our customers. Honest work, fair prices, no pressure — serving Charlotte, Marvin, Waxhaw, and surrounding areas.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About JDP Landscaping | Charlotte, Marvin & Waxhaw NC",
    description:
      "Honest work. Fair prices. No pressure. Learn about the people and values behind JDP Landscaping.",
    url: "/about",
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

const values = [
  {
    title: "Built on Referrals",
    body: "We grow by doing work worth talking about. When a neighbor recommends us, that's the result we're working toward on every single job.",
    icon: <StarIcon />,
  },
  {
    title: "No Pressure, Ever",
    body: "Honest assessments and fair pricing — no inflated estimates, no unnecessary add-ons. You decide what makes sense for your property.",
    icon: <HandIcon />,
  },
  {
    title: "Fully Insured",
    body: "Every job we take on is covered. Your property is protected from start to finish so you can hire with complete confidence.",
    icon: <ShieldIcon />,
  },
];

export default function AboutPage() {
  return (
    <main>
      {/* Page hero */}
      <section className="relative pt-40 pb-20 lg:pt-48 lg:pb-28 overflow-hidden">
        <div
          className="absolute inset-0 bg-[url('/images/back1.png')] bg-cover bg-[center_60%]"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-brand-dark/85" aria-hidden="true" />
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-brand-green-light font-semibold text-sm tracking-widest uppercase mb-4">
            About Us
          </p>
          <h1 className="font-heading font-black text-white text-3xl sm:text-4xl lg:text-5xl leading-tight mb-4">
            A Landscaping Company Built on Doing Right by You
          </h1>
          <p className="text-white/70 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
            Honest work. Fair prices. No pressure. Serving Charlotte, Marvin,
            Waxhaw, and surrounding communities.
          </p>
        </div>
      </section>

      {/* Owner story */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Owner photo */}
            <div className="relative">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/owner.jpeg"
                  alt="JDP Landscaping owner — Charlotte, NC"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
              </div>
              <div
                className="absolute -bottom-4 -right-4 w-32 h-32 bg-brand-green rounded-2xl -z-10"
                aria-hidden="true"
              />
            </div>

            {/* Story */}
            <div>
              <p className="text-brand-green font-semibold text-sm tracking-widest uppercase mb-4">
                Our Story
              </p>
              <h2 className="font-heading font-black text-brand-dark text-3xl sm:text-4xl leading-tight mb-6">
                The Business That Grew One Referral at a Time
              </h2>
              <div className="space-y-4 text-brand-charcoal/80 text-base sm:text-lg leading-relaxed">
                <p>
                  JDP Landscaping was built on referrals — and that&apos;s not
                  an accident. When we do good work and treat people honestly,
                  they tell their neighbors. That&apos;s how we grow, and it
                  keeps us accountable to every yard we touch.
                </p>
                <p>
                  Whether you know exactly what you need or just want someone to
                  come take a look, we&apos;re easy to reach and happy to help.
                  No overselling. No pressure. Just honest work at a fair price.
                </p>
                <p>
                  We work with homeowners, property managers, and anyone who
                  takes pride in their outdoor space. From routine maintenance to
                  full property transformations — we show up, we communicate,
                  and we do the job right.
                </p>
              </div>

              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:+17049896027"
                  className="inline-flex items-center gap-2 bg-brand-green hover:bg-brand-green-mid text-white font-bold px-7 py-4 rounded-full transition-colors w-fit"
                >
                  <PhoneIcon />
                  Call (704) 989-6027
                </a>
                <Link
                  href="/quote"
                  className="inline-flex items-center gap-2 text-brand-green border border-brand-green hover:bg-brand-cream font-semibold px-7 py-4 rounded-full transition-colors w-fit"
                >
                  Request a Free Quote
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 lg:py-24 bg-brand-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-12">
            <p className="text-brand-green font-semibold text-sm tracking-widest uppercase mb-3">
              How We Work
            </p>
            <h2 className="font-heading font-black text-brand-dark text-3xl sm:text-4xl leading-tight">
              What You Can Expect from JDP
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((v) => (
              <div key={v.title} className="bg-white rounded-2xl p-8 shadow-sm">
                <div className="text-brand-green mb-5">{v.icon}</div>
                <h3 className="font-heading font-black text-brand-dark text-xl mb-3">
                  {v.title}
                </h3>
                <p className="text-brand-charcoal/70 text-base leading-relaxed">
                  {v.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
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
            Ready to Get a Quote?
          </h2>
          <p className="text-white/70 text-base sm:text-lg max-w-xl mx-auto leading-relaxed mb-10">
            Free estimates, no contracts, no pressure. Just reach out — we&apos;re
            easy to talk to.
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
              className="inline-flex items-center gap-2 text-white border border-white/30 hover:border-white/60 font-semibold text-base px-8 py-4 rounded-full transition-colors w-full sm:w-auto justify-center"
            >
              <PhoneIconSmall />
              Call (704) 989-6027
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

function StarIcon() {
  return (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  );
}

function HandIcon() {
  return (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m-4 6a9 9 0 110-18 9 9 0 010 18z" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
  );
}

function PhoneIconSmall() {
  return (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
  );
}
