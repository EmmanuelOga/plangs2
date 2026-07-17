/** GitHub Innovation Graph importer, against a recorded slice of languages.csv. */

import { NODE_SCHEMAS, zTrend } from "@plangs/schema";
import { describe, expect, it } from "vitest";
import { fixture, fixtureFetcher, makeNodesDir, removeDir, snapshotDir } from "../../test/helpers.ts";
import { parseNodeYaml } from "../core/fields.ts";
import { runSource } from "../core/run.ts";
import { aggregate, innovationGraphSource, LANGUAGES_URL, parseLanguagesCsv, ranksForPeriod } from "./innovation-graph.ts";

const csv = fixture("innovation-graph", "languages.csv");
const fetch = fixtureFetcher({ [LANGUAGES_URL]: csv });

describe("parseLanguagesCsv + aggregate", () => {
  it("sums pushers across economies into one global series", () => {
    // The fixture holds US + DE rows; the global total is their sum.
    const series = aggregate(parseLanguagesCsv(csv));
    expect(series.periods).toEqual(["2025Q1", "2025Q2", "2025Q3"]);
    // JavaScript 2025Q3 = US + DE combined (see fixture builder: 574104).
    expect(series.totals.get("JavaScript")?.get("2025Q3")).toBe(574104);
    expect(series.totals.get("Python")?.get("2025Q3")).toBe(520789);
  });

  it("locates columns by header name, not position", () => {
    // A reordered header must still parse (guards against a silent column shift).
    const reordered = ["quarter,year,language,language_type,num_pushers", "3,2025,Ziglang,programming,4200"].join("\n");
    const rows = parseLanguagesCsv(reordered);
    expect(rows[0]).toEqual({ language: "Ziglang", period: "2025Q3", pushers: 4200 });
  });

  it("throws a clear error when the shape changes", () => {
    expect(() => parseLanguagesCsv("a,b,c\n1,2,3")).toThrow(/missing column/);
    expect(() => parseLanguagesCsv("num_pushers,language,year,quarter")).toThrow(/no data rows/);
  });

  it("ranks a period by descending pushers", () => {
    const ranks = ranksForPeriod(aggregate(parseLanguagesCsv(csv)), "2025Q3");
    expect(ranks.get("JavaScript")).toBe(1);
    expect(ranks.get("Python")).toBe(2);
    expect(ranks.get("Go")).toBe(3);
    expect(ranks.get("Rust")).toBe(4);
    expect(ranks.get("Nim")).toBe(5);
  });
});

describe("innovationGraphSource", () => {
  const NODES = {
    "pl/javascript": { name: "JavaScript", rels: {} },
    "pl/python": { name: "Python", rels: {} },
    "pl/go": { name: "Go", rels: {} },
    "pl/rust": { name: "Rust", rels: {} },
    "pl/nim": { name: "Nim", rels: {} },
    // Not in the Innovation Graph fixture: silently skipped.
    "pl/cobol": { name: "COBOL", rels: {} },
  };

  it("writes the latest-quarter rank + a trend under its own namespace", async () => {
    const dir = makeNodesDir(NODES);
    try {
      const report = await runSource(innovationGraphSource, { nodesDir: dir, fetch, noReport: true });
      expect(report.errors).toEqual([]);
      const snap = snapshotDir(dir);
      const js = parseNodeYaml(snap["plang/javascript.yaml"] ?? "");
      expect((js.rankings as Record<string, number>)["innovation-graph"]).toBe(1);
      expect((js.sources as Record<string, string>)["innovation-graph"]).toBe("JavaScript");
      const trend = (js.trends as Record<string, unknown>)["innovation-graph"] as { quarters: string[]; scores: number[]; ranks: number[] };
      expect(trend.quarters).toEqual(["2025Q1", "2025Q2", "2025Q3"]);
      expect(trend.scores).toEqual([524365, 575648, 574104]);
      expect(trend.ranks).toEqual([1, 1, 1]);
    } finally {
      removeDir(dir);
    }
  });

  it("writes a trend the SCHEMA accepts (parallel arrays, valid zTrend)", async () => {
    const dir = makeNodesDir(NODES);
    try {
      await runSource(innovationGraphSource, { nodesDir: dir, fetch, noReport: true });
      const python = parseNodeYaml(snapshotDir(dir)["plang/python.yaml"] ?? "");
      const trend = (python.trends as Record<string, unknown>)["innovation-graph"];
      const parsed = zTrend.safeParse(trend);
      expect(parsed.success ? [] : parsed.error.issues.map(i => `${i.path.join(".")}: ${i.message}`)).toEqual([]);
      const t = parsed.success ? parsed.data : undefined;
      if (!t) throw new Error("unreachable");
      expect(t.scores).toHaveLength(t.quarters.length);
      expect(t.ranks).toHaveLength(t.quarters.length);
      // Python trails JavaScript every quarter in the fixture.
      expect(t.ranks[t.quarters.indexOf("2025Q3")]).toBe(2);
    } finally {
      removeDir(dir);
    }
  });

  it("writes only fields it owns, all schema-valid", async () => {
    const dir = makeNodesDir(NODES);
    try {
      const report = await runSource(innovationGraphSource, { nodesDir: dir, fetch, noReport: true });
      const allowed = new Set(innovationGraphSource.owns);
      for (const change of report.changes) expect(allowed.has(change.field), `wrote ${change.field}`).toBe(true);
      const js = parseNodeYaml(snapshotDir(dir)["plang/javascript.yaml"] ?? "");
      const parsed = NODE_SCHEMAS.plang.safeParse(js);
      expect(parsed.success ? [] : parsed.error.issues.map(i => `${i.path.join(".")}: ${i.message}`)).toEqual([]);
    } finally {
      removeDir(dir);
    }
  });

  it("keeps ranking signals separate rather than merging them", async () => {
    const dir = makeNodesDir({ "pl/go": { name: "Go", rankings: { languish: 5, homebrew: 3 }, rels: {} } });
    try {
      await runSource(innovationGraphSource, { nodesDir: dir, fetch, noReport: true });
      const go = parseNodeYaml(snapshotDir(dir)["plang/go.yaml"] ?? "");
      expect(go.rankings).toEqual({ languish: 5, homebrew: 3, "innovation-graph": 3 });
    } finally {
      removeDir(dir);
    }
  });

  it("silently skips languages the Innovation Graph does not track", async () => {
    const dir = makeNodesDir(NODES);
    try {
      const report = await runSource(innovationGraphSource, { nodesDir: dir, fetch, noReport: true });
      expect(report.changes.some(c => c.key === "pl/cobol")).toBe(false);
    } finally {
      removeDir(dir);
    }
  });

  it("is idempotent", async () => {
    const dir = makeNodesDir(NODES);
    try {
      await runSource(innovationGraphSource, { nodesDir: dir, fetch, noReport: true });
      const after = snapshotDir(dir);
      const second = await runSource(innovationGraphSource, { nodesDir: dir, fetch, noReport: true });
      expect(second.changes).toEqual([]);
      expect(second.written).toEqual([]);
      expect(snapshotDir(dir)).toEqual(after);
    } finally {
      removeDir(dir);
    }
  });
});
