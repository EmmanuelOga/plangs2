/** Wikidata importer, against a recorded `Special:EntityData/Q20080327.json` (Nim). */

import { describe, expect, it } from "vitest";
import { fixture, fixtureFetcher, makeNodesDir, offlineFetcher, removeDir, snapshotDir } from "../../test/helpers.ts";
import { runSource } from "../core/run.ts";
import { ENTITY_URL, type EntityData, extractEntity, factsOf, itemIds, PROPS, parseTimeValue, wikidataSource } from "./wikidata.ts";

const nimJson = fixture("wikidata", "Q20080327.json");
const fetch = fixtureFetcher({ [ENTITY_URL("Q20080327")]: nimJson });
const entity = extractEntity(JSON.parse(nimJson) as EntityData, "Q20080327");
if (!entity) throw new Error("fixture missing entity");

describe("parseTimeValue", () => {
  it("respects precision", () => {
    expect(parseTimeValue({ time: "+2008-01-01T00:00:00Z", precision: 9 })).toBe("2008");
    expect(parseTimeValue({ time: "+2008-05-01T00:00:00Z", precision: 10 })).toBe("2008-05");
    expect(parseTimeValue({ time: "+2008-05-17T00:00:00Z", precision: 11 })).toBe("2008-05-17");
  });

  it("defaults to year precision and tolerates junk", () => {
    expect(parseTimeValue({ time: "+2008-01-01T00:00:00Z" })).toBe("2008");
    expect(parseTimeValue({ time: "garbage" })).toBeUndefined();
    expect(parseTimeValue(undefined)).toBeUndefined();
  });
});

describe("factsOf", () => {
  it("extracts inception and official website from the real entity", () => {
    expect(factsOf(entity)).toEqual({ created: "2008", extHomeURL: "https://nim-lang.org/" });
  });
});

describe("itemIds", () => {
  it("reads item-valued claims", () => {
    expect(itemIds(entity, PROPS.programmingParadigm).length).toBeGreaterThan(3);
    expect(itemIds(entity, PROPS.designedBy)).toContain("Q60678874");
  });

  it("is empty for absent properties", () => {
    expect(itemIds(entity, "P99999")).toEqual([]);
  });
});

describe("wikidataSource", () => {
  const NODES = {
    "pl/nim": { name: "Nim", sources: { wikidata: "Q20080327" }, rels: {} },
    "pl/nowd": { name: "NoQid", rels: {} },
  };

  it("writes only inception + website", async () => {
    const dir = makeNodesDir(NODES);
    try {
      const report = await runSource(wikidataSource, { nodesDir: dir, fetch, noReport: true });
      expect(report.errors).toEqual([]);
      expect(report.changes.map(c => c.field).sort()).toEqual(["created", "extHomeURL"]);

      const nim = snapshotDir(dir)["plang/nim.yaml"] ?? "";
      expect(nim).toContain('created: "2008"');
      expect(nim).toContain("extHomeURL: https://nim-lang.org/");
    } finally {
      removeDir(dir);
    }
  });

  it("sends paradigm and designer claims to review, never to YAML", async () => {
    const dir = makeNodesDir(NODES);
    try {
      const report = await runSource(wikidataSource, { nodesDir: dir, fetch, noReport: true });
      const kinds = report.review.filter(r => r.key === "pl/nim").map(r => r.kind);
      expect(kinds).toContain("paradigm-suggestion");
      expect(kinds).toContain("designer-suggestion");

      // The suggestions must not have touched the node's rels or any field.
      const nim = snapshotDir(dir)["plang/nim.yaml"] ?? "";
      expect(nim).not.toContain("Q275596");
      expect(nim).not.toContain("Q60678874");
      expect(report.changes.some(c => c.field.startsWith("rels"))).toBe(false);
    } finally {
      removeDir(dir);
    }
  });

  it("never guesses a QID for a node that has none", async () => {
    const dir = makeNodesDir(NODES);
    try {
      // `offlineFetcher` proves no request is even attempted for pl/nowd.
      const report = await runSource(wikidataSource, {
        nodesDir: dir,
        fetch: async url => (url === ENTITY_URL("Q20080327") ? nimJson : offlineFetcher(url)),
        noReport: true,
      });
      expect(report.unmatched).toContain("pl/nowd");
      expect(report.changes.some(c => c.key === "pl/nowd")).toBe(false);
    } finally {
      removeDir(dir);
    }
  });

  it("does not erase curated data when wikidata is silent about a field", async () => {
    const dir = makeNodesDir({
      "pl/quiet": { name: "Quiet", created: "1999", extHomeURL: "https://example.org", sources: { wikidata: "Q1" }, rels: {} },
    });
    try {
      // An entity with no P571 / P856 claims at all.
      const empty = JSON.stringify({ entities: { Q1: { claims: {} } } });
      const report = await runSource(wikidataSource, { nodesDir: dir, fetch: fixtureFetcher({ [ENTITY_URL("Q1")]: empty }), noReport: true });
      expect(report.changes).toEqual([]);
      const doc = snapshotDir(dir)["plang/quiet.yaml"] ?? "";
      expect(doc).toContain('created: "1999"');
      expect(doc).toContain("extHomeURL: https://example.org");
    } finally {
      removeDir(dir);
    }
  });

  it("reports a bad QID instead of failing the run", async () => {
    const dir = makeNodesDir({ "pl/bad": { name: "Bad", sources: { wikidata: "Q404" }, rels: {} } });
    try {
      const empty = JSON.stringify({ entities: {} });
      const report = await runSource(wikidataSource, { nodesDir: dir, fetch: fixtureFetcher({ [ENTITY_URL("Q404")]: empty }), noReport: true });
      expect(report.errors).toEqual([]);
      expect(report.review[0]).toMatchObject({ key: "pl/bad", kind: "bad-qid" });
    } finally {
      removeDir(dir);
    }
  });

  it("is idempotent", async () => {
    const dir = makeNodesDir(NODES);
    try {
      await runSource(wikidataSource, { nodesDir: dir, fetch, noReport: true });
      const after = snapshotDir(dir);
      const second = await runSource(wikidataSource, { nodesDir: dir, fetch, noReport: true });
      expect(second.changes).toEqual([]);
      expect(second.written).toEqual([]);
      expect(snapshotDir(dir)).toEqual(after);
    } finally {
      removeDir(dir);
    }
  });

  it("never writes outside its owns list", async () => {
    const dir = makeNodesDir(NODES);
    try {
      const report = await runSource(wikidataSource, { nodesDir: dir, fetch, noReport: true });
      const allowed = new Set(wikidataSource.owns);
      for (const change of report.changes) expect(allowed.has(change.field), `wrote ${change.field}`).toBe(true);
    } finally {
      removeDir(dir);
    }
  });
});
