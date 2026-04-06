import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Request Received | JDP Landscaping",
  robots: { index: false, follow: false },
};

export default function ThankYouPage() {
  return (
    <main className="min-h-screen bg-brand-cream flex items-center justify-center px-4 pt-16">
      <div className="max-w-xl w-full text-center">
        {/* Icon */}
        <div className="w-20 h-20 bg-brand-green rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg">
          <CheckIcon />
        </div>

        <h1 className="font-heading font-black text-brand-dark text-3xl sm:text-4xl mb-4">
          Thank You for Reaching Out!
        </h1>
        <p className="text-brand-charcoal/70 text-base sm:text-lg leading-relaxed mb-8">
          We&apos;ll reach out to you shortly to help with your request. In the
          meantime, feel free to call us directly — we&apos;re happy to talk
          through anything.
        </p>

        <a
          href="tel:+17049896027"
          className="inline-flex items-center gap-2 bg-brand-green hover:bg-brand-green-mid text-white font-bold text-base px-8 py-4 rounded-full transition-colors mb-4"
        >
          <PhoneIcon />
          Call (704) 989-6027
        </a>

        <div className="mt-4">
          <Link
            href="/"
            className="text-brand-green hover:underline text-sm font-medium"
          >
            ← Back to homepage
          </Link>
        </div>
      </div>
    </main>
  );
}

function CheckIcon() {
  return (
    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
  );
}
