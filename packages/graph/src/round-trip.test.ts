import { existsSync, readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { legacyToNew } from "@plangs/schema";
import { describe, expect, it } from "vitest";
import { loadGraph } from "./load.ts";
import { NODES_DIR } from "./paths.ts";
import { type SerializedGraph, toSerializedGraph } from "./serialize.ts";

const HERE = dirname(fileURLToPath(import.meta.url));
const REFERENCE = join(HERE, "../test/fixtures/plangs.legacy.json");

/**
 * V2 DRIFT REPORT — informational, never fails (pivot 2026-07-17).
 *
 * History: this was the migration gate. Strict deep equality against the
 * fixture proved the migration lossless (passed at dd7c0f0c; the proof lives
 * in the git log); it was then narrowed (2026-07-15) to "nothing from v2 was
 * lost". The 2026-07-17 pivot dropped v2 compatibility entirely: the dataset
 * is free to remove v2 kinds, keys and edges when the change is deliberate.
 *
 * What remains, permanently:
 *
 *   - the dataset must LOAD with no structural errors (asserted — that is
 *     current integrity, not v2 compat);
 *   - the fixture must EXIST (asserted — it is the frozen historical record
 *     of the migration and its generator is gone; never regenerate it);
 *   - every difference vs v2 — additions AND removals — is PRINTED, with
 *     removals listed item by item. Data loss stays visible, not locked:
 *     a reviewer must be able to see exactly what a diff dropped.
 *
 * The report stays printed, not asserted (process.stdout.write; vitest
 * swallows console.* from passing tests). Asserting it would rebuild the old
 * "any data change reddens CI" problem in either direction.
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

/** Cap per-item listings so a large deliberate removal doesn't flood the run. */
const LIST_CAP = 25;

function printList(label: string, items: string[]) {
  if (!items.length) return;
  process.stdout.write(`[drift vs v2]   ${label}:\n`);
  for (const item of items.slice(0, LIST_CAP)) process.stdout.write(`[drift vs v2]     - ${item}\n`);
  if (items.length > LIST_CAP) process.stdout.write(`[drift vs v2]     … and ${items.length - LIST_CAP} more\n`);
}

/**
 * The fixture is frozen in v2's `pl+nim` key form and must never be
 * regenerated, so the CONVERSION happens here, at read time, in memory.
 *
 * Until E2 the serializer emitted `pl+nim` too, and this comparison was
 * key-for-key by accident. Now `toSerializedGraph()` speaks v3 keys (that is
 * the public artifact's shape), so without this the report would call every
 * vertex and every edge both added and removed — a "drift report" that reports
 * nothing but its own key rename.
 */
function toV3Keys(ref: SerializedGraph): SerializedGraph {
  const vertices: SerializedGraph["vertices"] = {};
  for (const [kind, bucket] of Object.entries(ref.vertices)) {
    vertices[kind] = Object.fromEntries(Object.entries(bucket).map(([k, v]) => [legacyToNew(k), v]));
  }
  const edges: SerializedGraph["edges"] = {};
  for (const [name, bySrc] of Object.entries(ref.edges)) {
    edges[name] = Object.fromEntries(Object.entries(bySrc).map(([src, dsts]) => [legacyToNew(src), dsts.map(legacyToNew)]));
  }
  return { vertices, edges };
}

describe("dataset vs the frozen v2 record", () => {
  const reference: SerializedGraph = toV3Keys(JSON.parse(readFileSync(REFERENCE, "utf8")));
  const { graph, issues } = loadGraph(NODES_DIR);
  const errors = issues.filter(i => i.level === "error");
  const exported = toSerializedGraph(graph);

  it("loads with no structural errors", () => {
    expect(errors).toEqual([]);
  });

  it("has the reference fixture", () => {
    expect(existsSync(REFERENCE)).toBe(true);
  });

  it("prints a two-way drift report (informational, never fails)", () => {
    const removedKinds = Object.keys(reference.vertices).filter(k => !(k in exported.vertices));
    const removedEdgeNames = Object.keys(reference.edges).filter(n => !(n in exported.edges));

    let addedVertices = 0;
    let changedVertices = 0;
    for (const [kind, bucket] of Object.entries(exported.vertices)) {
      const refBucket = reference.vertices[kind] ?? {};
      for (const [key, data] of Object.entries(bucket)) {
        if (!(key in refBucket)) addedVertices++;
        else if (!deepEqual(data, refBucket[key])) changedVertices++;
      }
    }
    const removedVertices: string[] = [];
    for (const [kind, bucket] of Object.entries(reference.vertices)) {
      for (const key of Object.keys(bucket)) {
        if (!exported.vertices[kind]?.[key]) removedVertices.push(`${kind}: ${key}`);
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
    const removedEdges: string[] = [];
    for (const [name, bySrc] of Object.entries(reference.edges)) {
      for (const [src, dsts] of Object.entries(bySrc)) {
        const current = new Set(exported.edges[name]?.[src] ?? []);
        for (const dst of dsts) {
          if (!current.has(dst)) removedEdges.push(`${name}: ${src} → ${dst}`);
        }
      }
    }

    const drifted =
      addedVertices ||
      changedVertices ||
      addedEdges ||
      removedVertices.length ||
      removedEdges.length ||
      removedKinds.length ||
      removedEdgeNames.length;
    // Raw stdout: vitest's default reporter swallows console.* from passing tests.
    if (!drifted) {
      process.stdout.write("[drift vs v2] none — dataset is still byte-identical to the migration\n");
    } else {
      process.stdout.write(
        `[drift vs v2] +${addedVertices} vertices, ~${changedVertices} changed, -${removedVertices.length} removed; ` +
          `+${addedEdges} edges, -${removedEdges.length} removed\n`,
      );
      // Removals are the data-loss signal — always listed, never asserted.
      printList("removed kinds", removedKinds);
      printList("removed edge names", removedEdgeNames);
      printList("removed vertices", removedVertices);
      printList("removed edges", removedEdges);
    }
    expect(true).toBe(true);
  });
});
