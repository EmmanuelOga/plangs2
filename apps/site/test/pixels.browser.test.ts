import { afterEach, describe, expect, it } from "vitest";
import { type LoadedPage, loadPage, stabilize, waitForHydration } from "./helpers";

/**
 * VISUAL REGRESSION — the only tests here that assert on RENDERED PIXELS.
 *
 * Every other browser test asserts on computed style or DOM geometry, which is
 * a proxy: it checks the properties someone thought to name. The background
 * mis-port passed each of those and still looked wrong, because "is the page
 * painted correctly" is not expressible as a property list. These compare the
 * actual raster against a reviewed baseline, so a change nobody predicted still
 * fails.
 *
 * Baselines live in `test/__baselines__/` and are COMMITTED. Regenerate with
 * `pnpm test:visual --update` and then LOOK at the diff before committing it —
 * blind updating turns this suite back into a green rubber stamp.
 *
 * Platform: baselines are per-(browser, platform) because text rasterizes
 * differently on macOS and Linux. Only the platform whose baselines are present
 * enforces the comparison; see `visualBaselines` in vitest.config.ts for how the
 * suite skips (loudly) rather than fabricating a baseline on the wrong OS.
 *
 * Requires: pnpm -F @plangs/site build
 */

// Injected by vitest.config.ts: true when this platform has committed baselines.
declare const __HAS_VISUAL_BASELINES__: boolean;

let pg: LoadedPage | undefined;
afterEach(() => {
  pg?.dispose();
  pg = undefined;
});

/** Pixel comparison is only meaningful where a reviewed baseline exists. */
const d = describe.skipIf(!__HAS_VISUAL_BASELINES__);

/**
 * EXACT match. Measured, not assumed: with `stabilize()` applied, repeated runs
 * are pixel-identical, so any tolerance buys nothing and costs coverage.
 *
 * This was verified by re-introducing the real backdrop bug (`body::before` →
 * an unmatched selector) and re-running:
 *
 *   allowedMismatchedPixelRatio: 0.01  →  1 of 5 pages failed
 *   allowedMismatchedPixelRatio: 0     →  5 of 5 pages failed
 *
 * The grid pages are mostly covered by cards, so a missing background moves
 * well under 1% of their pixels — a "reasonable" 1% tolerance silently
 * reproduced the exact blindness this suite exists to fix. If AA noise ever
 * does appear, re-measure before loosening: a tolerance wide enough to absorb
 * it is likely wide enough to absorb a background.
 */
const TOLERANCE = { comparatorName: "pixelmatch", comparatorOptions: { allowedMismatchedPixelRatio: 0 } } as const;

d("rendered pixels", () => {
  it("home page", async () => {
    pg = await loadPage("/index.html", 1280, 900);
    await stabilize(pg);
    await expect(pg.frame).toMatchScreenshot("home", TOLERANCE);
  });

  it("grid with the facets sidebar", async () => {
    pg = await loadPage("/plangs/index.html", 1440, 900);
    await waitForHydration(pg);
    await stabilize(pg);
    await expect(pg.frame).toMatchScreenshot("grid-wide", TOLERANCE);
  });

  it("detail page", async () => {
    pg = await loadPage("/nim/index.html", 1280, 900);
    await stabilize(pg);
    await expect(pg.frame).toMatchScreenshot("detail-nim", TOLERANCE);
  });

  it("grid in dark mode", async () => {
    pg = await loadPage("/plangs/index.html", 1440, 900);
    await waitForHydration(pg);
    pg.doc.documentElement.classList.add("dark");
    await stabilize(pg);
    await expect(pg.frame).toMatchScreenshot("grid-dark", TOLERANCE);
  });

  it("mobile facets sheet, open", async () => {
    pg = await loadPage("/plangs/index.html", 390, 844);
    await waitForHydration(pg);
    const trigger = pg.$$("button").find(b => /^Filters/.test(b.textContent ?? ""));
    if (!trigger) throw new Error("no facets sheet trigger");
    trigger.click();
    await stabilize(pg);
    await expect(pg.frame).toMatchScreenshot("facets-sheet-mobile", TOLERANCE);
  });
});
