"use client";

import { useEffect, useRef } from "react";

/**
 * Jobber "work request" embed (client CRM quote form).
 *
 * Jobber's snippet reads `clienthub_id` / `form_url` off its own <script>
 * tag, fetches the form HTML, then *appends* the form iframe to the div whose
 * id matches — it never replaces existing content. That means every snippet
 * execution adds another copy of the form, and removing the script element
 * mid-flight doesn't cancel a request that already started. So injection is
 * guarded two ways:
 *   1. A marker on the container so React StrictMode's double-effect (same
 *      DOM node, two effect runs) only ever injects one script.
 *   2. A MutationObserver that deletes any duplicate iframe the moment it
 *      appears, in case a stale request from a previous mount resolves late.
 *
 * NOTE: the production CSP in next.config.ts explicitly allows
 * d3ey4dbjkt2f6s.cloudfront.net (script/style) and clienthub.getjobber.com
 * (frame). If Jobber ever changes domains, update it there too.
 */

const CLIENTHUB_ID = "6803da1b-d0c7-492b-9613-8d3d1f92b5e5-4810429";
const FORM_URL =
  "https://clienthub.getjobber.com/client_hubs/6803da1b-d0c7-492b-9613-8d3d1f92b5e5/public/work_request/embedded_work_request_form?form_id=4810429";
const CSS_URL =
  "https://d3ey4dbjkt2f6s.cloudfront.net/assets/external/work_request_embed.css";
const SCRIPT_URL =
  "https://d3ey4dbjkt2f6s.cloudfront.net/assets/static_link/work_request_embed_snippet.js";

export default function JobberEmbed() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Stylesheet only needs to exist once
    if (!document.querySelector(`link[href="${CSS_URL}"]`)) {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = CSS_URL;
      link.media = "screen";
      document.head.appendChild(link);
    }

    if (!container.dataset.jobberInjected) {
      container.dataset.jobberInjected = "true";

      // Drop script tags left over from a previous visit to this page; the
      // snippet captured the old (now detached) container, so they're inert.
      document
        .querySelectorAll(`script[src="${SCRIPT_URL}"]`)
        .forEach((s) => s.remove());

      const script = document.createElement("script");
      script.src = SCRIPT_URL;
      script.setAttribute("clienthub_id", CLIENTHUB_ID);
      script.setAttribute("form_url", FORM_URL);
      document.body.appendChild(script);
    }

    // Keep exactly one form: remove any iframe past the first as soon as it
    // is appended.
    const observer = new MutationObserver(() => {
      const frames = container.querySelectorAll("iframe");
      for (let i = 1; i < frames.length; i++) frames[i].remove();
    });
    observer.observe(container, { childList: true });

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      id={CLIENTHUB_ID}
      className="min-h-[600px]"
      aria-label="Request a quote form"
    />
  );
}
