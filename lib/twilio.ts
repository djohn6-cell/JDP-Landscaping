import twilio from "twilio";

let _client: ReturnType<typeof twilio> | null = null;

function getClient() {
  if (!_client) {
    const sid = process.env.TWILIO_ACCOUNT_SID;
    const token = process.env.TWILIO_AUTH_TOKEN;

    if (!sid || !token) {
      throw new Error(
        "Missing TWILIO_ACCOUNT_SID or TWILIO_AUTH_TOKEN in environment variables."
      );
    }

    _client = twilio(sid, token);
  }
  return _client;
}

// Strip characters that could enable SMS header injection (C2 fix)
function sanitize(s: string): string {
  return s.replace(/[\r\n\t]/g, " ").trim();
}

export async function sendQuoteSMS({
  firstName,
  lastName,
  phone,
  email,
  address,
  service,
  message,
  preferredContact,
  smsConsent,
}: {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  address: string;
  service: string;
  message: string;
  preferredContact?: string;
  smsConsent?: boolean;
}) {
  const from = process.env.TWILIO_PHONE_NUMBER?.trim();
  const to = process.env.OWNER_PHONE_NUMBER?.trim();

  if (!from || !to) {
    throw new Error(
      "Missing TWILIO_PHONE_NUMBER or OWNER_PHONE_NUMBER in environment variables."
    );
  }

  const contactLabel: Record<string, string> = {
    phone: "Phone Call",
    text: "Text Message",
    email: "Email",
    any: "No Preference",
  };

  const body = [
    "📋 New Quote Request — JDP Landscaping",
    `Name: ${sanitize(firstName)} ${sanitize(lastName)}`,
    phone ? `Phone: ${sanitize(phone)}` : null,
    email ? `Email: ${sanitize(email)}` : null,
    `Address: ${sanitize(address)}`,
    service ? `Service: ${sanitize(service)}` : null,
    preferredContact
      ? `Preferred Contact: ${sanitize(contactLabel[preferredContact] ?? preferredContact)}`
      : null,
    `SMS Opt-In: ${smsConsent ? "✅ Yes — may send SMS for follow-up" : "❌ No — use phone/email only"}`,
    message ? `Note: ${sanitize(message)}` : null,
  ]
    .filter(Boolean)
    .join("\n");

  const client = getClient();

  return client.messages.create({ body, from, to });
}
