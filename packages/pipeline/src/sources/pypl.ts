/**
 * PYPL importer (PLAN §5.6) — PopularitY of Programming Language index, CC BY.
 *
 * The whole monthly history arrives in one fetch (`pypl.github.io/PYPL/All.js`).
 * That file is JavaScript, not JSON: a `graphData = [...]` literal whose rows
 * start with a `new Date(y, m, d)` call. We parse it structurally with regexes
 * rather than `eval`-ing a remote script.
 *
 * This is a SECOND popularity lens, not a replacement: it lands in
 * `rankings.pypl` alongside `rankings.languish` and is never merged into one
 * number (PLAN §5, "Rankings UX note").
 */

import { indexRemote, resolveNode, reviewFor } from "../core/match.ts";
import type { NodeDoc, RunContext, Source } from "../core/types.ts";

const SOURCE_ID = "pypl";

export const PYPL_URL = "https://pypl.github.io/PYPL/All.js";

/** `2026-07` — a sortable month label. */
export type Month = string;

export interface PyplData {
  languages: string[];
  months: Month[];
  /** `shares[month][language]` — the index share (0..1) for that month. */
  shares: Map<Month, Map<string, number>>;
}

const LANGUAGES_SECTION = /\/\/ begin section languages([\s\S]*?)\/\/ end section languages/;
/** Upstream quotes with `'`; accept `"` too so a formatter pass can't break us. */
const QUOTED = /'((?:[^'\\]|\\.)*)'|"((?:[^"\\]|\\.)*)"/g;
const ROW = /\[\s*new Date\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)\s*,([^\]]*)\]/g;

/**
 * Parse `All.js`.
 *
 * Note the month is a JS `Date` argument, so it is ZERO-based: `new Date(2026,6,1)`
 * is July 2026. Getting this wrong shifts the whole series by a month.
 */
export function parsePypl(js: string): PyplData {
  const section = LANGUAGES_SECTION.exec(js);
  if (!section?.[1]) throw new Error("PYPL: could not find the languages section — upstream format changed");

  const languages: string[] = [];
  for (const m of section[1].matchAll(QUOTED)) {
    const name = m[1] ?? m[2];
    if (name) languages.push(name);
  }
  if (!languages.length) throw new Error("PYPL: languages section is empty");

  const months: Month[] = [];
  const shares = new Map<Month, Map<string, number>>();

  for (const m of js.matchAll(ROW)) {
    const year = Number(m[1]);
    const monthIdx = Number(m[2]);
    // Drop empty segments BEFORE Number(): a trailing comma yields "", and
    // Number("") is 0 — which is finite, so it would silently become a 31st
    // "value" and throw the row length check off.
    const values = (m[4] ?? "")
      .split(",")
      .map(v => v.trim())
      .filter(v => v.length > 0)
      .map(Number);
    if (values.length !== languages.length || values.some(v => !Number.isFinite(v))) continue; // not a data row

    const label: Month = `${year}-${String(monthIdx + 1).padStart(2, "0")}`;
    const row = new Map<string, number>();
    for (const [i, lang] of languages.entries()) row.set(lang, values[i] as number);
    if (!shares.has(label)) months.push(label);
    shares.set(label, row);
  }

  if (!months.length) throw new Error("PYPL: no data rows parsed — upstream format changed");
  months.sort();
  return { languages, months, shares };
}

/** The most recent month in the series. Detected, never hardcoded. */
export function latestMonth(data: PyplData): Month {
  const last = data.months[data.months.length - 1];
  if (!last) throw new Error("PYPL: empty series");
  return last;
}

/** 1-based rank by descending share for a month. */
export function ranksFor(data: PyplData, month: Month): Map<string, number> {
  const row = data.shares.get(month) ?? new Map<string, number>();
  const sorted = [...row].sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));
  const out = new Map<string, number>();
  let rank = 1;
  for (const [name] of sorted) out.set(name, rank++);
  return out;
}

/**
 * A trend series, in the shape `zTrend` actually specifies.
 *
 * `quarters` holds PERIOD LABELS, not literally quarters — the schema says so
 * ("e.g. [\"2024Q4\"] or [\"2026-06\"]"), and PYPL's periods are months. This
 * used to be `{ metric, months, shares }`, which no schema accepted: the field
 * names were pypl's own and `ranks` was missing entirely. Nothing caught it
 * because pypl had never run for real — the first run wrote 28 nodes that
 * failed integrity validation.
 */
interface PyplTrend {
  metric: "index-share";
  quarters: Month[];
  scores: number[];
  ranks: number[];
}

function trendFor(data: PyplData, language: string, ranksByMonth: Map<Month, Map<string, number>>): PyplTrend | undefined {
  const out: PyplTrend = { metric: "index-share", quarters: [], scores: [], ranks: [] };
  for (const month of data.months) {
    const share = data.shares.get(month)?.get(language);
    const rank = ranksByMonth.get(month)?.get(language);
    // The three arrays are parallel, so a period only counts when it has BOTH.
    // A month present in one array and missing from another would silently
    // shift every later point against the wrong label.
    if (share === undefined || rank === undefined) continue;
    out.quarters.push(month);
    out.scores.push(Number(share.toFixed(6)));
    out.ranks.push(rank);
  }
  return out.quarters.length ? out : undefined;
}

/**
 * `doc.slug` is excluded — see the note in the linguist importer. So is
 * `githubName`: that is LINGUIST's id for the node's files, so every
 * implementation carries the name of what it implements (pl/pypy -> "Python").
 * Ranking PyPy as Python is exactly the confident-wrong match the ladder exists
 * to prevent; a node that really is PYPL's entry can pin `sources.pypl`.
 */
function exactNamesOf(doc: NodeDoc): (string | undefined)[] {
  const s = (v: unknown) => (typeof v === "string" ? v : undefined);
  return [s(doc.data.name)];
}

export const pyplSource: Source = {
  id: SOURCE_ID,
  description: "PYPL index — monthly search-share popularity ranking + trend series (CC BY).",
  owns: [`rankings.${SOURCE_ID}`, `trends.${SOURCE_ID}`, `sources.${SOURCE_ID}`],

  async run(ctx: RunContext): Promise<void> {
    const url = ctx.options.url ?? PYPL_URL;
    ctx.origin(url);

    const data = parsePypl(await ctx.fetch(url));
    const month = ctx.options.month ?? latestMonth(data);
    // An explicit --opt.month typo would otherwise rank nothing and report a
    // cheerful "0 changes", which reads as "already up to date".
    if (!data.shares.has(month)) {
      throw new Error(`PYPL has no data for month '${month}'. Available: ${data.months[0]} .. ${latestMonth(data)}`);
    }
    ctx.origin(`month=${month}`);

    const ranks = ranksFor(data, month);
    // Rank every month once: trendFor needs the whole history per language, and
    // recomputing it per (language, month) would re-sort the same rows ~5,600
    // times.
    const ranksByMonth = new Map(data.months.map(m => [m, ranksFor(data, m)]));
    // PYPL names like `C/C++` and `Delphi/Pascal` cover two of our nodes; only
    // an exact name match (or a recorded sources.pypl) is trusted.
    const index = indexRemote(data.languages, name => ({ id: name, exact: [] }));

    for (const doc of ctx.nodesOfKind("plang")) {
      const res = resolveNode(index, doc, SOURCE_ID, exactNamesOf(doc), name => name);

      const review = reviewFor(doc, SOURCE_ID, res, name => name);
      if (review) {
        ctx.review(review);
        continue;
      }
      if (!res.record) continue; // PYPL only tracks ~30 languages; silence is normal.

      const rank = ranks.get(res.record);
      if (rank === undefined) continue;

      ctx.match({ key: doc.key, method: res.method, remoteId: res.record });
      ctx.patch(doc.key, {
        rankings: { [SOURCE_ID]: rank },
        trends: { [SOURCE_ID]: trendFor(data, res.record, ranksByMonth) },
        sources: { [SOURCE_ID]: res.record },
      });
    }
  },
};
