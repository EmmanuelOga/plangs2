import { readdirSync, readFileSync } from "node:fs";
import { join, sep } from "node:path";
import { directedEdge, type NodeKind, parseKey, prefixOfKind, resolveRel } from "@plangs/schema";
import { MultiDirectedGraph } from "graphology";
import { parse as parseYaml } from "yaml";

export interface NodeAttrs {
  kind: NodeKind;
  data: Record<string, unknown>;
  /** True when loaded from a real YAML file; false for dangling edge targets. */
  defined: boolean;
}
export interface EdgeAttrs {
  name: string;
  /** True for edges produced by the materialization pass (never written to YAML). */
  inferred?: boolean;
  /** Optional edge properties (e.g. `influencedBy` citation source). */
  props?: Record<string, unknown>;
}

export type PlangsGraph = MultiDirectedGraph<NodeAttrs, EdgeAttrs>;

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
  if (!graph.hasNode(key)) graph.addNode(key, { kind, data: {}, defined: false });
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
  const parsed: { key: string; kind: NodeKind; rels: Record<string, string[]> }[] = [];
  for (const { kind: kindDir, slug, path } of files) {
    const doc = parseYaml(readFileSync(path, "utf8")) ?? {};
    const kind = kindDir as NodeKind;
    const key = `${prefixOfKind(kind)}/${slug}`;
    const { rels, ...data } = doc as { rels?: Record<string, string[]> } & Record<string, unknown>;
    if (graph.hasNode(key) && graph.getNodeAttribute(key, "defined")) {
      issues.push({ level: "error", message: `Duplicate node key ${key}`, key });
    }
    if (graph.hasNode(key)) graph.mergeNode(key, { kind, data, defined: true });
    else graph.addNode(key, { kind, data, defined: true });
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
        const de = directedEdge(kind, relKey, key, target);
        if (!de) continue;
        const srcParsed = parseKey(de.src);
        const dstParsed = parseKey(de.dst);
        if (!srcParsed || !dstParsed) {
          issues.push({ level: "error", message: `Malformed target key '${target}' in ${key}.${relKey}`, key });
          continue;
        }
        // Ensure both endpoints exist (dangling targets become undefined nodes).
        ensureNode(graph, de.src, srcParsed.kind);
        ensureNode(graph, de.dst, dstParsed.kind);
        const edgeKey = `${de.name}:${de.src}->${de.dst}`;
        if (!graph.hasEdge(edgeKey)) {
          graph.addDirectedEdgeWithKey(edgeKey, de.src, de.dst, { name: de.name });
        }
      }
    }
  }

  return { graph, issues };
}
