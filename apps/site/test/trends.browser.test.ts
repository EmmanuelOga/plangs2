import { describe, expect, it } from "vitest";
import { type LoadedPage, loadPage } from "./helpers";

/**
 * TREND SPARKLINES (Decision D5) — asserts the chart is actually PAINTED, not
 * merely present in the DOM.
 *
 * The failure mode a "does the element exist" test misses: drop the `viewBox`
 * and the SVG does NOT collapse — CSS gives a replaced element with no
 * intrinsic size a 300x150 box, so `w-full h-auto` still lays out something
 * tall and wide, while the 240x48 coordinates now paint into the top-left
 * corner unscaled. Measured, not assumed: with viewBox+width+height removed the
 * height/width minimums below still passed. The ASPECT RATIO is what actually
 * detects it, so that is what this asserts.
 *
 * Second failure mode: a polyline whose points all share a y renders as a
 * horizontal rule and reads as "no data".
 */
describe("trend sparklines on a detail page", () => {
  async function nim(): Promise<LoadedPage> {
    return loadPage("/nim/index.html", 1280, 900);
  }

  it("draws a sparkline scaled to its coordinate space", async () => {
    const pg = await nim();
    try {
      const svg = pg.$("[data-trends] svg");
      expect(svg, "no sparkline svg on /nim").not.toBeNull();
      const box = (svg as unknown as SVGElement).getBoundingClientRect();
      expect(box.height, "sparkline collapsed vertically").toBeGreaterThan(20);
      expect(box.width, "sparkline collapsed horizontally").toBeGreaterThan(100);
      // The drawing must FILL the box it was given. Without a `viewBox` the
      // element still lays out at the right size (the width/height attributes
      // supply the intrinsic ratio) but the 240-unit-wide path is painted at
      // 1:1 into a wider box, leaving a dead margin on the right. Comparing the
      // painted extent to the box is what actually notices.
      const painted = pg.doc.querySelector("[data-trends] polyline")?.getBoundingClientRect();
      if (!painted) throw new Error("no polyline");
      // 234 of the 240 viewBox units are drawable (3 units of padding a side),
      // so a scaled line covers ~97.5% of the box. Unscaled it covered 73%.
      expect(painted.width / box.width, "the line does not fill its viewBox — is the viewBox missing?").toBeGreaterThan(0.95);
    } finally {
      pg.dispose();
    }
  });

  it("plots points that actually vary (not a flat line)", async () => {
    const pg = await nim();
    try {
      const polyline = pg.doc.querySelector("[data-trends] polyline");
      const points = (polyline?.getAttribute("points") ?? "").trim().split(/\s+/);
      expect(points.length, "too few plotted points to be a trend").toBeGreaterThan(10);
      const ys = new Set(points.map(p => p.split(",")[1]));
      expect(ys.size, "every point shares one y — the series was not projected").toBeGreaterThan(3);
    } finally {
      pg.dispose();
    }
  });

  it("labels the range and stays inside the article", async () => {
    const pg = await nim();
    try {
      const section = pg.$("[data-trends]");
      expect(section?.textContent).toMatch(/languish/i);
      expect(section?.textContent).toMatch(/\d{4}Q\d/);
      const article = pg.$("article");
      if (!section || !article) throw new Error("missing trends section or article");
      expect(section.getBoundingClientRect().right).toBeLessThanOrEqual(article.getBoundingClientRect().right + 1);
    } finally {
      pg.dispose();
    }
  });

  it("renders no trends block on a node that has no series", async () => {
    // Paradigm nodes carry no `trends`, so the section must be absent rather
    // than an empty heading.
    const pg = await loadPage("/paradigm/functional/index.html", 1280, 900);
    try {
      expect(pg.$("[data-trends]")).toBeNull();
    } finally {
      pg.dispose();
    }
  });
});
