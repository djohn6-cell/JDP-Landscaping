import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions | JDP Landscaping",
  description:
    "Terms and conditions for using the JDP Landscaping website, including SMS customer care program terms.",
  robots: { index: true, follow: true },
  alternates: { canonical: "https://jdplandscaping.com/terms-and-conditions" },
};

export default function TermsAndConditionsPage() {
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
          Terms &amp; Conditions
        </h1>
        <p className="text-brand-charcoal/70 text-sm mb-10">
          Effective date: April 13, 2026
        </p>

        <div className="space-y-10 text-brand-charcoal/80">

          <section>
            <h2 className="font-heading font-bold text-brand-dark text-xl mb-3">
              About This Site
            </h2>
            <p className="text-base leading-relaxed">
              This website is operated by JDP Landscaping, a locally owned
              landscaping business serving Charlotte, Marvin, Waxhaw, and
              surrounding areas in North Carolina. By using this site, you agree
              to these terms. If you don&apos;t agree, please don&apos;t use the
              site — though we&apos;d still be happy to hear from you by phone.
            </p>
          </section>

          <section>
            <h2 className="font-heading font-bold text-brand-dark text-xl mb-3">
              Use of This Website
            </h2>
            <p className="text-base leading-relaxed">
              You may use this website for its intended purpose: learning about our
              services and submitting a quote request. You agree not to use this
              site for any unlawful purpose, to attempt to disrupt or damage the
              site, or to misrepresent your identity or intentions when submitting
              information.
            </p>
          </section>

          <section>
            <h2 className="font-heading font-bold text-brand-dark text-xl mb-3">
              Quote Requests
            </h2>
            <p className="text-base leading-relaxed mb-3">
              Submitting a quote request through this website is not a contract and
              does not guarantee service, scheduling, or any particular price. It is
              simply a way to reach out so we can have a conversation about your
              project.
            </p>
            <p className="text-base leading-relaxed">
              All service agreements are made directly between you and JDP
              Landscaping after a consultation. Pricing and availability are subject
              to change. We reserve the right to decline any service request for any
              reason.
            </p>
          </section>

          <section className="rounded-2xl border border-brand-green/20 bg-white p-6 sm:p-8">
            <h2 className="font-heading font-bold text-brand-dark text-xl mb-3">
              SMS Customer Care Program Terms
            </h2>

            <dl className="space-y-4 text-base">
              <div>
                <dt className="font-semibold text-brand-dark">Program Name</dt>
                <dd className="text-brand-charcoal/80 mt-0.5">JDP Landscaping SMS Customer Care</dd>
              </div>

              <div>
                <dt className="font-semibold text-brand-dark">Program Description</dt>
                <dd className="text-brand-charcoal/80 mt-0.5 leading-relaxed">
                  When you opt in to SMS on our quote request form, JDP Landscaping
                  may send you text messages related to your service inquiry. Messages
                  are limited to customer care communications: quote follow-up,
                  scheduling, appointment confirmations, appointment reminders, and
                  service updates.
                </dd>
              </div>

              <div>
                <dt className="font-semibold text-brand-dark">Opt-In</dt>
                <dd className="text-brand-charcoal/80 mt-0.5 leading-relaxed">
                  You may opt in by checking the SMS consent checkbox on our quote
                  request form. Checking the box is entirely voluntary.{" "}
                  <strong>Consent is not a condition of purchase or service.</strong>
                </dd>
              </div>

              <div>
                <dt className="font-semibold text-brand-dark">Opt-Out Instructions</dt>
                <dd className="text-brand-charcoal/80 mt-0.5">
                  Reply <strong>STOP</strong> to any message to opt out at any time.
                  You will receive a confirmation message and no further messages will
                  be sent.
                </dd>
              </div>

              <div>
                <dt className="font-semibold text-brand-dark">Help Instructions</dt>
                <dd className="text-brand-charcoal/80 mt-0.5">
                  Reply <strong>HELP</strong> for help, or contact us directly at{" "}
                  <a href="tel:+17049896027" className="text-brand-green hover:underline font-medium">
                    (704) 989-6027
                  </a>{" "}
                  or{" "}
                  <a href="mailto:jdpone@gmail.com" className="text-brand-green hover:underline font-medium">
                    jdpone@gmail.com
                  </a>
                  .
                </dd>
              </div>

              <div>
                <dt className="font-semibold text-brand-dark">Message Frequency</dt>
                <dd className="text-brand-charcoal/80 mt-0.5">
                  Message frequency varies based on your service inquiry and project
                  activity. We will not send unsolicited messages.
                </dd>
              </div>

              <div>
                <dt className="font-semibold text-brand-dark">Message &amp; Data Rates</dt>
                <dd className="text-brand-charcoal/80 mt-0.5">
                  Message and data rates may apply. Contact your wireless carrier for
                  details about your plan.
                </dd>
              </div>

              <div>
                <dt className="font-semibold text-brand-dark">No Marketing Messages</dt>
                <dd className="text-brand-charcoal/80 mt-0.5 leading-relaxed">
                  We will not send promotional or marketing messages through this
                  program. All messages are limited to customer care communications
                  directly related to your inquiry or service.
                </dd>
              </div>

              <div>
                <dt className="font-semibold text-brand-dark">Privacy</dt>
                <dd className="text-brand-charcoal/80 mt-0.5 leading-relaxed">
                  Your phone number and SMS opt-in status are not sold or shared with
                  third parties or affiliates for marketing or promotional purposes.
                  See our{" "}
                  <Link href="/privacy-policy" className="text-brand-green hover:underline font-medium">
                    Privacy Policy
                  </Link>{" "}
                  for full details.
                </dd>
              </div>

              <div>
                <dt className="font-semibold text-brand-dark">Supported Carriers</dt>
                <dd className="text-brand-charcoal/80 mt-0.5">
                  Carriers are not liable for delayed or undelivered messages.
                </dd>
              </div>
            </dl>
          </section>

          <section>
            <h2 className="font-heading font-bold text-brand-dark text-xl mb-3">
              Accuracy of Information
            </h2>
            <p className="text-base leading-relaxed">
              We do our best to keep the information on this site current and
              accurate. That said, service descriptions, service area details, and
              other content are general in nature and may not reflect every
              situation. If you have a specific question, please call or email us
              directly — we&apos;ll give you a straight answer.
            </p>
          </section>

          <section>
            <h2 className="font-heading font-bold text-brand-dark text-xl mb-3">
              Our Services
            </h2>
            <p className="text-base leading-relaxed">
              JDP Landscaping is a fully insured landscaping business. All work is
              performed by our own crew. While we take pride in every job, specific
              outcomes depend on site conditions, weather, plant health, and other
              factors outside our control. We&apos;ll always give you an honest
              assessment before we begin any work.
            </p>
          </section>

          <section>
            <h2 className="font-heading font-bold text-brand-dark text-xl mb-3">
              Limitation of Liability
            </h2>
            <p className="text-base leading-relaxed">
              JDP Landscaping is not responsible for any damages arising from your
              use of this website or from reliance on information found here. This
              site is provided as-is, without warranties of any kind. Your use of
              this site is at your own risk.
            </p>
          </section>

          <section>
            <h2 className="font-heading font-bold text-brand-dark text-xl mb-3">
              Changes to These Terms
            </h2>
            <p className="text-base leading-relaxed">
              We may update these terms from time to time. Changes take effect when
              posted, with a revised effective date at the top of this page.
              Continued use of the site after changes are posted means you accept the
              updated terms.
            </p>
          </section>

          <section>
            <h2 className="font-heading font-bold text-brand-dark text-xl mb-3">
              Contact Us
            </h2>
            <p className="text-base leading-relaxed">
              Questions about these terms? We&apos;re real people — just reach out.
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
