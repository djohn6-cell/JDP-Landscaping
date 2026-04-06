const differentiators = [
  {
    title: "We show up when we say we will",
    detail: "We respect your time. No guessing when we'll arrive.",
    icon: <ClockIcon />,
  },
  {
    title: "Built on referrals, not advertising",
    detail: "Most of our business comes from neighbors telling neighbors.",
    icon: <ReferralIcon />,
  },
  {
    title: "Call even if you're not sure yet",
    detail: "You don't need to know exactly what you need. We'll come take a look — no pressure.",
    icon: <ChatIcon />,
  },
];

const reviews = [
  {
    platform: "google",
    author: "Leigh Ann Childs",
    rating: 5,
    body: "James and his crew spread 20 yards of mulch and pine straw last weekend and did a great job. James was responsive and his crew was eager to work. I would definitely call JDP again. Very fair pricing!",
    linkLabel: null,
    linkHref: null,
  },
  {
    platform: "nextdoor",
    author: "Verified Neighbors on Nextdoor",
    rating: 5,
    body: "JDP Landscaping comes highly recommended for their excellent lawn service, mulch installation, and home care. Customers praise owner James Picerno for his hard work, professionalism, and great ideas. His crew is known for their punctuality, meticulous work, and courteous demeanor.",
    linkLabel: "See all recommendations →",
    linkHref: "https://nextdoor.com/pages/jdp-landscaping-waxhaw-nc/",
  },
];

export default function SocialProof() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-brand-green font-semibold text-sm tracking-widest uppercase mb-3">
            Reviews
          </p>
          <h2 className="font-heading font-black text-gray-900 text-3xl sm:text-4xl lg:text-5xl leading-tight">
            What Your Neighbors Are Saying
          </h2>
          <p className="text-gray-500 text-base sm:text-lg mt-4 max-w-xl mx-auto">
            Rated 5 stars on Google and recommended by 74 neighbors on Nextdoor.
          </p>
        </div>

        {/* Review cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {reviews.map((review) => (
            <div
              key={review.author}
              className="relative flex flex-col gap-5 p-8 rounded-3xl border border-gray-200 bg-gray-50 shadow-sm hover:shadow-md transition-shadow"
            >
              {/* Platform badge */}
              <div className="flex items-center justify-between">
                <PlatformBadge platform={review.platform} />
                <StarRow rating={review.rating} />
              </div>

              {/* Quote */}
              <blockquote className="text-gray-700 text-base leading-relaxed flex-1">
                &ldquo;{review.body}&rdquo;
              </blockquote>

              {/* Author + link */}
              <div className="flex items-center justify-between gap-4 pt-2 border-t border-gray-200">
                <p className="text-gray-900 font-semibold text-sm">{review.author}</p>
                {review.linkHref && (
                  <a
                    href={review.linkHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand-green hover:text-brand-green-mid text-sm font-medium transition-colors shrink-0"
                  >
                    {review.linkLabel}
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Condensed differentiators — why they keep coming back */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {differentiators.map((d) => (
            <div
              key={d.title}
              className="flex items-start gap-3 p-5 rounded-2xl bg-brand-cream border border-black/5"
            >
              <div className="text-brand-green mt-0.5 shrink-0">{d.icon}</div>
              <div>
                <p className="font-heading font-bold text-brand-dark text-sm leading-snug mb-1">
                  {d.title}
                </p>
                <p className="text-brand-charcoal/60 text-xs leading-relaxed">{d.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ClockIcon() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}

function ReferralIcon() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  );
}

function ChatIcon() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
    </svg>
  );
}

function StarRow({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: rating }).map((_, i) => (
        <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

function PlatformBadge({ platform }: { platform: string }) {
  if (platform === "google") {
    return (
      <div className="flex items-center gap-1.5">
        <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none" aria-label="Google">
          <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
          <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
          <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
          <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
        </svg>
        <span className="text-xs font-semibold text-gray-500">Google Review</span>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-1.5">
      <svg className="w-5 h-5 text-[#00B246] shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-label="Nextdoor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 13H11V9h2v6zm0-8H11V5h2v2z"/>
      </svg>
      <span className="text-xs font-semibold text-gray-500">Nextdoor</span>
    </div>
  );
}
