/** PYPL importer, against a recorded slice of `pypl.github.io/PYPL/All.js`. */

import { zTrend } from "@plangs/schema";
import { describe, expect, it } from "vitest";
import { fixture, fixtureFetcher, makeNodesDir, removeDir, snapshotDir } from "../../test/helpers.ts";
import { parseNodeYaml } from "../core/fields.ts";
import { runSource } from "../core/run.ts";
import { latestMonth, PYPL_URL, parsePypl, pyplSource, ranksFor } from "./pypl.ts";

const allJs = fixture("pypl", "All.js");
const fetch = fixtureFetcher({ [PYPL_URL]: allJs });
const data = parsePypl(allJs);

describe("parsePypl", () => {
  it("reads the language list", () => {
    expect(data.languages).toContain("Python");
    expect(data.languages).toContain("C/C++");
    expect(data.languages.length).toBe(30);
  });

  it("reads monthly rows with a zero-based JS Date month", () => {
    // `new Date(2026,6,1)` is JULY 2026, not June — off-by-one here would shift
    // the whole series.
    expect(data.months).toContain("2026-07");
    expect(data.shares.get("2026-07")?.get("Python")).toBeCloseTo(0.4749, 4);
  });

  it("detects the latest month rather than hardcoding one", () => {
    expect(latestMonth(data)).toBe("2026-07");
    expect(data.months).toEqual([...data.months].sort());
  });

  it("parses upstream's own formatting verbatim", () => {
    // The committed fixture is reformatted by Biome (double quotes, exploded
    // rows, trailing commas). Upstream actually serves single quotes, one row
    // per line, no trailing comma — which is what production will hit, so it
    // has to parse too.
    const upstream = [
      "graphData = [",
      "['Date', // begin section languages",
      "'Python', 'Java'",
      "// end section languages",
      "],",
      "// begin section All",
      "[new Date(2026,5,1),0.47,0.11],",
      "[new Date(2026,6,1),0.48,0.10]",
      "// end section All",
      "];",
    ].join("\n");
    const parsed = parsePypl(upstream);
    expect(parsed.languages).toEqual(["Python", "Java"]);
    expect(parsed.months).toEqual(["2026-06", "2026-07"]);
    expect(parsed.shares.get("2026-07")?.get("Python")).toBe(0.48);
  });

  it("throws a clear error if upstream changes shape", () => {
    expect(() => parsePypl("nothing useful here")).toThrow(/languages section/);
    expect(() => parsePypl("// begin section languages\n'X'\n// end section languages")).toThrow(/no data rows/);
  });
});

describe("ranksFor", () => {
  it("ranks by descending share", () => {
    const ranks = ranksFor(data, "2026-07");
    expect(ranks.get("Python")).toBe(1);
    expect(ranks.get("Java")).toBe(2);
  });
});

describe("pyplSource", () => {
  const NODES = {
    "pl/python": { name: "Python", rels: {} },
    "pl/java": { name: "Java", rels: {} },
    // PYPL only tracks ~30 languages; Nim is not one of them.
    "pl/nim": { name: "Nim", rels: {} },
  };

  it("writes a ranking + trend under its own namespace", async () => {
    const dir = makeNodesDir(NODES);
    try {
      const report = await runSource(pyplSource, { nodesDir: dir, fetch, noReport: true });
      expect(report.errors).toEqual([]);

      const python = parseNodeYaml(snapshotDir(dir)["plang/python.yaml"] ?? "");
      expect((python.rankings as Record<string, number>).pypl).toBe(1);
      expect((python.sources as Record<string, string>).pypl).toBe("Python");
      const trend = (python.trends as Record<string, unknown>).pypl;
      if (!trend) throw new Error("expected a pypl trend series on pl/python");
      expect((trend as { quarters: string[] }).quarters).toContain("2026-07");
    } finally {
      removeDir(dir);
    }
  });

  it("writes a trend the SCHEMA accepts", async () => {
    /*
     * REGRESSION. pypl emitted `{ metric, months, shares }` — field names of its
     * own invention, with `ranks` missing entirely — while zTrend specifies
     * `{ metric, quarters, scores, ranks }`. (`quarters` means period LABELS;
     * the schema's own comment allows "2026-06".) It went unnoticed because pypl
     * had never run for real: the first run wrote 28 nodes that then failed
     * integrity validation.
     *
     * Asserting against the real schema rather than a hand-copied shape is the
     * point — a hand-copied shape is what drifted.
     */
    const dir = makeNodesDir(NODES);
    try {
      await runSource(pyplSource, { nodesDir: dir, fetch, noReport: true });
      const python = parseNodeYaml(snapshotDir(dir)["plang/python.yaml"] ?? "");
      const trend = (python.trends as Record<string, unknown>).pypl;
      const parsed = zTrend.safeParse(trend);
      expect(parsed.success ? [] : parsed.error.issues.map(i => `${i.path.join(".")}: ${i.message}`)).toEqual([]);

      const t = parsed.success ? parsed.data : undefined;
      if (!t) throw new Error("unreachable");
      // Parallel arrays: a length mismatch silently plots a point against the
      // wrong period.
      expect(t.scores).toHaveLength(t.quarters.length);
      expect(t.ranks).toHaveLength(t.quarters.length);
      expect(t.ranks[t.quarters.indexOf("2026-07")], "Python is #1 in the fixture's latest month").toBe(1);
    } finally {
      removeDir(dir);
    }
  });

  it("does not write languishRanking (that field belongs to languish)", async () => {
    const dir = makeNodesDir(NODES);
    try {
      const report = await runSource(pyplSource, { nodesDir: dir, fetch, noReport: true });
      expect(report.changes.some(c => c.field === "languishRanking")).toBe(false);
      const allowed = new Set(pyplSource.owns);
      for (const change of report.changes) expect(allowed.has(change.field), `wrote ${change.field}`).toBe(true);
    } finally {
      removeDir(dir);
    }
  });

  it("keeps ranking signals separate rather than merging them into one number", async () => {
    const dir = makeNodesDir({ "pl/python": { name: "Python", rankings: { languish: 3 }, rels: {} } });
    try {
      await runSource(pyplSource, { nodesDir: dir, fetch, noReport: true });
      const python = parseNodeYaml(snapshotDir(dir)["plang/python.yaml"] ?? "");
      expect(python.rankings).toEqual({ languish: 3, pypl: 1 });
    } finally {
      removeDir(dir);
    }
  });

  it("silently skips languages PYPL does not track", async () => {
    const dir = makeNodesDir(NODES);
    try {
      const report = await runSource(pyplSource, { nodesDir: dir, fetch, noReport: true });
      expect(report.changes.some(c => c.key === "pl/nim")).toBe(false);
    } finally {
      removeDir(dir);
    }
  });

  it("is idempotent", async () => {
    const dir = makeNodesDir(NODES);
    try {
      await runSource(pyplSource, { nodesDir: dir, fetch, noReport: true });
      const after = snapshotDir(dir);
      const second = await runSource(pyplSource, { nodesDir: dir, fetch, noReport: true });
      expect(second.changes).toEqual([]);
      expect(second.written).toEqual([]);
      expect(snapshotDir(dir)).toEqual(after);
    } finally {
      removeDir(dir);
    }
  });

  it("errors on an --opt.month with no data rather than reporting '0 changes'", async () => {
    const dir = makeNodesDir(NODES);
    try {
      const report = await runSource(pyplSource, { nodesDir: dir, fetch, noReport: true, options: { month: "2026-13" } });
      expect(report.errors.join(" ")).toContain("no data for month '2026-13'");
      expect(report.changes).toEqual([]);
    } finally {
      removeDir(dir);
    }
  });
});
