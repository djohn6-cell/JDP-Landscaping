import Image from "next/image";
import Link from "next/link";

const currentYear = new Date().getFullYear();

const navLinks = [
  { label: "Home", href: "/#hero" },
  { label: "About", href: "/about" },
  { label: "Our Work", href: "/our-work" },
  { label: "FAQ", href: "/faq" },
  { label: "Locations", href: "/locations" },
  { label: "Contact", href: "/quote" },
];

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms & Conditions", href: "/terms-and-conditions" },
];

const serviceAreas = [
  "Charlotte",
  "Marvin",
  "Waxhaw",
  "Ballantyne",
  "Pineville",
  "Matthews",
  "Indian Trail",
  "Stallings",
  "Mint Hill",
  "Union County",
];

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-white pt-16 pb-24 lg:pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/images/logo.jpeg"
                alt="JDP Landscaping logo"
                width={40}
                height={40}
                className="rounded object-contain"
              />
              <span className="font-heading font-bold text-sm tracking-wide">
                JDP LANDSCAPING
              </span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-4">
              Honest work. Real results.
            </p>
            {/* Service area */}
            <div>
              <p className="font-heading font-bold text-xs tracking-widest uppercase text-white/40 mb-2">
                Service Area
              </p>
              <p className="text-white/50 text-xs leading-relaxed">
                {serviceAreas.join(" · ")}
              </p>
            </div>
          </div>

          {/* Nav */}
          <div>
            <p className="font-heading font-bold text-xs tracking-widest uppercase text-white/40 mb-4">
              Quick Links
            </p>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  {link.href.startsWith("/#") ? (
                    <a
                      href={link.href}
                      className="text-white/70 hover:text-white text-sm transition-colors"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      href={link.href}
                      className="text-white/70 hover:text-white text-sm transition-colors"
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="font-heading font-bold text-xs tracking-widest uppercase text-white/40 mb-4">
              Contact
            </p>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:+17049896027"
                  className="flex items-center gap-2 text-white/70 hover:text-white text-sm transition-colors"
                >
                  <PhoneIcon />
                  (704) 989-6027
                </a>
              </li>
              <li>
                <a
                  href="mailto:jdpone@gmail.com"
                  className="flex items-center gap-2 text-white/70 hover:text-white text-sm transition-colors"
                >
                  <EmailIcon />
                  jdpone@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2 text-white/60 text-sm">
                <LocationIcon />
                <span>Charlotte, NC &amp; surrounding areas</span>
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div>
            <p className="font-heading font-bold text-xs tracking-widest uppercase text-white/40 mb-4">
              Get Started
            </p>
            <p className="text-white/60 text-sm mb-4 leading-relaxed">
              Free quotes. No pressure. Just give us a call or send a request.
            </p>
            <a
              href="/quote"
              className="inline-block bg-brand-green hover:bg-brand-green-mid text-white font-bold text-sm px-5 py-2.5 rounded-full transition-colors"
            >
              Request a Quote
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-white/40">
          <p>© {currentYear} JDP Landscaping. All rights reserved.</p>
          <div className="flex gap-6">
            {legalLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="hover:text-white/70 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

function PhoneIcon() {
  return (
    <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg className="w-4 h-4 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  );
}
