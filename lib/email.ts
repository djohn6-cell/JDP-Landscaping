import nodemailer from "nodemailer";

export type QuoteEmailPayload = {
  fullName: string;
  phone: string;
  email: string;
  address: string;
  service: string;
  message: string;
  preferredContact: string;
  smsConsent: boolean;
  submittedAt: Date;
};

const contactLabel: Record<string, string> = {
  phone: "Phone Call",
  text: "Text Message",
  email: "Email",
  any: "No Preference",
};

const requiredEmailEnvVars = [
  "OWNER_EMAIL",
  "SMTP_HOST",
  "SMTP_PORT",
  "SMTP_USER",
  "SMTP_PASS",
  "SMTP_FROM",
] as const;

export function getMissingEmailEnvVars() {
  return requiredEmailEnvVars.filter((key) => !process.env[key]?.trim());
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function display(value: string) {
  const trimmed = value.trim();
  return trimmed || "Not provided";
}

function formatSubmittedAt(date: Date) {
  return new Intl.DateTimeFormat("en-US", {
    dateStyle: "medium",
    timeStyle: "short",
    timeZone: "America/New_York",
  }).format(date);
}

function buildEmailRows(payload: QuoteEmailPayload) {
  return [
    ["Full name", display(payload.fullName)],
    ["Phone number", display(payload.phone)],
    ["Email address", display(payload.email)],
    ["Property address or service area", display(payload.address)],
    ["Service selected", display(payload.service)],
    ["Project details", display(payload.message)],
    ["Preferred contact method", contactLabel[payload.preferredContact] ?? display(payload.preferredContact)],
    ["SMS consent status", payload.smsConsent ? "Opted in" : "Not opted in"],
    ["Submission date/time", `${formatSubmittedAt(payload.submittedAt)} ET`],
  ] as const;
}

export async function sendQuoteEmail(payload: QuoteEmailPayload) {
  const port = Number(process.env.SMTP_PORT);

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port,
    secure: port === 465,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  const rows = buildEmailRows(payload);
  const text = [
    "New Quote Request - JDP Landscaping",
    "",
    ...rows.map(([label, value]) => `${label}: ${value}`),
  ].join("\n");

  const htmlRows = rows
    .map(
      ([label, value]) => `
        <tr>
          <th align="left" style="padding:8px 12px;border-bottom:1px solid #e5e7eb;background:#f9fafb;width:220px;">${escapeHtml(label)}</th>
          <td style="padding:8px 12px;border-bottom:1px solid #e5e7eb;">${escapeHtml(value).replace(/\n/g, "<br />")}</td>
        </tr>`
    )
    .join("");

  const html = `
    <div style="font-family:Arial,sans-serif;color:#111827;line-height:1.5;">
      <h1 style="font-size:20px;margin:0 0 16px;">New Quote Request - JDP Landscaping</h1>
      <table cellpadding="0" cellspacing="0" style="border-collapse:collapse;width:100%;max-width:720px;border:1px solid #e5e7eb;">
        <tbody>${htmlRows}</tbody>
      </table>
    </div>
  `;

  return transporter.sendMail({
    from: process.env.SMTP_FROM,
    to: process.env.OWNER_EMAIL,
    subject: "New Quote Request - JDP Landscaping",
    text,
    html,
  });
}
