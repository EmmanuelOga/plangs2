/** Stack Exchange importer, against a recorded `/tags/{tags}/info` response. */

import { NODE_SCHEMAS } from "@plangs/schema";
import { describe, expect, it } from "vitest";
import { fixture, makeNodesDir, removeDir, snapshotDir } from "../../test/helpers.ts";
import { parseNodeYaml } from "../core/fields.ts";
import { runSource } from "../core/run.ts";
import type { Fetcher, NodeDoc } from "../core/types.ts";
import { DEFAULT_SITE, MAX_TAGS_PER_QUERY, parseTagInfo, resolveOwner, stackexchangeSource, tagInfoUrl } from "./stackexchange.ts";

const infoJson = fixture("stackexchange", "info.json");

/**
 * The recorded response only covers a handful of tags. A behaviour test that
 * varied the node set would build a different request URL, so instead of
 * re-recording a fixture per URL we serve the SAME real bytes for any
 * `/tags/.../info` request and capture the URLs asked for. Still offline: it
 * returns fixture bytes and throws on anything else.
 */
function serve(): { fetch: Fetcher; urls: string[] } {
  const urls: string[] = [];
  const fetch: Fetcher = async url => {
    if (!url.includes("/tags/") || !url.includes("/info")) throw new Error(`Unexpected URL in test: ${url}`);
    urls.push(url);
    return infoJson;
  };
  return { fetch, urls };
}

describe("parseTagInfo", () => {
  it("reads name + count rows", () => {
    const items = parseTagInfo(infoJson);
    const byName = new Map(items.map(i => [i.name, i.count]));
    expect(byName.get("python")).toBe(2219703);
    expect(byName.get("nim-lang")).toBe(705);
    // A tag with no data is absent from the response, not present as count 0.
    expect(byName.has("zz-nonexistent-lang")).toBe(false);
  });

  it("surfaces an API error body even on a 200", () => {
    // The fetcher already accepted the HTTP status; the error can still be in
    // the JSON, so parsing must not silently return [].
    const err = JSON.stringify({ error_id: 502, error_name: "throttle_violation", error_message: "too many requests" });
    expect(() => parseTagInfo(err)).toThrow(/throttle_violation/);
  });

  it("throws a clear error when the shape changes", () => {
    expect(() => parseTagInfo("not json")).toThrow(/not JSON/);
    expect(() => parseTagInfo(JSON.stringify({ nope: true }))).toThrow(/no 'items'/);
  });
});

describe("tagInfoUrl", () => {
  it("percent-encodes each tag and joins with literal semicolons", () => {
    // `c++` must not reach the server as a `+` (which it would read as a space).
    const url = tagInfoUrl(["c++", "python", "f#"], DEFAULT_SITE);
    expect(url).toContain("/tags/c%2B%2B;python;f%23/info");
    expect(url).toContain("site=stackoverflow");
  });
});

describe("resolveOwner", () => {
  const claimant = (key: string, name: string, method: "source-id" | "exact" = "exact") => ({
    doc: { key, slug: key.split("/")[1], data: { name } } as unknown as NodeDoc,
    tag: "python",
    method,
    count: 100,
  });

  it("returns the sole claimant unchanged", () => {
    const only = claimant("pl/python", "Python");
    expect(resolveOwner("python", [only])).toBe(only);
  });

  it("gives a shared tag to the node whose own identity is that tag", () => {
    // pl/pypy carries `python` because it implements Python; the count is Python's.
    const python = claimant("pl/python", "Python");
    const pypy = claimant("pl/pypy", "PyPy");
    expect(resolveOwner("python", [pypy, python])).toBe(python);
  });

  it("lets a pin override the name-based owner", () => {
    const python = claimant("pl/python", "Python", "exact");
    const pypy = claimant("pl/pypy", "PyPy", "source-id");
    expect(resolveOwner("python", [python, pypy])).toBe(pypy);
  });

  it("ranks nobody when there is no clear owner", () => {
    // Two nodes claim the tag, neither is named for it, neither is pinned.
    expect(resolveOwner("python", [claimant("pl/foo", "Foo"), claimant("pl/bar", "Bar")])).toBeUndefined();
    // Two competing pins is a data error, not a tie we may silently break.
    expect(resolveOwner("python", [claimant("pl/a", "A", "source-id"), claimant("pl/b", "B", "source-id")])).toBeUndefined();
  });
});

describe("stackexchangeSource", () => {
  // Collectively these tags are exactly the recorded fixture's set, so the ranks
  // below reflect the real question counts (python > haskell > rust > lisp > nim).
  const NODES = {
    "pl/python": { name: "Python", stackovTags: ["python"], rels: {} },
    "pl/haskell": { name: "Haskell", stackovTags: ["haskell"], rels: {} },
    "pl/rust": { name: "Rust", stackovTags: ["rust"], rels: {} },
    "pl/lisp": { name: "Lisp", stackovTags: ["common-lisp"], rels: {} },
    "pl/nim": { name: "Nim", stackovTags: ["nim-lang"], rels: {} },
    // A tag the API returns nothing for: must be left alone, not ranked.
    "pl/ghost": { name: "Ghost", stackovTags: ["zz-nonexistent-lang"], rels: {} },
    // No stackovTags at all: not a Stack Overflow entry, never touched.
    "pl/untagged": { name: "Untagged", rels: {} },
  };

  it("ranks matched nodes by descending question count, under its own namespace", async () => {
    const dir = makeNodesDir(NODES);
    try {
      const { fetch } = serve();
      const report = await runSource(stackexchangeSource, { nodesDir: dir, fetch, noReport: true });
      expect(report.errors).toEqual([]);

      const snap = snapshotDir(dir);
      const rankOf = (slug: string) =>
        (parseNodeYaml(snap[`plang/${slug}.yaml`] ?? "").rankings as Record<string, number> | undefined)?.stackexchange;
      expect(rankOf("python")).toBe(1);
      expect(rankOf("haskell")).toBe(2);
      expect(rankOf("rust")).toBe(3);
      expect(rankOf("lisp")).toBe(4);
      expect(rankOf("nim")).toBe(5);

      const python = parseNodeYaml(snap["plang/python.yaml"] ?? "");
      expect((python.sources as Record<string, string>).stackexchange).toBe("python");
    } finally {
      removeDir(dir);
    }
  });

  it("writes only fields it owns", async () => {
    const dir = makeNodesDir(NODES);
    try {
      const report = await runSource(stackexchangeSource, { nodesDir: dir, fetch: serve().fetch, noReport: true });
      const allowed = new Set(stackexchangeSource.owns);
      for (const change of report.changes) expect(allowed.has(change.field), `wrote ${change.field}`).toBe(true);
    } finally {
      removeDir(dir);
    }
  });

  it("writes a ranking the SCHEMA accepts (an integer, not the raw count)", async () => {
    const dir = makeNodesDir(NODES);
    try {
      await runSource(stackexchangeSource, { nodesDir: dir, fetch: serve().fetch, noReport: true });
      const python = parseNodeYaml(snapshotDir(dir)["plang/python.yaml"] ?? "");
      const parsed = NODE_SCHEMAS.plang.safeParse(python);
      expect(parsed.success ? [] : parsed.error.issues.map(i => `${i.path.join(".")}: ${i.message}`)).toEqual([]);
      expect((python.rankings as Record<string, number>).stackexchange).toBe(1);
    } finally {
      removeDir(dir);
    }
  });

  it("keeps ranking signals separate rather than merging them", async () => {
    const dir = makeNodesDir({ "pl/python": { name: "Python", stackovTags: ["python"], rankings: { languish: 3 }, rels: {} } });
    try {
      await runSource(stackexchangeSource, { nodesDir: dir, fetch: serve().fetch, noReport: true });
      const python = parseNodeYaml(snapshotDir(dir)["plang/python.yaml"] ?? "");
      expect(python.rankings).toEqual({ languish: 3, stackexchange: 1 });
    } finally {
      removeDir(dir);
    }
  });

  it("leaves a node whose tag has no data unranked, and reports it unmatched", async () => {
    const dir = makeNodesDir(NODES);
    try {
      const report = await runSource(stackexchangeSource, { nodesDir: dir, fetch: serve().fetch, noReport: true });
      const ghost = parseNodeYaml(snapshotDir(dir)["plang/ghost.yaml"] ?? "");
      expect(ghost.rankings).toBeUndefined();
      expect(ghost.sources).toBeUndefined();
      expect(report.unmatched).toContain("pl/ghost");
      // An untagged node is not a Stack Overflow entry — not even worth flagging.
      expect(report.unmatched).not.toContain("pl/untagged");
    } finally {
      removeDir(dir);
    }
  });

  it("trusts a pinned sources.stackexchange over the node's stackovTags", async () => {
    // The node's own tag is a synonym the API resolved away; the pin names the
    // canonical tag, so the ladder's source-id rung must still match it.
    const dir = makeNodesDir({
      "pl/python": { name: "Python", stackovTags: ["python3"], sources: { stackexchange: "python" }, rels: {} },
    });
    try {
      const report = await runSource(stackexchangeSource, { nodesDir: dir, fetch: serve().fetch, noReport: true });
      expect(report.matches.find(m => m.key === "pl/python")?.method).toBe("source-id");
      const python = parseNodeYaml(snapshotDir(dir)["plang/python.yaml"] ?? "");
      expect((python.rankings as Record<string, number>).stackexchange).toBe(1);
    } finally {
      removeDir(dir);
    }
  });

  it("batches at the tag cap and percent-encodes in the real request URL", async () => {
    const dir = makeNodesDir({
      "pl/a": { name: "A", stackovTags: ["python"], rels: {} },
      "pl/b": { name: "B", stackovTags: ["haskell"], rels: {} },
      "pl/c": { name: "C", stackovTags: ["rust"], rels: {} },
    });
    try {
      const { fetch, urls } = serve();
      // Force a batch size of 2 across 3 tags -> two requests.
      await runSource(stackexchangeSource, { nodesDir: dir, fetch, noReport: true, options: { batch: "2" } });
      expect(urls.length).toBe(2);
      // Sorted tags = [haskell, python, rust]; chunk(2) => [haskell;python], [rust].
      expect(urls[0]).toContain("/tags/haskell;python/info");
      expect(urls[1]).toContain("/tags/rust/info");
    } finally {
      removeDir(dir);
    }
  });

  it("ranks a shared tag once and reviews the other claimants (the PyPy-beside-Python bug)", async () => {
    // REGRESSION. An implementation inherits its host language's stackovTag, so
    // pl/pypy carries `python`. Ranking both would put "PyPy" beside "Python"
    // with Python's own question count — exactly the confident-wrong ranking a
    // 2c baseline caught for languish/pypl. Only the tag's owner may be ranked.
    const dir = makeNodesDir({
      "pl/python": { name: "Python", stackovTags: ["python"], rels: {} },
      "pl/pypy": { name: "PyPy", stackovTags: ["python"], rels: {} },
    });
    try {
      const report = await runSource(stackexchangeSource, { nodesDir: dir, fetch: serve().fetch, noReport: true });
      const snap = snapshotDir(dir);
      const python = parseNodeYaml(snap["plang/python.yaml"] ?? "");
      const pypy = parseNodeYaml(snap["plang/pypy.yaml"] ?? "");
      expect((python.rankings as Record<string, number>).stackexchange).toBe(1);
      expect(pypy.rankings).toBeUndefined();
      expect(pypy.sources).toBeUndefined();
      const shared = report.review.find(r => r.key === "pl/pypy");
      expect(shared?.kind).toBe("shared-tag");
      expect(report.changes.some(c => c.key === "pl/pypy")).toBe(false);
    } finally {
      removeDir(dir);
    }
  });

  it("routes a shared tag's count to a pinned node over the name match", async () => {
    const dir = makeNodesDir({
      "pl/python": { name: "Python", stackovTags: ["python"], rels: {} },
      "pl/pypy": { name: "PyPy", stackovTags: ["python"], sources: { stackexchange: "python" }, rels: {} },
    });
    try {
      const report = await runSource(stackexchangeSource, { nodesDir: dir, fetch: serve().fetch, noReport: true });
      const snap = snapshotDir(dir);
      expect((parseNodeYaml(snap["plang/pypy.yaml"] ?? "").rankings as Record<string, number>).stackexchange).toBe(1);
      expect(parseNodeYaml(snap["plang/python.yaml"] ?? "").rankings).toBeUndefined();
      expect(report.matches.find(m => m.key === "pl/pypy")?.method).toBe("source-id");
      expect(report.review.find(r => r.key === "pl/python")?.kind).toBe("shared-tag");
    } finally {
      removeDir(dir);
    }
  });

  it("ranks nobody for a shared tag with no clear owner", async () => {
    const dir = makeNodesDir({
      "pl/foo": { name: "Foo", stackovTags: ["python"], rels: {} },
      "pl/bar": { name: "Bar", stackovTags: ["python"], rels: {} },
    });
    try {
      const report = await runSource(stackexchangeSource, { nodesDir: dir, fetch: serve().fetch, noReport: true });
      expect(report.changes).toEqual([]);
      expect(
        report.review
          .filter(r => r.kind === "shared-tag")
          .map(r => r.key)
          .sort(),
      ).toEqual(["pl/bar", "pl/foo"]);
    } finally {
      removeDir(dir);
    }
  });

  it("is idempotent", async () => {
    const dir = makeNodesDir(NODES);
    try {
      await runSource(stackexchangeSource, { nodesDir: dir, fetch: serve().fetch, noReport: true });
      const after = snapshotDir(dir);
      const second = await runSource(stackexchangeSource, { nodesDir: dir, fetch: serve().fetch, noReport: true });
      expect(second.changes).toEqual([]);
      expect(second.written).toEqual([]);
      expect(snapshotDir(dir)).toEqual(after);
    } finally {
      removeDir(dir);
    }
  });

  it("declares a sane default batch size", () => {
    expect(MAX_TAGS_PER_QUERY).toBe(100);
  });
});
