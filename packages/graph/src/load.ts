import { readdirSync, readFileSync } from "node:fs";
import { join, sep } from "node:path";
import {
  directedEdge,
  type NodeDataOf,
  type NodeKind,
  parseKey,
  prefixOfKind,
  type RelTarget,
  refKey,
  refQualifiers,
  resolveRel,
  zAnnotatedRef,
} from "@plangs/schema";
import { MultiDirectedGraph } from "graphology";
import { parse as parseYaml } from "yaml";

/**
 * A node, carrying the data shape its own kind's schema describes.
 *
 * `data` used to be `Record<string, unknown>`, which pushed every reader into
 * hand-rolled `typeof` checks to get at a field the schema already describes
 * (PLAN §4a). The types come from NODE_SCHEMAS, and `integrity.test.ts` parses
 * the real dataset against those same schemas on every CI run — so this is a
 * claim with a gate behind it, not a cast we hope holds.
 */
export interface NodeAttrs<K extends NodeKind = NodeKind> {
  kind: K;
  data: NodeDataOf<K>;
  /** True when loaded from a real YAML file; false for dangling edge targets. */
  defined: boolean;
}

/**
 * Any node, as a union discriminated on `kind`.
 *
 * This is what makes `if (attrs.kind === "plang")` narrow `attrs.data` to the
 * plang shape. `NodeAttrs<NodeKind>` would NOT: it pairs a `kind` of any kind
 * with a `data` of any shape, so the two never correlate.
 */
export type AnyNodeAttrs = { [K in NodeKind]: NodeAttrs<K> }[NodeKind];
export interface EdgeAttrs {
  name: string;
  /** True for edges produced by the materialization pass (never written to YAML). */
  inferred?: boolean;
  /** Optional edge properties — today the D8 valid-time qualifiers (`since`/`until`) of an annotated ref. */
  props?: Record<string, unknown>;
}

export type PlangsGraph = MultiDirectedGraph<AnyNodeAttrs, EdgeAttrs>;

export interface LoadIssue {
  level: "error" | "warn";
  message: string;
  key?: string;
}

export interface LoadResult {
  graph: PlangsGraph;
  issues: LoadIssue[];
}

/** Recursively list `*.yaml` files as `{kind, slug}` under a nodes directory. */
function listNodeFiles(nodesDir: string): { kind: string; slug: string; path: string }[] {
  const out: { kind: string; slug: string; path: string }[] = [];
  for (const rel of readdirSync(nodesDir, { recursive: true }) as string[]) {
    if (!rel.endsWith(".yaml")) continue;
    const parts = rel.split(sep);
    const kind = parts[0];
    const base = parts[parts.length - 1];
    if (parts.length < 2 || !kind || !base) continue;
    out.push({ kind, slug: base.replace(/\.yaml$/, ""), path: join(nodesDir, rel) });
  }
  return out;
}

function ensureNode(graph: PlangsGraph, key: string, kind: NodeKind): void {
  if (!graph.hasNode(key)) graph.addNode(key, { kind, data: {}, defined: false } as AnyNodeAttrs);
}

/**
 * Load every YAML node file under `nodesDir` into a graphology graph.
 * Vertices carry raw `data`; edges carry their canonical `name`.
 */
export function loadGraph(nodesDir: string): LoadResult {
  const graph: PlangsGraph = new MultiDirectedGraph();
  const issues: LoadIssue[] = [];

  // Pass 1: create all defined nodes so edge targets can resolve.
  const files = listNodeFiles(nodesDir);
  const parsed: { key: string; kind: NodeKind; rels: Record<string, RelTarget[]> }[] = [];
  for (const { kind: kindDir, slug, path } of files) {
    const doc = parseYaml(readFileSync(path, "utf8")) ?? {};
    const kind = kindDir as NodeKind;
    const key = `${prefixOfKind(kind)}/${slug}`;
    const { rels, ...data } = doc as { rels?: Record<string, RelTarget[]> } & Record<string, unknown>;
    if (graph.hasNode(key) && graph.getNodeAttribute(key, "defined")) {
      issues.push({ level: "error", message: `Duplicate node key ${key}`, key });
    }
    // The only unchecked step: YAML is parsed, not validated, so `data` is
    // asserted into its kind's shape here. `checkIntegrity(graph)` is what makes
    // the assertion true, and integrity.test.ts runs it over the whole real
    // dataset in CI. Loading stays fast and reports ALL problems at once instead
    // of throwing on the first bad file.
    const attrs = { kind, data, defined: true } as AnyNodeAttrs;
    if (graph.hasNode(key)) graph.mergeNode(key, attrs);
    else graph.addNode(key, attrs);
    parsed.push({ key, kind, rels: rels ?? {} });
  }

  // Pass 2: wire edges.
  for (const { key, kind, rels } of parsed) {
    for (const [relKey, targets] of Object.entries(rels)) {
      const res = resolveRel(kind, relKey);
      if (!res) {
        issues.push({ level: "error", message: `Unknown rel '${relKey}' on ${kind} ${key}`, key });
        continue;
      }
      for (const target of targets) {
        // D8: a target may be an annotated ref `{ref, since?, until?}`. Zod
        // (strict) is what turns a typo'd qualifier key into a load error
        // instead of silently dropped data.
        if (typeof target !== "string") {
          const res = zAnnotatedRef.safeParse(target);
          if (!res.success) {
            const detail = res.error.issues.map(i => `${i.path.join(".") || "(ref)"}: ${i.message}`).join("; ");
            issues.push({ level: "error", message: `Invalid annotated ref in ${key}.${relKey} — ${detail}`, key });
            continue;
          }
        }
        const targetKey = refKey(target);
        const props = refQualifiers(target);
        const de = directedEdge(kind, relKey, key, targetKey);
        if (!de) continue;
        const srcParsed = parseKey(de.src);
        const dstParsed = parseKey(de.dst);
        if (!srcParsed || !dstParsed) {
          issues.push({ level: "error", message: `Malformed target key '${targetKey}' in ${key}.${relKey}`, key });
          continue;
        }
        // Ensure both endpoints exist (dangling targets become undefined nodes).
        ensureNode(graph, de.src, srcParsed.kind);
        ensureNode(graph, de.dst, dstParsed.kind);
        const edgeKey = `${de.name}:${de.src}->${de.dst}`;
        if (!graph.hasEdge(edgeKey)) {
          graph.addDirectedEdgeWithKey(edgeKey, de.src, de.dst, props ? { name: de.name, props } : { name: de.name });
        } else if (props) {
          // The same edge can be authored from both endpoints (fromRel/toRel).
          // First author wins; losing qualifiers must at least be visible.
          issues.push({
            level: "warn",
            message: `Duplicate rel target ${targetKey} in ${key}.${relKey}: qualifiers ignored (edge already authored)`,
            key,
          });
        }
      }
    }
  }

  return { graph, issues };
}
