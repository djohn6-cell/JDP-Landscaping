import React from "react";
import Image from "next/image";
import Link from "next/link";

const services: {
  name: string;
  icon: React.ReactNode;
  img: string | null;
  imgAlt: string | null;
  beforeAfter?: {
    before: string;
    after: string;
    beforePos?: string;
    afterPos?: string;
    afterClassName?: string;
  };
}[] = [
  {
    name: "Trimming",
    icon: <TrimIcon />,
    img: null,
    imgAlt: "Shrub and hedge trimming — JDP Landscaping Charlotte NC",
    beforeAfter: {
      before: "/images/services/trimming-before.jpg",
      after: "/images/services/trimming-after.jpg",
    },
  },
  {
    name: "Mulching",
    icon: <MulchIcon />,
    img: "/images/projects/project-5.jpg",
    imgAlt: "Mulch bed installation — JDP Landscaping Charlotte NC",
  },
  {
    name: "Removal",
    icon: <RemoveIcon />,
    img: null,
    imgAlt: "Tree and shrub removal — JDP Landscaping Charlotte NC",
    beforeAfter: {
      before: "/images/services/removal-before-v2.jpg",
      after: "/images/services/removal-after-v2.jpg",
      beforePos: "center 40%",
      afterPos: "center 50%",
    },
  },
  {
    name: "Planting",
    icon: <PlantIcon />,
    img: null,
    imgAlt: "Garden planting — JDP Landscaping Charlotte NC",
    beforeAfter: {
      before: "/images/services/planting-before.jpg",
      after: "/images/services/planting-after.jpg",
    },
  },
  {
    name: "Cleanups",
    icon: <CleanupIcon />,
    img: null,
    imgAlt: "Property cleanup — JDP Landscaping Charlotte NC",
    beforeAfter: {
      before: "/images/services/cleanup-before.jpg",
      after: "/images/services/cleanup-after.jpg",
      beforePos: "center 40%",
      afterPos: "center 40%",
      afterClassName: "rotate-180",
    },
  },
];

export default function ServiceTeaser() {
  return (
    <section className="bg-brand-cream py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-brand-green">
            What We Do
          </p>
          <h2 className="mb-4 font-heading text-3xl font-black leading-tight text-brand-dark sm:text-4xl lg:text-5xl">
            Our Services at a Glance
          </h2>
          <p className="text-base text-brand-charcoal/70 sm:text-lg">
            From routine maintenance to full property transformations — and plenty more. If
            you don&apos;t see your job listed, just reach out.
          </p>
        </div>

        <div className="mb-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {services.map((service) => (
            <div
              key={service.name}
              className="group overflow-hidden rounded-2xl border border-black/5 bg-white shadow-sm transition-shadow duration-200 hover:shadow-md"
            >
              {service.beforeAfter ? (
                <div className="flex aspect-[4/3] overflow-hidden">
                  <div className="relative min-w-0 flex-1 overflow-hidden">
                    <Image
                      src={service.beforeAfter.before}
                      alt={`Before — ${service.name} — JDP Landscaping`}
                      width={600}
                      height={800}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      style={{ objectPosition: service.beforeAfter.beforePos ?? "center" }}
                      sizes="(max-width: 640px) 25vw, (max-width: 1024px) 17vw, 10vw"
                    />
                    <span className="absolute left-1.5 top-1.5 z-10 rounded-full bg-brand-dark/70 px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wide text-white">
                      Before
                    </span>
                  </div>
                  <div className="relative min-w-0 flex-1 overflow-hidden">
                    <Image
                      src={service.beforeAfter.after}
                      alt={`After — ${service.name} — JDP Landscaping`}
                      width={600}
                      height={800}
                      className={`h-full w-full object-cover transition-transform duration-500 group-hover:scale-105 ${service.beforeAfter.afterClassName ?? ""}`}
                      style={{ objectPosition: service.beforeAfter.afterPos ?? "center" }}
                      sizes="(max-width: 640px) 25vw, (max-width: 1024px) 17vw, 10vw"
                    />
                    <span className="absolute left-1.5 top-1.5 z-10 rounded-full bg-brand-green/90 px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wide text-white">
                      After
                    </span>
                  </div>
                </div>
              ) : service.img ? (
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={service.img}
                    alt={service.imgAlt ?? service.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                  />
                </div>
              ) : (
                <div className="flex aspect-[4/3] items-center justify-center bg-brand-dark">
                  <div className="scale-150 text-brand-green-light/40">{service.icon}</div>
                </div>
              )}
              <div className="flex items-center gap-2.5 px-4 py-3">
                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-brand-green/10 text-brand-green transition-colors group-hover:bg-brand-green/20">
                  {service.icon}
                </div>
                <p className="font-heading text-sm font-bold text-brand-dark">{service.name}</p>
              </div>
            </div>
          ))}

          <div className="overflow-hidden rounded-2xl border border-black/5 bg-white shadow-sm transition-shadow duration-200 hover:shadow-md">
            <div className="relative flex aspect-[4/3] flex-col items-center justify-center gap-2.5 bg-brand-dark px-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-green-light/20">
                <PlusIcon />
              </div>
              <p className="text-center text-xs leading-snug text-white/65">
                Not seeing your project?
                <br />
                Just ask.
              </p>
            </div>
            <div className="flex items-center gap-2.5 px-4 py-3">
              <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-brand-green/10 text-brand-green">
                <PlusIconSmall />
              </div>
              <p className="font-heading text-sm font-bold text-brand-dark">And More</p>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/our-work"
            className="inline-flex items-center gap-2 rounded-full bg-brand-green px-8 py-4 text-base font-bold text-white shadow-lg transition-colors hover:bg-brand-green-mid"
          >
            See Our Work
            <ArrowIcon />
          </Link>
          <a
            href="tel:+17049896027"
            className="inline-flex items-center gap-2 rounded-full border-2 border-brand-green px-8 py-4 text-base font-bold text-brand-green transition-colors hover:bg-brand-green hover:text-white"
          >
            <PhoneIcon />
            Call (704) 989-6027
          </a>
        </div>
      </div>
    </section>
  );
}

function TrimIcon() {
  return (
    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M14.121 14.121L19 19m-7-7l7-7m-7 7l-2.879 2.879M12 12L9.121 9.121m0 5.758a3 3 0 10-4.243 4.243 3 3 0 004.243-4.243zm0-5.758a3 3 0 10-4.243-4.243 3 3 0 004.243 4.243z"
      />
    </svg>
  );
}

function MulchIcon() {
  return (
    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
      />
    </svg>
  );
}

function RemoveIcon() {
  return (
    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
      />
    </svg>
  );
}

function PlantIcon() {
  return (
    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
      />
    </svg>
  );
}

function CleanupIcon() {
  return (
    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
      />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
      />
    </svg>
  );
}

function PlusIcon() {
  return (
    <svg
      className="h-5 w-5 text-brand-green-light"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 4v16m8-8H4"
      />
    </svg>
  );
}

function PlusIconSmall() {
  return (
    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 4v16m8-8H4"
      />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M17 8l4 4m0 0l-4 4m4-4H3"
      />
    </svg>
  );
}
