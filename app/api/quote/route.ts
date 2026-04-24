import { NextRequest } from "next/server";
import { getMissingEmailEnvVars, sendQuoteEmail } from "@/lib/email";

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

const ALLOWED_SERVICES = new Set([
  "Trimming",
  "Mulching",
  "Removal",
  "Planting",
  "Multiple Services",
  "Not Sure â€” Just Want to Talk",
  "",
]);
const ALLOWED_CONTACTS = new Set(["phone", "text", "email", "any", ""]);
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

  if (_trap) {
    return Response.json({ success: true });
  }

  const fullName = `${String(firstName ?? "").trim()} ${String(lastName ?? "").trim()}`.trim();
  const phoneStr = String(phone ?? "").trim();
  const emailStr = String(email ?? "").trim();
  const addressStr = String(address ?? "").trim();
  const serviceStr = String(service ?? "").trim();
  const messageStr = String(message ?? "").trim();
  const preferredContactStr = String(preferredContact ?? "").trim();
  const hasSmsConsent = smsConsent === true;

  if (
    fullName.length > 200 ||
    addressStr.length > 300 ||
    messageStr.length > 1000 ||
    phoneStr.length > 30 ||
    emailStr.length > 254
  ) {
    return Response.json({ error: "Invalid request." }, { status: 400 });
  }

  if (!ALLOWED_SERVICES.has(serviceStr)) {
    return Response.json({ error: "Invalid request." }, { status: 400 });
  }

  if (!ALLOWED_CONTACTS.has(preferredContactStr)) {
    return Response.json({ error: "Invalid request." }, { status: 400 });
  }

  if (!fullName || !addressStr) {
    return Response.json(
      { error: "Please fill in all required fields." },
      { status: 400 }
    );
  }

  if (!phoneStr && !emailStr) {
    return Response.json(
      { error: "Please provide at least a phone number or email address." },
      { status: 400 }
    );
  }

  if (phoneStr && !PHONE_RE.test(phoneStr)) {
    return Response.json({ error: "Please enter a valid phone number." }, { status: 400 });
  }

  if (emailStr && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailStr)) {
    return Response.json({ error: "Please enter a valid email address." }, { status: 400 });
  }

  const missingEmailEnvVars = getMissingEmailEnvVars();

  if (missingEmailEnvVars.length > 0) {
    console.error("[quote] Missing email environment variables:", missingEmailEnvVars);
    return Response.json(
      {
        error:
          "Quote requests are temporarily unavailable due to a server email configuration issue. Please call us directly at (704) 989-6027.",
      },
      { status: 500 }
    );
  }

  try {
    await sendQuoteEmail({
      fullName,
      phone: phoneStr,
      email: emailStr,
      address: addressStr,
      service: serviceStr,
      message: messageStr,
      preferredContact: preferredContactStr,
      smsConsent: hasSmsConsent,
      submittedAt: new Date(),
    });

    return Response.json({ success: true });
  } catch (err: unknown) {
    console.error("[quote] Owner email notification failed:", err);
    return Response.json(
      {
        error:
          "We couldn't send your request right now. Please call us directly at (704) 989-6027.",
      },
      { status: 500 }
    );
  }
}
