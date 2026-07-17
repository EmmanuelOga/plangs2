/**
 * GitHub Innovation Graph importer (PLAN §5) — quarterly developer activity per
 * language, CC0 (github/innovationgraph).
 *
 * `data/languages.csv` reports `num_pushers` per language PER ECONOMY per
 * quarter. We want a single global series, so we sum the pushers across every
 * economy for each (language, quarter). That produces both a ranking (latest
 * quarter) and a genuine multi-quarter TREND — the series D5 sparklines want,
 * from a source that publishes history rather than only a current snapshot.
 *
 * Matched by node NAME only (never slug): the CSV uses Linguist language names
 * (`JavaScript`, `Python`), which are our node names too. A fifth activity lens
 * beside languish, pypl, stackexchange and homebrew, kept separate (PLAN §5).
 */

import { indexRemote, resolveNode, reviewFor } from "../core/match.ts";
import type { NodeDoc, RunContext, Source } from "../core/types.ts";

const SOURCE_ID = "innovation-graph";

export const LANGUAGES_URL = "https://raw.githubusercontent.com/github/innovationgraph/main/data/languages.csv";

/** A period label like `2025Q3`. */
export type Period = string;

interface Row {
  language: string;
  period: Period;
  pushers: number;
}

/** Aggregated global series: total pushers per (language, period). */
export interface Series {
  /** Every period seen, sorted ascending (`2025Q1` < `2025Q2`; single-digit quarters keep lexical order correct). */
  periods: Period[];
  /** `totals.get(language).get(period)` — pushers summed across all economies. */
  totals: Map<string, Map<Period, number>>;
}

/**
 * Parse `languages.csv`. A hand-rolled split is safe here: Linguist language
 * names carry no commas, so no field is ever quoted. We locate columns by header
 * name rather than position so an upstream column reorder can't silently shift
 * the data.
 */
export function parseLanguagesCsv(text: string): Row[] {
  const lines = text.split(/\r?\n/).filter(l => l.length > 0);
  const header = (lines[0] ?? "").split(",");
  const col = (name: string): number => {
    const i = header.indexOf(name);
    if (i < 0) throw new Error(`Innovation Graph: CSV missing column '${name}' — upstream format changed`);
    return i;
  };
  const iLang = col("language");
  const iPushers = col("num_pushers");
  const iYear = col("year");
  const iQuarter = col("quarter");

  const out: Row[] = [];
  for (let n = 1; n < lines.length; n++) {
    const f = (lines[n] as string).split(",");
    const language = f[iLang];
    const pushers = Number(f[iPushers]);
    const year = f[iYear];
    const quarter = f[iQuarter];
    if (!language || !year || !quarter || !Number.isFinite(pushers)) continue;
    out.push({ language, period: `${year}Q${quarter}`, pushers });
  }
  if (!out.length) throw new Error("Innovation Graph: no data rows parsed — upstream format changed");
  return out;
}

export function aggregate(rows: readonly Row[]): Series {
  const periods = new Set<Period>();
  const totals = new Map<string, Map<Period, number>>();
  for (const { language, period, pushers } of rows) {
    periods.add(period);
    const byPeriod = totals.get(language) ?? new Map<Period, number>();
    byPeriod.set(period, (byPeriod.get(period) ?? 0) + pushers);
    totals.set(language, byPeriod);
  }
  return { periods: [...periods].sort(), totals };
}

/** 1-based rank by descending pushers for one period. Languages absent that period are unranked. */
export function ranksForPeriod(series: Series, period: Period): Map<string, number> {
  const scored: [string, number][] = [];
  for (const [language, byPeriod] of series.totals) {
    const total = byPeriod.get(period);
    if (total !== undefined && total > 0) scored.push([language, total]);
  }
  scored.sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));
  const ranks = new Map<string, number>();
  scored.forEach(([language], i) => {
    ranks.set(language, i + 1);
  });
  return ranks;
}

interface Trend {
  metric: "pushers";
  quarters: Period[];
  scores: number[];
  ranks: number[];
}

function trendFor(series: Series, language: string, ranksByPeriod: Map<Period, Map<string, number>>): Trend | undefined {
  const trend: Trend = { metric: "pushers", quarters: [], scores: [], ranks: [] };
  for (const period of series.periods) {
    const score = series.totals.get(language)?.get(period);
    const rank = ranksByPeriod.get(period)?.get(language);
    // The three arrays are parallel: a period counts only when it has BOTH a
    // score and a rank, or a later point would plot against the wrong label.
    if (score === undefined || rank === undefined) continue;
    trend.quarters.push(period);
    trend.scores.push(score);
    trend.ranks.push(rank);
  }
  return trend.quarters.length ? trend : undefined;
}

/** Node identities to try against language names. NAME only — never slug. */
function namesOf(doc: NodeDoc): (string | undefined)[] {
  const name = doc.data.name;
  return [typeof name === "string" ? name : undefined];
}

export const innovationGraphSource: Source = {
  id: SOURCE_ID,
  description: "GitHub Innovation Graph — quarterly pushers per language, summed across economies (ranking + trend, CC0).",
  owns: [`rankings.${SOURCE_ID}`, `trends.${SOURCE_ID}`, `sources.${SOURCE_ID}`],

  async run(ctx: RunContext): Promise<void> {
    const url = ctx.options.url ?? LANGUAGES_URL;
    ctx.origin(url);

    const series = aggregate(parseLanguagesCsv(await ctx.fetch(url)));
    const latest = series.periods[series.periods.length - 1];
    if (!latest) throw new Error("Innovation Graph: no periods in the series");
    ctx.origin(`period=${latest}`);

    // Rank every period once so trendFor has the whole history without re-sorting
    // per (language, period).
    const ranksByPeriod = new Map(series.periods.map(p => [p, ranksForPeriod(series, p)] as const));
    const latestRanks = ranksByPeriod.get(latest);

    const index = indexRemote(
      [...series.totals.keys()].map(name => ({ name })),
      r => ({ id: r.name, exact: [] }),
    );

    for (const doc of ctx.nodesOfKind("plang")) {
      const res = resolveNode(index, doc, SOURCE_ID, namesOf(doc), r => r.name);
      const review = reviewFor(doc, SOURCE_ID, res, r => r.name);
      if (review) {
        ctx.review(review);
        continue;
      }
      if (!res.record) continue; // the CSV tracks a curated language list; silence is normal.

      const rank = latestRanks?.get(res.record.name);
      if (rank === undefined) continue;

      ctx.match({ key: doc.key, method: res.method, remoteId: res.record.name });
      ctx.patch(doc.key, {
        rankings: { [SOURCE_ID]: rank },
        trends: { [SOURCE_ID]: trendFor(series, res.record.name, ranksByPeriod) },
        sources: { [SOURCE_ID]: res.record.name },
      });
    }
  },
};
