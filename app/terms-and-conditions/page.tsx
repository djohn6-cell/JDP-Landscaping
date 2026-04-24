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
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="mb-8 inline-block text-sm font-medium text-brand-green hover:underline"
        >
          Back to home
        </Link>

        <h1 className="mb-2 font-heading text-3xl font-black text-brand-dark sm:text-4xl">
          Terms &amp; Conditions
        </h1>
        <p className="mb-10 text-sm text-brand-charcoal/70">Effective date: April 24, 2026</p>

        <div className="space-y-10 text-brand-charcoal/80">
          <section>
            <h2 className="mb-3 font-heading text-xl font-bold text-brand-dark">About This Site</h2>
            <p className="text-base leading-relaxed">
              This website is operated by JDP Landscaping, a locally owned
              landscaping business serving Charlotte, Marvin, Waxhaw, and
              surrounding areas in North Carolina. By using this website, you
              agree to these Terms &amp; Conditions.
            </p>
          </section>

          <section>
            <h2 className="mb-3 font-heading text-xl font-bold text-brand-dark">
              Use of This Website
            </h2>
            <p className="text-base leading-relaxed">
              You may use this website to learn about our services and submit a
              quote request. You agree not to use this website for unlawful
              purposes, to interfere with site operation, or to submit false or
              misleading information.
            </p>
          </section>

          <section>
            <h2 className="mb-3 font-heading text-xl font-bold text-brand-dark">
              Quote Requests
            </h2>
            <p className="mb-3 text-base leading-relaxed">
              Submitting a quote request through this website is not a contract and
              does not guarantee service, scheduling, or any particular price.
            </p>
            <p className="text-base leading-relaxed">
              All service agreements are made directly between you and JDP
              Landscaping after consultation. Pricing, scheduling, and
              availability may vary. We reserve the right to decline any service
              request.
            </p>
          </section>

          <section className="rounded-2xl border border-brand-green/20 bg-white p-6 sm:p-8">
            <h2 className="mb-5 font-heading text-xl font-bold text-brand-dark">
              SMS Customer Care Program Terms
            </h2>

            <div className="space-y-5 text-base">
              <div>
                <h3 className="font-semibold text-brand-dark">Program Name</h3>
                <p className="mt-1 leading-relaxed text-brand-charcoal/80">
                  JDP Landscaping SMS Customer Care
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-brand-dark">Program Description</h3>
                <p className="mt-1 leading-relaxed text-brand-charcoal/80">
                  Customer-care texts related to quote requests, scheduling,
                  appointment confirmations, appointment reminders, and service
                  updates.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-brand-dark">Opt-In</h3>
                <p className="mt-1 leading-relaxed text-brand-charcoal/80">
                  Users opt in by checking the separate SMS consent checkbox on
                  the quote request form.
                </p>
                <p className="mt-2 leading-relaxed text-brand-charcoal/80">
                  Selecting &quot;Text Message&quot; as a preferred contact method
                  does not enroll you in SMS messages. You only opt in to SMS by
                  checking the separate SMS consent checkbox on the quote request
                  form.
                </p>
                <p className="mt-2 leading-relaxed text-brand-charcoal/80">
                  Consent is optional and is not a condition of purchase or service.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-brand-dark">Opt-Out</h3>
                <p className="mt-1 leading-relaxed text-brand-charcoal/80">
                  Reply STOP to opt out.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-brand-dark">Help</h3>
                <p className="mt-1 leading-relaxed text-brand-charcoal/80">
                  Reply HELP for help, or contact{" "}
                  <a href="tel:+17049896027" className="font-medium text-brand-green hover:underline">
                    (704) 989-6027
                  </a>{" "}
                  or{" "}
                  <a
                    href="mailto:jdpone@gmail.com"
                    className="font-medium text-brand-green hover:underline"
                  >
                    jdpone@gmail.com
                  </a>
                  .
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-brand-dark">Message Frequency</h3>
                <p className="mt-1 leading-relaxed text-brand-charcoal/80">
                  Message frequency varies based on the user&apos;s inquiry and
                  project activity.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-brand-dark">Message/Data Rates</h3>
                <p className="mt-1 leading-relaxed text-brand-charcoal/80">
                  Message and data rates may apply.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-brand-dark">No Marketing</h3>
                <p className="mt-1 leading-relaxed text-brand-charcoal/80">
                  JDP Landscaping does not send promotional or marketing messages
                  through this SMS program.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-brand-dark">Privacy</h3>
                <p className="mt-1 leading-relaxed text-brand-charcoal/80">
                  Phone numbers, SMS consent, and mobile opt-in data are not sold
                  or shared with third parties or affiliates for marketing or
                  promotional purposes. See our{" "}
                  <Link href="/privacy-policy" className="font-medium text-brand-green hover:underline">
                    Privacy Policy
                  </Link>{" "}
                  for additional details.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-brand-dark">Carriers</h3>
                <p className="mt-1 leading-relaxed text-brand-charcoal/80">
                  Carriers are not liable for delayed or undelivered messages.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="mb-3 font-heading text-xl font-bold text-brand-dark">
              Accuracy of Information
            </h2>
            <p className="text-base leading-relaxed">
              We make reasonable efforts to keep website information current and
              accurate. Service descriptions, service area details, and other site
              content are general in nature and may not apply to every situation.
            </p>
          </section>

          <section>
            <h2 className="mb-3 font-heading text-xl font-bold text-brand-dark">
              Our Services
            </h2>
            <p className="text-base leading-relaxed">
              JDP Landscaping is a fully insured landscaping business. All work is
              performed by our own crew. Specific outcomes may vary based on site
              conditions, weather, plant health, and other factors outside our
              control.
            </p>
          </section>

          <section>
            <h2 className="mb-3 font-heading text-xl font-bold text-brand-dark">
              Limitation of Liability
            </h2>
            <p className="text-base leading-relaxed">
              JDP Landscaping is not responsible for damages arising from use of
              this website or reliance on information presented here. This website
              is provided as-is without warranties of any kind, to the extent
              permitted by law.
            </p>
          </section>

          <section>
            <h2 className="mb-3 font-heading text-xl font-bold text-brand-dark">
              Changes to These Terms
            </h2>
            <p className="text-base leading-relaxed">
              We may update these Terms &amp; Conditions from time to time. Updates
              take effect when posted, and the effective date at the top of this
              page will be revised accordingly.
            </p>
          </section>

          <section>
            <h2 className="mb-3 font-heading text-xl font-bold text-brand-dark">Contact Us</h2>
            <p className="text-base leading-relaxed">
              If you have questions about these Terms &amp; Conditions, please
              contact us:
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
