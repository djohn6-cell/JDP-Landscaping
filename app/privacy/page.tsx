import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | JDP Landscaping",
  description:
    "How JDP Landscaping collects, uses, and protects the information you submit through our website.",
  robots: { index: true, follow: true },
  alternates: { canonical: "https://jdplandscaping.com/privacy" },
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-brand-cream pt-24 pb-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="text-brand-green hover:underline text-sm font-medium mb-8 inline-block"
        >
          ← Back to home
        </Link>

        <h1 className="font-heading font-black text-brand-dark text-3xl sm:text-4xl mb-2">
          Privacy Policy
        </h1>
        <p className="text-brand-charcoal/70 text-sm mb-10">
          Effective date: April 1, 2026
        </p>

        <div className="space-y-10 text-brand-charcoal/80">

          <section>
            <h2 className="font-heading font-bold text-brand-dark text-xl mb-3">
              Who We Are
            </h2>
            <p className="text-base leading-relaxed">
              JDP Landscaping is a locally owned and operated landscaping
              business serving Charlotte, Marvin, Waxhaw, and surrounding areas
              in North Carolina. This privacy policy explains what information
              we collect through this website, how we use it, and how we protect
              it. We keep things simple — we&apos;re a small business, not a tech
              company.
            </p>
          </section>

          <section>
            <h2 className="font-heading font-bold text-brand-dark text-xl mb-3">
              Information We Collect
            </h2>
            <p className="text-base leading-relaxed mb-3">
              The only way we collect personal information is through the quote
              request form on this website. When you submit a request, we
              collect the information you choose to provide:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-base">
              <li>Your name</li>
              <li>Phone number (optional)</li>
              <li>Email address (optional)</li>
              <li>Property address</li>
              <li>Type of service you&apos;re interested in</li>
              <li>Any notes or details about your project</li>
            </ul>
            <p className="text-base leading-relaxed mt-3">
              We do not use cookies, tracking pixels, analytics software, or
              any other automated data collection on this website beyond
              standard web server logs (which record basic request information
              such as IP address and browser type).
            </p>
          </section>

          <section>
            <h2 className="font-heading font-bold text-brand-dark text-xl mb-3">
              How We Use Your Information
            </h2>
            <p className="text-base leading-relaxed">
              We use the information you submit for one purpose only: to follow
              up on your quote request. When you reach out to us, we&apos;ll contact
              you by phone or email to discuss your landscaping needs, schedule
              a visit, or answer your questions. We do not use your information
              for marketing, advertising, or any other purpose.
            </p>
          </section>

          <section>
            <h2 className="font-heading font-bold text-brand-dark text-xl mb-3">
              How We Handle SMS Notifications
            </h2>
            <p className="text-base leading-relaxed mb-3">
              When you submit a quote request, our website uses Twilio — a
              third-party SMS service — to send an internal notification to the
              JDP Landscaping business owner. This notification includes the
              information from your form so we can follow up with you promptly.
            </p>
            <p className="text-base leading-relaxed mb-3">
              <strong>This SMS is sent to us, not to you.</strong> We do not
              send text messages to customers through this website. You will not
              receive any automated or marketing text messages as a result of
              submitting a form here.
            </p>
            <p className="text-base leading-relaxed">
              Twilio&apos;s handling of data in transit is governed by their own
              privacy policy. We do not store your information with Twilio
              beyond what is necessary for message delivery.
            </p>
          </section>

          <section>
            <h2 className="font-heading font-bold text-brand-dark text-xl mb-3">
              Data Storage
            </h2>
            <p className="text-base leading-relaxed">
              This website does not maintain a customer database. We do not
              store your form submissions on a server or in a database connected
              to this site. Once the SMS notification is delivered to us, your
              information exists only in our normal business communications
              (text messages and any follow-up correspondence we have with you
              directly).
            </p>
          </section>

          <section>
            <h2 className="font-heading font-bold text-brand-dark text-xl mb-3">
              We Do Not Sell Your Information
            </h2>
            <p className="text-base leading-relaxed">
              We do not sell, rent, trade, or share your personal information
              with third parties for marketing or advertising purposes. Period.
              The information you give us is used only to help us respond to
              your request and do good work for you.
            </p>
          </section>

          <section>
            <h2 className="font-heading font-bold text-brand-dark text-xl mb-3">
              Children&apos;s Privacy
            </h2>
            <p className="text-base leading-relaxed">
              This website is intended for general audiences and is not directed
              at children under 13. We do not knowingly collect information from
              anyone under 13 years of age.
            </p>
          </section>

          <section>
            <h2 className="font-heading font-bold text-brand-dark text-xl mb-3">
              Changes to This Policy
            </h2>
            <p className="text-base leading-relaxed">
              If we update this policy, we&apos;ll revise the effective date at the
              top of this page. We don&apos;t anticipate frequent changes — our data
              practices are straightforward and unlikely to change significantly.
            </p>
          </section>

          <section>
            <h2 className="font-heading font-bold text-brand-dark text-xl mb-3">
              Contact Us
            </h2>
            <p className="text-base leading-relaxed">
              Questions about this policy or how we handle your information?
              Get in touch — we&apos;re happy to talk through it.
            </p>
            <ul className="mt-3 space-y-2 text-base">
              <li>
                <span className="font-semibold text-brand-dark">Phone: </span>
                <a
                  href="tel:+17049896027"
                  className="text-brand-green hover:underline"
                >
                  (704) 989-6027
                </a>
              </li>
              <li>
                <span className="font-semibold text-brand-dark">Email: </span>
                <a
                  href="mailto:jdpone@gmail.com"
                  className="text-brand-green hover:underline"
                >
                  jdpone@gmail.com
                </a>
              </li>
              <li>
                <span className="font-semibold text-brand-dark">
                  Service Area:{" "}
                </span>
                Charlotte, Marvin, Waxhaw, and surrounding areas in NC
              </li>
            </ul>
          </section>

        </div>
      </div>
    </main>
  );
}
