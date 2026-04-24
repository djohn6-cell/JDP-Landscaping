import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | JDP Landscaping",
  description:
    "How JDP Landscaping collects, uses, and protects your information, including our SMS customer care program.",
  robots: { index: true, follow: true },
  alternates: { canonical: "https://jdplandscaping.com/privacy-policy" },
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-brand-cream pt-24 pb-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="mb-8 inline-block text-sm font-medium text-brand-green hover:underline"
        >
          Back to home
        </Link>

        <h1 className="mb-2 font-heading text-3xl font-black text-brand-dark sm:text-4xl">
          Privacy Policy
        </h1>
        <p className="mb-10 text-sm text-brand-charcoal/70">Effective date: April 24, 2026</p>

        <div className="space-y-10 text-brand-charcoal/80">
          <section>
            <h2 className="mb-3 font-heading text-xl font-bold text-brand-dark">Who We Are</h2>
            <p className="text-base leading-relaxed">
              JDP Landscaping is a locally owned and operated landscaping business
              serving Charlotte, Marvin, Waxhaw, and surrounding areas in North
              Carolina. This Privacy Policy explains what information we collect
              through this website, how we use it, and how we protect it.
            </p>
          </section>

          <section>
            <h2 className="mb-3 font-heading text-xl font-bold text-brand-dark">
              Information We Collect
            </h2>
            <p className="mb-3 text-base leading-relaxed">
              The personal information we collect is limited to what you choose to
              submit through the quote request form on this website. This may include:
            </p>
            <ul className="list-disc space-y-1 pl-6 text-base">
              <li>Your full name</li>
              <li>Phone number</li>
              <li>Email address</li>
              <li>Property address or service area</li>
              <li>Type of service you are interested in</li>
              <li>Project details or notes</li>
              <li>Preferred contact method</li>
              <li>Whether you opted in to receive SMS messages from us at the time of form submission</li>
            </ul>
            <p className="mt-3 text-base leading-relaxed">
              We may also receive limited technical information through normal website
              operations, such as standard server logs and basic site analytics. We
              do not use information submitted through this website for advertising
              or unrelated marketing purposes.
            </p>
          </section>

          <section>
            <h2 className="mb-3 font-heading text-xl font-bold text-brand-dark">
              How We Use Your Information
            </h2>
            <p className="text-base leading-relaxed">
              We use the information you submit to respond to your quote request and
              communicate with you about your landscaping project. This may include
              contact by phone, email, or text message when you have separately opted
              in to SMS. We do not use this information for promotional text
              campaigns or unrelated marketing activity.
            </p>
          </section>

          <section>
            <h2 className="mb-3 font-heading text-xl font-bold text-brand-dark">
              SMS Customer Care Program
            </h2>
            <p className="mb-3 text-base leading-relaxed">
              JDP Landscaping uses SMS only for customer-care messages related to
              quote requests, scheduling, appointment confirmations, appointment
              reminders, and service updates. This SMS program is not used for
              marketing or promotional messages.
            </p>
            <p className="mb-3 text-base leading-relaxed">
              Selecting &quot;Text Message&quot; as a preferred contact method does not
              automatically opt you in to SMS. You only opt in if you check the
              separate SMS consent checkbox on the quote request form.
            </p>
            <p className="mb-3 text-base leading-relaxed">
              SMS opt-in is optional. Consent is not a condition of purchase or
              service. Message frequency varies. Message and data rates may apply.
              Reply STOP to opt out. Reply HELP for help.
            </p>
            <p className="mb-3 text-base leading-relaxed">
              If you check the separate SMS consent checkbox, messages are limited to
              quote follow-up, scheduling, appointment confirmations, appointment
              reminders, and service updates.
            </p>
            <p className="text-base leading-relaxed">
              SMS consent, mobile phone numbers, and mobile opt-in data are not sold,
              rented, traded, or shared with third parties or affiliates for
              marketing or promotional purposes.
            </p>
          </section>

          <section>
            <h2 className="mb-3 font-heading text-xl font-bold text-brand-dark">
              We Do Not Sell or Share Your Information
            </h2>
            <p className="text-base leading-relaxed">
              We do not sell, rent, trade, or share your personal information for
              marketing or promotional purposes. SMS consent, mobile phone numbers,
              and mobile opt-in data are not sold, rented, traded, or shared with
              third parties or affiliates for marketing or promotional purposes.
            </p>
          </section>

          <section>
            <h2 className="mb-3 font-heading text-xl font-bold text-brand-dark">
              Data Storage
            </h2>
            <p className="text-base leading-relaxed">
              This website does not maintain a customer-facing account system or
              customer portal. Information submitted through the quote request form
              is used in our normal business communications and follow-up workflow so
              we can respond to your request.
            </p>
          </section>

          <section>
            <h2 className="mb-3 font-heading text-xl font-bold text-brand-dark">
              Children&apos;s Privacy
            </h2>
            <p className="text-base leading-relaxed">
              This website is intended for general audiences and is not directed to
              children under 13. We do not knowingly collect personal information
              from children under 13.
            </p>
          </section>

          <section>
            <h2 className="mb-3 font-heading text-xl font-bold text-brand-dark">
              Changes to This Policy
            </h2>
            <p className="text-base leading-relaxed">
              We may update this Privacy Policy from time to time. If we do, we will
              update the effective date at the top of this page.
            </p>
          </section>

          <section>
            <h2 className="mb-3 font-heading text-xl font-bold text-brand-dark">Contact Us</h2>
            <p className="text-base leading-relaxed">
              If you have questions about this Privacy Policy or how we handle your
              information, please contact us:
            </p>
            <ul className="mt-3 space-y-2 text-base">
              <li>
                <span className="font-semibold text-brand-dark">Phone: </span>
                <a href="tel:+17049896027" className="text-brand-green hover:underline">
                  (704) 989-6027
                </a>
              </li>
              <li>
                <span className="font-semibold text-brand-dark">Email: </span>
                <a href="mailto:jdpone@gmail.com" className="text-brand-green hover:underline">
                  jdpone@gmail.com
                </a>
              </li>
              <li>
                <span className="font-semibold text-brand-dark">Service Area: </span>
                Charlotte, Marvin, Waxhaw, and surrounding areas in NC
              </li>
            </ul>
          </section>
        </div>
      </div>
    </main>
  );
}
