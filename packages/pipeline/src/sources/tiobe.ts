/**
 * TIOBE importer (PLAN §5.6) — the TIOBE programming-community index, scraped
 * from the public top-20 table. TIOBE's FAQ permits reuse with attribution and
 * publishes no history, so we scrape the current month and BUILD OUR OWN history
 * going forward: each monthly run appends the new point to `trends.tiobe`.
 *
 * The page is HTML, not a feed. We locate the `top20` table and read each row
 * structurally (`rank`, language name, rating), and the month from the header's
 * first `<th>` (`Jul 2026`). Matched by node NAME (like pypl). A sixth ranking
 * lens, kept separate and never merged (PLAN §5, "Rankings UX note").
 */

import { indexRemote, resolveNode, reviewFor } from "../core/match.ts";
import type { NodeDoc, RunContext, Source } from "../core/types.ts";

const SOURCE_ID = "tiobe";

export const TIOBE_URL = "https://www.tiobe.com/tiobe-index/";

const MONTHS: Record<string, string> = {
  Jan: "01",
  Feb: "02",
  Mar: "03",
  Apr: "04",
  May: "05",
  Jun: "06",
  Jul: "07",
  Aug: "08",
  Sep: "09",
  Oct: "10",
  Nov: "11",
  Dec: "12",
};

/** One row of the TIOBE top-20 table. */
interface TiobeEntry {
  rank: number;
  name: string;
  /** Percentage rating (`18.94`, not `"18.94%"`). */
  rating: number;
}

export interface TiobeIndex {
  /** Sortable month label, e.g. `2026-07`, parsed from the table header. */
  month: string;
  entries: TiobeEntry[];
}

const TABLE = /<table id=["']top20["'][\s\S]*?<\/table>/;
const HEADER_MONTH = /<th[^>]*>\s*([A-Z][a-z]{2})\s+(\d{4})\s*<\/th>/;
/**
 * A data row: leading rank `<td>`, then (skipping the last-year and change-arrow
 * cells) the `td-top20` logo cell, then the name `<td>` and the rating `<td>`.
 * Anchored on `<tr><td>NN` so the `<th>` header row can never match.
 */
const ROW = /<tr>\s*<td>(\d+)<\/td>[\s\S]*?td-top20[\s\S]*?<\/td>\s*<td>([^<]+)<\/td>\s*<td>\s*([\d.]+)\s*%/g;

export function parseTiobe(html: string): TiobeIndex {
  const table = TABLE.exec(html)?.[0];
  if (!table) throw new Error("TIOBE: could not find the top20 table — upstream format changed");

  const header = HEADER_MONTH.exec(table);
  const mm = header ? MONTHS[header[1] as string] : undefined;
  if (!header || !mm) throw new Error("TIOBE: could not read the month from the table header — upstream format changed");
  const month = `${header[2]}-${mm}`;

  const entries: TiobeEntry[] = [];
  for (const m of table.matchAll(ROW)) {
    const rank = Number(m[1]);
    const name = (m[2] ?? "").trim();
    const rating = Number(m[3]);
    if (name && Number.isFinite(rank) && Number.isFinite(rating)) entries.push({ rank, name, rating });
  }
  if (!entries.length) throw new Error("TIOBE: no ranking rows parsed — upstream format changed");
  return { month, entries };
}

interface Trend {
  metric: "rating";
  quarters: string[];
  scores: number[];
  ranks: number[];
}

/** Read an existing, well-formed `trends.tiobe` series off a node, or an empty one. */
function existingTrend(doc: NodeDoc): { quarters: string[]; scores: number[]; ranks: number[] } {
  const t = (doc.data.trends as Record<string, unknown> | undefined)?.[SOURCE_ID] as
    | { quarters?: unknown; scores?: unknown; ranks?: unknown }
    | undefined;
  const q = t?.quarters;
  const s = t?.scores;
  const r = t?.ranks;
  if (Array.isArray(q) && Array.isArray(s) && Array.isArray(r) && q.length === s.length && s.length === r.length) {
    return { quarters: [...(q as string[])], scores: [...(s as number[])], ranks: [...(r as number[])] };
  }
  return { quarters: [], scores: [], ranks: [] };
}

/**
 * Fold this month's point into the node's history. Keyed by month, so a re-run
 * in the same month replaces (not duplicates) the point — that is what keeps the
 * importer idempotent while still accumulating history across months.
 */
export function appendTrend(existing: { quarters: string[]; scores: number[]; ranks: number[] }, month: string, rating: number, rank: number): Trend {
  const byMonth = new Map<string, { rating: number; rank: number }>();
  for (let i = 0; i < existing.quarters.length; i++) {
    byMonth.set(existing.quarters[i] as string, { rating: existing.scores[i] as number, rank: existing.ranks[i] as number });
  }
  byMonth.set(month, { rating, rank });
  const quarters = [...byMonth.keys()].sort();
  return {
    metric: "rating",
    quarters,
    scores: quarters.map(q => (byMonth.get(q) as { rating: number }).rating),
    ranks: quarters.map(q => (byMonth.get(q) as { rank: number }).rank),
  };
}

/** Node identities to try against TIOBE names. NAME only — never slug. */
function namesOf(doc: NodeDoc): (string | undefined)[] {
  const name = doc.data.name;
  return [typeof name === "string" ? name : undefined];
}

export const tiobeSource: Source = {
  id: SOURCE_ID,
  description: "TIOBE index — monthly top-20 community ranking + a locally-accumulated trend (scraped, © TIOBE, reused with attribution).",
  owns: [`rankings.${SOURCE_ID}`, `trends.${SOURCE_ID}`, `sources.${SOURCE_ID}`],

  async run(ctx: RunContext): Promise<void> {
    const url = ctx.options.url ?? TIOBE_URL;
    ctx.origin(url);

    const index = parseTiobe(await ctx.fetch(url));
    const month = ctx.options.month ?? index.month;
    ctx.origin(`month=${month}`);

    const remote = indexRemote(index.entries, e => ({ id: e.name, exact: [] }));

    for (const doc of ctx.nodesOfKind("plang")) {
      const res = resolveNode(remote, doc, SOURCE_ID, namesOf(doc), e => e.name);
      const review = reviewFor(doc, SOURCE_ID, res, e => e.name);
      if (review) {
        ctx.review(review);
        continue;
      }
      if (!res.record) continue; // TIOBE lists only the top 20; silence is normal.

      const entry = res.record;
      ctx.match({ key: doc.key, method: res.method, remoteId: entry.name });
      ctx.patch(doc.key, {
        rankings: { [SOURCE_ID]: entry.rank },
        trends: { [SOURCE_ID]: appendTrend(existingTrend(doc), month, entry.rating, entry.rank) },
        sources: { [SOURCE_ID]: entry.name },
      });
    }
  },
};
