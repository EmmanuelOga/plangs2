/** Homebrew importer, against a recorded slice of `install/365d.json`. */

import { NODE_SCHEMAS } from "@plangs/schema";
import { describe, expect, it } from "vitest";
import { fixture, fixtureFetcher, makeNodesDir, removeDir, snapshotDir } from "../../test/helpers.ts";
import { parseNodeYaml } from "../core/fields.ts";
import { runSource } from "../core/run.ts";
import { aggregateByFormula, baseFormula, DEFAULT_PERIOD, homebrewSource, installUrl, parseInstalls } from "./homebrew.ts";

const installJson = fixture("homebrew", "install-365d.json");
const url = installUrl(DEFAULT_PERIOD);
const fetch = fixtureFetcher({ [url]: installJson });

describe("parseInstalls", () => {
  it("parses the comma-grouped count string into a number", () => {
    // "3,129,197" must become 3_129_197 — not NaN, and not 3 (a parseInt at the
    // first comma).
    const node = parseInstalls(installJson).find(i => i.formula === "node");
    expect(node?.count).toBe(3_129_197);
  });

  it("throws a clear error when the shape changes", () => {
    expect(() => parseInstalls("not json")).toThrow(/not JSON/);
    expect(() => parseInstalls(JSON.stringify({ nope: true }))).toThrow(/no 'items'/);
    expect(() => parseInstalls(JSON.stringify({ items: [] }))).toThrow(/no install rows/);
  });
});

describe("baseFormula + aggregateByFormula", () => {
  it("strips the version and sums variants", () => {
    expect(baseFormula("python@3.12")).toBe("python");
    expect(baseFormula("node")).toBe("node");
    const totals = aggregateByFormula(parseInstalls(installJson));
    // python@3.12 (739,895) + python@3.13 (1,938,232)
    expect(totals.get("python")).toBe(2_678_127);
    expect(totals.get("node")).toBe(3_129_197);
  });
});

describe("homebrewSource", () => {
  // Names chosen to match formula bases exactly (matching is by NAME, not slug).
  const NODES = {
    "pl/python": { name: "Python", stackovTags: [], rels: {} },
    "pl/go": { name: "Go", rels: {} },
    "pl/rust": { name: "Rust", rels: {} },
    "pl/ruby": { name: "Ruby", rels: {} },
    "pl/nim": { name: "Nim", rels: {} },
    "pl/crystal": { name: "Crystal", rels: {} },
    "pl/elixir": { name: "Elixir", rels: {} },
    // Node.js's name does not equal the formula `node`; without a pin it stays
    // unranked (the conservative exact-name contract).
    "pl/node": { name: "Node.js", rels: {} },
  };

  it("ranks matched nodes by descending (aggregated) install count", async () => {
    const dir = makeNodesDir(NODES);
    try {
      const report = await runSource(homebrewSource, { nodesDir: dir, fetch, noReport: true });
      expect(report.errors).toEqual([]);
      const snap = snapshotDir(dir);
      const rankOf = (slug: string) => (parseNodeYaml(snap[`plang/${slug}.yaml`] ?? "").rankings as Record<string, number> | undefined)?.homebrew;
      // node 3.13M > python 2.68M (aggregated!) > go 1.59M > ruby 692k > rust 449k > elixir 38k > nim 17k > crystal 8.9k
      // but pl/node has name "Node.js" and is not matched, so python leads.
      expect(rankOf("python")).toBe(1);
      expect(rankOf("go")).toBe(2);
      expect(rankOf("ruby")).toBe(3);
      expect(rankOf("rust")).toBe(4);
      expect(rankOf("elixir")).toBe(5);
      expect(rankOf("nim")).toBe(6);
      expect(rankOf("crystal")).toBe(7);
      expect(rankOf("node")).toBeUndefined();
    } finally {
      removeDir(dir);
    }
  });

  it("aggregates versioned formulae so Python is not undercounted", async () => {
    // REGRESSION guard for the value of aggregation: without it, python would be
    // ranked on a single version's ~1.9M and land BELOW node — with it, its
    // 2.68M total leads. Assert the write reflects the sum, not a single row.
    const dir = makeNodesDir({ "pl/python": { name: "Python", rels: {} }, "pl/go": { name: "Go", rels: {} } });
    try {
      const report = await runSource(homebrewSource, { nodesDir: dir, fetch, noReport: true });
      const python = parseNodeYaml(snapshotDir(dir)["plang/python.yaml"] ?? "");
      expect((python.rankings as Record<string, number>).homebrew).toBe(1);
      expect((python.sources as Record<string, string>).homebrew).toBe("python");
      expect(report.matches.find(m => m.key === "pl/python")?.remoteId).toBe("python");
    } finally {
      removeDir(dir);
    }
  });

  it("writes only fields it owns, and a schema-valid ranking", async () => {
    const dir = makeNodesDir(NODES);
    try {
      const report = await runSource(homebrewSource, { nodesDir: dir, fetch, noReport: true });
      const allowed = new Set(homebrewSource.owns);
      for (const change of report.changes) expect(allowed.has(change.field), `wrote ${change.field}`).toBe(true);
      const python = parseNodeYaml(snapshotDir(dir)["plang/python.yaml"] ?? "");
      const parsed = NODE_SCHEMAS.plang.safeParse(python);
      expect(parsed.success ? [] : parsed.error.issues.map(i => `${i.path.join(".")}: ${i.message}`)).toEqual([]);
    } finally {
      removeDir(dir);
    }
  });

  it("keeps ranking signals separate rather than merging them", async () => {
    const dir = makeNodesDir({ "pl/go": { name: "Go", rankings: { languish: 5, pypl: 9 }, rels: {} } });
    try {
      await runSource(homebrewSource, { nodesDir: dir, fetch, noReport: true });
      const go = parseNodeYaml(snapshotDir(dir)["plang/go.yaml"] ?? "");
      expect(go.rankings).toEqual({ languish: 5, pypl: 9, homebrew: 1 });
    } finally {
      removeDir(dir);
    }
  });

  it("matches a differently-named formula via a sources.homebrew pin", async () => {
    // Node.js's formula is `node`; the pin accepts it (the ladder's source-id rung).
    const dir = makeNodesDir({ "pl/node": { name: "Node.js", sources: { homebrew: "node" }, rels: {} } });
    try {
      const report = await runSource(homebrewSource, { nodesDir: dir, fetch, noReport: true });
      expect(report.matches.find(m => m.key === "pl/node")?.method).toBe("source-id");
      const node = parseNodeYaml(snapshotDir(dir)["plang/node.yaml"] ?? "");
      expect((node.rankings as Record<string, number>).homebrew).toBe(1);
    } finally {
      removeDir(dir);
    }
  });

  it("never writes a non-language formula, and leaves an unmatched node untouched", async () => {
    // The fixture carries openssl@3/sqlite/ca-certificates. Matching is
    // node-driven by name, so with no node named for them they are never looked
    // up; and a node whose name matches no formula is left alone.
    const dir = makeNodesDir({ "pl/go": { name: "Go", rels: {} }, "pl/imaginary": { name: "Imaginarylang", rels: {} } });
    try {
      const report = await runSource(homebrewSource, { nodesDir: dir, fetch, noReport: true });
      const writtenFormulae = report.matches.map(m => m.remoteId);
      expect(writtenFormulae).toEqual(["go"]);
      expect(writtenFormulae).not.toContain("openssl");
      expect(writtenFormulae).not.toContain("sqlite");
      const imaginary = parseNodeYaml(snapshotDir(dir)["plang/imaginary.yaml"] ?? "");
      expect(imaginary.rankings).toBeUndefined();
    } finally {
      removeDir(dir);
    }
  });

  it("is idempotent", async () => {
    const dir = makeNodesDir(NODES);
    try {
      await runSource(homebrewSource, { nodesDir: dir, fetch, noReport: true });
      const after = snapshotDir(dir);
      const second = await runSource(homebrewSource, { nodesDir: dir, fetch, noReport: true });
      expect(second.changes).toEqual([]);
      expect(second.written).toEqual([]);
      expect(snapshotDir(dir)).toEqual(after);
    } finally {
      removeDir(dir);
    }
  });
});
