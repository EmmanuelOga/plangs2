import { z } from "zod";
import { ALL_KINDS } from "./kinds";
import type { NodeKind } from "./types";

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

/** Fields shared (loosely) across all vertices. All optional except `name`. */
const baseShape = {
  // Optional: a few legacy nodes (e.g. bundles/tools) were authored without one.
  name: z.string().optional(),
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
  sources: z.record(z.string(), z.unknown()).optional(),
  rankings: z.record(z.string(), z.number()).optional(),
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

/** Zod schema per node kind. Validation-only — the graph stores raw data. */
export const NODE_SCHEMAS: Record<NodeKind, z.ZodObject> = {
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
};

export type NodeData = Record<string, unknown>;
export type PlangData = z.infer<(typeof NODE_SCHEMAS)["plang"]>;

export function schemaForKind(kind: NodeKind): z.ZodObject {
  return NODE_SCHEMAS[kind];
}

// Compile-time guard: a schema exists for every kind.
void ALL_KINDS;
