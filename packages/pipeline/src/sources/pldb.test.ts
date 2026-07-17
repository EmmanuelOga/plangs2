/** PLDB importer, against a recorded slice of the pldb.json bulk export. */

import { NODE_SCHEMAS } from "@plangs/schema";
import { describe, expect, it } from "vitest";
import { fixture, fixtureFetcher, makeNodesDir, removeDir, snapshotDir } from "../../test/helpers.ts";
import { parseNodeYaml } from "../core/fields.ts";
import { runSource } from "../core/run.ts";
import { PLDB_URL, parsePldb, pldbSource } from "./pldb.ts";

const json = fixture("pldb", "pldb.json");
const fetch = fixtureFetcher({ [PLDB_URL]: json });

describe("parsePldb", () => {
  it("extracts id/name/appeared/wikipedia from the concept objects", () => {
    const concepts = parsePldb(json);
    expect(concepts).toHaveLength(4);
    expect(concepts[0]).toEqual({
      id: "python",
      name: "Python",
      appeared: 1991,
      wikipedia: "https://en.wikipedia.org/wiki/Python_(programming_language)",
    });
  });

  it("leaves appeared/wikipedia undefined when the concept lacks them", () => {
    const byId = Object.fromEntries(parsePldb(json).map(c => [c.id, c]));
    expect(byId.somestub?.wikipedia).toBeUndefined(); // has appeared, no wiki
    expect(byId.nowiki?.appeared).toBeUndefined(); // has wiki, no appeared
  });

  it("rejects a non-numeric or out-of-range appeared", () => {
    expect(parsePldb('[{"id":"x","name":"X","appeared":"not-a-year"}]')[0]?.appeared).toBeUndefined();
    expect(parsePldb('[{"id":"x","name":"X","appeared":12}]')[0]?.appeared).toBeUndefined();
    expect(parsePldb('[{"id":"x","name":"X","appeared":"1995"}]')[0]?.appeared).toBe(1995); // numeric string OK
  });

  it("throws a clear error when the shape changes", () => {
    expect(() => parsePldb("not json")).toThrow(/not JSON/);
    expect(() => parsePldb('{"items":[]}')).toThrow(/JSON array/);
    expect(() => parsePldb("[]")).toThrow(/no concepts/);
  });
});

describe("pldbSource", () => {
  const NODES = {
    // Missing `created`, matches a well-attested PLDB concept → backfilled to "1988".
    "pl/strand": { name: "Strand", rels: {} },
    // Already has `created` (a DIFFERENT year) → fill-only leaves it untouched.
    "pl/python": { name: "Python", created: "1994", rels: {} },
    // PLDB has an appeared but no Wikipedia link → gated to review, not written.
    "pl/somestub": { name: "SomeStub", rels: {} },
    // PLDB has a Wikipedia link but no appeared → gated to review, not written.
    "pl/nowiki": { name: "NoWiki", rels: {} },
    // No PLDB concept at all → unmatched, nothing written.
    "pl/potassco": { name: "Potassco", rels: {} },
  };

  it("backfills a missing created + records provenance", async () => {
    const dir = makeNodesDir(NODES);
    try {
      const report = await runSource(pldbSource, { nodesDir: dir, fetch, noReport: true });
      expect(report.errors).toEqual([]);
      const strand = parseNodeYaml(snapshotDir(dir)["plang/strand.yaml"] ?? "");
      expect(strand.created).toBe("1988");
      expect((strand.sources as Record<string, string>).pldb).toBe("strand");
    } finally {
      removeDir(dir);
    }
  });

  it("never overwrites a curated created (fill-only)", async () => {
    // The load-bearing guarantee. Re-introduce the bug by dropping the
    // `hasCreated` guard in run() and this fails: Python's "1994" becomes "1991".
    const dir = makeNodesDir(NODES);
    try {
      await runSource(pldbSource, { nodesDir: dir, fetch, noReport: true });
      const py = parseNodeYaml(snapshotDir(dir)["plang/python.yaml"] ?? "");
      expect(py.created).toBe("1994");
      // A node it stays out of is never even claimed as a source.
      expect((py.sources as Record<string, string> | undefined)?.pldb).toBeUndefined();
    } finally {
      removeDir(dir);
    }
  });

  it("writes only fields it owns, and schema-valid", async () => {
    const dir = makeNodesDir(NODES);
    try {
      const report = await runSource(pldbSource, { nodesDir: dir, fetch, noReport: true });
      const allowed = new Set(pldbSource.owns);
      for (const change of report.changes) expect(allowed.has(change.field), `wrote ${change.field}`).toBe(true);
      const strand = parseNodeYaml(snapshotDir(dir)["plang/strand.yaml"] ?? "");
      expect(NODE_SCHEMAS.plang.safeParse(strand).success).toBe(true);
    } finally {
      removeDir(dir);
    }
  });

  it("gates a match below the notability threshold to review, not a write", async () => {
    const dir = makeNodesDir(NODES);
    try {
      const report = await runSource(pldbSource, { nodesDir: dir, fetch, noReport: true });
      // Neither below-threshold node is written.
      expect(report.changes.some(c => c.key === "pl/somestub")).toBe(false);
      expect(report.changes.some(c => c.key === "pl/nowiki")).toBe(false);
      // Both are reported for a human.
      const reviewed = new Set(report.review.filter(r => r.kind === "pldb-below-threshold").map(r => r.key));
      expect(reviewed).toEqual(new Set(["pl/somestub", "pl/nowiki"]));
    } finally {
      removeDir(dir);
    }
  });

  it("records a node with no PLDB concept as unmatched", async () => {
    const dir = makeNodesDir(NODES);
    try {
      const report = await runSource(pldbSource, { nodesDir: dir, fetch, noReport: true });
      expect(report.unmatched).toContain("pl/potassco");
      expect(report.changes.some(c => c.key === "pl/potassco")).toBe(false);
    } finally {
      removeDir(dir);
    }
  });

  it("is idempotent", async () => {
    const dir = makeNodesDir(NODES);
    try {
      await runSource(pldbSource, { nodesDir: dir, fetch, noReport: true });
      const after = snapshotDir(dir);
      const second = await runSource(pldbSource, { nodesDir: dir, fetch, noReport: true });
      expect(second.changes).toEqual([]);
      expect(second.written).toEqual([]);
      expect(snapshotDir(dir)).toEqual(after);
    } finally {
      removeDir(dir);
    }
  });
});
