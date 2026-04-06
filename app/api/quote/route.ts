import { NextRequest } from "next/server";
import { sendQuoteSMS } from "@/lib/twilio";

// Simple in-memory rate limiter: max 5 requests per IP per hour
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

export async function POST(request: NextRequest) {
  // Rate limiting
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

  let body: Record<string, string>;

  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid request body." }, { status: 400 });
  }

  const { firstName, lastName, phone, email, address, service, message } = body;

  // Required: name and address
  if (!firstName || !address) {
    return Response.json(
      { error: "Please fill in all required fields." },
      { status: 400 }
    );
  }

  // Required: at least phone or email
  if (!phone?.trim() && !email?.trim()) {
    return Response.json(
      { error: "Please provide at least a phone number or email address." },
      { status: 400 }
    );
  }

  // Email format check if provided
  if (email?.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return Response.json({ error: "Please enter a valid email address." }, { status: 400 });
  }

  // Dev bypass — set SKIP_SMS=true in .env.local to skip actual Twilio call
  if (process.env.SKIP_SMS === "true") {
    console.log("[dev] SMS skipped. Quote data:", {
      firstName, lastName, phone, email, address, service, message,
    });
    return Response.json({ success: true });
  }

  try {
    await sendQuoteSMS({ firstName, lastName, phone, email, address, service, message });
    return Response.json({ success: true });
  } catch (err: unknown) {
    console.error("Twilio SMS error:", err);
    return Response.json(
      {
        error:
          "We couldn't send your request right now. Please call us directly at (704) 989-6027.",
      },
      { status: 500 }
    );
  }
}
