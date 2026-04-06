import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | JDP Landscaping",
  description:
    "Terms of use for the JDP Landscaping website, including quote request terms and general site disclaimers.",
  robots: { index: true, follow: true },
  alternates: { canonical: "https://jdplandscaping.com/terms" },
};

export default function TermsPage() {
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
          Terms of Service
        </h1>
        <p className="text-brand-charcoal/70 text-sm mb-10">
          Effective date: April 1, 2026
        </p>

        <div className="space-y-10 text-brand-charcoal/80">

          <section>
            <h2 className="font-heading font-bold text-brand-dark text-xl mb-3">
              About This Site
            </h2>
            <p className="text-base leading-relaxed">
              This website is operated by JDP Landscaping, a locally owned
              landscaping business serving Charlotte, Marvin, Waxhaw, and
              surrounding areas in North Carolina. By using this site, you
              agree to these terms. If you don't agree, please don't use the
              site — though we'd still be happy to hear from you by phone.
            </p>
          </section>

          <section>
            <h2 className="font-heading font-bold text-brand-dark text-xl mb-3">
              Use of This Website
            </h2>
            <p className="text-base leading-relaxed">
              You may use this website for its intended purpose: learning about
              our services and submitting a quote request. You agree not to use
              this site for any unlawful purpose, to attempt to disrupt or
              damage the site, or to misrepresent your identity or intentions
              when submitting information.
            </p>
          </section>

          <section>
            <h2 className="font-heading font-bold text-brand-dark text-xl mb-3">
              Quote Requests
            </h2>
            <p className="text-base leading-relaxed mb-3">
              Submitting a quote request through this website is not a contract
              and does not guarantee service, scheduling, or any particular
              price. It is simply a way to reach out so we can have a
              conversation about your project.
            </p>
            <p className="text-base leading-relaxed">
              All service agreements are made directly between you and JDP
              Landscaping after a consultation. Pricing and availability are
              subject to change. We reserve the right to decline any service
              request for any reason.
            </p>
          </section>

          <section>
            <h2 className="font-heading font-bold text-brand-dark text-xl mb-3">
              Accuracy of Information
            </h2>
            <p className="text-base leading-relaxed">
              We do our best to keep the information on this site current and
              accurate. That said, service descriptions, service area details,
              and other content are general in nature and may not reflect every
              situation. If you have a specific question, please call or email
              us directly — we'll give you a straight answer.
            </p>
          </section>

          <section>
            <h2 className="font-heading font-bold text-brand-dark text-xl mb-3">
              Our Services
            </h2>
            <p className="text-base leading-relaxed">
              JDP Landscaping is a fully insured landscaping business. All work
              is performed by our own crew. While we take pride in every job,
              specific outcomes depend on site conditions, weather, plant health,
              and other factors outside our control. We'll always give you an
              honest assessment before we begin any work.
            </p>
          </section>

          <section>
            <h2 className="font-heading font-bold text-brand-dark text-xl mb-3">
              Limitation of Liability
            </h2>
            <p className="text-base leading-relaxed">
              JDP Landscaping is not responsible for any damages arising from
              your use of this website or from reliance on information found
              here. This site is provided as-is, without warranties of any
              kind. Your use of this site is at your own risk.
            </p>
          </section>

          <section>
            <h2 className="font-heading font-bold text-brand-dark text-xl mb-3">
              Links and Third-Party Content
            </h2>
            <p className="text-base leading-relaxed">
              This site may include links to third-party websites (such as
              Google Maps). We don't control those sites and aren't responsible
              for their content or privacy practices.
            </p>
          </section>

          <section>
            <h2 className="font-heading font-bold text-brand-dark text-xl mb-3">
              Changes to These Terms
            </h2>
            <p className="text-base leading-relaxed">
              We may update these terms from time to time. Changes take effect
              when posted, with a revised effective date at the top of this
              page. Continued use of the site after changes are posted means
              you accept the updated terms.
            </p>
          </section>

          <section>
            <h2 className="font-heading font-bold text-brand-dark text-xl mb-3">
              Contact Us
            </h2>
            <p className="text-base leading-relaxed">
              Questions about these terms? We're real people — just reach out.
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
