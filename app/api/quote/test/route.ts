import twilio from "twilio";

/**
 * GET /api/quote/test
 *
 * Sends a single hardcoded test SMS to OWNER_PHONE_NUMBER via Twilio.
 * Disabled unless TEST_SMS_ENABLED=true in your .env.local.
 * Blocked entirely in production (returns 404).
 *
 * Trigger with:
 *   curl http://localhost:3000/api/quote/test
 *   — or just open that URL in your browser.
 */
export async function GET() {
  // Hard block in production — returns 404 with no detail (C1 fix)
  if (process.env.NODE_ENV === "production") {
    return Response.json({ error: "Not found." }, { status: 404 });
  }

  // Guard: must explicitly opt in during development
  if (process.env.TEST_SMS_ENABLED !== "true") {
    return Response.json(
      { error: "Test mode is disabled." },
      { status: 403 }
    );
  }

  const sid = process.env.TWILIO_ACCOUNT_SID;
  const token = process.env.TWILIO_AUTH_TOKEN;
  const from = process.env.TWILIO_PHONE_NUMBER;
  const to = process.env.OWNER_PHONE_NUMBER;

  // Log which vars are present — server-side only, never in response body (C1 fix)
  console.log("[twilio-test] Env check:", {
    TWILIO_ACCOUNT_SID: sid ? `${sid.slice(0, 6)}…` : "MISSING",
    TWILIO_AUTH_TOKEN: token ? "set" : "MISSING",
    TWILIO_PHONE_NUMBER: from ? "set" : "MISSING",
    OWNER_PHONE_NUMBER: to ? "set" : "MISSING",
  });

  if (!sid || !token || !from || !to) {
    // Do not list which vars are missing in the response body (C1 fix)
    return Response.json(
      { error: "SMS configuration incomplete. Check server logs." },
      { status: 500 }
    );
  }

  const client = twilio(sid, token);

  try {
    const msg = await client.messages.create({
      body: "✅ JDP Landscaping — Twilio test SMS. If you got this, the integration works.",
      from,
      to,
    });

    console.log("[twilio-test] SMS sent successfully:", {
      sid: msg.sid,
      status: msg.status,
    });

    return Response.json({
      success: true,
      messageSid: msg.sid,
      status: msg.status,
    });
  } catch (err: unknown) {
    const error = err as { message?: string; code?: number };
    // Log details server-side only — never expose raw SDK errors in response body (C1 fix)
    console.error("[twilio-test] Twilio error:", {
      message: error.message,
      code: error.code,
    });
    return Response.json(
      { success: false, error: "SMS delivery failed." },
      { status: 500 }
    );
  }
}
