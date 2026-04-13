import { NextRequest } from "next/server";
import { sendQuoteSMS } from "@/lib/twilio";

// ─── Rate limiter ─────────────────────────────────────────────────────────────
// NOTE (H1): This in-memory map is reset on every serverless cold start.
// On Vercel, multiple concurrent instances each maintain their own map.
// This provides basic protection within a single warm instance but is not
// durable across instances. For production hardening, replace with
// Vercel KV + @vercel/kv, or Upstash Redis + @upstash/ratelimit.
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT_MAX = 5;
const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000; // 1 hour

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);

  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return true;
  }

  if (entry.count >= RATE_LIMIT_MAX) return false;

  entry.count += 1;
  return true;
}

// Check whether Twilio is configured
function twilioIsConfigured(): boolean {
  return Boolean(
    process.env.TWILIO_ACCOUNT_SID &&
    process.env.TWILIO_AUTH_TOKEN &&
    process.env.TWILIO_PHONE_NUMBER &&
    process.env.OWNER_PHONE_NUMBER
  );
}

// Allowlists for enumerated fields (H2 fix)
const ALLOWED_SERVICES = new Set([
  "Trimming",
  "Mulching",
  "Removal",
  "Planting",
  "Multiple Services",
  "Not Sure — Just Want to Talk",
  "",
]);
const ALLOWED_CONTACTS = new Set(["phone", "text", "email", "any", ""]);

// Basic phone format: allow digits, spaces, dashes, parens, plus sign (M3 fix)
const PHONE_RE = /^[\d\s\-()+]{7,20}$/;

export async function POST(request: NextRequest) {
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    request.headers.get("x-real-ip") ??
    "unknown";

  if (!checkRateLimit(ip)) {
    return Response.json(
      { error: "Too many requests. Please call us directly at (704) 989-6027." },
      { status: 429 }
    );
  }

  let body: Record<string, unknown>;

  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid request body." }, { status: 400 });
  }

  const {
    firstName,
    lastName,
    phone,
    email,
    address,
    service,
    message,
    preferredContact,
    smsConsent,
    _trap,
  } = body as Record<string, string | boolean>;

  // Honeypot — bots fill this, real users don't
  if (_trap) {
    return Response.json({ success: true });
  }

  // Field length limits
  if (
    String(firstName ?? "").length > 100 ||
    String(lastName ?? "").length > 100 ||
    String(address ?? "").length > 300 ||
    String(message ?? "").length > 1000 ||
    String(phone ?? "").length > 30 ||
    String(email ?? "").length > 254
  ) {
    return Response.json({ error: "Invalid request." }, { status: 400 });
  }

  // Allowlist validation for enumerated fields (H2 fix)
  if (!ALLOWED_SERVICES.has(String(service ?? ""))) {
    return Response.json({ error: "Invalid request." }, { status: 400 });
  }
  if (!ALLOWED_CONTACTS.has(String(preferredContact ?? ""))) {
    return Response.json({ error: "Invalid request." }, { status: 400 });
  }

  // Required: name and address
  if (!firstName || !address) {
    return Response.json(
      { error: "Please fill in all required fields." },
      { status: 400 }
    );
  }

  const phoneStr = String(phone ?? "").trim();
  const emailStr = String(email ?? "").trim();

  // Required: at least phone or email
  if (!phoneStr && !emailStr) {
    return Response.json(
      { error: "Please provide at least a phone number or email address." },
      { status: 400 }
    );
  }

  // Phone format validation if provided (M3 fix, pairs with C2 newline-stripping in twilio.ts)
  if (phoneStr && !PHONE_RE.test(phoneStr)) {
    return Response.json({ error: "Please enter a valid phone number." }, { status: 400 });
  }

  // Email format check if provided
  if (emailStr && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailStr)) {
    return Response.json({ error: "Please enter a valid email address." }, { status: 400 });
  }

  const quotePayload = {
    firstName: String(firstName),
    lastName: String(lastName ?? ""),
    phone: phoneStr,
    email: emailStr,
    address: String(address),
    service: String(service ?? ""),
    message: String(message ?? ""),
    preferredContact: String(preferredContact ?? ""),
    smsConsent: smsConsent === true,
  };

  // Dev bypass — set SKIP_SMS=true in environment to skip the Twilio call
  if (process.env.SKIP_SMS === "true") {
    // Redact PII from logs (H3 fix)
    console.log("[quote] SMS skipped (SKIP_SMS=true). Submission received:", {
      service: quotePayload.service,
      preferredContact: quotePayload.preferredContact,
      smsConsent: quotePayload.smsConsent,
      hasPhone: Boolean(quotePayload.phone),
      hasEmail: Boolean(quotePayload.email),
    });
    return Response.json({ success: true });
  }

  // Pre-Twilio fallback — accept submissions and log without PII (H3 fix)
  if (!twilioIsConfigured()) {
    console.log("[quote] Twilio not configured. Submission received (not delivered via SMS):", {
      service: quotePayload.service,
      preferredContact: quotePayload.preferredContact,
      smsConsent: quotePayload.smsConsent,
      hasPhone: Boolean(quotePayload.phone),
      hasEmail: Boolean(quotePayload.email),
    });
    return Response.json({ success: true });
  }

  try {
    await sendQuoteSMS(quotePayload);
    return Response.json({ success: true });
  } catch (err: unknown) {
    console.error("[quote] Twilio SMS error:", err);
    return Response.json(
      {
        error:
          "We couldn't send your request right now. Please call us directly at (704) 989-6027.",
      },
      { status: 500 }
    );
  }
}
