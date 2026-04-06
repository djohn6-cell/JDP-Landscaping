"use client";

// ─── Feature flag ────────────────────────────────────────────────────────────
// Set to `true` to re-enable online quote requests.
const QUOTE_ENABLED = false;
// ─────────────────────────────────────────────────────────────────────────────

import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

type FormData = {
  name: string;
  phone: string;
  email: string;
  address: string;
  service: string;
  message: string;
  _trap: string;
};

const initialForm: FormData = {
  name: "",
  phone: "",
  email: "",
  address: "",
  service: "",
  message: "",
  _trap: "",
};

const serviceOptions = [
  "Trimming",
  "Mulching",
  "Removal",
  "Planting",
  "Multiple Services",
  "Not Sure — Just Want to Talk",
];

export default function QuoteForm({ standalone = false }: { standalone?: boolean }) {
  const [form, setForm] = useState<FormData>(initialForm);
  const [status, setStatus] = useState<"idle" | "submitting" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const router = useRouter();

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMsg("");

    // Client-side: require at least phone or email
    if (!form.phone.trim() && !form.email.trim()) {
      setErrorMsg("Please provide at least a phone number or email address so we can reach you.");
      setStatus("error");
      return;
    }

    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: form.name.split(" ")[0] ?? form.name,
          lastName: form.name.split(" ").slice(1).join(" ") || "",
          phone: form.phone,
          email: form.email,
          address: form.address,
          service: form.service,
          message: form.message,
          _trap: form._trap,
        }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Something went wrong.");
      }

      router.push("/thank-you");
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "Something went wrong.";
      setErrorMsg(message);
      setStatus("error");
    }
  }

  // ── Disabled state ──────────────────────────────────────────────────────────
  if (!QUOTE_ENABLED) {
    const notice = (
      <div className="bg-white rounded-3xl shadow-lg p-8 sm:p-12 text-center">
        {/* Icon */}
        <div className="w-14 h-14 bg-brand-cream rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-7 h-7 text-brand-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h2 className="font-heading font-black text-brand-dark text-2xl sm:text-3xl mb-3">
          Online Quotes Coming Soon
        </h2>
        <p className="text-brand-charcoal/70 text-base leading-relaxed max-w-md mx-auto mb-8">
          Online quote requests are temporarily unavailable while we finish
          setting up this feature. In the meantime, please give us a call —
          we&apos;re happy to talk through your project and get you an estimate
          right away.
        </p>
        <a
          href="tel:+17049896027"
          className="inline-flex items-center gap-2 bg-brand-green hover:bg-brand-green-mid text-white font-bold text-base px-8 py-4 rounded-xl transition-colors"
        >
          <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          Call (704) 989-6027
        </a>
        <p className="text-brand-charcoal/50 text-sm mt-5">
          Free estimates — no contracts, no pressure.
        </p>
      </div>
    );

    if (standalone) {
      return (
        <section className="py-12 lg:py-16 bg-brand-cream">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">{notice}</div>
        </section>
      );
    }

    return (
      <section id="quote" className="py-20 pb-32 lg:py-28 lg:pb-28 bg-brand-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-brand-green font-semibold text-sm tracking-widest uppercase mb-4">
              Contact Us
            </p>
            <h2 className="font-heading font-black text-brand-dark text-3xl sm:text-4xl lg:text-5xl leading-tight mb-4">
              Ready to Talk?
            </h2>
            <p className="text-brand-charcoal/70 text-base sm:text-lg max-w-xl mx-auto">
              Give us a call or reach out directly — we&apos;re real people and we answer.
            </p>
          </div>
          {notice}
        </div>
      </section>
    );
  }
  // ── End disabled state ───────────────────────────────────────────────────────

  const inputClass =
    "w-full border border-black/15 rounded-xl px-4 py-3 text-brand-charcoal text-sm focus:outline-none focus:ring-2 focus:ring-brand-green/40 focus:border-brand-green transition";

  const formCard = (
        <div className="bg-white rounded-3xl shadow-lg p-8 sm:p-12">
          <form onSubmit={handleSubmit} className="space-y-6" noValidate>
            {/* Name */}
            <div>
              <label className="block text-sm font-semibold text-brand-dark mb-1.5" htmlFor="name">
                Full Name <span className="text-brand-red">*</span>
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                autoComplete="name"
                value={form.name}
                onChange={handleChange}
                className={inputClass}
                placeholder="John Smith"
              />
            </div>

            {/* Phone + Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-brand-dark mb-1.5" htmlFor="phone">
                  Phone
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  value={form.phone}
                  onChange={handleChange}
                  className={inputClass}
                  placeholder="(704) 555-0100"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-brand-dark mb-1.5" htmlFor="email">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={form.email}
                  onChange={handleChange}
                  className={inputClass}
                  placeholder="john@email.com"
                />
              </div>
            </div>
            <p className="text-brand-charcoal/70 text-xs -mt-3">
              Provide a phone number, email, or both — whichever works best for you.
            </p>

            {/* Address */}
            <div>
              <label className="block text-sm font-semibold text-brand-dark mb-1.5" htmlFor="address">
                Property Address <span className="text-brand-red">*</span>
              </label>
              <input
                id="address"
                name="address"
                type="text"
                required
                autoComplete="street-address"
                value={form.address}
                onChange={handleChange}
                className={inputClass}
                placeholder="123 Main St, Charlotte, NC"
              />
            </div>

            {/* Service */}
            <div>
              <label className="block text-sm font-semibold text-brand-dark mb-1.5" htmlFor="service">
                What service are you interested in?
              </label>
              <select
                id="service"
                name="service"
                value={form.service}
                onChange={handleChange}
                className={`${inputClass} bg-white`}
              >
                <option value="">Select a service (optional)</option>
                {serviceOptions.map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-semibold text-brand-dark mb-1.5" htmlFor="message">
                Tell us about your project
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={form.message}
                onChange={handleChange}
                className={`${inputClass} resize-none`}
                placeholder="Describe what you're looking for — or just tell us what's on your mind. You don't need to know the exact service."
              />
            </div>

            {/* Honeypot — invisible to real users, catches bots */}
            <input
              name="_trap"
              type="text"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              value={form._trap}
              onChange={handleChange}
              style={{ position: "absolute", left: "-9999px", width: "1px", height: "1px", overflow: "hidden" }}
            />

            {/* Error */}
            {status === "error" && (
              <p className="text-brand-red text-sm font-medium">{errorMsg}</p>
            )}

            {/* Consent disclosure */}
            <p className="text-brand-charcoal/50 text-xs leading-relaxed">
              By submitting this form, you agree that JDP Landscaping may use
              the information you provide to respond to your inquiry via phone,
              email, or text message. Your details are sent to us through a
              secure SMS service so we can follow up promptly. We do not send
              marketing messages or share your information. See our{" "}
              <Link href="/privacy" className="text-brand-green hover:underline">
                Privacy Policy
              </Link>{" "}
              and{" "}
              <Link href="/terms" className="text-brand-green hover:underline">
                Terms of Service
              </Link>
              .
            </p>

            {/* Submit */}
            <button
              type="submit"
              disabled={status === "submitting"}
              className="w-full bg-brand-green hover:bg-brand-green-mid disabled:opacity-60 text-white font-bold text-base py-4 rounded-xl transition-colors"
            >
              {status === "submitting" ? "Sending your request…" : "Submit Your Request"}
            </button>

            <p className="text-center text-brand-charcoal/70 text-sm">
              Rather call?{" "}
              <a
                href="tel:+17049896027"
                className="text-brand-green font-semibold hover:underline"
              >
                (704) 989-6027
              </a>
            </p>
          </form>
        </div>
  );

  if (standalone) {
    return (
      <section className="py-12 lg:py-16 bg-brand-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {formCard}
        </div>
      </section>
    );
  }

  return (
    <section id="quote" className="py-20 pb-32 lg:py-28 lg:pb-28 bg-brand-cream">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-brand-green font-semibold text-sm tracking-widest uppercase mb-4">
            Contact Us
          </p>
          <h2 className="font-heading font-black text-brand-dark text-3xl sm:text-4xl lg:text-5xl leading-tight mb-4">
            Ready to Talk? Let&apos;s Get You a Free Quote.
          </h2>
          <p className="text-brand-charcoal/70 text-base sm:text-lg max-w-xl mx-auto">
            No contracts. No pressure. Just honest work at a fair price. Fill out
            the form or give us a call — we&apos;re real people and we answer.
          </p>
          <p className="text-brand-green font-semibold text-sm mt-3">
            We typically respond within one business day.
          </p>
        </div>
        {formCard}
      </div>
    </section>
  );
}
