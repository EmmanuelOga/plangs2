import type { NodeKind } from "./types";

/** Metadata per node kind. `prefix` is the short key segment (e.g. `pl/nim`). */
export interface KindDef {
  kind: NodeKind;
  /** Short key prefix used in node keys and URLs, e.g. `pl`, `para`, `lic`. */
  prefix: string;
  /** Human-readable singular label. */
  label: string;
  /**
   * Kinds slated for folding in v3 (Decision D2). Kept in the schema so the
   * migration round-trip stays lossless; the site treats them per the plan.
   */
  deprecated?: boolean;
}

export const KINDS: Record<NodeKind, KindDef> = {
  app: { kind: "app", prefix: "app", label: "Application" },
  author: { kind: "author", prefix: "author", label: "Author", deprecated: true },
  bundle: { kind: "bundle", prefix: "bun", label: "Bundle of Tools", deprecated: true },
  community: { kind: "community", prefix: "comm", label: "Community" },
  learning: { kind: "learning", prefix: "learn", label: "Learning Resource" },
  library: { kind: "library", prefix: "lib", label: "Software Library" },
  license: { kind: "license", prefix: "lic", label: "Software License" },
  paradigm: { kind: "paradigm", prefix: "para", label: "Paradigm" },
  plang: { kind: "plang", prefix: "pl", label: "Programming Language" },
  platform: { kind: "platform", prefix: "plat", label: "Platform" },
  post: { kind: "post", prefix: "post", label: "Blog Post", deprecated: true },
  subsystem: { kind: "subsystem", prefix: "sys", label: "Subsystem" },
  tag: { kind: "tag", prefix: "tag", label: "Tag" },
  tool: { kind: "tool", prefix: "tool", label: "Programming Tool" },
  typeSystem: { kind: "typeSystem", prefix: "tsys", label: "Type System" },
};

export const ALL_KINDS = Object.keys(KINDS) as NodeKind[];

const PREFIX_TO_KIND = new Map<string, NodeKind>(Object.values(KINDS).map(k => [k.prefix, k.kind]));
const KIND_TO_PREFIX = new Map<NodeKind, string>(Object.values(KINDS).map(k => [k.kind, k.prefix]));

export function kindOfPrefix(prefix: string): NodeKind | undefined {
  return PREFIX_TO_KIND.get(prefix);
}

export function prefixOfKind(kind: NodeKind): string {
  const p = KIND_TO_PREFIX.get(kind);
  if (!p) throw new Error(`Unknown node kind: ${kind}`);
  return p;
}
