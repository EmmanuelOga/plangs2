import react from "@astrojs/react";
import { getNode, nodeName } from "@plangs/graph";
import { legacyToNew } from "@plangs/schema";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig, fontProviders } from "astro/config";
import { getGraph } from "./src/lib/graph";
import { remarkVertexRefs } from "./src/lib/remark-vertex-refs.mjs";
import { hrefForKey } from "./src/lib/url";

/** Resolve a legacy `(pl+typescript)` content ref to a real node link. */
function lookup(legacyKey: string): { name: string; href: string } | undefined {
  const key = legacyToNew(legacyKey);
  const graph = getGraph();
  const node = getNode(graph, key);
  if (!node?.defined) return undefined;
  return { name: nodeName(graph, key), href: hrefForKey(key) };
}

// Static output — no adapter (PLAN §6.1). Deployed as Cloudflare Workers static
// assets at cutover. Cross-document view transitions use plain CSS, not
// <ClientRouter /> (CSP-incompatible), plus Astro's built-in prefetch.
export default defineConfig({
  site: "https://plangs.page",
  integrations: [react()],
  prefetch: { prefetchAll: true, defaultStrategy: "hover" },
  // Astro's built-in Fonts API replaces the hand-rolled @font-face + shipped
  // .ttf/.woff2 fallbacks of the legacy theme (PLAN §6.3).
  fonts: [
    {
      provider: fontProviders.google(),
      name: "Nunito",
      cssVariable: "--font-nunito",
      weights: [500, 700],
      styles: ["normal"],
      subsets: ["latin"],
      fallbacks: ["Arial Rounded MT Bold", "Calibri", "sans-serif"],
    },
    {
      provider: fontProviders.google(),
      name: "Rubik",
      cssVariable: "--font-rubik",
      weights: [600],
      styles: ["italic", "normal"],
      subsets: ["latin"],
      fallbacks: ["sans-serif"],
    },
  ],
  markdown: {
    remarkPlugins: [[remarkVertexRefs, { lookup }]],
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
