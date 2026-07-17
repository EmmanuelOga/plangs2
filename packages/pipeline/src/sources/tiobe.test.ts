/** TIOBE importer, against a recorded slice of the top-20 index table. */

import { NODE_SCHEMAS, zTrend } from "@plangs/schema";
import { describe, expect, it } from "vitest";
import { fixture, fixtureFetcher, makeNodesDir, removeDir, snapshotDir } from "../../test/helpers.ts";
import { parseNodeYaml } from "../core/fields.ts";
import { runSource } from "../core/run.ts";
import { appendTrend, parseTiobe, TIOBE_URL, tiobeSource } from "./tiobe.ts";

const html = fixture("tiobe", "tiobe-index.html");
const fetch = fixtureFetcher({ [TIOBE_URL]: html });

describe("parseTiobe", () => {
  it("reads the month from the header and the ranked rows", () => {
    const index = parseTiobe(html);
    expect(index.month).toBe("2026-07"); // "Jul 2026"
    expect(index.entries.slice(0, 3)).toEqual([
      { rank: 1, name: "Python", rating: 18.94 },
      { rank: 2, name: "C", rating: 10.86 },
      { rank: 3, name: "C++", rating: 9.12 },
    ]);
    expect(index.entries).toHaveLength(20);
  });

  it("never picks up the <th> header row as data", () => {
    // The row regex is anchored on <tr><td>, so the header (all <th>) is skipped;
    // rank 1 is Python, not a stray header artifact.
    expect(parseTiobe(html).entries[0]?.name).toBe("Python");
  });

  it("throws a clear error when the shape changes", () => {
    expect(() => parseTiobe("<html>no table here</html>")).toThrow(/top20 table/);
    expect(() => parseTiobe('<table id="top20"><tr><th>Nonsense</th></tr></table>')).toThrow(/month/);
  });
});

describe("appendTrend", () => {
  const empty = { quarters: [], scores: [], ranks: [] };

  it("seeds a one-point series on the first run", () => {
    expect(appendTrend(empty, "2026-07", 18.94, 1)).toEqual({ metric: "rating", quarters: ["2026-07"], scores: [18.94], ranks: [1] });
  });

  it("appends a new month, keeping the series sorted and parallel", () => {
    const t = appendTrend({ quarters: ["2026-06"], scores: [19.0], ranks: [1] }, "2026-07", 18.94, 1);
    expect(t.quarters).toEqual(["2026-06", "2026-07"]);
    expect(t.scores).toEqual([19.0, 18.94]);
  });

  it("replaces (not duplicates) a re-run of the same month", () => {
    const t = appendTrend({ quarters: ["2026-07"], scores: [99.9], ranks: [9] }, "2026-07", 18.94, 1);
    expect(t.quarters).toEqual(["2026-07"]);
    expect(t.scores).toEqual([18.94]);
    expect(t.ranks).toEqual([1]);
  });
});

describe("tiobeSource", () => {
  const NODES = {
    "pl/python": { name: "Python", rels: {} },
    "pl/c++": { name: "C++", rels: {} },
    "pl/c-sharp": { name: "C#", rels: {} },
    // Not in the top 20: silently skipped.
    "pl/nim": { name: "Nim", rels: {} },
  };

  it("writes the rank + a seeded trend under its own namespace", async () => {
    const dir = makeNodesDir(NODES);
    try {
      const report = await runSource(tiobeSource, { nodesDir: dir, fetch, noReport: true });
      expect(report.errors).toEqual([]);
      const snap = snapshotDir(dir);
      const py = parseNodeYaml(snap["plang/python.yaml"] ?? "");
      expect((py.rankings as Record<string, number>).tiobe).toBe(1);
      expect((py.sources as Record<string, string>).tiobe).toBe("Python");
      const trend = (py.trends as Record<string, unknown>).tiobe as { quarters: string[]; scores: number[] };
      expect(trend.quarters).toEqual(["2026-07"]);
      expect(trend.scores).toEqual([18.94]);
      // The `+`-slugged node (a static-host trap) still matches by name.
      expect((parseNodeYaml(snap["plang/c++.yaml"] ?? "").rankings as Record<string, number>).tiobe).toBe(3);
    } finally {
      removeDir(dir);
    }
  });

  it("writes a trend the SCHEMA accepts and only fields it owns", async () => {
    const dir = makeNodesDir(NODES);
    try {
      const report = await runSource(tiobeSource, { nodesDir: dir, fetch, noReport: true });
      const allowed = new Set(tiobeSource.owns);
      for (const change of report.changes) expect(allowed.has(change.field), `wrote ${change.field}`).toBe(true);
      const py = parseNodeYaml(snapshotDir(dir)["plang/python.yaml"] ?? "");
      expect(NODE_SCHEMAS.plang.safeParse(py).success).toBe(true);
      expect(zTrend.safeParse((py.trends as Record<string, unknown>).tiobe).success).toBe(true);
    } finally {
      removeDir(dir);
    }
  });

  it("accumulates history across months (the reason we scrape at all)", async () => {
    // TIOBE publishes no history; we build it. A run for a later month must
    // APPEND to the point a prior month left, not overwrite it.
    const dir = makeNodesDir({
      "pl/python": { name: "Python", trends: { tiobe: { metric: "rating", quarters: ["2026-06"], scores: [20.1], ranks: [1] } }, rels: {} },
    });
    try {
      await runSource(tiobeSource, { nodesDir: dir, fetch, noReport: true }); // fixture month is 2026-07
      const py = parseNodeYaml(snapshotDir(dir)["plang/python.yaml"] ?? "");
      const trend = (py.trends as Record<string, unknown>).tiobe as { quarters: string[]; scores: number[] };
      expect(trend.quarters).toEqual(["2026-06", "2026-07"]);
      expect(trend.scores).toEqual([20.1, 18.94]);
    } finally {
      removeDir(dir);
    }
  });

  it("keeps ranking signals separate rather than merging them", async () => {
    const dir = makeNodesDir({ "pl/python": { name: "Python", rankings: { languish: 2, pypl: 1 }, rels: {} } });
    try {
      await runSource(tiobeSource, { nodesDir: dir, fetch, noReport: true });
      const py = parseNodeYaml(snapshotDir(dir)["plang/python.yaml"] ?? "");
      expect(py.rankings).toEqual({ languish: 2, pypl: 1, tiobe: 1 });
    } finally {
      removeDir(dir);
    }
  });

  it("silently skips languages outside the top 20", async () => {
    const dir = makeNodesDir(NODES);
    try {
      const report = await runSource(tiobeSource, { nodesDir: dir, fetch, noReport: true });
      expect(report.changes.some(c => c.key === "pl/nim")).toBe(false);
    } finally {
      removeDir(dir);
    }
  });

  it("is idempotent within a month", async () => {
    const dir = makeNodesDir(NODES);
    try {
      await runSource(tiobeSource, { nodesDir: dir, fetch, noReport: true });
      const after = snapshotDir(dir);
      const second = await runSource(tiobeSource, { nodesDir: dir, fetch, noReport: true });
      expect(second.changes).toEqual([]);
      expect(second.written).toEqual([]);
      expect(snapshotDir(dir)).toEqual(after);
    } finally {
      removeDir(dir);
    }
  });
});
