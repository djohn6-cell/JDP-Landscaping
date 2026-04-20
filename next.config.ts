import type { NextConfig } from "next";
import { networkInterfaces } from "node:os";

const isProd = process.env.NODE_ENV === "production";
const allowedDevOrigins = Array.from(
  new Set([
    "localhost",
    "127.0.0.1",
    ...Object.values(networkInterfaces())
      .flat()
      .filter(
        (network): network is NonNullable<typeof network> =>
          Boolean(network) &&
          network.family === "IPv4" &&
          !network.internal &&
          !network.address.startsWith("169.254.")
      )
      .map((network) => network.address),
  ])
);

const securityHeaders = [
  // Prevent clickjacking
  { key: "X-Frame-Options", value: "DENY" },
  // Prevent MIME sniffing
  { key: "X-Content-Type-Options", value: "nosniff" },
  // Control referrer information
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  // Restrict browser features
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
  // Enforce HTTPS for 1 year in production only.
  ...(isProd
    ? [{ key: "Strict-Transport-Security", value: "max-age=31536000; includeSubDomains" }]
    : []),
  // Disable DNS prefetching to prevent leaking browsing context to DNS resolvers (M2 fix)
  { key: "X-DNS-Prefetch-Control", value: "off" },
  // Content Security Policy
  // NOTE (H4): 'unsafe-inline' is required for Next.js styles without nonce-based middleware.
  // 'unsafe-eval' is excluded in production — only development mode requires it for HMR.
  // To fully remove 'unsafe-inline', implement a nonce via middleware.ts (Next.js 13+ supports this).
  {
    key: "Content-Security-Policy",
    value: [
      "default-src 'self'",
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
      // Remove 'unsafe-eval' in production builds (H4 partial fix)
      `script-src 'self' 'unsafe-inline'${isProd ? "" : " 'unsafe-eval'"}`,
      "font-src 'self' https://fonts.gstatic.com data:",
      "img-src 'self' data: blob:",
      "connect-src 'self'",
      "object-src 'none'",
      "frame-src 'none'",
      "form-action 'self'",
      "frame-ancestors 'none'",
      ...(isProd ? ["upgrade-insecure-requests"] : []),
    ].join("; "),
  },
];

const nextConfig: NextConfig = {
  allowedDevOrigins,
  async headers() {
    if (!isProd) {
      return [];
    }

    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
