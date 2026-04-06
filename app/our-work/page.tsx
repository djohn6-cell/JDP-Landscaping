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
  { src: "/images/projects/project-5.jpg", label: "Shrub trimming and yard cleanup" },
  { src: "/images/projects/project-6.jpg", label: "Property planting and design" },
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
          className="absolute inset-0 bg-[url('/images/projects/project-3-after.jpg')] bg-cover bg-center"
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
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-brand-green font-semibold text-sm tracking-widest uppercase mb-4">
              Real Results
            </p>
            <h2 className="font-heading font-black text-brand-dark text-3xl sm:text-4xl lg:text-5xl leading-tight mb-4">
              See the Difference
            </h2>
            <p className="text-brand-charcoal/70 text-base sm:text-lg">
              Real results from properties across Charlotte, Ballantyne,
              Matthews, and surrounding communities. No filters, no staging —
              just honest work.
            </p>
          </div>

          {/* Before/After pairs — side by side */}
          <div className="space-y-12 mb-16">
            {pairs.map((pair) => (
              <div key={pair.label} className="rounded-2xl overflow-hidden shadow-md bg-brand-cream">
                <div className="grid grid-cols-1 md:grid-cols-2">
                  {/* Before */}
                  <div className="relative">
                    <div className="aspect-[4/3] relative">
                      <Image
                        src={pair.before}
                        alt={`${pair.label} before — JDP Landscaping Charlotte NC`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                    <span className="absolute top-3 left-3 bg-brand-dark/70 backdrop-blur-sm text-white text-sm md:text-xs font-bold px-4 py-2 md:px-3 md:py-1.5 rounded-full uppercase tracking-wide">
                      Before
                    </span>
                  </div>
                  {/* After */}
                  <div className="relative">
                    <div className="aspect-[4/3] relative">
                      <Image
                        src={pair.after}
                        alt={`${pair.label} after — JDP Landscaping Charlotte NC`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                    <span className="absolute top-3 left-3 bg-brand-green/90 backdrop-blur-sm text-white text-sm md:text-xs font-bold px-4 py-2 md:px-3 md:py-1.5 rounded-full uppercase tracking-wide">
                      After
                    </span>
                  </div>
                </div>
                <div className="px-6 py-4">
                  <p className="font-heading font-bold text-brand-dark text-base">
                    {pair.label}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Project photo grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {singles.map((photo) => (
              <div
                key={photo.src}
                className="aspect-square rounded-xl overflow-hidden shadow-sm group"
              >
                <Image
                  src={photo.src}
                  alt={`${photo.label} — JDP Landscaping Charlotte NC`}
                  width={400}
                  height={400}
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
          <div className="rounded-2xl overflow-hidden shadow-xl aspect-video w-full max-w-4xl mx-auto">
            <video
              src="/videos/showcase-compressed.mp4"
              controls
              poster="/images/projects/project-3-after.jpg"
              preload="none"
              className="w-full h-full object-cover"
              aria-label="JDP Landscaping project showcase — Charlotte NC"
            />
          </div>
        </div>
      </section>

      {/* Craftsmanship Block */}
      <section className="py-14 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <p className="text-brand-green font-semibold text-sm tracking-widest uppercase mb-4">
                Our Approach
              </p>
              <h2 className="font-heading font-black text-brand-dark text-3xl sm:text-4xl leading-tight mb-6">
                Every Property Is Different
              </h2>
              <div className="space-y-4 text-brand-charcoal/70 text-base leading-relaxed">
                <p>
                  We take the time to understand what your space needs before we
                  start cutting, planting, or hauling. That attention is why our
                  work looks the way it does.
                </p>
                <p>
                  No cookie-cutter approaches. No rushing through to get to the
                  next job. We treat your property like it&apos;s ours — because
                  our reputation depends on every single yard we touch.
                </p>
              </div>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Link
                  href="/quote"
                  className="inline-flex items-center gap-2 bg-brand-green hover:bg-brand-green-mid text-white font-bold px-6 py-3.5 rounded-full transition-colors w-fit"
                >
                  Get a Free Quote
                </Link>
                <a
                  href="tel:+17049896027"
                  className="inline-flex items-center gap-2 text-brand-green border-2 border-brand-green hover:bg-brand-green hover:text-white font-semibold px-6 py-3.5 rounded-full transition-colors w-fit"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Call (704) 989-6027
                </a>
              </div>
            </div>
            <div className="aspect-[4/3] relative rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/images/projects/project-4.jpg"
                alt="JDP Landscaping craftsmanship — Charlotte NC"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Page CTA */}
      <section className="relative py-20 lg:py-28 overflow-hidden">
        <div
          className="absolute inset-0 bg-[url('/images/projects/project-1.jpg')] bg-cover bg-center"
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
