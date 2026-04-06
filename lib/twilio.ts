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

export async function sendQuoteSMS({
  firstName,
  lastName,
  phone,
  email,
  address,
  service,
  message,
}: {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  address: string;
  service: string;
  message: string;
}) {
  const from = process.env.TWILIO_PHONE_NUMBER?.trim();
  const to = process.env.OWNER_PHONE_NUMBER?.trim();
  console.log("[twilio debug] from:", JSON.stringify(from), "to:", JSON.stringify(to));

  if (!from || !to) {
    throw new Error(
      "Missing TWILIO_PHONE_NUMBER or OWNER_PHONE_NUMBER in environment variables."
    );
  }

  const body = [
    "📋 New Quote Request — JDP Landscaping",
    `Name: ${firstName} ${lastName}`,
    `Phone: ${phone}`,
    `Email: ${email}`,
    `Address: ${address}`,
    service ? `Service: ${service}` : null,
    message ? `Note: ${message}` : null,
  ]
    .filter(Boolean)
    .join("\n");

  const client = getClient();

  return client.messages.create({ body, from, to });
}
