import Reveal from "@/components/Reveal";
import CountUp from "@/components/CountUp";

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
    body: "Hey, this is my go to guy for anything landscaping. He always does my bush trimming too. Today he and his crew spread my 17 cubic yards of mulch. It looks amazing! They came on time and worked so hard to get it done. They cleaned up everything so you didn’t even know there was a pile of mulch on my driveway. James is hardworking, conscientious, pays attention to detail and very fair in pricing!",
    avatarColor: "bg-purple-500",
    likes: 38,
    comments: 4,
    reply:
      "Beautiful results! Thank you so much for making this post! 🙏",
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
    author: "Allie Parker",
    neighborhood: "Barber Rock",
    timestamp: "Jul 2024",
    body: "James Picerno of JDP Landscaping recently spread mulch and trimmed several trees for us. He is very respectful, efficient and reasonable. He is eager to do whatever you ask of him.",
    avatarColor: "bg-sky-600",
    likes: 11,
    comments: 1,
  },
  {
    platform: "nextdoor",
    author: "Brad Jessup",
    neighborhood: "Legacy Park",
    body: "As Spring arrived and we were preparing for our annual landscape refresh, I started dreading the labor required to complete the job. We also decided to replace a section of our wood mulch with river rock, which even further increased the dread. Long story short, we were thoroughly impressed with how hard his team worked, even in the heat and humidity of the day. Everyone arrived promptly, all were very polite, jumped straight into the work, and worked the entire day to complete the job. All in, they spread 13 yards of wood mulch, 2 yards of river rock, planted a new palm tree, trimmed several large shrubs, installed a mulch border for the rocks, and hauled away all of the debris. They completed a job in one day that would have taken us several weeks. The price was very reasonable, and I would gladly pay it again for the same results. If you're looking for help with your landscaping, James and his crew should be your first call!",
    avatarColor: "bg-emerald-600",
    likes: 25,
    comments: 5,
  },
  {
    platform: "nextdoor",
    author: "Ken Russell",
    neighborhood: "Providence Arbours",
    timestamp: "May 2025",
    body: "JDP Landscaping just completed a 50-yard mulch project at our property, and they did an excellent job. James and his team showed up when promised and completed everything across our large property, leaving it looking amazing and all cleaned up as if they had never been there. Great job and would use and recommend them!",
    avatarColor: "bg-orange-500",
    likes: 16,
    comments: 3,
  },
  {
    platform: "nextdoor",
    author: "Hank Szulimowski",
    neighborhood: "Sun City Carolina Lakes",
    body: "Just had mulch put down in my yard by James and JDP Landscaping and it looks fantastic. Highly recommend James for a job well done!",
    avatarColor: "bg-slate-500",
    likes: 15,
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
];

/* Compact reviews that float across the hero seam */
const bridgeAuthors = ["Leigh Ann Childs", "Steven Reynolds", "Allie Parker"];
const bridgeReviews = bridgeAuthors.map(
  (a) => reviews.find((r) => r.author === a)!,
);
const gridReviews = reviews.filter((r) => !bridgeAuthors.includes(r.author));

/* ── Main Component ── */

export default function SocialProof() {
  return (
    <section className="relative bg-cream">
      {/* Dark → mulch → cream fade behind the bridge cards */}
      <div
        className="absolute inset-x-0 top-0 h-[26rem] sm:h-96"
        style={{
          background:
            "linear-gradient(180deg, #0B0C0B 0%, #1A1511 30%, #5F4A32 62%, rgba(245,241,231,0) 100%)",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pb-14 lg:pb-20">
        {/* Floating bridge: trust line + three quote cards over the hero seam */}
        <div className="-mt-16 sm:-mt-24">
          <Reveal>
            <p className="mb-5 text-center text-[0.62rem] font-bold uppercase tracking-[0.22em] text-white/70 sm:mb-6 sm:text-xs">
              Trusted by homeowners across the Carolinas
            </p>
          </Reveal>
          <div className="grid grid-cols-1 gap-4 sm:gap-5 md:grid-cols-3">
            {bridgeReviews.map((review, i) => (
              <Reveal key={review.author} delay={i * 0.1}>
                <BridgeCard review={review} />
              </Reveal>
            ))}
          </div>
        </div>

        {/* Header — title left, stats right (on cream) */}
        <div className="mt-16 mb-8 flex flex-col gap-6 lg:mt-24 lg:mb-10 lg:flex-row lg:items-end lg:justify-between">
          {/* Left — heading */}
          <Reveal className="shrink-0">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-brand-green">
              Reviews
            </p>
            <h2 className="font-heading text-3xl font-black leading-tight text-brand-charcoal sm:text-4xl lg:text-[2.75rem]">
              What Your Neighbors
              <br className="hidden sm:block" /> Are Saying
            </h2>
          </Reveal>

          {/* Right — stats + trophies */}
          <Reveal delay={0.12} className="flex flex-col items-start gap-3 lg:items-end">
            {/* Stats row */}
            <div className="flex items-end gap-0">
              {/* Google rating */}
              <div className="pr-4 sm:pr-5 lg:border-r lg:border-mulch/15 lg:pr-6">
                <p className="text-2xl font-black text-brand-charcoal sm:text-3xl">
                  <CountUp value={5} decimals={1} />
                </p>
                <div className="mt-0.5 flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <StarIcon key={i} />
                  ))}
                </div>
                <p className="mt-1 text-[10px] text-brand-charcoal/45 sm:text-xs">on Google</p>
              </div>

              {/* Nextdoor favorites */}
              <div className="border-l border-mulch/15 px-4 sm:px-5 lg:border-r lg:px-6">
                <p className="text-2xl font-black text-brand-charcoal sm:text-3xl">
                  <CountUp value={95} />
                </p>
                <p className="mt-1 text-[10px] leading-tight text-brand-charcoal/45 sm:text-xs">
                  Favorites
                  <br />
                  on Nextdoor
                </p>
              </div>

              {/* Neighborhood Fave count */}
              <div className="border-l border-mulch/15 pl-4 sm:pl-5 lg:px-6">
                <p className="text-2xl font-black text-brand-charcoal sm:text-3xl">
                  <CountUp value={4} duration={1} />
                  <span className="text-lg text-terra sm:text-xl">&times;</span>
                </p>
                <p className="mt-1 text-[10px] leading-tight text-brand-charcoal/45 sm:text-xs">
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
                    className="flex h-11 w-11 flex-col items-center justify-center rounded-full border-2 border-mulch/25 transition-colors duration-300 hover:border-terra/60"
                  >
                    <TrophyIcon />
                    <span className="mt-px text-[8px] font-bold leading-none text-brand-charcoal/45">
                      {year}
                    </span>
                  </div>
                ))}
              </div>
              <div className="hidden sm:block">
                <p className="text-sm font-semibold text-brand-charcoal">
                  Neighborhood Fave
                </p>
                <p className="text-xs text-brand-charcoal/45">
                  4 years running on Nextdoor
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Divider */}
        <div className="mb-8 border-t border-mulch/10 lg:mb-10" />

        {/* Review cards — two independent columns on md+ so short cards stack
            tightly under tall neighbors instead of inheriting grid-row gaps */}
        <div className="mx-auto max-w-5xl space-y-4 md:flex md:items-start md:gap-5 md:space-y-0">
          {[0, 1].map((col) => (
            <div key={col} className="space-y-4 md:flex-1 md:space-y-5">
              {gridReviews
                .filter((_, i) => i % 2 === col)
                .map((review, i) => (
                  <Reveal
                    key={review.author}
                    delay={Math.min((i * 2 + col) * 0.06, 0.3)}
                  >
                    <ReviewCard review={review} />
                  </Reveal>
                ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Bridge Card (compact floating quote) ── */

function BridgeCard({ review }: { review: Review }) {
  const initial = review.author.charAt(0);

  return (
    <div className="bridge-card h-full rounded-2xl p-5">
      <div className="flex items-center justify-between">
        <div className="flex gap-0.5">
          {Array.from({ length: 5 }).map((_, i) => (
            <StarIcon key={i} />
          ))}
        </div>
        <PlatformIcon platform={review.platform} />
      </div>

      <p className="mt-3 text-sm leading-relaxed text-brand-charcoal/85 line-clamp-4">
        {review.body}
      </p>

      <div className="mt-4 flex items-center gap-2.5">
        <div
          className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-bold text-white ${review.avatarColor}`}
        >
          {initial}
        </div>
        <div>
          <p className="text-xs font-bold text-brand-charcoal">{review.author}</p>
          <p className="text-[11px] text-brand-charcoal/50">
            {review.neighborhood ?? "Google review"}
          </p>
        </div>
      </div>
    </div>
  );
}

/* ── Review Card ── */

function ReviewCard({ review }: { review: Review }) {
  const initial = review.author.charAt(0);

  return (
    <div className="lift-card rounded-xl p-4 sm:p-5">
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
          <p className="text-sm font-semibold text-brand-charcoal">
            {review.author}
          </p>
          <div className="flex items-center gap-1 text-xs text-brand-charcoal/45">
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
      <p className="mt-3 text-sm leading-relaxed text-brand-charcoal/75">
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
        <div className="ml-4 mt-3 border-l-2 border-brand-green/30 pl-3">
          <div className="flex items-center gap-2">
            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-brand-green text-[10px] font-bold text-white">
              J
            </div>
            <span className="text-xs font-semibold text-brand-charcoal/70">
              JDP Landscaping
            </span>
          </div>
          <p className="mt-1 text-xs leading-relaxed text-brand-charcoal/50">
            {review.reply}
          </p>
        </div>
      )}

      {/* Action bar */}
      <div className="mt-3 flex items-center gap-5 border-t border-mulch/10 pt-3">
        {review.likes > 0 ? (
          <span className="flex items-center gap-1.5 text-xs text-brand-charcoal/40 transition-colors duration-300 hover:text-rose-500">
            <HeartIcon />
            {review.likes}
          </span>
        ) : (
          <span className="flex items-center gap-1.5 text-xs text-brand-charcoal/40 transition-colors duration-300 hover:text-rose-500">
            <HeartIcon />
          </span>
        )}
        {review.comments > 0 ? (
          <span className="flex items-center gap-1.5 text-xs text-brand-charcoal/40">
            <CommentIcon />
            {review.comments}
          </span>
        ) : (
          <span className="flex items-center gap-1.5 text-xs text-brand-charcoal/40">
            <CommentIcon />
          </span>
        )}
        <span className="flex items-center gap-1.5 text-xs text-brand-charcoal/40">
          <ShareIcon />
        </span>
        {review.platform === "nextdoor" && (
          <a
            href="https://nextdoor.com/page/jdp-landscaping-waxhaw-nc"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-auto text-xs font-semibold text-[#00B246] hover:underline"
          >
            View on Nextdoor
          </a>
        )}
      </div>
    </div>
  );
}

/* ── Icons ── */

function StarIcon() {
  return (
    <svg
      className="h-3 w-3 text-amber-500 sm:h-3.5 sm:w-3.5"
      fill="currentColor"
      viewBox="0 0 20 20"
      aria-hidden="true"
    >
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );
}

function TrophyIcon() {
  return (
    <svg
      className="h-3.5 w-3.5 text-mulch/60"
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
      className="h-4 w-4 text-brand-charcoal/25"
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
      className="h-3 w-3 text-brand-charcoal/40"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      aria-hidden="true"
    >
      <circle cx={12} cy={12} r={10} />
      <path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
    </svg>
  );
}
