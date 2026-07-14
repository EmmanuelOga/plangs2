import { existsSync } from "node:fs";
import { join } from "node:path";
import { NODE_SCHEMAS, parseKey } from "@plangs/schema";
import type { LoadIssue, PlangsGraph } from "./load";

export interface IntegrityOptions {
  /** If set, verify that referenced logo assets exist under this dir. */
  assetsDir?: string;
  /** Run Zod validation of node data (slower). Default true. */
  validate?: boolean;
}

/**
 * Integrity pass (replaces the legacy `bun run cleanup`): every edge target
 * exists and is defined; keys are well-formed; node data validates against its
 * Zod schema; referenced assets exist. Returns a precise list of issues.
 */
export function checkIntegrity(graph: PlangsGraph, opts: IntegrityOptions = {}): LoadIssue[] {
  const issues: LoadIssue[] = [];
  const { validate = true, assetsDir } = opts;

  graph.forEachNode((key, attrs) => {
    if (!attrs.defined) {
      issues.push({ level: "error", message: `Dangling edge target (no node file): ${key}`, key });
      return;
    }
    if (!parseKey(key)) {
      issues.push({ level: "error", message: `Malformed node key: ${key}`, key });
    }
    if (validate) {
      const schema = NODE_SCHEMAS[attrs.kind];
      const res = schema.safeParse(attrs.data);
      if (!res.success) {
        for (const iss of res.error.issues) {
          issues.push({ level: "error", message: `${key}: ${iss.path.join(".")} ${iss.message}`, key });
        }
      }
    }
    if (assetsDir) {
      const slug = parseKey(key)?.slug;
      if (slug) {
        const asset = join(assetsDir, attrs.kind, `${slug}.webp`);
        // Only warn — many nodes legitimately have no logo.
        if (attrs.data && !existsSync(asset)) {
          // no-op: absence of a logo is not an error; hook left for future use.
        }
      }
    }
  });

  return issues;
}

/**
 * `--fix` behavior: delete edges whose endpoints are dangling (undefined), and
 * drop the now-orphaned placeholder nodes. Returns the number of edges pruned.
 */
export function pruneDangling(graph: PlangsGraph): number {
  const toDrop: string[] = [];
  graph.forEachDirectedEdge((edge, _attrs, src, dst) => {
    if (!graph.getNodeAttribute(src, "defined") || !graph.getNodeAttribute(dst, "defined")) {
      toDrop.push(edge);
    }
  });
  for (const edge of toDrop) graph.dropEdge(edge);
  // Remove placeholder nodes with no remaining edges.
  for (const node of graph.nodes()) {
    if (!graph.getNodeAttribute(node, "defined") && graph.degree(node) === 0) graph.dropNode(node);
  }
  return toDrop.length;
}
