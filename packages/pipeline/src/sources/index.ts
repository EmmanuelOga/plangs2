import type { Source } from "../core/types.ts";
import { languishSource } from "./languish.ts";
import { linguistSource } from "./linguist.ts";
import { pyplSource } from "./pypl.ts";
import { wikidataSource } from "./wikidata.ts";

/**
 * Registered importers, in the plan's adoption order (PLAN §5).
 *
 * `--all` runs them in this order, which is also the ownership order: linguist
 * and languish own disjoint field sets, so order does not actually matter for
 * correctness (the patcher guarantees that) — it matters for readability of the
 * combined report.
 *
 * Not yet implemented: pldb (whitelist-gated), innovation-graph, tiobe,
 * homebrew, stackexchange. DBpedia / IEEE / Reddit / GH-Archive are skipped by
 * the plan and will not be added.
 */
export const SOURCES: readonly Source[] = [linguistSource, languishSource, wikidataSource, pyplSource];

export function sourceById(id: string): Source | undefined {
  return SOURCES.find(s => s.id === id);
}

export { languishSource, linguistSource, pyplSource, wikidataSource };
