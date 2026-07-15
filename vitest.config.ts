import { fileURLToPath } from "node:url";
import { playwright } from "@vitest/browser-playwright";
import { defineConfig } from "vitest/config";

const DIST = fileURLToPath(new URL("./apps/site/dist", import.meta.url));

/**
 * Serve the built site to browser tests.
 *
 * Pages are loaded from `/__dist__/...`, but their markup references assets by
 * ABSOLUTE path (`/_astro/x.css`, `/images/...`, `/favicon.svg`). Those must
 * also resolve to dist, or the page loads with no CSS and no JS and every
 * assertion measures an unstyled document. Mounting the asset roots as well
 * keeps everything same-origin, so tests can still read into the iframe.
 */
function serveDist() {
  return {
    name: "serve-dist",
    configureServer(server: { middlewares: { use: (p: string, h: unknown) => void } }) {
      return import("sirv").then(({ default: sirv }) => {
        const opts = { dev: true, etag: false } as const;
        server.middlewares.use("/__dist__", sirv(DIST, opts));
        for (const mount of ["/_astro", "/images", "/fonts", "/data"]) {
          server.middlewares.use(mount, sirv(`${DIST}${mount}`, opts));
        }
      });
    },
  };
}

/**
 * Two projects:
 *  - `unit`    — fast Node tests (schema, graph, pipeline, url/fragment logic).
 *  - `browser` — real Chromium via Playwright, loading the BUILT site out of
 *                apps/site/dist. These catch what `pnpm build` cannot: CSS that
 *                never applies, islands that don't hydrate, runtime errors.
 *                Requires `pnpm -F @plangs/site build` first.
 *
 * `pnpm test` runs unit only (fast, no browser). `pnpm test:browser` runs the
 * browser project. `pnpm test:all` runs both.
 */
export default defineConfig({
  test: {
    projects: [
      {
        test: {
          name: "unit",
          include: ["packages/**/src/**/*.test.ts", "apps/**/src/**/*.test.ts", "scripts/**/*.test.ts"],
          exclude: ["**/node_modules/**", "**/dist/**", "**/*.browser.test.ts"],
        },
      },
      {
        plugins: [serveDist()],
        test: {
          name: "browser",
          include: ["apps/site/test/**/*.browser.test.ts"],
          browser: {
            enabled: true,
            // Vitest 4 takes a provider FACTORY, not the string "playwright".
            provider: playwright(),
            headless: true,
            instances: [{ browser: "chromium" }],
          },
        },
      },
    ],
  },
});
