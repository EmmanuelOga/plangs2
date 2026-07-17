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

  it("writes only the website", async () => {
    const dir = makeNodesDir(NODES);
    try {
      const report = await runSource(wikidataSource, { nodesDir: dir, fetch, noReport: true });
      expect(report.errors).toEqual([]);
      expect(report.changes.map(c => c.field).sort()).toEqual(["extHomeURL"]);
      expect(snapshotDir(dir)["plang/nim.yaml"] ?? "").toContain("extHomeURL: https://nim-lang.org/");
    } finally {
      removeDir(dir);
    }
  });

  it("suggests inception rather than writing it over `created`", async () => {
    /*
     * P571 is *inception* — when the project began — while `created` renders as
     * "Appeared", the first release. They disagree for 26 real languages (C++
     * 1985 vs 1983, Rust 2015 vs 2006), so importing P571 would relabel a
     * project-start date as a release date. Owner's call, 2026-07-17: suggest,
     * never write.
     */
    const dir = makeNodesDir({ "pl/nim": { name: "Nim", created: "1999", sources: { wikidata: "Q20080327" }, rels: {} } });
    try {
      const report = await runSource(wikidataSource, { nodesDir: dir, fetch, noReport: true });
      expect(
        report.changes.some(c => c.field === "created"),
        "created must never be written",
      ).toBe(false);
      expect(snapshotDir(dir)["plang/nim.yaml"] ?? "", "the curated value stands").toContain('created: "1999"');

      const suggestion = report.review.find(r => r.key === "pl/nim" && r.kind === "inception-suggestion");
      expect(suggestion, "the disagreement must still reach a human").toBeTruthy();
      expect(suggestion?.data).toMatchObject({ inception: "2008", created: "1999" });
    } finally {
      removeDir(dir);
    }
  });

  it("does not swap a URL for the same page spelled worse", async () => {
    /*
     * Upstream P856 is often the same page, punctuated differently or served
     * over http: 65 of 110 real changes differed only by a trailing slash or
     * `www.`, and 15 would have replaced an https URL with http for the SAME
     * host — handing readers an insecure link to a page we already had
     * securely. A genuinely different URL still wins; wikidata owns the field.
     */
    const dir = makeNodesDir({ "pl/nim": { name: "Nim", extHomeURL: "https://nim-lang.org", sources: { wikidata: "Q20080327" }, rels: {} } });
    try {
      const report = await runSource(wikidataSource, { nodesDir: dir, fetch, noReport: true });
      // The fixture gives "https://nim-lang.org/" — same page, trailing slash.
      expect(
        report.changes.some(c => c.field === "extHomeURL"),
        "no churn for the same page",
      ).toBe(false);
      expect(snapshotDir(dir)["plang/nim.yaml"] ?? "").toContain("extHomeURL: https://nim-lang.org");
    } finally {
      removeDir(dir);
    }
  });

  it("still upgrades http to https for the same page", async () => {
    const dir = makeNodesDir({ "pl/nim": { name: "Nim", extHomeURL: "http://nim-lang.org/", sources: { wikidata: "Q20080327" }, rels: {} } });
    try {
      const report = await runSource(wikidataSource, { nodesDir: dir, fetch, noReport: true });
      expect(report.changes.find(c => c.field === "extHomeURL")).toMatchObject({ to: "https://nim-lang.org/" });
    } finally {
      removeDir(dir);
    }
  });

  it("does not nag when inception already agrees with `created`", async () => {
    const dir = makeNodesDir({ "pl/nim": { name: "Nim", created: "2008", sources: { wikidata: "Q20080327" }, rels: {} } });
    try {
      const report = await runSource(wikidataSource, { nodesDir: dir, fetch, noReport: true });
      expect(report.review.some(r => r.kind === "inception-suggestion")).toBe(false);
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
