This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Quote requests

The `/quote` page embeds the Jobber CRM request form (`components/JobberEmbed.tsx`). Quote submissions are handled entirely by Jobber — there is no server-side quote pipeline in this app.

### Removed: legacy custom quote pipeline (June 2026)

The original custom pipeline (QuoteForm component → `POST /api/quote` → SMTP email + Telnyx SMS → `/thank-you` page) was removed after the Jobber embed went live. The following environment variables are **no longer read by any code** and can be deleted from `.env.local` and from Vercel project settings:

| Variable | Was used for |
| --- | --- |
| `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS`, `SMTP_FROM` | Owner email notification (nodemailer) |
| `OWNER_EMAIL` | Notification recipient |
| `TELNYX_API_KEY`, `TELNYX_FROM_NUMBER` | Owner SMS alert (Telnyx) |
| `OWNER_PHONE_NUMBER` | SMS alert recipient |
| `TEST_EMAIL_ENABLED`, `TEST_SMS_ENABLED` | Dev-only test routes (`/api/quote/test`, `/api/quote/sms-test`) |
| `TWILIO_ACCOUNT_SID`, `TWILIO_AUTH_TOKEN`, `TWILIO_PHONE_NUMBER` | Earlier Twilio SMS sender (`lib/twilio.ts`) — already unused before removal |

`NEXT_PUBLIC_SITE_URL` is still required (SEO metadata, sitemap, robots).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
