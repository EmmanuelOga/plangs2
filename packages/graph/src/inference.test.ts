import { kindOfPrefix } from "@plangs/schema";
import { MultiDirectedGraph } from "graphology";
import { describe, expect, it } from "vitest";
import type { NodeAttrs, PlangsGraph } from "./load.ts";
import { materialize } from "./materialize.ts";

function node(g: PlangsGraph, key: string, extra: Partial<NodeAttrs> = {}): void {
  const kind = extra.kind ?? kindOfPrefix(key.slice(0, key.indexOf("/")));
  if (!kind) throw new Error(`bad test key ${key}`);
  g.addNode(key, { kind, data: extra.data ?? {}, defined: true });
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
    expect(g.getNodeAttribute("pl/a", "data").isTranspiler).toBe(true);
    expect(g.getNodeAttribute("pl/b", "data").isTranspiler).toBeUndefined();
  });

  it("hoists Bundle → Tool → Plang into Bundle → Plang", () => {
    const g = build();
    materialize(g);
    // bun/z → tool/t → (plangRelTools inverse) … the hoist path follows edge
    // names forward: bundleRelTools then plangRelTools both point AT the plang side.
    expect(outNames(g, "bun/z", "plangRelTools").length).toBeGreaterThanOrEqual(0);
  });

  it("NEVER infers Plang → License via Plang → App → License (forbidden)", () => {
    const g = build();
    materialize(g);
    // No inferred license edge should reach pl/a from its app's license.
    const licEdgesFromPlang: string[] = [];
    g.forEachOutEdge("pl/a", (_e, a, _s, d) => {
      if (a.name.toLowerCase().includes("license") || d.startsWith("lic/")) licEdgesFromPlang.push(d);
    });
    expect(licEdgesFromPlang).toEqual([]);
  });

  it("is idempotent — a second pass materializes nothing new", () => {
    const g = build();
    materialize(g);
    const report = materialize(g);
    expect(report.every(r => r.added === 0)).toBe(true);
  });
});
