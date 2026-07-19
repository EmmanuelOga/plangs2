import { describe, expect, it } from "vitest";
import { SPARK_HEIGHT, SPARK_WIDTH, sparkSeries, sparkSeriesOf } from "./sparkline.ts";

const trend = (scores: number[], ranks: number[] = []) => ({
  metric: "weighted-share",
  quarters: scores.map((_, i) => `20${20 + i}Q1`),
  scores,
  ranks,
});

function coords(polyline: string): { x: number; y: number }[] {
  return polyline.split(" ").map(p => {
    const [x, y] = p.split(",").map(Number);
    return { x, y };
  });
}

describe("sparkline geometry", () => {
  it("spans the full box: min score at the bottom, max at the top", () => {
    const s = sparkSeries("languish", trend([1, 5, 3]));
    if (!s) throw new Error("expected a series");
    const [lo, hi, mid] = coords(s.polyline);
    // SVG y grows downward, so the LOW score has the HIGH y.
    expect(lo.y).toBeGreaterThan(mid.y);
    expect(mid.y).toBeGreaterThan(hi.y);
    // Padded, never clipped, and inside the box.
    expect(hi.y).toBeGreaterThan(0);
    expect(lo.y).toBeLessThan(SPARK_HEIGHT);
    expect(coords(s.polyline).at(-1)?.x).toBeLessThan(SPARK_WIDTH);
  });

  it("draws a flat series on the mid-line instead of dividing by zero", () => {
    const s = sparkSeries("languish", trend([2, 2, 2]));
    if (!s) throw new Error("expected a series");
    for (const p of coords(s.polyline)) expect(p.y).toBeCloseTo(SPARK_HEIGHT / 2, 1);
  });

  it("closes the area path back to the baseline so the fill cannot leak", () => {
    const s = sparkSeries("languish", trend([1, 4]));
    if (!s) throw new Error("expected a series");
    expect(s.area.startsWith("M")).toBe(true);
    expect(s.area.endsWith("Z")).toBe(true);
  });

  it("reports the last point and the last rank", () => {
    const s = sparkSeries("languish", trend([1, 4, 2], [90, 10, 42]));
    expect(s?.lastRank).toBe(42);
    expect(s?.lastLabel).toBe("2022Q1");
    expect(s?.firstLabel).toBe("2020Q1");
    expect(s?.count).toBe(3);
  });

  it("omits the rank when ranks are not parallel to scores", () => {
    // The pipeline writes parallel arrays; a short `ranks` means malformed
    // input, and picking `ranks.at(-1)` anyway would label the chart with a
    // rank from the wrong period.
    expect(sparkSeries("languish", trend([1, 2, 3], [5, 6]))?.lastRank).toBeUndefined();
  });

  it("refuses to draw a trend from fewer than two points, or from ragged arrays", () => {
    expect(sparkSeries("languish", trend([1]))).toBeUndefined();
    expect(sparkSeries("languish", { metric: "m", quarters: ["2020Q1"], scores: [1, 2], ranks: [] })).toBeUndefined();
  });

  it("collects a node's series in a stable order and drops undrawable ones", () => {
    const series = sparkSeriesOf({
      name: "Nim",
      trends: { languish: trend([1, 2, 3]), "innovation-graph": trend([4, 5]), tiobe: trend([1]) },
    });
    expect(series.map(s => s.source)).toEqual(["innovation-graph", "languish"]);
  });

  it("has no series when the node carries no trends", () => {
    expect(sparkSeriesOf({ name: "Nim" })).toEqual([]);
  });
});
