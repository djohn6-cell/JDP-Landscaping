"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { label: "Home", href: "/#hero" },
  { label: "About", href: "/about" },
  { label: "Our Work", href: "/our-work" },
  { label: "Contact", href: "/quote" },
];

export default function StickyNav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 80);
    handler(); // run on mount
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-brand-dark/95 backdrop-blur-sm border-b border-white/5 shadow-lg"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="mx-auto max-w-screen-2xl px-4 sm:px-10 lg:px-16">
        <div className="flex h-20 items-center justify-between sm:h-28">
          {/* Logo */}
          <Link href="/#hero" className="flex shrink-0 items-center gap-2 sm:gap-3">
            <Image
              src="/images/logo.jpeg"
              alt="JDP Landscaping logo"
              width={72}
              height={72}
              className="h-11 w-11 rounded object-contain sm:h-[72px] sm:w-[72px]"
            />
            <span className="text-white font-heading font-bold text-xl tracking-wide hidden sm:block drop-shadow-sm">
              JDP LANDSCAPING
            </span>
          </Link>

          {/* Nav links — always visible; compact on mobile, spacious on desktop */}
          <nav className="flex items-center gap-2 sm:gap-4 md:gap-8">
            {navLinks.map((link) => {
              const cls =
                "text-[0.6rem] font-semibold uppercase tracking-[0.08em] text-white/80 hover:text-white transition-colors whitespace-nowrap drop-shadow-sm " +
                "sm:text-xs sm:tracking-[0.12em] md:text-base md:font-medium md:tracking-wide md:normal-case";
              return link.href.startsWith("/#") ? (
                <a key={link.href} href={link.href} className={cls}>
                  {link.label}
                </a>
              ) : (
                <Link key={link.href} href={link.href} className={cls}>
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Phone + hamburger */}
          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href="tel:+17049896027"
              className="hidden sm:flex items-center gap-2 border border-white/30 hover:border-white/60 text-white text-base font-semibold px-5 py-2.5 rounded-full transition-colors"
            >
              <PhoneIcon />
              (704) 989-6027
            </a>
            <a
              href="/quote"
              className="hidden sm:flex items-center gap-2 bg-brand-green hover:bg-brand-green-mid text-white text-base font-semibold px-6 py-2.5 rounded-full transition-colors shadow-md"
            >
              Request a Quote
            </a>
            <button
              className="p-2 text-white drop-shadow-sm md:hidden"
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
            >
              {open ? <XIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>

      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-brand-dark border-t border-white/10">
          <nav className="flex flex-col px-4 py-4 gap-4">
            {navLinks.map((link) =>
              link.href.startsWith("/#") ? (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-white/80 hover:text-white text-base font-medium py-1 transition-colors"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-white/80 hover:text-white text-base font-medium py-1 transition-colors"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              )
            )}
            {/* Phone shown in mobile menu only on xs screens (sm already shows it in the nav bar) */}
            <a
              href="tel:+17049896027"
              className="flex items-center gap-2 bg-brand-green text-white font-semibold px-4 py-3 rounded-full mt-2 transition-colors w-fit sm:hidden"
            >
              <PhoneIcon />
              (704) 989-6027
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

function PhoneIcon() {
  return (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
  );
}

function MenuIcon() {
  return (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
  );
}
