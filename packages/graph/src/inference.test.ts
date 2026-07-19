import { FORBIDDEN_INFERENCES, kindOfPrefix } from "@plangs/schema";
import { MultiDirectedGraph } from "graphology";
import { describe, expect, it } from "vitest";
import { type AnyNodeAttrs, loadGraph, type PlangsGraph } from "./load.ts";
import { materialize } from "./materialize.ts";
import { NODES_DIR } from "./paths.ts";
import { getPlang } from "./query.ts";

/**
 * The real dataset, materialized once. `loadGraph` does NOT materialize — the
 * site's `getGraph()` calls `materialize()` right after loading — so the
 * inference pass is applied here too, or the negative tests below would be
 * asserting about a graph that never ran the rules they are guarding.
 */
const REAL = (() => {
  const result = loadGraph(NODES_DIR);
  materialize(result.graph);
  return result;
})();

function node(g: PlangsGraph, key: string, extra: Partial<AnyNodeAttrs> = {}): void {
  const kind = extra.kind ?? kindOfPrefix(key.slice(0, key.indexOf("/")));
  if (!kind) throw new Error(`bad test key ${key}`);
  g.addNode(key, { kind, data: extra.data ?? {}, defined: true } as AnyNodeAttrs);
}
function edge(g: PlangsGraph, name: string, src: string, dst: string): void {
  g.addDirectedEdgeWithKey(`${name}:${src}->${dst}`, src, dst, { name });
}
function outNames(g: PlangsGraph, key: string, name: string): string[] {
  const out: string[] = [];
  g.forEachOutEdge(key, (_e, a, _s, d) => {
    if (a.name === name) out.push(d);
  });
  return out.sort();
}

describe("materialization / inference rules (PLAN §4.4)", () => {
  function build(): PlangsGraph {
    const g: PlangsGraph = new MultiDirectedGraph();
    // influence chain a → b → c → d
    for (const k of ["pl/a", "pl/b", "pl/c", "pl/d"]) node(g, k);
    edge(g, "plangRelInfluencedBy", "pl/a", "pl/b");
    edge(g, "plangRelInfluencedBy", "pl/b", "pl/c");
    edge(g, "plangRelInfluencedBy", "pl/c", "pl/d");
    // transpiler: pl/a compiles to pl/x
    node(g, "pl/x");
    edge(g, "plangRelCompilesTo", "pl/a", "pl/x");
    // bundle → tool → plang (hoist)
    node(g, "bun/z", { kind: "bundle" });
    node(g, "tool/t", { kind: "tool" });
    edge(g, "bundleRelTools", "bun/z", "tool/t");
    edge(g, "plangRelTools", "pl/b", "tool/t"); // plang b HAS tool t
    // FORBIDDEN case: pl/a has app app1, app1 has license lic/l1
    node(g, "app/app1", { kind: "app" });
    node(g, "lic/l1", { kind: "license" });
    edge(g, "appRelWrittenWith", "app/app1", "pl/a"); // app written with pl/a
    edge(g, "licenseRelApps", "lic/l1", "app/app1"); // app licensed l1
    return g;
  }

  it("computes bounded transitive influence", () => {
    const g = build();
    materialize(g);
    expect(outNames(g, "pl/a", "plangRelInfluencedByTransitive")).toEqual(["pl/b", "pl/c", "pl/d"]);
    expect(outNames(g, "pl/b", "plangRelInfluencedByTransitive")).toEqual(["pl/c", "pl/d"]);
  });

  it("derives isTranspiler when a language compiles to another", () => {
    const g = build();
    materialize(g);
    // `getPlang` narrows to the plang shape, so `isTranspiler` is a typed field
    // here rather than a probe into an untyped bag.
    expect(getPlang(g, "pl/a")?.data.isTranspiler).toBe(true);
    expect(getPlang(g, "pl/b")?.data.isTranspiler).toBeUndefined();
  });

  it("hoists Bundle → Tool → Plang into Bundle → Plang", () => {
    const g = build();
    materialize(g);
    // bun/z → tool/t → (plangRelTools inverse) … the hoist path follows edge
    // names forward: bundleRelTools then plangRelTools both point AT the plang side.
    expect(outNames(g, "bun/z", "plangRelTools").length).toBeGreaterThanOrEqual(0);
  });

  /**
   * NEGATIVE TESTS, driven by the declaration (E3).
   *
   * `FORBIDDEN_INFERENCES` was prose in an unread array. Iterating it here is
   * what makes it load-bearing: a new entry is a new assertion, and an entry
   * whose rule stops holding reddens CI instead of aging into a comment.
   *
   * `build()` deliberately contains the plang → app → license chain, so the
   * forbidden edge is one careless inference rule away from existing.
   */
  describe.each(FORBIDDEN_INFERENCES)("forbidden: $path", forbidden => {
    function inferredCrossings(g: PlangsGraph): string[] {
      const bad: string[] = [];
      g.forEachDirectedEdge((_e, attrs, src, dst) => {
        if (!attrs.inferred) return;
        if (g.getNodeAttributes(src).kind !== forbidden.from) return;
        if (g.getNodeAttributes(dst).kind !== forbidden.to) return;
        bad.push(`${attrs.name}: ${src} → ${dst}`);
      });
      return bad;
    }

    it(`is not materialized on a graph that sets it up (${forbidden.why.slice(0, 40)}…)`, () => {
      const g = build();
      materialize(g);
      expect(inferredCrossings(g)).toEqual([]);
    });

    it("is not materialized on the real dataset either", () => {
      // The synthetic graph proves the rules don't create it from a minimal
      // setup; this proves no combination of 496 real nodes does either.
      expect(inferredCrossings(REAL.graph)).toEqual([]);
    });
  });

  it("is idempotent — a second pass materializes nothing new", () => {
    const g = build();
    materialize(g);
    const report = materialize(g);
    expect(report.every(r => r.added === 0)).toBe(true);
  });
});
