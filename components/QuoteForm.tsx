"use client";

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
  preferredContact: string;
  smsConsent: boolean;
  _trap: string;
};

const initialForm: FormData = {
  name: "",
  phone: "",
  email: "",
  address: "",
  service: "",
  message: "",
  preferredContact: "",
  smsConsent: false,
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

const contactOptions = [
  { value: "phone", label: "Phone Call" },
  { value: "text", label: "Text Message" },
  { value: "email", label: "Email" },
  { value: "any", label: "No Preference" },
];

export default function QuoteForm({ standalone = false }: { standalone?: boolean }) {
  const [form, setForm] = useState<FormData>(initialForm);
  const [status, setStatus] = useState<"idle" | "submitting" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const router = useRouter();

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    const target = e.target;
    if (target instanceof HTMLInputElement && target.type === "checkbox") {
      setForm((prev) => ({ ...prev, [target.name]: target.checked }));
    } else {
      setForm((prev) => ({ ...prev, [target.name]: target.value }));
    }
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMsg("");

    if (!form.phone.trim() && !form.email.trim()) {
      setErrorMsg("Please provide at least a phone number or email address so we can reach you.");
      setStatus("error");
      return;
    }

    // Basic phone format check (M3 fix)
    if (form.phone.trim() && !/^[\d\s\-()+]{7,20}$/.test(form.phone.trim())) {
      setErrorMsg("Please enter a valid phone number.");
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
          preferredContact: form.preferredContact,
          smsConsent: form.smsConsent,
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

  const inputClass =
    "w-full border border-black/15 rounded-xl px-4 py-3 text-brand-charcoal text-sm focus:outline-none focus:ring-2 focus:ring-brand-green/40 focus:border-brand-green transition";

  const formCard = (
    <div className="bg-white rounded-3xl shadow-lg p-8 sm:p-12">
      <form onSubmit={handleSubmit} className="space-y-6" noValidate>
        {/* Name */}
        <div>
          <label className="block text-sm font-semibold text-brand-dark mb-1.5" htmlFor="name">
            Full Name <span className="text-red-500">*</span>
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
              Phone Number
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
              pattern="[\d\s\-()+]{7,20}"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-brand-dark mb-1.5" htmlFor="email">
              Email Address
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
            Property Address or Service Area <span className="text-red-500">*</span>
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
            Service Needed
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
            Project Details
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            value={form.message}
            onChange={handleChange}
            className={`${inputClass} resize-none`}
            placeholder="Describe what you're looking for — size of yard, current condition, specific goals. You don't need to know the exact service."
          />
        </div>

        {/* Preferred Contact Method */}
        <div>
          <label className="block text-sm font-semibold text-brand-dark mb-2">
            Preferred Contact Method
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {contactOptions.map((opt) => (
              <label
                key={opt.value}
                className={`flex items-center justify-center gap-2 border rounded-xl px-3 py-2.5 text-sm cursor-pointer transition-colors ${
                  form.preferredContact === opt.value
                    ? "border-brand-green bg-brand-green/5 text-brand-green font-semibold"
                    : "border-black/15 text-brand-charcoal hover:border-brand-green/40"
                }`}
              >
                <input
                  type="radio"
                  name="preferredContact"
                  value={opt.value}
                  checked={form.preferredContact === opt.value}
                  onChange={handleChange}
                  className="sr-only"
                />
                {opt.label}
              </label>
            ))}
          </div>
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

        {/* SMS Consent */}
        <div className="rounded-2xl border border-black/10 bg-brand-cream/60 p-5 space-y-3">
          <label className="flex items-start gap-3 cursor-pointer group">
            <input
              id="smsConsent"
              name="smsConsent"
              type="checkbox"
              checked={form.smsConsent}
              onChange={handleChange}
              className="mt-0.5 h-4 w-4 shrink-0 rounded border-gray-300 text-brand-green focus:ring-brand-green/40 cursor-pointer"
            />
            <span className="text-xs text-brand-charcoal/75 leading-relaxed">
              By checking this box, you agree to receive SMS messages from JDP Landscaping
              about your quote request, scheduling, appointments, and service updates.
              Message frequency varies. Message and data rates may apply. Reply{" "}
              <strong>STOP</strong> to opt out. Reply <strong>HELP</strong> for help.
              Consent is not a condition of purchase.
            </span>
          </label>
          <p className="text-xs text-brand-charcoal/50 pl-7">
            By submitting this form you also agree to our{" "}
            <Link href="/privacy-policy" className="text-brand-green hover:underline font-medium">
              Privacy Policy
            </Link>{" "}
            and{" "}
            <Link href="/terms-and-conditions" className="text-brand-green hover:underline font-medium">
              Terms &amp; Conditions
            </Link>
            .
          </p>
        </div>

        {/* Error */}
        {status === "error" && (
          <p className="text-red-600 text-sm font-medium">{errorMsg}</p>
        )}

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
