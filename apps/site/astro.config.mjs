import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

// Static output — no adapter (PLAN §6.1). Deployed as Cloudflare Workers static
// assets at cutover. Cross-document view transitions use plain CSS, not
// <ClientRouter /> (CSP-incompatible), plus Astro's built-in prefetch.
export default defineConfig({
  site: "https://plangs.page",
  integrations: [react()],
  prefetch: { prefetchAll: true, defaultStrategy: "hover" },
  vite: {
    plugins: [tailwindcss()],
  },
});
