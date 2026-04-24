/* ── Data ── */

interface Review {
  platform: "google" | "nextdoor";
  author: string;
  neighborhood?: string;
  timestamp?: string;
  body: string;
  avatarColor: string;
  likes: number;
  comments: number;
  reply?: string;
  image?: string;
}

const reviews: Review[] = [
  {
    platform: "nextdoor",
    author: "Vickie Carrai",
    neighborhood: "Lake Forest Preserve",
    body: "Hey, this is my go to guy for anything landscaping. He always does my bush trimming too. Today he and his crew spread my 17 cubic yards of mulch. It looks amazing! They came on time and worked so hard to get it done. They cleaned up everything so you didn\u2019t even know there was a pile of mulch on my driveway. James is hardworking, conscientious, pays attention to detail and very fair in pricing!",
    avatarColor: "bg-purple-500",
    likes: 38,
    comments: 4,
    reply:
      "Beautiful results! Thank you so much for making this post! \ud83d\ude4f",
    image: "/images/reviews/vickie-carrai.png",
  },
  {
    platform: "nextdoor",
    author: "Jennifer M.",
    neighborhood: "Bridle Path Estates",
    body: "James and his crew removed 10+ dead shrubs, weeded our flower beds, trimmed extra shrubs, disposed of yard debris, and spread 30 yards of mulch in a thorough and efficient manner. They were prompt, detailed, and quite charming with my 3yo son who wants to join their work crew.",
    avatarColor: "bg-blue-600",
    likes: 24,
    comments: 4,
    reply:
      "Thanks so much for everything. It was my pleasure to do the work for you.",
    image: "/images/reviews/jennifer-m.png",
  },
  {
    platform: "google",
    author: "Leigh Ann Childs",
    body: "James and his crew spread 20 yards of mulch and pine straw last weekend and did a great job. James was responsive and his crew was eager to work. I would definitely call JDP again. Very fair pricing!",
    avatarColor: "bg-sky-500",
    likes: 0,
    comments: 0,
  },
  {
    platform: "nextdoor",
    author: "Steven Reynolds",
    neighborhood: "Canterfield Creek",
    timestamp: "Jun 2024",
    body: "James and his crew did a fantastic job mulching my beds and pruning my trees and shrubs. Very professional and thorough. Very prompt and courteous. I highly recommend JDP Landscaping.",
    avatarColor: "bg-amber-600",
    likes: 11,
    comments: 1,
  },
  {
    platform: "nextdoor",
    author: "Mary Purser",
    neighborhood: "Kensington Place",
    timestamp: "Sep 2023",
    body: "I hired JDP landscaping to install mulch, weed, and trim hedges. James walked me through the entire process and communicated promptly throughout. Despite weather problems his crew was determined to get the job done and the price was reasonable. I highly recommend them!",
    avatarColor: "bg-indigo-500",
    likes: 10,
    comments: 2,
  },
  {
    platform: "nextdoor",
    author: "Amy Miller",
    neighborhood: "Weddington Chase",
    timestamp: "Jun 2024",
    body: "JDP did a fantastic job getting our dead shrubs handled and placing mulch. So thorough and professional. Highly recommend!!",
    avatarColor: "bg-rose-500",
    likes: 9,
    comments: 2,
  },
  {
    platform: "nextdoor",
    author: "Paul Chemmanoor",
    neighborhood: "Weddington Chase",
    timestamp: "Apr 2025",
    body: "I have worked with James for three years to get our yard mulched. He does an excellent job and was very professional and rescheduled the work to deal with rainy weather in a proactive manner. Highly recommended.",
    avatarColor: "bg-teal-500",
    likes: 8,
    comments: 1,
  },
  {
    platform: "nextdoor",
    author: "Janine DAndrea",
    neighborhood: "Ardrey",
    timestamp: "Oct 2023",
    body: "I needed some \u201Cfall clean-up\u201D for my yard and worked with James Picerno from JDP Landscaping. Good work/good pricing/good communication. Please consider for your yard needs.",
    avatarColor: "bg-gray-600",
    likes: 5,
    comments: 1,
  },
];

const differentiators = [
  {
    title: "We show up when we say we will",
    detail: "We respect your time. No guessing when we\u2019ll arrive.",
    icon: <ClockIcon />,
  },
  {
    title: "Competitive pricing",
    detail: "Fair quotes, clear value, no surprises.",
    icon: <TagIcon />,
  },
  {
    title: "Call even if you\u2019re not sure yet",
    detail:
      "You don\u2019t need to know exactly what you need. We\u2019ll come take a look \u2014 no pressure.",
    icon: <ChatIcon />,
  },
];

/* ── Main Component ── */

export default function SocialProof() {
  return (
    <section className="bg-white py-12 lg:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header — title left, stats right */}
        <div className="mb-8 flex flex-col gap-6 lg:mb-10 lg:flex-row lg:items-end lg:justify-between">
          {/* Left — heading */}
          <div className="shrink-0">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-brand-green-light">
              Reviews
            </p>
            <h2 className="font-heading text-3xl font-black leading-tight text-gray-900 sm:text-4xl lg:text-[2.75rem]">
              What Your Neighbors
              <br className="hidden sm:block" /> Are Saying
            </h2>
          </div>

          {/* Right — stats + trophies */}
          <div className="flex flex-col items-start gap-3 lg:items-end">
            {/* Stats row */}
            <div className="flex items-end gap-0">
              {/* Google rating */}
              <div className="pr-4 sm:pr-5 lg:border-r lg:border-gray-200 lg:pr-6">
                <p className="text-2xl font-black text-gray-900 sm:text-3xl">5.0</p>
                <div className="mt-0.5 flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg
                      key={i}
                      className="h-3 w-3 text-yellow-400 sm:h-3.5 sm:w-3.5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      aria-hidden="true"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="mt-1 text-[10px] text-gray-400 sm:text-xs">on Google</p>
              </div>

              {/* Nextdoor favorites */}
              <div className="border-l border-gray-200 px-4 sm:px-5 lg:border-r lg:px-6">
                <p className="text-2xl font-black text-gray-900 sm:text-3xl">91</p>
                <p className="mt-1 text-[10px] leading-tight text-gray-400 sm:text-xs">
                  Favorites
                  <br />
                  on Nextdoor
                </p>
              </div>

              {/* Neighborhood Fave count */}
              <div className="border-l border-gray-200 pl-4 sm:pl-5 lg:px-6">
                <p className="text-2xl font-black text-gray-900 sm:text-3xl">
                  4<span className="text-lg sm:text-xl">&times;</span>
                </p>
                <p className="mt-1 text-[10px] leading-tight text-gray-400 sm:text-xs">
                  Neighborhood
                  <br />
                  Fave
                </p>
              </div>
            </div>

            {/* Trophy badges — own row */}
            <div className="flex items-center gap-3">
              <div className="flex gap-1.5">
                {[2025, 2024, 2023, 2022].map((year) => (
                  <div
                    key={year}
                    className="flex h-11 w-11 flex-col items-center justify-center rounded-full border-2 border-gray-300"
                  >
                    <TrophyIcon />
                    <span className="mt-px text-[8px] font-bold leading-none text-gray-400">
                      {year}
                    </span>
                  </div>
                ))}
              </div>
              <div className="hidden sm:block">
                <p className="text-sm font-semibold text-gray-900">
                  Neighborhood Fave
                </p>
                <p className="text-xs text-gray-400">
                  4 years running on Nextdoor
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="mb-8 border-t border-gray-100 lg:mb-10" />

        {/* Review cards — 2-col on md+ */}
        <div className="mx-auto grid max-w-5xl grid-cols-1 items-start gap-4 md:grid-cols-2 md:gap-5">
          {reviews.map((review) => (
            <ReviewCard key={review.author} review={review} />
          ))}
        </div>

        {/* Differentiator chips */}
        <div className="mx-auto mt-6 grid max-w-5xl grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-4">
          {differentiators.map((d) => (
            <div
              key={d.title}
              className="flex items-start gap-2.5 rounded-2xl border border-black/5 bg-brand-cream p-4"
            >
              <div className="mt-0.5 shrink-0 text-brand-green-light">
                {d.icon}
              </div>
              <div>
                <p className="text-[13px] font-bold leading-snug text-brand-dark">
                  {d.title}
                </p>
                <p className="mt-0.5 text-[11px] leading-snug text-brand-charcoal/55">
                  {d.detail}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Review Card ── */

function ReviewCard({ review }: { review: Review }) {
  const initial = review.author.charAt(0);

  return (
    <div className="rounded-xl border border-gray-200 bg-white p-4 sm:p-5">
      {/* Post header */}
      <div className="flex items-start gap-3">
        {/* Avatar */}
        <div
          className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-sm font-bold text-white ${review.avatarColor}`}
        >
          {initial}
        </div>

        {/* Name + meta */}
        <div className="min-w-0 flex-1">
          <p className="text-sm font-semibold text-gray-900">
            {review.author}
          </p>
          <div className="flex items-center gap-1 text-xs text-gray-400">
            {review.neighborhood && (
              <>
                <span>{review.neighborhood}</span>
                {review.timestamp && <span>&middot;</span>}
              </>
            )}
            {review.timestamp && <span>{review.timestamp}</span>}
            {review.platform === "google" && (
              <>
                {review.neighborhood && <span>&middot;</span>}
                <GlobeIcon />
              </>
            )}
          </div>
        </div>

        {/* Platform icon + dots */}
        <div className="flex shrink-0 items-center gap-2">
          <PlatformIcon platform={review.platform} />
          <DotsIcon />
        </div>
      </div>

      {/* Body */}
      <p className="mt-3 text-sm leading-relaxed text-gray-700">
        {review.body}
      </p>

      {/* Attached image */}
      {review.image && (
        <div className="mt-3 overflow-hidden rounded-lg">
          <img
            src={review.image}
            alt={`Work by JDP Landscaping — posted by ${review.author}`}
            className="max-h-64 w-full object-cover sm:max-h-80"
            loading="lazy"
          />
        </div>
      )}

      {/* JDP reply */}
      {review.reply && (
        <div className="ml-4 mt-3 border-l-2 border-brand-green-light/30 pl-3">
          <div className="flex items-center gap-2">
            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-brand-green text-[10px] font-bold text-white">
              J
            </div>
            <span className="text-xs font-semibold text-gray-700">
              JDP Landscaping
            </span>
          </div>
          <p className="mt-1 text-xs leading-relaxed text-gray-500">
            {review.reply}
          </p>
        </div>
      )}

      {/* Action bar */}
      <div className="mt-3 flex items-center gap-5 border-t border-gray-100 pt-3">
        {review.likes > 0 ? (
          <span className="flex items-center gap-1.5 text-xs text-gray-400">
            <HeartIcon />
            {review.likes}
          </span>
        ) : (
          <span className="flex items-center gap-1.5 text-xs text-gray-400">
            <HeartIcon />
          </span>
        )}
        {review.comments > 0 ? (
          <span className="flex items-center gap-1.5 text-xs text-gray-400">
            <CommentIcon />
            {review.comments}
          </span>
        ) : (
          <span className="flex items-center gap-1.5 text-xs text-gray-400">
            <CommentIcon />
          </span>
        )}
        <span className="flex items-center gap-1.5 text-xs text-gray-400">
          <ShareIcon />
        </span>
      </div>
    </div>
  );
}

/* ── Icons ── */

function TrophyIcon() {
  return (
    <svg
      className="h-3.5 w-3.5 text-gray-400"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M6 9H4.5a2.5 2.5 0 010-5H6" />
      <path d="M18 9h1.5a2.5 2.5 0 000-5H18" />
      <path d="M4 22h16" />
      <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20 7 22" />
      <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20 17 22" />
      <path d="M18 2H6v7a6 6 0 0012 0V2z" />
    </svg>
  );
}

function PlatformIcon({ platform }: { platform: string }) {
  if (platform === "google") {
    return (
      <svg
        className="h-4 w-4 shrink-0"
        viewBox="0 0 24 24"
        fill="none"
        aria-label="Google"
      >
        <path
          d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
          fill="#4285F4"
        />
        <path
          d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
          fill="#34A853"
        />
        <path
          d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"
          fill="#FBBC05"
        />
        <path
          d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
          fill="#EA4335"
        />
      </svg>
    );
  }

  return (
    <svg
      className="h-4 w-4 shrink-0 text-[#00B246]"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-label="Nextdoor"
    >
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 13H11V9h2v6zm0-8H11V5h2v2z" />
    </svg>
  );
}

function HeartIcon() {
  return (
    <svg
      className="h-4 w-4"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
      />
    </svg>
  );
}

function CommentIcon() {
  return (
    <svg
      className="h-4 w-4"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 01-.923 1.785A5.969 5.969 0 006 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337z"
      />
    </svg>
  );
}

function ShareIcon() {
  return (
    <svg
      className="h-4 w-4"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
      />
    </svg>
  );
}

function DotsIcon() {
  return (
    <svg
      className="h-4 w-4 text-gray-300"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <circle cx={12} cy={5} r={1.5} />
      <circle cx={12} cy={12} r={1.5} />
      <circle cx={12} cy={19} r={1.5} />
    </svg>
  );
}

function GlobeIcon() {
  return (
    <svg
      className="h-3 w-3 text-gray-400"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      aria-hidden="true"
    >
      <circle cx={12} cy={12} r={10} />
      <path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg
      className="h-[18px] w-[18px]"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  );
}

function TagIcon() {
  return (
    <svg
      className="h-[18px] w-[18px]"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M7 7h.01M7 3h5a1.99 1.99 0 011.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.99 1.99 0 013 12V7a4 4 0 014-4z"
      />
    </svg>
  );
}

function ChatIcon() {
  return (
    <svg
      className="h-[18px] w-[18px]"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
      />
    </svg>
  );
}
