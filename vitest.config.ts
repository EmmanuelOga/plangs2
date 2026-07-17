import { existsSync, readdirSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { playwright } from "@vitest/browser-playwright";
import { defineConfig } from "vitest/config";

const DIST = fileURLToPath(new URL("./apps/site/dist", import.meta.url));
const BASELINES = fileURLToPath(new URL("./apps/site/test/__baselines__", import.meta.url));
const ARTIFACTS = fileURLToPath(new URL("./apps/site/test/__screenshots__", import.meta.url));

/**
 * Do we have reviewed pixel baselines for THIS platform?
 *
 * Text rasterizes differently on macOS and Linux, so a baseline recorded on one
 * is a guaranteed mismatch on the other. Vitest already namespaces references by
 * `-${browserName}-${platform}`; this just asks whether any exist here.
 *
 * Vitest FAILS on a missing reference in CI and silently WRITES one otherwise —
 * both are wrong for us: the first reddens CI for a platform nobody recorded,
 * the second manufactures a "baseline" from whatever the page happened to look
 * like, which is how a visual suite becomes a rubber stamp. So the suite skips
 * loudly instead, and only enforces where a human reviewed the reference.
 *
 * `--update` is the deliberate opt-in that bootstraps a new platform: without
 * it the gate would skip the very tests that record the references.
 */
function visualBaselines(): boolean {
  if (process.argv.includes("--update") || process.argv.includes("-u")) return true;
  const suffix = `-chromium-${process.platform}.png`;
  if (!existsSync(BASELINES)) return false;
  return readdirSync(BASELINES, { recursive: true, encoding: "utf8" }).some(f => f.endsWith(suffix));
}

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
        define: { __HAS_VISUAL_BASELINES__: JSON.stringify(visualBaselines()) },
        test: {
          name: "browser",
          include: ["apps/site/test/**/*.browser.test.ts"],
          browser: {
            enabled: true,
            // Vitest 4 takes a provider FACTORY, not the string "playwright".
            provider: playwright(),
            headless: true,
            // The viewport must be BIGGER than the largest iframe any test
            // loads (1440x900). An element screenshot is clipped to the
            // viewport: at the 414x896 default the pixel baselines came out as
            // a ~333px strip of page on a white field, which still "passed"
            // because a baseline recorded from a clipped capture matches the
            // next clipped capture perfectly.
            instances: [{ browser: "chromium", viewport: { width: 1600, height: 1000 } }],
            // NOTE: `expect` lives under `browser`, NOT under `test`. A
            // `test.expect.toMatchScreenshot` block type-checks and is silently
            // ignored — screenshots then land in the default location and the
            // suite still passes, which reads exactly like it worked.
            expect: {
              toMatchScreenshot: {
                // Committed, human-reviewed references. These must be ABSOLUTE
                // paths; a relative one is never written and the assertion just
                // retries until the test times out.
                resolveScreenshotPath: ({ arg, ext, browserName, platform }) => `${BASELINES}/${arg}-${browserName}-${platform}${ext}`,
                // Not committed — written only when a comparison fails.
                resolveDiffPath: ({ arg, ext, browserName, platform }) => `${ARTIFACTS}/diff/${arg}-${browserName}-${platform}${ext}`,
              },
            },
          },
        },
      },
    ],
  },
});
