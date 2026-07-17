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
 * MIGRATION GATE, narrowed 2026-07-15 (see CLAUDE.md "Do not break").
 *
 * The permanent contract is "nothing from v2 was lost", not "nothing changed".
 * Strict deep equality against the fixture proved the migration lossless — it
 * passed at commit dd7c0f0c and that proof lives in the git log — but keeping
 * it would redden CI on every legitimate data change (pipeline runs, human
 * PRs editing YAML). What must hold forever:
 *
 *   - every v2 vertex kind and edge name still exists (the public dataset is
 *     a documented v2 drop-in);
 *   - every v2 vertex key still exists;
 *   - every v2 edge (src → dst) still exists.
 *
 * New vertices, new edges, and changed/added fields are ALLOWED; they are
 * summarized in a printed drift report (not asserted) so a reviewer can see
 * that a diff touches what it claims to.
 *
 * Do NOT regenerate the fixture from the current dataset to make this pass:
 * it is the only surviving record of v2's content (its generator is gone) and
 * scripts/url-parity.mjs reads it too. See CLAUDE.md "Do not break".
 */

/** Key-order-independent deep equality (fixture JSON vs YAML load order). */
function deepEqual(a: unknown, b: unknown): boolean {
  if (a === b) return true;
  if (Array.isArray(a) && Array.isArray(b)) {
    return a.length === b.length && a.every((v, i) => deepEqual(v, b[i]));
  }
  if (a && b && typeof a === "object" && typeof b === "object" && !Array.isArray(a) && !Array.isArray(b)) {
    const ka = Object.keys(a);
    const kb = Object.keys(b);
    if (ka.length !== kb.length) return false;
    return ka.every(k => deepEqual((a as Record<string, unknown>)[k], (b as Record<string, unknown>)[k]));
  }
  return false;
}

describe("dataset preserves everything the v2 graph had", () => {
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

  it("still has every v2 vertex kind", () => {
    expect(Object.keys(exported.vertices).sort()).toEqual(expect.arrayContaining(Object.keys(reference.vertices).sort()));
  });

  it("still has every v2 edge name", () => {
    expect(Object.keys(exported.edges).sort()).toEqual(expect.arrayContaining(Object.keys(reference.edges).sort()));
  });

  it("still has every v2 vertex", () => {
    const missing: string[] = [];
    for (const [kind, bucket] of Object.entries(reference.vertices)) {
      for (const key of Object.keys(bucket)) {
        if (!exported.vertices[kind]?.[key]) missing.push(`${kind}: ${key}`);
      }
    }
    expect(missing).toEqual([]);
  });

  it("still has every v2 edge", () => {
    const missing: string[] = [];
    for (const [name, bySrc] of Object.entries(reference.edges)) {
      for (const [src, dsts] of Object.entries(bySrc)) {
        const current = new Set(exported.edges[name]?.[src] ?? []);
        for (const dst of dsts) {
          if (!current.has(dst)) missing.push(`${name}: ${src} → ${dst}`);
        }
      }
    }
    expect(missing).toEqual([]);
  });

  it("prints a drift report (informational, never fails)", () => {
    let addedVertices = 0;
    let changedVertices = 0;
    for (const [kind, bucket] of Object.entries(exported.vertices)) {
      const refBucket = reference.vertices[kind] ?? {};
      for (const [key, data] of Object.entries(bucket)) {
        if (!(key in refBucket)) addedVertices++;
        else if (!deepEqual(data, refBucket[key])) changedVertices++;
      }
    }

    let addedEdges = 0;
    for (const [name, bySrc] of Object.entries(exported.edges)) {
      const refBySrc = reference.edges[name] ?? {};
      for (const [src, dsts] of Object.entries(bySrc)) {
        const refDsts = new Set(refBySrc[src] ?? []);
        addedEdges += dsts.filter(dst => !refDsts.has(dst)).length;
      }
    }

    const drifted = addedVertices || changedVertices || addedEdges;
    // Raw stdout: vitest's default reporter swallows console.* from passing tests.
    process.stdout.write(
      drifted
        ? `[drift vs v2] +${addedVertices} vertices, ~${changedVertices} changed, +${addedEdges} edges\n`
        : "[drift vs v2] none — dataset is still byte-identical to the migration\n",
    );
    expect(true).toBe(true);
  });
});
