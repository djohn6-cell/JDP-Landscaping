import twilio from "twilio";

/**
 * GET /api/quote/test
 *
 * Sends a single hardcoded test SMS to OWNER_PHONE_NUMBER via Twilio.
 * Disabled unless TEST_SMS_ENABLED=true in your .env.local.
 *
 * Trigger with:
 *   curl http://localhost:3000/api/quote/test
 *   — or just open that URL in your browser.
 */
export async function GET() {
  // Guard: must explicitly opt in
  if (process.env.TEST_SMS_ENABLED !== "true") {
    console.warn("[twilio-test] Blocked — TEST_SMS_ENABLED is not 'true'");
    return Response.json(
      { error: "Test mode is disabled. Set TEST_SMS_ENABLED=true in .env.local to enable." },
      { status: 403 }
    );
  }

  const sid = process.env.TWILIO_ACCOUNT_SID;
  const token = process.env.TWILIO_AUTH_TOKEN;
  const from = process.env.TWILIO_PHONE_NUMBER;
  const to = process.env.OWNER_PHONE_NUMBER;

  // Log which vars are present so missing ones are obvious
  console.log("[twilio-test] Env check:", {
    TWILIO_ACCOUNT_SID: sid ? `${sid.slice(0, 6)}…` : "MISSING",
    TWILIO_AUTH_TOKEN: token ? "set" : "MISSING",
    TWILIO_PHONE_NUMBER: from ?? "MISSING",
    OWNER_PHONE_NUMBER: to ?? "MISSING",
  });

  if (!sid || !token || !from || !to) {
    const missing = [
      !sid && "TWILIO_ACCOUNT_SID",
      !token && "TWILIO_AUTH_TOKEN",
      !from && "TWILIO_PHONE_NUMBER",
      !to && "OWNER_PHONE_NUMBER",
    ].filter(Boolean);
    console.error("[twilio-test] Missing env vars:", missing);
    return Response.json(
      { error: "Missing required env vars", missing },
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
      to: msg.to,
      from: msg.from,
    });

    return Response.json({
      success: true,
      messageSid: msg.sid,
      status: msg.status,
      to: msg.to,
    });
  } catch (err: unknown) {
    const error = err as { message?: string; code?: number; status?: number };
    console.error("[twilio-test] Twilio error:", {
      message: error.message,
      code: error.code,
      status: error.status,
    });
    return Response.json(
      {
        success: false,
        error: error.message ?? "Unknown Twilio error",
        code: error.code,
      },
      { status: 500 }
    );
  }
}
