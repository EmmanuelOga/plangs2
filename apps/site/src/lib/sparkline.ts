import type { NodeData } from "@plangs/schema";

/**
 * SPARKLINE GEOMETRY (Decision D5 — trend charts).
 *
 * Pure math, deliberately separated from the `.astro` component: the component
 * is not type-checked by `tsc` and is not reachable from a unit test, so any
 * logic living there is logic nothing can assert on. Everything here is a plain
 * function over numbers, unit-tested in `sparkline.test.ts`.
 *
 * The rendered element is an inline `<svg>` with a `viewBox` — no client JS, no
 * chart library, and it scales with the card it sits in.
 */

/** Coordinate space the polylines are computed in (CSS-pixel-ish, scaled by viewBox). */
export const SPARK_WIDTH = 240;
export const SPARK_HEIGHT = 48;
/** Keeps the stroke (and the end dot) from being clipped at the box edges. */
const PAD = 3;

export interface SparkSeries {
  /** Trend source key, e.g. `languish`. */
  source: string;
  /** How the score was computed, e.g. `weighted-share`. */
  metric: string;
  /** `"x,y x,y …"` for a `<polyline>`. */
  polyline: string;
  /** Closed path for the soft fill under the line. */
  area: string;
  /** Last point, so the component can mark "you are here". */
  lastX: number;
  lastY: number;
  /** Period labels at each end of the axis, e.g. `2013Q2` … `2025Q2`. */
  firstLabel: string;
  lastLabel: string;
  /** Rank at the last period, when the series carries ranks. */
  lastRank?: number;
  /** Number of periods plotted — used for the accessible description. */
  count: number;
}

/** Two decimals: SVG does not need more, and it keeps the built HTML stable. */
function r(n: number): number {
  return Math.round(n * 100) / 100;
}

/**
 * Map scores onto the box: x is the index, y is the score inverted (SVG y grows
 * downward). A flat series (every score equal) would divide by zero, so it is
 * drawn on the mid-line rather than at an arbitrary edge.
 */
function project(scores: number[]): { x: number; y: number }[] {
  const min = Math.min(...scores);
  const max = Math.max(...scores);
  const span = max - min;
  const innerW = SPARK_WIDTH - 2 * PAD;
  const innerH = SPARK_HEIGHT - 2 * PAD;
  const stepX = scores.length > 1 ? innerW / (scores.length - 1) : 0;
  return scores.map((s, i) => ({
    x: r(PAD + i * stepX),
    y: r(span === 0 ? PAD + innerH / 2 : PAD + innerH - ((s - min) / span) * innerH),
  }));
}

/**
 * One series, or `undefined` when there is nothing honest to draw.
 *
 * A single point is not a trend, and mismatched parallel arrays mean the
 * importer wrote something malformed — in both cases drawing a line would
 * invent information. Callers filter these out rather than rendering a stub.
 */
export function sparkSeries(
  source: string,
  trend: { metric: string; quarters: string[]; scores: number[]; ranks: number[] },
): SparkSeries | undefined {
  const { quarters, scores, ranks } = trend;
  if (scores.length < 2 || quarters.length !== scores.length) return undefined;

  const pts = project(scores);
  const last = pts[pts.length - 1];
  const first = pts[0];
  return {
    source,
    metric: trend.metric,
    polyline: pts.map(p => `${p.x},${p.y}`).join(" "),
    area: `M${first.x},${SPARK_HEIGHT - PAD} L${pts.map(p => `${p.x},${p.y}`).join(" L")} L${last.x},${SPARK_HEIGHT - PAD} Z`,
    lastX: last.x,
    lastY: last.y,
    firstLabel: quarters[0],
    lastLabel: quarters[quarters.length - 1],
    lastRank: ranks.length === scores.length ? ranks[ranks.length - 1] : undefined,
    count: scores.length,
  };
}

/** Every drawable series on a node, ordered by source so the output is stable. */
export function sparkSeriesOf(data: NodeData): SparkSeries[] {
  const trends = data.trends;
  if (!trends) return [];
  return Object.keys(trends)
    .sort()
    .map(source => sparkSeries(source, trends[source]))
    .filter((s): s is SparkSeries => s !== undefined);
}
