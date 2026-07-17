// Full axe-core sweep over the built site (PLAN §2a).
//
// Lighthouse runs a SUBSET of axe's rules, so this runs the lot, across both
// themes and at a phone viewport. It found `link-in-text-block` -- inline prose
// links distinguished only by colour -- which Lighthouse never reported.
//
// Usage:
//   pnpm -F @plangs/site build
//   node scripts/serve-dist.mjs &
//   node scripts/axe-audit.mjs

import { readFileSync } from "node:fs";
import { createRequire } from "node:module";
import { chromium } from "playwright";

const require = createRequire(import.meta.url);
const axeSource = readFileSync(require.resolve("axe-core"), "utf8");
const BASE = process.env.AXE_BASE ?? "http://localhost:4321";

const PAGES = ["/", "/plangs", "/nim", "/blog", "/blog/2025_01_01_python", "/about", "/paradigms", "/typesystem/static"];

/*
 * `color-contrast` is DISABLED IN DARK MODE ONLY, because axe cannot compute it
 * here and reports impossible numbers.
 *
 * Cards use `bg-thumbnails` -- rgba(102,0,153,.85) in dark -- over a backdrop
 * painted by a FIXED `body::before` at z-index -1 (deliberate: see CLAUDE.md;
 * it is what keeps the mobile facets sheet on screen). axe resolves a
 * background by walking ANCESTORS, and the ::before is not one, so it invents a
 * light grey `#d9d9db` and calls white-on-dark-purple a 1.38 failure.
 *
 * Measured against the real composite (2026-07-17), those same nodes are:
 *     card name  rgb(245,255,250) on rgb(87,0,133)  -> 11.83  (axe said 1.38)
 *     #N label   60% of it                          ->  4.83  (axe said 1.22)
 * Both pass. axe's LIGHT-mode numbers are trustworthy -- its 4.0 for the #N
 * label matched a hand-computed 4.01 exactly, and that was a real bug, now
 * fixed -- so the rule stays on for light.
 *
 * Re-check by hand if the card background or foreground tokens change. Do not
 * silently widen this exclusion.
 */
const DARK_SKIP = new Set(["color-contrast"]);

const browser = await chromium.launch();
let total = 0;
let suppressed = 0;

for (const path of PAGES) {
  for (const dark of [false, true]) {
    const page = await browser.newPage({ viewport: { width: 390, height: 844 } });
    await page.goto(`${BASE}${path}`, { waitUntil: "networkidle" });
    if (dark) await page.evaluate(() => document.documentElement.classList.add("dark"));
    await page.addScriptTag({ content: axeSource });
    const res = await page.evaluate(async () => await globalThis.axe.run(document, { resultTypes: ["violations"] }));

    for (const v of res.violations) {
      if (dark && DARK_SKIP.has(v.id)) {
        suppressed += v.nodes.length;
        continue;
      }
      total += v.nodes.length;
      console.log(`  ${path} [${dark ? "dark" : "light"}] ${v.impact}: ${v.id} - ${v.help} (${v.nodes.length} node(s))`);
      console.log(`      e.g. ${String(v.nodes[0].html).slice(0, 100)}`);
    }
    await page.close();
  }
}
await browser.close();

console.log(
  total === 0
    ? `\naxe: CLEAN - ${PAGES.length} pages x light/dark (${suppressed} dark color-contrast node(s) suppressed; see the note in this file)`
    : `\naxe: ${total} violating node(s)`,
);
process.exitCode = total === 0 ? 0 : 1;
