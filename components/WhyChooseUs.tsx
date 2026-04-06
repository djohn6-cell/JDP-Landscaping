const benefits = [
  {
    title: "Integrity over profit — every job, every time",
    detail: "We won't upsell you on what you don't need. We tell you what we see and give you an honest recommendation.",
  },
  {
    title: "We show up when we say we will",
    detail: "No guessing when we'll arrive. We respect your time the same way we'd want ours respected.",
  },
  {
    title: "Call even if you're not sure yet",
    detail: "You don't need to know exactly what service you need to call us. We'll come take a look and talk it through — no pressure.",
  },
  {
    title: "Built on referrals, not advertising",
    detail: "Most of our business comes from people telling their neighbors. That keeps us accountable to every single yard we touch.",
  },
  {
    title: "We treat your property like it's ours",
    detail: "Clean work, careful execution, and we leave your property better than we found it — every time.",
  },
  {
    title: "Fully insured — your property is protected",
    detail: "We carry full insurance on every job. You're never exposed to liability on your property when we're on site.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 lg:py-28 bg-brand-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left — header */}
          <div className="lg:sticky lg:top-24">
            <p className="text-brand-green-light font-semibold text-sm tracking-widest uppercase mb-4">
              Why JDP
            </p>
            <h2 className="font-heading font-black text-white text-3xl sm:text-4xl lg:text-5xl leading-tight mb-6">
              We Do the Work Others Cut Corners On
            </h2>
            <p className="text-white/70 text-base sm:text-lg leading-relaxed mb-8">
              Charlotte homeowners trust us with their most valuable outdoor
              spaces. Here&apos;s why they keep calling back — and keep sending
              us their neighbors.
            </p>
            <a
              href="/quote"
              className="inline-flex items-center gap-2 bg-brand-green hover:bg-brand-green-mid text-white font-bold px-6 py-3.5 rounded-full transition-colors"
            >
              Get a Free Quote
            </a>
          </div>

          {/* Right — benefit list */}
          <div className="space-y-6">
            {benefits.map((benefit, i) => (
              <div
                key={i}
                className="flex gap-4 p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
              >
                <div className="mt-0.5 shrink-0">
                  <div className="w-6 h-6 rounded-full bg-brand-green flex items-center justify-center">
                    <CheckIcon />
                  </div>
                </div>
                <div>
                  <p className="font-heading font-bold text-white text-base mb-1">
                    {benefit.title}
                  </p>
                  <p className="text-white/60 text-sm leading-relaxed">
                    {benefit.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function CheckIcon() {
  return (
    <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
    </svg>
  );
}
