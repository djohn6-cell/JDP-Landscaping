const services = [
  {
    name: "Trimming",
    description: "Precise cuts that keep your property looking sharp and well-maintained.",
    icon: <TrimIcon />,
  },
  {
    name: "Mulching",
    description: "Healthy beds, clean edges, and lasting results that protect your plants.",
    icon: <MulchIcon />,
  },
  {
    name: "Removal",
    description: "Trees, shrubs, and debris — cleared cleanly and hauled away.",
    icon: <RemoveIcon />,
  },
  {
    name: "Planting",
    description: "The right plants in the right places, chosen for your soil and space.",
    icon: <PlantIcon />,
  },
  {
    name: "Cleanups",
    description: "Seasonal and post-storm cleanups that leave your property looking fresh and well-kept.",
    icon: <DecorIcon />,
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 lg:py-28 bg-brand-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-brand-green font-semibold text-sm tracking-widest uppercase mb-4">
            What We Do
          </p>
          <h2 className="font-heading font-black text-brand-dark text-3xl sm:text-4xl lg:text-5xl leading-tight mb-4">
            Full-Service Landscaping for Your Property
          </h2>
          <p className="text-brand-charcoal/70 text-base sm:text-lg">
            From routine maintenance to full property transformations — we handle it.
          </p>
        </div>

        {/* Service cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.slice(0, 4).map((service) => (
            <div
              key={service.name}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow border border-black/5 group"
            >
              <div className="w-12 h-12 bg-brand-green/10 group-hover:bg-brand-green/20 rounded-xl flex items-center justify-center text-brand-green mb-5 transition-colors">
                {service.icon}
              </div>
              <h3 className="font-heading font-bold text-brand-dark text-xl mb-2">
                {service.name}
              </h3>
              <p className="text-brand-charcoal/70 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}

          {/* CTA card */}
          <div className="bg-brand-dark rounded-2xl p-8 flex flex-col justify-between">
            <div>
              <h3 className="font-heading font-bold text-white text-xl mb-2">
                Not sure where to start?
              </h3>
              <p className="text-white/70 text-sm leading-relaxed">
                Give us a call. We&apos;re real people who answer, and we&apos;re happy to talk through what your property needs.
              </p>
            </div>
            <a
              href="tel:+17049896027"
              className="mt-6 flex items-center gap-2 bg-brand-green hover:bg-brand-green-mid text-white font-bold text-sm px-5 py-3 rounded-full transition-colors w-fit"
            >
              <PhoneIcon />
              Call Now
            </a>
          </div>

          {/* Cleanups */}
          {services.slice(4).map((service) => (
            <div
              key={service.name}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow border border-black/5 group"
            >
              <div className="w-12 h-12 bg-brand-green/10 group-hover:bg-brand-green/20 rounded-xl flex items-center justify-center text-brand-green mb-5 transition-colors">
                {service.icon}
              </div>
              <h3 className="font-heading font-bold text-brand-dark text-xl mb-2">
                {service.name}
              </h3>
              <p className="text-brand-charcoal/70 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TrimIcon() {
  return (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.121 14.121L19 19m-7-7l7-7m-7 7l-2.879 2.879M12 12L9.121 9.121m0 5.758a3 3 0 10-4.243 4.243 3 3 0 004.243-4.243zm0-5.758a3 3 0 10-4.243-4.243 3 3 0 004.243 4.243z" />
    </svg>
  );
}

function MulchIcon() {
  return (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
    </svg>
  );
}

function RemoveIcon() {
  return (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
    </svg>
  );
}

function PlantIcon() {
  return (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
    </svg>
  );
}

function DecorIcon() {
  return (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
  );
}
