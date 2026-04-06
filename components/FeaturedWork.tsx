import Image from "next/image";
import Link from "next/link";

export default function FeaturedWork() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-brand-green font-semibold text-sm tracking-widest uppercase mb-4">
            Recent Project
          </p>
          <h2 className="font-heading font-black text-brand-dark text-3xl sm:text-4xl lg:text-5xl leading-tight mb-4">
            Real Results, No Filters
          </h2>
          <p className="text-brand-charcoal/70 text-base sm:text-lg">
            See the difference quality landscaping makes.
          </p>
        </div>

        {/* Featured before/after — side by side */}
        <div className="rounded-2xl overflow-hidden shadow-md bg-brand-cream mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Before */}
            <div className="relative">
              <div className="aspect-[4/3] relative">
                <Image
                  src="/images/projects/project-2-before.jpg"
                  alt="Property transformation before — JDP Landscaping Charlotte NC"
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
                  src="/images/projects/project-2-after.jpg"
                  alt="Property transformation after — JDP Landscaping Charlotte NC"
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
              Property Transformation
            </p>
          </div>
        </div>

        {/* Thumbnail row */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-10">
          {[
            { src: "/images/projects/project-1.jpg", alt: "Project work" },
            { src: "/images/projects/project-4.jpg", alt: "Outdoor space" },
            { src: "/images/projects/project-6.jpg", alt: "Landscaping" },
          ].map((photo) => (
            <div
              key={photo.src}
              className="aspect-square rounded-xl overflow-hidden shadow-sm group"
            >
              <Image
                src={photo.src}
                alt={`${photo.alt} — JDP Landscaping Charlotte NC`}
                width={400}
                height={400}
                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/our-work"
            className="inline-flex items-center gap-2 bg-brand-green hover:bg-brand-green-mid text-white font-bold text-base px-8 py-4 rounded-full shadow-lg transition-colors"
          >
            View All Projects
            <ArrowIcon />
          </Link>
        </div>
      </div>
    </section>
  );
}

function ArrowIcon() {
  return (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
    </svg>
  );
}
