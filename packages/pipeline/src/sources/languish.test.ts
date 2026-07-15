/**
 * Languish importer, against a recorded slice of the tjpalmer/languish clone's
 * committed per-metric JSON.
 */

import { describe, expect, it } from "vitest";
import { fixturePath, makeNodesDir, offlineFetcher, removeDir, snapshotDir } from "../../test/helpers.ts";
import { parseNodeYaml } from "../core/fields.ts";
import { runSource } from "../core/run.ts";
import {
  allQuarters,
  buildData,
  buildQuarterTable,
  canonicalName,
  DEFAULT_WEIGHTS,
  languishSource,
  latestQuarter,
  parseWeights,
  quarterRank,
  rankings,
  readClone,
  scores,
} from "./languish.ts";

const CLONE = fixturePath("languish");
const data = buildData(readClone(CLONE));

describe("canonicalName", () => {
  it("folds upstream's renames", () => {
    expect(canonicalName("Nimrod")).toBe("Nim");
    expect(canonicalName("Perl6")).toBe("Raku");
    expect(canonicalName("Python")).toBe("Python");
  });
});

describe("parseWeights", () => {
  it("defaults to upstream's bot-aware weights (issues 0, PRs 0, stars 1, SO 1)", () => {
    expect(parseWeights(undefined)).toEqual({ issues: 0, pulls: 0, stars: 1, soQuestions: 1 });
    expect(DEFAULT_WEIGHTS).toEqual({ issues: 0, pulls: 0, stars: 1, soQuestions: 1 });
  });

  it("parses an override spec — weights are data, not constants", () => {
    expect(parseWeights("stars:2,issues:1")).toEqual({ issues: 1, pulls: 0, stars: 2, soQuestions: 0 });
  });

  it("rejects an unknown metric or a bad number", () => {
    expect(() => parseWeights("bogus:1")).toThrow(/Unknown languish metric/);
    expect(() => parseWeights("stars:abc")).toThrow(/Bad weight/);
  });
});

describe("quarter detection", () => {
  it("sorts quarters correctly across a year boundary", () => {
    expect(quarterRank("2025Q1")).toBeGreaterThan(quarterRank("2024Q4"));
  });

  it("auto-detects the latest quarter — never hardcoded", () => {
    // The real clone currently ends at 2025Q2 (the legacy importer was frozen
    // at a hardcoded 2024Q4).
    expect(latestQuarter(data, DEFAULT_WEIGHTS)).toBe("2025Q2");
    expect(latestQuarter(data, DEFAULT_WEIGHTS)).not.toBe("2024Q4");
  });

  it("requires every weighted metric to have data for the quarter", () => {
    const sparse = buildData({
      issues: [],
      pulls: [],
      stars: [
        { year: 2025, quarter: 1, name: "Nim", count: 5 },
        { year: 2025, quarter: 2, name: "Nim", count: 6 },
      ],
      // soQuestions lags a quarter — the ranking must not silently use 2025Q2.
      soQuestions: [{ year: 2025, quarter: 1, name: "Nim", count: 3 }],
    });
    expect(latestQuarter(sparse, DEFAULT_WEIGHTS)).toBe("2025Q1");
  });

  it("returns undefined when every weight is zero", () => {
    expect(latestQuarter(data, { issues: 0, pulls: 0, stars: 0, soQuestions: 0 })).toBeUndefined();
  });
});

describe("scoring", () => {
  it("ranks by weighted share of quarter, best first", () => {
    const ranked = rankings(data, "2025Q2", DEFAULT_WEIGHTS);
    const python = ranked.get("Python");
    const nim = ranked.get("Nim");
    expect(python).toBeDefined();
    expect(nim).toBeDefined();
    // Python dwarfs Nim on both weighted metrics in the recorded data.
    expect(python as number).toBeLessThan(nim as number);
    expect(ranked.get("Python")).toBe(1);
  });

  it("weights change the outcome (proving they are actually applied)", () => {
    const starsOnly = scores(data, "2025Q2", { issues: 0, pulls: 0, stars: 1, soQuestions: 0 });
    const soOnly = scores(data, "2025Q2", { issues: 0, pulls: 0, stars: 0, soQuestions: 1 });
    expect(starsOnly.map(([n]) => n)).not.toEqual(soOnly.map(([n]) => n));
  });

  it("ignores zero-weighted metrics entirely", () => {
    const withPulls = scores(data, "2025Q2", { issues: 0, pulls: 1, stars: 1, soQuestions: 1 });
    const withoutPulls = scores(data, "2025Q2", DEFAULT_WEIGHTS);
    expect(withPulls).not.toEqual(withoutPulls);
  });

  it("folds a renamed language's counts into its canonical name", () => {
    const folded = buildData({
      issues: [],
      pulls: [],
      stars: [
        { year: 2025, quarter: 2, name: "Nimrod", count: 4 },
        { year: 2025, quarter: 2, name: "Nim", count: 6 },
      ],
      soQuestions: [{ year: 2025, quarter: 2, name: "Nim", count: 10 }],
    });
    expect(folded.counts.stars.get("2025Q2")?.get("Nim")).toBe(10);
    expect(folded.counts.stars.get("2025Q2")?.has("Nimrod")).toBe(false);
  });
});

describe("trend series", () => {
  it("covers every quarter in the data (the legacy importer threw this away)", () => {
    const table = buildQuarterTable(data, DEFAULT_WEIGHTS);
    expect(table.quarters).toEqual(allQuarters(data, DEFAULT_WEIGHTS));
    expect(table.quarters.length).toBeGreaterThan(4);
    expect(table.quarters[0]).toBe("2023Q1");
    expect(table.quarters[table.quarters.length - 1]).toBe("2025Q2");
  });
});

describe("languishSource", () => {
  const NODES = {
    "pl/nim": { name: "Nim", rels: {} },
    "pl/python": { name: "Python", rels: {} },
    "pl/brainfuck": { name: "Brainfuck", rels: {} },
  };
  const opts = { options: { clone: CLONE }, fetch: offlineFetcher, noReport: true };

  it("writes a ranking, a rankings entry, a trend series and the source id", async () => {
    const dir = makeNodesDir(NODES);
    try {
      const report = await runSource(languishSource, { nodesDir: dir, ...opts });
      expect(report.errors).toEqual([]);

      const nim = parseNodeYaml(snapshotDir(dir)["plang/nim.yaml"] ?? "");
      expect(typeof nim.languishRanking).toBe("number");
      expect((nim.rankings as Record<string, number>).languish).toBe(nim.languishRanking);
      expect((nim.sources as Record<string, string>).languish).toBe("Nim");

      const trend = (nim.trends as Record<string, { metric: string; quarters: string[]; ranks: number[]; scores: number[] } | undefined>).languish;
      if (!trend) throw new Error("expected a languish trend series on pl/nim");
      expect(trend.metric).toBe("weighted-share");
      expect(trend.quarters.length).toBeGreaterThan(4);
      expect(trend.ranks).toHaveLength(trend.quarters.length);
      expect(trend.scores).toHaveLength(trend.quarters.length);
      expect(trend.quarters).toContain("2025Q2");
    } finally {
      removeDir(dir);
    }
  });

  it("records the detected quarter and weights in the report's origins", async () => {
    const dir = makeNodesDir(NODES);
    try {
      const report = await runSource(languishSource, { nodesDir: dir, ...opts });
      expect(report.origins.join(" ")).toContain("quarter=2025Q2");
      expect(report.origins.join(" ")).toContain('"stars":1');
    } finally {
      removeDir(dir);
    }
  });

  it("leaves nodes languish has never heard of alone", async () => {
    const dir = makeNodesDir(NODES);
    try {
      const report = await runSource(languishSource, { nodesDir: dir, ...opts });
      expect(report.unmatched).toContain("pl/brainfuck");
      expect(report.changes.some(c => c.key === "pl/brainfuck")).toBe(false);
    } finally {
      removeDir(dir);
    }
  });

  it("is idempotent", async () => {
    const dir = makeNodesDir(NODES);
    try {
      await runSource(languishSource, { nodesDir: dir, ...opts });
      const after = snapshotDir(dir);
      const second = await runSource(languishSource, { nodesDir: dir, ...opts });
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
      const report = await runSource(languishSource, { nodesDir: dir, ...opts });
      const allowed = new Set(languishSource.owns);
      for (const change of report.changes) expect(allowed.has(change.field), `wrote ${change.field}`).toBe(true);
    } finally {
      removeDir(dir);
    }
  });

  it("errors on an --opt.quarter with no data rather than reporting '0 changes'", async () => {
    const dir = makeNodesDir(NODES);
    try {
      const report = await runSource(languishSource, { nodesDir: dir, ...opts, options: { clone: CLONE, quarter: "1999Q9" } });
      expect(report.errors.join(" ")).toContain("no data for quarter '1999Q9'");
      expect(report.changes).toEqual([]);
    } finally {
      removeDir(dir);
    }
  });

  it("loudly reports a dead sources.languish pin", async () => {
    const dir = makeNodesDir({ "pl/nim": { name: "Nim", sources: { languish: "Nimrod" }, rels: {} } });
    try {
      const report = await runSource(languishSource, { nodesDir: dir, ...opts });
      expect(report.changes).toEqual([]);
      expect(report.review[0]).toMatchObject({ key: "pl/nim", kind: "stale-source-id" });
    } finally {
      removeDir(dir);
    }
  });

  it("errors clearly when the clone is missing", async () => {
    const dir = makeNodesDir(NODES);
    try {
      const report = await runSource(languishSource, { nodesDir: dir, fetch: offlineFetcher, noReport: true, options: { clone: "/nope" } });
      expect(report.errors.join(" ")).toMatch(/ENOENT|no such file/i);
    } finally {
      removeDir(dir);
    }
  });
});
