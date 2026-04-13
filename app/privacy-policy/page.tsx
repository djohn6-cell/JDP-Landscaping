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
          Effective date: April 13, 2026
        </p>

        <div className="space-y-10 text-brand-charcoal/80">

          <section>
            <h2 className="font-heading font-bold text-brand-dark text-xl mb-3">
              Who We Are
            </h2>
            <p className="text-base leading-relaxed">
              JDP Landscaping is a locally owned and operated landscaping business
              serving Charlotte, Marvin, Waxhaw, and surrounding areas in North
              Carolina. This privacy policy explains what information we collect
              through this website, how we use it, and how we protect it. We keep
              things simple — we&apos;re a small business, not a tech company.
            </p>
          </section>

          <section>
            <h2 className="font-heading font-bold text-brand-dark text-xl mb-3">
              Information We Collect
            </h2>
            <p className="text-base leading-relaxed mb-3">
              The only personal information we collect is what you choose to provide
              through the quote request form on this website. This may include:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-base">
              <li>Your full name</li>
              <li>Phone number</li>
              <li>Email address</li>
              <li>Property address or service area</li>
              <li>Type of service you&apos;re interested in</li>
              <li>Project details or notes</li>
              <li>Preferred contact method</li>
              <li>
                Whether you have opted in to receive SMS messages from us (recorded
                at time of form submission)
              </li>
            </ul>
            <p className="text-base leading-relaxed mt-3">
              We do not use cookies, tracking pixels, analytics software, or any
              other automated data collection on this website beyond standard web
              server logs (which record basic request information such as IP address
              and browser type).
            </p>
          </section>

          <section>
            <h2 className="font-heading font-bold text-brand-dark text-xl mb-3">
              How We Use Your Information
            </h2>
            <p className="text-base leading-relaxed">
              We use the information you submit solely to respond to your quote
              request and communicate with you about your landscaping project. This
              includes following up by phone, email, or — if you have opted in —
              text message. We do not use your information for any marketing,
              advertising, or other unrelated purpose.
            </p>
          </section>

          <section>
            <h2 className="font-heading font-bold text-brand-dark text-xl mb-3">
              SMS Customer Care Program
            </h2>
            <p className="text-base leading-relaxed mb-3">
              If you opt in to SMS communications by checking the consent box on our
              quote request form, JDP Landscaping may send you text messages related
              to your service inquiry. These messages are limited to customer care
              communications, including:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-base mb-3">
              <li>Follow-up on your quote request</li>
              <li>Scheduling and appointment confirmations</li>
              <li>Appointment reminders</li>
              <li>Service updates and status notifications</li>
            </ul>
            <p className="text-base leading-relaxed mb-3">
              <strong>SMS opt-in is entirely optional.</strong> You may submit a
              quote request without opting in to SMS. Consent to receive SMS is not
              a condition of receiving services.
            </p>
            <p className="text-base leading-relaxed mb-3">
              <strong>Message frequency varies.</strong> Message and data rates may
              apply. To opt out, reply <strong>STOP</strong> to any message. To
              request help, reply <strong>HELP</strong> or contact us at (704)
              989-6027.
            </p>
            <p className="text-base leading-relaxed">
              We also use Twilio, a third-party SMS service, to send an internal
              notification to the JDP Landscaping business owner when a quote
              request is submitted. This internal notification is sent to us, not to
              you, and does not require your SMS consent.
            </p>
          </section>

          <section>
            <h2 className="font-heading font-bold text-brand-dark text-xl mb-3">
              We Do Not Sell or Share Your Information
            </h2>
            <p className="text-base leading-relaxed">
              We do not sell, rent, trade, or share your personal information —
              including your name, phone number, email address, or SMS opt-in status
              — with any third parties, affiliates, or marketing partners for
              marketing or promotional purposes. Mobile opt-in data and consent are
              never shared or sold. Your information is used only to serve your
              request.
            </p>
          </section>

          <section>
            <h2 className="font-heading font-bold text-brand-dark text-xl mb-3">
              Data Storage
            </h2>
            <p className="text-base leading-relaxed">
              This website does not maintain a customer database. We do not store
              your form submissions on a server or database connected to this site.
              Once your request is delivered to us, your information exists only in
              our normal business communications (messages and any follow-up
              correspondence we have with you directly).
            </p>
          </section>

          <section>
            <h2 className="font-heading font-bold text-brand-dark text-xl mb-3">
              Children&apos;s Privacy
            </h2>
            <p className="text-base leading-relaxed">
              This website is intended for general audiences and is not directed at
              children under 13. We do not knowingly collect information from anyone
              under 13 years of age.
            </p>
          </section>

          <section>
            <h2 className="font-heading font-bold text-brand-dark text-xl mb-3">
              Changes to This Policy
            </h2>
            <p className="text-base leading-relaxed">
              If we update this policy, we will revise the effective date at the top
              of this page. We don&apos;t anticipate frequent changes — our data
              practices are straightforward.
            </p>
          </section>

          <section>
            <h2 className="font-heading font-bold text-brand-dark text-xl mb-3">
              Contact Us
            </h2>
            <p className="text-base leading-relaxed">
              Questions about this policy or how we handle your information? Get in
              touch — we&apos;re happy to talk through it.
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
