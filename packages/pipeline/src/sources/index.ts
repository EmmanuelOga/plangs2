import type { Source } from "../core/types.ts";
import { homebrewSource } from "./homebrew.ts";
import { innovationGraphSource } from "./innovation-graph.ts";
import { languishSource } from "./languish.ts";
import { linguistSource } from "./linguist.ts";
import { pyplSource } from "./pypl.ts";
import { stackexchangeSource } from "./stackexchange.ts";
import { wikidataSource } from "./wikidata.ts";

/**
 * Registered importers, in the plan's adoption order (PLAN §5).
 *
 * `--all` runs them in this order, which is also the ownership order: linguist
 * and languish own disjoint field sets, so order does not actually matter for
 * correctness (the patcher guarantees that) — it matters for readability of the
 * combined report.
 *
 * Not yet implemented: pldb (whitelist-gated), tiobe. DBpedia / IEEE / Reddit /
 * GH-Archive are skipped by the plan and will not be added.
 */
export const SOURCES: readonly Source[] = [
  linguistSource,
  languishSource,
  wikidataSource,
  pyplSource,
  stackexchangeSource,
  homebrewSource,
  innovationGraphSource,
];

export function sourceById(id: string): Source | undefined {
  return SOURCES.find(s => s.id === id);
}

export { homebrewSource, innovationGraphSource, languishSource, linguistSource, pyplSource, stackexchangeSource, wikidataSource };
