import { existsSync, readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { describe, expect, it } from "vitest";
import { loadGraph } from "./load.ts";
import { NODES_DIR } from "./paths.ts";
import { type SerializedGraph, toSerializedGraph } from "./serialize.ts";

const HERE = dirname(fileURLToPath(import.meta.url));
const REFERENCE = join(HERE, "../test/fixtures/plangs.legacy.json");

/**
 * PHASE 1 GATE (PLAN §4.6): load the migrated YAML into graphology, export it,
 * and assert deep equality against the legacy reference oracle (modulo the
 * pl+x → pl/x key rename, which the serializer undoes).
 */
describe("YAML → graphology → export round-trips the legacy graph", () => {
  const reference: SerializedGraph = JSON.parse(readFileSync(REFERENCE, "utf8"));
  const { graph, issues } = loadGraph(NODES_DIR);
  const errors = issues.filter(i => i.level === "error");
  const exported = toSerializedGraph(graph);

  it("loads with no structural errors", () => {
    expect(errors).toEqual([]);
  });

  it("has the reference fixture", () => {
    expect(existsSync(REFERENCE)).toBe(true);
  });

  it("reproduces every vertex kind exactly", () => {
    for (const kind of Object.keys(reference.vertices)) {
      expect({ kind, v: exported.vertices[kind] }).toEqual({ kind, v: reference.vertices[kind] });
    }
  });

  it("reproduces every edge exactly", () => {
    for (const name of Object.keys(reference.edges)) {
      expect({ name, e: exported.edges[name] }).toEqual({ name, e: reference.edges[name] });
    }
  });

  it("is deep-equal to the full reference", () => {
    expect(exported).toEqual(reference);
  });
});
