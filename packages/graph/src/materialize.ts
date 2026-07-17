import { INFERENCE_RULES, type InferenceRule } from "@plangs/schema";
import type { PlangsGraph } from "./load.ts";

/** Add an inferred directed edge if absent. Returns true if it was added. */
function addInferred(graph: PlangsGraph, name: string, src: string, dst: string): boolean {
  if (src === dst) return false;
  if (!graph.hasNode(src) || !graph.hasNode(dst)) return false;
  const key = `${name}:${src}->${dst}`;
  if (graph.hasEdge(key)) return false;
  graph.addDirectedEdgeWithKey(key, src, dst, { name, inferred: true });
  return true;
}

/** Outgoing neighbors of `node` along a specific edge name. */
function outByName(graph: PlangsGraph, node: string, name: string): string[] {
  const out: string[] = [];
  graph.forEachOutEdge(node, (_e, attrs, _s, dst) => {
    if (attrs.name === name) out.push(dst);
  });
  return out;
}

function applyTransitive(graph: PlangsGraph, rule: Extract<InferenceRule, { kind: "transitive" }>): number {
  let added = 0;
  for (const start of graph.nodes()) {
    // BFS along `rule.edge` up to maxDepth; materialize start → reachable.
    const seen = new Set<string>([start]);
    let frontier = outByName(graph, start, rule.edge);
    let depth = 1;
    while (frontier.length && depth <= rule.maxDepth) {
      const next: string[] = [];
      for (const n of frontier) {
        if (seen.has(n)) continue;
        seen.add(n);
        if (addInferred(graph, rule.as, start, n)) added++;
        next.push(...outByName(graph, n, rule.edge));
      }
      frontier = next;
      depth++;
    }
  }
  return added;
}

function applyHoist(graph: PlangsGraph, rule: Extract<InferenceRule, { kind: "hoist" }>): number {
  let added = 0;
  const [first, ...rest] = rule.path;
  if (!first) return 0;
  for (const start of graph.nodes()) {
    let reach = new Set(outByName(graph, start, first));
    for (const name of rest) {
      const next = new Set<string>();
      for (const n of reach) for (const m of outByName(graph, n, name)) next.add(m);
      reach = next;
    }
    for (const dst of reach) if (addInferred(graph, rule.as, start, dst)) added++;
  }
  return added;
}

function applyDerive(graph: PlangsGraph, rule: Extract<InferenceRule, { kind: "derive" }>): number {
  let changed = 0;
  for (const node of graph.nodes()) {
    const attrs = graph.getNodeAttributes(node);
    if (attrs.kind !== rule.on) continue;
    // The rule's `prop` is checked against `on`'s schema where the rule is
    // DECLARED (DeriveRule correlates the two). Here both are runtime unions, so
    // TS can't re-derive that pairing for a dynamic write; this widening is the
    // one place it is taken on trust, and the declaration site is what makes it
    // safe.
    const data = attrs.data as Record<string, unknown>;
    if (outByName(graph, node, rule.whenEdge).length > 0 && data[rule.prop] !== true) {
      data[rule.prop] = true;
      changed++;
    }
  }
  return changed;
}

export interface MaterializeReport {
  rule: string;
  added: number;
}

/**
 * Run the declarative inference rules (PLAN §4.4). Materialized edges are
 * marked `inferred: true`. Idempotent: running twice adds nothing new.
 */
export function materialize(graph: PlangsGraph, rules: InferenceRule[] = INFERENCE_RULES): MaterializeReport[] {
  const report: MaterializeReport[] = [];
  for (const rule of rules) {
    let added = 0;
    if (rule.kind === "transitive") added = applyTransitive(graph, rule);
    else if (rule.kind === "hoist") added = applyHoist(graph, rule);
    else if (rule.kind === "derive") added = applyDerive(graph, rule);
    report.push({ rule: rule.kind === "derive" ? `derive:${rule.prop}` : `${rule.kind}:${rule.as}`, added });
  }
  return report;
}
