export * from "./core/fields.ts";
export * from "./core/match.ts";
export * from "./core/ownership.ts";
export * from "./core/patch.ts";
export * from "./core/paths.ts";
export * from "./core/report.ts";
export * from "./core/run.ts";
export * from "./core/store.ts";
export * from "./core/types.ts";
export * from "./enrich/crawl.ts";
export type { AnthropicLike, EnrichOptions } from "./enrich/enrich.ts";
// Note: `./sources/*` are exported by name, not star-exported: several sources
// legitimately define same-named helpers (e.g. `trendFor`).
export { AI_OWNED_FIELDS, aiPlangSchema, createEnrichSource, enrichSource, MODEL, SYSTEM_PROMPT } from "./enrich/enrich.ts";
export {
  homebrewSource,
  innovationGraphSource,
  languishSource,
  linguistSource,
  pldbSource,
  pyplSource,
  SOURCES,
  sourceById,
  stackexchangeSource,
  tiobeSource,
  wikidataSource,
} from "./sources/index.ts";
