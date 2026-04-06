import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Services from "@/components/Services";

export const metadata: Metadata = {
  title: "Landscaping Projects & Services in Charlotte NC | JDP Landscaping",
  description:
    "See our landscaping services and real project results in Charlotte, Marvin, Waxhaw, and surrounding areas. Trimming, mulching, planting, removal, and more. Free quotes — call (704) 989-6027.",
  alternates: { canonical: "/our-work" },
  openGraph: {
    title: "Landscaping Projects & Services in Charlotte NC | JDP Landscaping",
    description:
      "Real landscaping results from real Charlotte properties. See what we do and how we do it.",
    url: "/our-work",
    images: [
      {
        url: "/images/projects/project-2-after.jpg",
        width: 1200,
        height: 630,
        alt: "JDP Landscaping project transformation — Charlotte, NC",
      },
    ],
  },
};

const pairs = [
  {
    before: "/images/projects/project-2-before.jpg",
    after: "/images/projects/project-2-after.jpg",
    label: "Property Transformation",
  },
  {
    before: "/images/projects/project-3-before.jpg",
    after: "/images/projects/project-3-after.jpg",
    label: "Landscaping & Cleanup",
  },
];

const singles = [
  { src: "/images/projects/project-1.jpg", label: "Mulch bed installation and edging" },
  { src: "/images/projects/project-4.jpg", label: "Backyard patio area landscaping" },
  { src: "/images/projects/project-5.jpg", label: "Mulch island and landscape bed" },
  { src: "/images/projects/project-7.jpg", label: "Lawn cleanup and yard care" },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "JDP Landscaping Services",
  itemListElement: [
    { "@type": "Service", position: 1, serviceType: "Lawn Trimming", provider: { "@type": "LocalBusiness", name: "JDP Landscaping" }, areaServed: ["Charlotte, NC", "Marvin, NC", "Waxhaw, NC"] },
    { "@type": "Service", position: 2, serviceType: "Landscaping Mulching", provider: { "@type": "LocalBusiness", name: "JDP Landscaping" }, areaServed: ["Charlotte, NC", "Marvin, NC", "Waxhaw, NC"] },
    { "@type": "Service", position: 3, serviceType: "Tree and Shrub Removal", provider: { "@type": "LocalBusiness", name: "JDP Landscaping" }, areaServed: ["Charlotte, NC", "Marvin, NC", "Waxhaw, NC"] },
    { "@type": "Service", position: 4, serviceType: "Garden Planting", provider: { "@type": "LocalBusiness", name: "JDP Landscaping" }, areaServed: ["Charlotte, NC", "Marvin, NC", "Waxhaw, NC"] },
    { "@type": "Service", position: 5, serviceType: "Yard Cleanup", provider: { "@type": "LocalBusiness", name: "JDP Landscaping" }, areaServed: ["Charlotte, NC", "Marvin, NC", "Waxhaw, NC"] },
  ],
};

export default function OurWorkPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      {/* Page Hero */}
      <section className="relative pt-40 pb-20 lg:pt-48 lg:pb-28 overflow-hidden">
        <div
          className="absolute inset-0 bg-[url('/images/top.png')] bg-cover bg-center"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-brand-dark/85" aria-hidden="true" />
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-brand-green-light font-semibold text-sm tracking-widest uppercase mb-4">
            Our Work
          </p>
          <h1 className="font-heading font-black text-white text-3xl sm:text-4xl lg:text-5xl leading-tight mb-4">
            Landscaping Services in Charlotte, NC
          </h1>
          <p className="text-white/70 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
            From trimming and mulching to full property transformations —
            serving Charlotte, Marvin, Waxhaw, and surrounding areas.
          </p>
        </div>
      </section>

      {/* Services (reused component) */}
      <Services />

      {/* Before & After Gallery — side-by-side */}
      <section className="py-10 lg:py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-8">
            <p className="text-brand-green font-semibold text-sm tracking-widest uppercase mb-3">
              Real Results
            </p>
            <h2 className="font-heading font-black text-brand-dark text-2xl sm:text-3xl lg:text-4xl leading-tight mb-3">
              See the Difference
            </h2>
            <p className="text-brand-charcoal/70 text-sm sm:text-base">
              Real results from properties across Charlotte, Ballantyne,
              Matthews, and surrounding communities.
            </p>
          </div>

          {/* Before/After pairs — side by side */}
          <div className="space-y-5 mb-8">
            {pairs.map((pair) => (
              <div key={pair.label} className="rounded-xl overflow-hidden shadow-sm bg-brand-cream">
                <div className="grid grid-cols-1 md:grid-cols-2">
                  {/* Before */}
                  <div className="relative">
                    <div className="aspect-[16/9] relative">
                      <Image
                        src={pair.before}
                        alt={`${pair.label} before — JDP Landscaping Charlotte NC`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                    <span className="absolute top-2 left-2 bg-brand-dark/70 backdrop-blur-sm text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                      Before
                    </span>
                  </div>
                  {/* After */}
                  <div className="relative">
                    <div className="aspect-[16/9] relative">
                      <Image
                        src={pair.after}
                        alt={`${pair.label} after — JDP Landscaping Charlotte NC`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                    <span className="absolute top-2 left-2 bg-brand-green/90 backdrop-blur-sm text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                      After
                    </span>
                  </div>
                </div>
                <div className="px-5 py-3 flex items-center justify-between">
                  <p className="font-heading font-bold text-brand-dark text-sm">
                    {pair.label}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Project photo grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {singles.map((photo) => (
              <div
                key={photo.src}
                className="aspect-[4/3] rounded-xl overflow-hidden shadow-sm group"
              >
                <Image
                  src={photo.src}
                  alt={`${photo.label} — JDP Landscaping Charlotte NC`}
                  width={400}
                  height={300}
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Showcase Video */}
      <section className="py-14 lg:py-20 bg-brand-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-brand-charcoal/70 text-xs uppercase tracking-widest mb-2">
              Watch Our Work
            </p>
            <h2 className="font-heading font-black text-brand-dark text-3xl sm:text-4xl">
              Quality You Can See in Motion
            </h2>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-xl aspect-9/16 w-full max-w-sm mx-auto">
            <video
              src="/videos/showcase.mp4"
              controls
              preload="none"
              className="w-full h-full object-cover"
              aria-label="JDP Landscaping project showcase — Charlotte NC"
            />
          </div>
        </div>
      </section>

      {/* Page CTA */}
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
            Like What You See?
          </h2>
          <p className="text-white/70 text-base sm:text-lg max-w-xl mx-auto leading-relaxed mb-10">
            Get a free quote for your property. No contracts, no pressure — just
            honest work.
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
              className="flex items-center gap-2 text-white border border-white/30 hover:border-white/60 font-semibold text-base px-8 py-4 rounded-full transition-colors w-full sm:w-auto justify-center"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              Call (704) 989-6027
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
