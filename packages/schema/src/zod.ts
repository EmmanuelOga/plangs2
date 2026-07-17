import { z } from "zod";
import { ALL_KINDS } from "./kinds.ts";
import type { NodeKind } from "./types.ts";

/** Date string: `YYYY`, `YYYY-MM`, or `YYYY-MM-DD` (also legacy `YYYY-MMM`). */
export const zStrDate = z.string();

export const zRelease = z.object({
  version: z.string(),
  name: z.string().optional(),
  date: zStrDate.optional(),
});

export const zLink = z.object({
  url: z.string(),
  title: z.string().optional(),
});

export const zImage = z.object({
  kind: z.enum(["logo", "screenshot", "other"]),
  title: z.string(),
  url: z.string(),
  width: z.number().optional(),
  height: z.number().optional(),
});

export const zLearningKind = z.enum(["book", "course", "tutorial", "video", "other"]);

/**
 * A quarterly (or monthly) series kept by a ranking source, e.g. Languish.
 * The legacy pipeline threw these away; v3 keeps them so detail pages can show
 * trends. `quarters`/`scores`/`ranks` are parallel arrays.
 */
export const zTrend = z.object({
  /** How the score was computed, e.g. "weighted-share". */
  metric: z.string(),
  /** Period labels, e.g. ["2024Q4", "2025Q1"] or ["2026-06"]. */
  quarters: z.array(z.string()),
  scores: z.array(z.number()),
  ranks: z.array(z.number()),
});

/** Fields shared (loosely) across all vertices. All optional except `name`. */
const baseShape = {
  // Required. Four legacy nodes were authored without one; they were named in
  // PLAN §4e, so nothing in the dataset relies on it being absent, and
  // integrity.test.ts parses every node against these schemas in CI.
  name: z.string(),
  description: z.string().optional(),
  shortDesc: z.string().optional(),
  created: zStrDate.optional(),
  keywords: z.array(z.string()).optional(),
  extHomeURL: z.string().optional(),
  images: z.array(zImage).optional(),
  links: z.array(zLink).optional(),
  extRedditPath: z.string().optional(),
  extWikipediaPath: z.string().optional(),
  stackovTags: z.array(z.string()).optional(),
  /** v3 additions (optional, not present in legacy data). */
  updated: zStrDate.optional(),
  /** Per-source provenance ids, e.g. `{ wikidata: "Q567134", pldb: "nim" }`. */
  sources: z.record(z.string(), z.unknown()).optional(),
  /** Ranking signals kept side by side, never merged: `{ languish: 119 }`. */
  rankings: z.record(z.string(), z.number()).optional(),
  /** Historical series per ranking source: `{ languish: {…} }`. */
  trends: z.record(z.string(), zTrend).optional(),
};

/** GitHub-backed repo fields. */
const githubShape = {
  extGithubPath: z.string().optional(),
  githubStars: z.number().optional(),
  releases: z.array(zRelease).optional(),
};

const plangShape = {
  ...baseShape,
  ...githubShape,
  extensions: z.array(z.string()).optional(),
  filenames: z.array(z.string()).optional(),
  isTranspiler: z.boolean().optional(),
  languishRanking: z.number().optional(),
  githubName: z.string().optional(),
  githubGroupName: z.string().optional(),
  githubLangId: z.string().optional(),
  githubColor: z.string().optional(),
  githubPopular: z.boolean().optional(),
  githubType: z.string().optional(),
};

const licenseShape = {
  ...baseShape,
  spdx: z.string().optional(),
  isFSFLibre: z.boolean().optional(),
  isOSIApproved: z.boolean().optional(),
};

const learningShape = { ...baseShape, kinds: z.array(zLearningKind).optional() };

const postShape = {
  ...baseShape,
  path: z.string().optional(),
  author: z.string().optional(),
  authorHref: z.string().optional(),
};

const withGithub = { ...baseShape, ...githubShape };

/**
 * Zod schema per node kind — and the source of the per-kind DATA TYPES.
 *
 * `satisfies`, not a `Record<NodeKind, z.ZodObject>` annotation: the annotation
 * widens every entry to `z.ZodObject`, which erases the per-kind shape and makes
 * `z.infer<(typeof NODE_SCHEMAS)[K]>` degenerate to `{}`. That erasure is why
 * call sites used to hand-narrow `data` with `typeof` checks. `satisfies` keeps
 * the exhaustiveness check (every kind has a schema) AND the inferred shapes.
 */
export const NODE_SCHEMAS = {
  app: z.object(withGithub),
  author: z.object(baseShape),
  bundle: z.object(baseShape),
  community: z.object(baseShape),
  learning: z.object(learningShape),
  library: z.object(withGithub),
  license: z.object(licenseShape),
  paradigm: z.object(baseShape),
  plang: z.object(plangShape),
  platform: z.object(baseShape),
  post: z.object(postShape),
  subsystem: z.object(withGithub),
  tag: z.object(baseShape),
  tool: z.object(withGithub),
  typeSystem: z.object(baseShape),
} satisfies Record<NodeKind, z.ZodObject>;

/** The validated shape of a node's `data` for a given kind. */
export type NodeDataOf<K extends NodeKind> = z.infer<(typeof NODE_SCHEMAS)[K]>;

/** `data` for any kind — a union, so narrow by `kind` before reaching in. */
export type NodeData = { [K in NodeKind]: NodeDataOf<K> }[NodeKind];

// Compile-time guard: a schema exists for every kind.
void ALL_KINDS;
