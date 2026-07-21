import { refKey, zAnnotatedRef } from "@plangs/schema";
import { describe, expect, it } from "vitest";
import { loadGraph } from "./load.ts";
import { NODES_DIR } from "./paths.ts";
import { toSerializedGraph } from "./serialize.ts";

/**
 * The public `/data/plangs.json` artifact's SHAPE.
 *
 * `llms.txt` and the README both promise consumers that node keys are
 * `prefix/slug` everywhere. Before E2 this one file broke that promise by
 * emitting v2's `pl+nim`, and nothing noticed because the only reader was a
 * drift report written against the same legacy form. This asserts the promise
 * directly, on the real dataset.
 */
describe("serialized graph (the public dataset artifact)", () => {
  const { graph } = loadGraph(NODES_DIR);
  const out = toSerializedGraph(graph);

  it("keys every vertex as prefix/slug, never the legacy prefix+slug", () => {
    const keys = Object.values(out.vertices).flatMap(bucket => Object.keys(bucket));
    expect(keys.length).toBeGreaterThan(400);
    expect(keys.filter(k => !k.includes("/"))).toEqual([]);
    // `+` is legal INSIDE a slug (`pl/c++`), so the check is on the separator:
    // nothing may appear before the first `/`… and there must be no `+` before it.
    expect(keys.filter(k => k.slice(0, k.indexOf("/")).includes("+"))).toEqual([]);
  });

  it("keys both ends of every edge the same way", () => {
    const ends = Object.values(out.edges).flatMap(bySrc => Object.entries(bySrc).flatMap(([src, dsts]) => [src, ...dsts.map(refKey)]));
    expect(ends.length).toBeGreaterThan(1000);
    expect(ends.filter(k => !k.includes("/"))).toEqual([]);
    expect(ends.filter(k => k.slice(0, k.indexOf("/")).includes("+"))).toEqual([]);
  });

  it("emits qualified edges as annotated refs, matching the YAML convention (D8)", () => {
    const annotated = Object.values(out.edges)
      .flatMap(bySrc => Object.values(bySrc).flat())
      .filter(t => typeof t !== "string");
    // The dataset carries at least one authored qualifier (pl/swift's Apache
    // license, since Swift's 2015 open-sourcing) — the machinery is exercised
    // by real data, not only by unit fixtures.
    expect(annotated.length).toBeGreaterThanOrEqual(1);
    for (const t of annotated) expect(zAnnotatedRef.safeParse(t).success).toBe(true);
  });

  it("declares every kind and edge name even when empty, so the shape is data-independent", () => {
    for (const bucket of Object.values(out.vertices)) expect(bucket).toBeTypeOf("object");
    for (const bySrc of Object.values(out.edges)) expect(bySrc).toBeTypeOf("object");
    expect(Object.keys(out.vertices).length).toBeGreaterThan(10);
    expect(Object.keys(out.edges).length).toBeGreaterThan(40);
  });

  it("sorts edge targets by key, so the artifact does not churn between builds", () => {
    for (const bySrc of Object.values(out.edges)) {
      for (const dsts of Object.values(bySrc)) {
        const keys = dsts.map(refKey);
        expect(keys).toEqual([...keys].sort());
      }
    }
  });
});
