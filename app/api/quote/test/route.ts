import { getMissingEmailEnvVars, sendQuoteEmail } from "@/lib/email";

/**
 * GET /api/quote/test
 *
 * Sends one development-only test email to OWNER_EMAIL.
 * Disabled unless TEST_EMAIL_ENABLED=true in .env.local.
 * Blocked entirely in production.
 */
export async function GET() {
  if (process.env.NODE_ENV === "production") {
    return Response.json({ error: "Not found." }, { status: 404 });
  }

  if (process.env.TEST_EMAIL_ENABLED !== "true") {
    return Response.json(
      { error: "Test mode is disabled. Set TEST_EMAIL_ENABLED=true locally." },
      { status: 403 }
    );
  }

  const missingEmailEnvVars = getMissingEmailEnvVars();

  if (missingEmailEnvVars.length > 0) {
    console.error("[quote-email-test] Missing email environment variables:", missingEmailEnvVars);
    return Response.json(
      { error: "Email configuration incomplete. Check server logs." },
      { status: 500 }
    );
  }

  try {
    const result = await sendQuoteEmail({
      fullName: "Test Quote Request",
      phone: "(704) 989-6027",
      email: "test@example.com",
      address: "Local test submission",
      service: "Mulching",
      message: "This is a local test email from /api/quote/test.",
      preferredContact: "email",
      smsConsent: false,
      submittedAt: new Date(),
    });

    console.log("[quote-email-test] Email sent successfully:", {
      messageId: result.messageId,
    });

    return Response.json({ success: true, messageId: result.messageId });
  } catch (err: unknown) {
    console.error("[quote-email-test] Email delivery failed:", err);
    return Response.json(
      { success: false, error: "Email delivery failed." },
      { status: 500 }
    );
  }
}
