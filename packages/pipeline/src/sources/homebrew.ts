/**
 * Homebrew importer (PLAN §5) — macOS/Linux package-manager install counts as an
 * adoption signal, BSD-2-Clause data (formulae.brew.sh analytics).
 *
 * `install/365d.json` is the full formula-install leaderboard for the last year:
 * one row per formula with a comma-grouped install count. A language usually
 * ships as several *versioned* formulae (`python@3.12`, `python@3.13`), so we
 * aggregate by the base name before ranking — otherwise Python's installs would
 * be split across versions and undercount it badly.
 *
 * Matching is by node NAME only, never `slug` — for the linguist reason: slugs
 * like `c`, `d`, `r` collide with unrelated formulae and would write a confident
 * wrong match. This is a FOURTH popularity lens beside languish, pypl and
 * stackexchange, kept separate and never merged (PLAN §5).
 */

import { indexRemote, resolveNode, reviewFor } from "../core/match.ts";
import type { NodeDoc, RunContext, Source } from "../core/types.ts";

const SOURCE_ID = "homebrew";

/** Analytics window. The API also serves `30d` and `90d`; overridable via `--opt.period`. */
export const DEFAULT_PERIOD = "365d";

export function installUrl(period: string): string {
  return `https://formulae.brew.sh/api/analytics/install/${period}.json`;
}

/** One formula's install count over the window. */
export interface Install {
  formula: string;
  count: number;
}

/**
 * Homebrew serves `count` as a comma-grouped STRING (`"3,129,197"`), not a
 * number. Parsing it as-is yields `NaN`; a `parseInt` stops at the first comma
 * and silently reads 3. Strip the separators, then require a finite result.
 */
function parseCount(raw: unknown): number | undefined {
  if (typeof raw === "number") return Number.isFinite(raw) ? raw : undefined;
  if (typeof raw !== "string") return undefined;
  const n = Number(raw.replace(/,/g, ""));
  return Number.isFinite(n) ? n : undefined;
}

export function parseInstalls(json: string): Install[] {
  let doc: unknown;
  try {
    doc = JSON.parse(json);
  } catch {
    throw new Error("Homebrew: response was not JSON — upstream format changed");
  }
  const items = (doc as Record<string, unknown>)?.items;
  if (!Array.isArray(items)) throw new Error("Homebrew: response has no 'items' array — upstream format changed");
  const out: Install[] = [];
  for (const item of items) {
    const formula = (item as Record<string, unknown>)?.formula;
    const count = parseCount((item as Record<string, unknown>)?.count);
    if (typeof formula === "string" && formula && count !== undefined) out.push({ formula, count });
  }
  if (!out.length) throw new Error("Homebrew: no install rows parsed — upstream format changed");
  return out;
}

/** `python@3.12` -> `python`. A formula with no `@` is its own base. */
export function baseFormula(formula: string): string {
  const at = formula.indexOf("@");
  return at < 0 ? formula : formula.slice(0, at);
}

/** Sum install counts across every versioned variant of a formula. */
export function aggregateByFormula(installs: readonly Install[]): Map<string, number> {
  const totals = new Map<string, number>();
  for (const { formula, count } of installs) {
    const base = baseFormula(formula);
    totals.set(base, (totals.get(base) ?? 0) + count);
  }
  return totals;
}

/** Node identities to try against formula names. NAME only — never slug. */
function namesOf(doc: NodeDoc): (string | undefined)[] {
  const name = doc.data.name;
  return [typeof name === "string" ? name : undefined];
}

export const homebrewSource: Source = {
  id: SOURCE_ID,
  description: "Homebrew formula install counts — a popularity ranking, aggregated across versioned formulae.",
  owns: [`rankings.${SOURCE_ID}`, `sources.${SOURCE_ID}`],

  async run(ctx: RunContext): Promise<void> {
    const period = ctx.options.period ?? DEFAULT_PERIOD;
    const url = ctx.options.url ?? installUrl(period);
    ctx.origin(url);

    const totals = aggregateByFormula(parseInstalls(await ctx.fetch(url)));
    const records = [...totals].map(([formula, count]) => ({ formula, count }));
    const index = indexRemote(records, r => ({ id: r.formula, exact: [] }));

    const matched: { doc: NodeDoc; formula: string; count: number; method: "source-id" | "exact" }[] = [];
    for (const doc of ctx.nodesOfKind("plang")) {
      const res = resolveNode(index, doc, SOURCE_ID, namesOf(doc), r => r.formula);
      const review = reviewFor(doc, SOURCE_ID, res, r => r.formula);
      if (review) {
        ctx.review(review);
        continue;
      }
      // Most languages have no Homebrew formula (or one named unlike the
      // language, e.g. `sbcl` for Common Lisp); silence is the normal case, so a
      // miss is not even reported unmatched — a human pins sources.homebrew to
      // accept a differently-named formula.
      if (!res.record) continue;
      matched.push({ doc, formula: res.record.formula, count: res.record.count, method: res.method });
    }

    // Rank by descending install count. Ties break on the formula name so the
    // assigned rank is deterministic (same reason as pypl).
    matched.sort((a, b) => b.count - a.count || a.formula.localeCompare(b.formula));
    matched.forEach(({ doc, formula, method }, i) => {
      ctx.match({ key: doc.key, method, remoteId: formula });
      ctx.patch(doc.key, {
        rankings: { [SOURCE_ID]: i + 1 },
        sources: { [SOURCE_ID]: formula },
      });
    });
  },
};
