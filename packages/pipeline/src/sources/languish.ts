/**
 * Languish importer (PLAN §5.2) — tjpalmer/languish, ISC.
 *
 * Reads the committed per-metric quarterly JSON under `{clone}/scripts/data/`
 * directly, instead of vendoring a pre-built `data.json` (the legacy
 * `packages/languist/src/languish-data.json` was frozen at 2024Q4 with a
 * hardcoded `LATEST_QUARTER`).
 *
 * Two deliberate improvements over the legacy importer:
 *  - the latest quarter is DETECTED, never hardcoded;
 *  - the quarterly series is KEPT (`trends.languish`), not thrown away — it is
 *    what makes trend sparklines possible (PLAN §D5).
 */

import { readFileSync } from "node:fs";
import { homedir } from "node:os";
import { isAbsolute, join } from "node:path";
import { indexRemote, resolveNode, reviewFor } from "../core/match.ts";
import type { NodeDoc, RunContext, Source } from "../core/types.ts";

const SOURCE_ID = "languish";

/** Metric -> the file in `scripts/data/` that holds its quarterly counts. */
export const METRIC_FILES = {
  issues: "gh-issue-event.json",
  pulls: "gh-pull-request.json",
  stars: "gh-star-event.json",
  soQuestions: "so-tags.json",
} as const;

export type Metric = keyof typeof METRIC_FILES;
export type Weights = Record<Metric, number>;

/**
 * Upstream's bot-aware defaults (`src/parsedData.ts` `defaultWeights`): issues
 * and PRs are zeroed because bots skew them per-language. Weights are DATA —
 * override per run with `--opt.weights=stars:1,soQuestions:1`.
 */
export const DEFAULT_WEIGHTS: Weights = Object.freeze({ issues: 0, pulls: 0, stars: 1, soQuestions: 1 });

/**
 * Upstream's rename table (`scripts/src/merge.ts` `canonicalNames`) — the raw
 * per-metric files predate several renames, so counts must be folded together
 * before ranking or e.g. Nim loses its pre-2015 "Nimrod" history.
 */
export const CANONICAL_NAMES: Readonly<Record<string, string>> = Object.freeze({
  "AL Code": "AL",
  BlitzBasic: "BlitzMax",
  "Classic ASP": "ASP",
  "Csound Document": "Csound",
  "Csound Score": "Csound",
  FORTRAN: "Fortran",
  "Graphviz (DOT)": "DOT",
  Matlab: "MATLAB",
  Nimrod: "Nim",
  PAWN: "Pawn",
  Perl6: "Raku",
  "Perl 6": "Raku",
  REALbasic: "Xojo",
  Sass: "Sass/SCSS",
  SCSS: "Sass/SCSS",
  VimL: "Vim script",
});

/** A row in any of the per-metric JSON files. */
interface CountRow {
  year: number;
  quarter: number;
  name: string;
  count: number | string;
}

/** `2025Q2` — a sortable quarter label. */
export type Quarter = string;

export function quarterOf(row: { year: number; quarter: number }): Quarter {
  return `${row.year}Q${row.quarter}`;
}

/** Sort key so `2025Q2` > `2024Q4` (plain string compare works, but be explicit). */
export function quarterRank(q: Quarter): number {
  const [year, quarter] = q.split("Q");
  return Number(year) * 4 + Number(quarter);
}

export function canonicalName(name: string): string {
  return CANONICAL_NAMES[name] ?? name;
}

/** counts[metric][quarter][name] = count, plus per-quarter totals. */
export interface LanguishData {
  counts: Record<Metric, Map<Quarter, Map<string, number>>>;
  totals: Record<Metric, Map<Quarter, number>>;
  names: Set<string>;
}

export function parseMetricFile(json: string): CountRow[] {
  return JSON.parse(json) as CountRow[];
}

/** Fold the per-metric files into quarter/name-keyed counts (+ totals). */
export function buildData(files: Record<Metric, CountRow[]>): LanguishData {
  const counts = {} as LanguishData["counts"];
  const totals = {} as LanguishData["totals"];
  const names = new Set<string>();

  for (const metric of Object.keys(METRIC_FILES) as Metric[]) {
    const byQuarter = new Map<Quarter, Map<string, number>>();
    const totalsByQuarter = new Map<Quarter, number>();
    for (const row of files[metric] ?? []) {
      const q = quarterOf(row);
      const name = canonicalName(row.name);
      const count = Number(row.count);
      if (!Number.isFinite(count)) continue;
      names.add(name);
      const bucket = byQuarter.get(q) ?? new Map<string, number>();
      // Renames fold two source rows into one name — sum, don't overwrite.
      bucket.set(name, (bucket.get(name) ?? 0) + count);
      byQuarter.set(q, bucket);
      totalsByQuarter.set(q, (totalsByQuarter.get(q) ?? 0) + count);
    }
    counts[metric] = byQuarter;
    totals[metric] = totalsByQuarter;
  }

  return { counts, totals, names };
}

/**
 * The latest quarter with data for every WEIGHTED metric.
 *
 * Requiring all weighted metrics (rather than any metric) keeps a metric that
 * lags a quarter from silently producing a half-populated ranking.
 */
export function latestQuarter(data: LanguishData, weights: Weights): Quarter | undefined {
  const active = (Object.keys(METRIC_FILES) as Metric[]).filter(m => (weights[m] ?? 0) !== 0);
  if (!active.length) return undefined;

  let common: Set<Quarter> | undefined;
  for (const metric of active) {
    const quarters = new Set(data.counts[metric].keys());
    common = common === undefined ? quarters : new Set([...common].filter(q => quarters.has(q)));
  }
  if (!common?.size) return undefined;
  return [...common].sort((a, b) => quarterRank(b) - quarterRank(a))[0];
}

/**
 * Weighted share-of-quarter score per language, descending.
 *
 * Mirrors upstream's `putMean`: each metric is normalized to its quarter total
 * (so a score is a share, comparable across quarters) then averaged by weight.
 */
export function scores(data: LanguishData, quarter: Quarter, weights: Weights): [string, number][] {
  const metrics = (Object.keys(METRIC_FILES) as Metric[]).filter(m => (weights[m] ?? 0) !== 0);
  const weightTotal = metrics.reduce((sum, m) => sum + weights[m], 0);
  if (!weightTotal) return [];

  const out = new Map<string, number>();
  for (const metric of metrics) {
    const total = data.totals[metric].get(quarter) ?? 0;
    if (!total) continue;
    for (const [name, count] of data.counts[metric].get(quarter) ?? []) {
      out.set(name, (out.get(name) ?? 0) + (weights[metric] * count) / total / weightTotal);
    }
  }

  return [...out].sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));
}

/** `name -> 1-based rank` for a quarter. Rank 1 is the highest score. */
export function rankings(data: LanguishData, quarter: Quarter, weights: Weights): Map<string, number> {
  const map = new Map<string, number>();
  let rank = 1;
  for (const [name] of scores(data, quarter, weights)) map.set(name, rank++);
  return map;
}

/** Round a share to a stable number of digits — float noise must not cause diffs. */
function round(value: number): number {
  return Number(value.toFixed(8));
}

/**
 * The quarterly series for one language: `{quarters: [...], scores: [...], ranks: [...]}`.
 * Kept on the node so detail pages can draw a sparkline without re-deriving it.
 */
export interface Trend {
  metric: "weighted-share";
  quarters: Quarter[];
  scores: number[];
  ranks: number[];
}

/** All quarters present for the weighted metrics, oldest first. */
export function allQuarters(data: LanguishData, weights: Weights): Quarter[] {
  const active = (Object.keys(METRIC_FILES) as Metric[]).filter(m => (weights[m] ?? 0) !== 0);
  const set = new Set<Quarter>();
  for (const m of active) for (const q of data.counts[m].keys()) set.add(q);
  return [...set].sort((a, b) => quarterRank(a) - quarterRank(b));
}

/** Scores + ranks for every quarter, computed once. */
export interface QuarterTable {
  quarters: Quarter[];
  ranks: Map<Quarter, Map<string, number>>;
  scores: Map<Quarter, Map<string, number>>;
}

/**
 * Precompute the whole history in one pass. Building the trend series per node
 * from scratch would re-rank every quarter for every node (~270 nodes x ~55
 * quarters x ~500 languages); this does the ranking work once.
 */
export function buildQuarterTable(data: LanguishData, weights: Weights): QuarterTable {
  const quarters = allQuarters(data, weights);
  const ranks = new Map<Quarter, Map<string, number>>();
  const scoreMap = new Map<Quarter, Map<string, number>>();
  for (const q of quarters) {
    const sorted = scores(data, q, weights);
    const r = new Map<string, number>();
    const s = new Map<string, number>();
    let rank = 1;
    for (const [name, score] of sorted) {
      r.set(name, rank++);
      s.set(name, score);
    }
    ranks.set(q, r);
    scoreMap.set(q, s);
  }
  return { quarters, ranks, scores: scoreMap };
}

export function trendFor(table: QuarterTable, name: string): Trend | undefined {
  const out: Trend = { metric: "weighted-share", quarters: [], scores: [], ranks: [] };
  for (const q of table.quarters) {
    const rank = table.ranks.get(q)?.get(name);
    if (rank === undefined) continue;
    out.quarters.push(q);
    out.scores.push(round(table.scores.get(q)?.get(name) ?? 0));
    out.ranks.push(rank);
  }
  return out.quarters.length ? out : undefined;
}

/** Read the per-metric JSON files out of a languish clone. */
export function readClone(cloneDir: string, read = (p: string) => readFileSync(p, "utf8")): Record<Metric, CountRow[]> {
  const out = {} as Record<Metric, CountRow[]>;
  for (const [metric, file] of Object.entries(METRIC_FILES) as [Metric, string][]) {
    out[metric] = parseMetricFile(read(join(cloneDir, "scripts", "data", file)));
  }
  return out;
}

/** Parse `--opt.weights=stars:1,soQuestions:0.5` into a `Weights`. */
export function parseWeights(spec: string | undefined): Weights {
  if (!spec) return { ...DEFAULT_WEIGHTS };
  const out: Weights = { issues: 0, pulls: 0, stars: 0, soQuestions: 0 };
  for (const pair of spec.split(",")) {
    const [key, value] = pair.split(":");
    const metric = key?.trim() as Metric;
    if (!(metric in out)) throw new Error(`Unknown languish metric '${key}' (expected: ${Object.keys(METRIC_FILES).join(", ")})`);
    const n = Number(value);
    if (!Number.isFinite(n)) throw new Error(`Bad weight for '${metric}': '${value}'`);
    out[metric] = n;
  }
  return out;
}

function resolveCloneDir(raw: string): string {
  const expanded = raw.startsWith("~") ? join(homedir(), raw.slice(1)) : raw;
  return isAbsolute(expanded) ? expanded : join(process.cwd(), expanded);
}

/**
 * Node-side identifiers. Languish keys on github-linguist language names.
 * `doc.slug` is excluded for the same reason as in the linguist importer: our
 * slugs collide with other languages' identifiers and would produce confident
 * wrong matches.
 */
function exactNamesOf(doc: NodeDoc): (string | undefined)[] {
  const s = (v: unknown) => (typeof v === "string" ? v : undefined);
  return [s(doc.data.githubName), s(doc.data.name)];
}

export const languishSource: Source = {
  id: SOURCE_ID,
  description: "Languish quarterly GitHub/StackOverflow popularity — ranking + trend series (ISC).",
  owns: ["languishRanking", `rankings.${SOURCE_ID}`, `trends.${SOURCE_ID}`, `sources.${SOURCE_ID}`],

  async run(ctx: RunContext): Promise<void> {
    const cloneDir = resolveCloneDir(ctx.options.clone ?? process.env.LANGUISH_DIR ?? "~/dev/languish");
    const weights = parseWeights(ctx.options.weights);
    ctx.origin(`${cloneDir}/scripts/data/*.json`);

    const data = buildData(readClone(cloneDir));
    const quarter = ctx.options.quarter ?? latestQuarter(data, weights);
    if (!quarter) throw new Error(`No quarter has data for every weighted metric (weights: ${JSON.stringify(weights)})`);
    // An explicit --opt.quarter typo would otherwise rank nothing and report a
    // cheerful "0 changes", which reads as "already up to date".
    const known = allQuarters(data, weights);
    if (!known.includes(quarter)) {
      throw new Error(`Languish has no data for quarter '${quarter}'. Available: ${known[0]} .. ${known[known.length - 1]}`);
    }
    ctx.origin(`quarter=${quarter} weights=${JSON.stringify(weights)}`);

    const table = buildQuarterTable(data, weights);
    const ranked = table.ranks.get(quarter) ?? new Map<string, number>();
    const index = indexRemote([...data.names], name => ({ id: name, exact: [] }));

    for (const doc of ctx.nodesOfKind("plang")) {
      const res = resolveNode(index, doc, SOURCE_ID, exactNamesOf(doc), name => name);

      const review = reviewFor(doc, SOURCE_ID, res, name => name);
      if (review) {
        ctx.review(review);
        continue;
      }

      if (!res.record) {
        ctx.unmatched(doc.key);
        continue;
      }

      const name = res.record;
      const rank = ranked.get(name);
      if (rank === undefined) {
        // Known to languish, but absent from the latest quarter (dead language,
        // or a metric gap). Don't invent a ranking — say so.
        ctx.review({
          key: doc.key,
          kind: "no-data",
          message: `'${name}' has no ${quarter} data for the weighted metrics; leaving languishRanking untouched.`,
        });
        continue;
      }

      ctx.match({ key: doc.key, method: res.method, remoteId: name });
      ctx.patch(doc.key, {
        languishRanking: rank,
        rankings: { [SOURCE_ID]: rank },
        trends: { [SOURCE_ID]: trendFor(table, name) },
        sources: { [SOURCE_ID]: name },
      });
    }
  },
};
