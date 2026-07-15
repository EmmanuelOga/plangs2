/** Linguist importer, against a recorded slice of upstream `languages.yml`. */

import { describe, expect, it } from "vitest";
import { fixture, fixtureFetcher, makeNodesDir, removeDir, snapshotDir } from "../../test/helpers.ts";
import { runSource } from "../core/run.ts";
import { LANGUAGES_URL, linguistSource, POPULAR_URL, parseLinguist, patchFor } from "./linguist.ts";

const languagesYml = fixture("linguist", "languages.yml");
const popularYml = fixture("linguist", "popular.yml");
const fetch = fixtureFetcher({ [LANGUAGES_URL]: languagesYml, [POPULAR_URL]: popularYml });

describe("parseLinguist", () => {
  const langs = parseLinguist(languagesYml, popularYml);
  const byName = new Map(langs.map(l => [l.name, l]));

  it("reads a language's fields off languages.yml", () => {
    expect(byName.get("Nim")).toMatchObject({
      name: "Nim",
      type: "programming",
      color: "#ffc200",
      language_id: 249,
      // Upstream currently lists five — more than the migrated dataset carries,
      // which is exactly the drift this importer exists to close.
      extensions: [".nim", ".nim.cfg", ".nimble", ".nimrod", ".nims"],
    });
  });

  it("marks popular languages from popular.yml, and only those", () => {
    expect(byName.get("Python")?.popular).toBe(true);
    expect(byName.get("Nim")?.popular).toBe(false);
  });

  it("keeps aliases and group names", () => {
    expect(byName.get("Raku")?.aliases).toContain("perl6");
    expect(byName.get("BibTeX")?.group).toBe("TeX");
  });

  it("keeps fs_name where upstream sets one", () => {
    expect(byName.get("F*")?.fs_name).toBe("Fstar");
  });
});

describe("patchFor", () => {
  it("stringifies language_id (schema says string, linguist says number)", () => {
    const langs = parseLinguist(languagesYml, popularYml);
    const nim = langs.find(l => l.name === "Nim");
    if (!nim) throw new Error("fixture missing Nim");
    const patch = patchFor(nim);
    expect(patch.githubLangId).toBe("249");
    expect(typeof patch.githubLangId).toBe("string");
    expect(patch).toMatchObject({ githubName: "Nim", githubColor: "#ffc200", githubType: "programming", githubPopular: false });
  });
});

describe("linguistSource", () => {
  const NODES = {
    "pl/nim": { name: "Nim", rels: {} },
    "pl/python": { name: "Python", rels: {} },
    // Matches by an alias, not by its own name.
    "pl/raku": { name: "Raku", rels: {} },
    // Only findable via its recorded githubName.
    "pl/vim": { name: "Vim", githubName: "Vim Script", rels: {} },
    // Not in the fixture at all.
    "pl/brainfuck": { name: "Brainfuck", rels: {} },
  };

  it("writes linguist facts and records the source id", async () => {
    const dir = makeNodesDir(NODES);
    try {
      const report = await runSource(linguistSource, { nodesDir: dir, fetch, noReport: true });
      expect(report.errors).toEqual([]);

      const nim = snapshotDir(dir)["plang/nim.yaml"] ?? "";
      expect(nim).toContain('githubColor: "#ffc200"');
      expect(nim).toContain('githubLangId: "249"');
      expect(nim).toContain("githubType: programming");
      expect(nim).toContain("githubPopular: false");
      expect(nim).toContain("- .nim");
      expect(nim).toContain("linguist: Nim");
    } finally {
      removeDir(dir);
    }
  });

  it("matches via a recorded githubName", async () => {
    const dir = makeNodesDir(NODES);
    try {
      const report = await runSource(linguistSource, { nodesDir: dir, fetch, noReport: true });
      expect(report.matches.find(m => m.key === "pl/vim")).toMatchObject({ remoteId: "Vim Script", method: "exact" });
    } finally {
      removeDir(dir);
    }
  });

  it("prefers a recorded sources.linguist id over the node name", async () => {
    const dir = makeNodesDir({ "pl/weird": { name: "Totally Not Nim", sources: { linguist: "Nim" }, rels: {} } });
    try {
      const report = await runSource(linguistSource, { nodesDir: dir, fetch, noReport: true });
      expect(report.matches).toEqual([{ key: "pl/weird", method: "source-id", remoteId: "Nim" }]);
      expect(snapshotDir(dir)["plang/weird.yaml"]).toContain('githubColor: "#ffc200"');
    } finally {
      removeDir(dir);
    }
  });

  it("reports an unmatchable node instead of guessing", async () => {
    const dir = makeNodesDir(NODES);
    try {
      const report = await runSource(linguistSource, { nodesDir: dir, fetch, noReport: true });
      expect(report.unmatched).toContain("pl/brainfuck");
      expect(report.changes.some(c => c.key === "pl/brainfuck")).toBe(false);
    } finally {
      removeDir(dir);
    }
  });

  it("treats a real upstream alias as an exact match, not a guess", async () => {
    // `objectivec` is one of Objective-C's declared aliases, so this is a
    // deterministic lookup and may be written.
    const dir = makeNodesDir({ "pl/objc": { name: "objectivec", rels: {} } });
    try {
      const report = await runSource(linguistSource, { nodesDir: dir, fetch, noReport: true });
      expect(report.matches).toEqual([{ key: "pl/objc", method: "exact", remoteId: "Objective-C" }]);
      expect(report.review).toEqual([]);
    } finally {
      removeDir(dir);
    }
  });

  it("sends a fuzzy-only match to review and writes nothing", async () => {
    // "Type-Script" is neither an upstream name nor an alias; it only matches
    // once punctuation is normalized away, i.e. it is a guess, so it must be
    // reviewed rather than written.
    const dir = makeNodesDir({ "pl/type-script": { name: "Type-Script", rels: {} } });
    try {
      const report = await runSource(linguistSource, { nodesDir: dir, fetch, noReport: true });
      expect(report.changes).toEqual([]);
      expect(report.written).toEqual([]);
      expect(report.matches).toEqual([]);
      expect(report.review).toHaveLength(1);
      expect(report.review[0]).toMatchObject({ key: "pl/type-script", kind: "fuzzy-match" });
      expect(report.review[0]?.data?.candidates).toContain("TypeScript");
    } finally {
      removeDir(dir);
    }
  });

  it("does not match on the slug — slugs collide with other languages' aliases", async () => {
    // `ts` is a real TypeScript alias. A node keyed pl/ts that is NOT
    // TypeScript must not silently inherit TypeScript's colour/extensions.
    const dir = makeNodesDir({ "pl/ts": { name: "Tuscan", rels: {} } });
    try {
      const report = await runSource(linguistSource, { nodesDir: dir, fetch, noReport: true });
      expect(report.matches).toEqual([]);
      expect(report.changes).toEqual([]);
      expect(report.unmatched).toContain("pl/ts");
    } finally {
      removeDir(dir);
    }
  });

  it("loudly reports a dead sources.linguist pin instead of silently skipping it", async () => {
    // Upstream renamed Nimrod -> Nim years ago; a node still pinned to the old
    // id would otherwise never be updated again, with no signal.
    const dir = makeNodesDir({ "pl/nim": { name: "Nim", sources: { linguist: "Nimrod" }, rels: {} } });
    try {
      const report = await runSource(linguistSource, { nodesDir: dir, fetch, noReport: true });
      expect(report.changes).toEqual([]);
      expect(report.matches).toEqual([]);
      expect(report.review).toHaveLength(1);
      expect(report.review[0]).toMatchObject({ key: "pl/nim", kind: "stale-source-id" });
      expect(report.review[0]?.message).toContain("Nimrod");
      // It must NOT quietly fall back to matching by name.
      expect(report.unmatched).not.toContain("pl/nim");
    } finally {
      removeDir(dir);
    }
  });

  it("is idempotent", async () => {
    const dir = makeNodesDir(NODES);
    try {
      await runSource(linguistSource, { nodesDir: dir, fetch, noReport: true });
      const after = snapshotDir(dir);
      const second = await runSource(linguistSource, { nodesDir: dir, fetch, noReport: true });
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
      const report = await runSource(linguistSource, { nodesDir: dir, fetch, noReport: true });
      const allowed = new Set(linguistSource.owns);
      for (const change of report.changes) {
        expect(allowed.has(change.field), `wrote unowned field ${change.field}`).toBe(true);
      }
    } finally {
      removeDir(dir);
    }
  });
});
