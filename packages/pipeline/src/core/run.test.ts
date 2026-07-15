/**
 * The phase gate (PLAN §5 acceptance): a source run must be idempotent, and a
 * source must never write outside its `owns` list.
 */

import { describe, expect, it } from "vitest";
import { makeNodesDir, offlineFetcher, removeDir, snapshotDir } from "../../test/helpers.ts";
import { runSource } from "./run.ts";
import type { Source } from "./types.ts";

/** A source that always writes the same facts — the shape every importer has. */
const stableSource: Source = {
  id: "stable",
  description: "test",
  owns: ["githubColor", "extensions", "rankings.stable", "sources.stable"],
  async run(ctx) {
    for (const doc of ctx.nodesOfKind("plang")) {
      ctx.match({ key: doc.key, method: "exact", remoteId: doc.slug });
      ctx.patch(doc.key, {
        githubColor: "#ffc200",
        extensions: [".nim", ".nimble"],
        rankings: { stable: 7 },
        sources: { stable: doc.slug },
      });
    }
  },
};

const NODES = {
  "pl/nim": { name: "Nim", created: "2008", githubColor: "#000000", rels: { licenses: ["lic/mit"] } },
  "pl/rust": { name: "Rust", created: "2010", rels: { paradigms: ["para/oop"] } },
};

describe("runSource idempotency", () => {
  it("second run produces zero file changes (the phase gate)", async () => {
    const dir = makeNodesDir(NODES);
    try {
      const first = await runSource(stableSource, { nodesDir: dir, fetch: offlineFetcher, noReport: true });
      expect(first.errors).toEqual([]);
      expect(first.written.length).toBeGreaterThan(0);
      expect(first.changes.length).toBeGreaterThan(0);

      const afterFirst = snapshotDir(dir);

      const second = await runSource(stableSource, { nodesDir: dir, fetch: offlineFetcher, noReport: true });
      expect(second.errors).toEqual([]);
      // Nothing changed, nothing written — byte-for-byte identical.
      expect(second.changes).toEqual([]);
      expect(second.written).toEqual([]);
      expect(snapshotDir(dir)).toEqual(afterFirst);

      // And a third, for good measure.
      await runSource(stableSource, { nodesDir: dir, fetch: offlineFetcher, noReport: true });
      expect(snapshotDir(dir)).toEqual(afterFirst);
    } finally {
      removeDir(dir);
    }
  });

  it("preserves rels and fields the source does not own", async () => {
    const dir = makeNodesDir(NODES);
    try {
      await runSource(stableSource, { nodesDir: dir, fetch: offlineFetcher, noReport: true });
      const nim = snapshotDir(dir)["plang/nim.yaml"] ?? "";
      expect(nim).toContain("name: Nim");
      expect(nim).toContain('created: "2008"');
      expect(nim).toContain("licenses:");
      expect(nim).toContain("- lic/mit");
      expect(nim).toContain('githubColor: "#ffc200"');
    } finally {
      removeDir(dir);
    }
  });

  it("--dry-run reports changes but writes nothing", async () => {
    const dir = makeNodesDir(NODES);
    try {
      const before = snapshotDir(dir);
      const report = await runSource(stableSource, { nodesDir: dir, fetch: offlineFetcher, dryRun: true, noReport: true });
      expect(report.changes.length).toBeGreaterThan(0);
      expect(report.written).toEqual([]);
      expect(snapshotDir(dir)).toEqual(before);
    } finally {
      removeDir(dir);
    }
  });
});

describe("runSource field ownership", () => {
  it("refuses a write outside owns and leaves the file untouched", async () => {
    const rogue: Source = {
      id: "rogue",
      description: "test",
      owns: ["githubColor"],
      async run(ctx) {
        // `description` belongs to the AI enricher — this is the exact legacy
        // clobbering bug, and it must not reach disk.
        ctx.patch("pl/nim", { githubColor: "#fff", description: "clobbered!" });
      },
    };

    const dir = makeNodesDir(NODES);
    try {
      const before = snapshotDir(dir);
      const report = await runSource(rogue, { nodesDir: dir, fetch: offlineFetcher, noReport: true });
      expect(report.errors.join("\n")).toContain("may not write 'description'");
      // The whole patch is rejected — not partially applied.
      expect(report.changes).toEqual([]);
      expect(snapshotDir(dir)).toEqual(before);
    } finally {
      removeDir(dir);
    }
  });

  it("refuses to write another source's namespace", async () => {
    const rogue: Source = {
      id: "rogue",
      description: "test",
      owns: ["rankings.rogue"],
      async run(ctx) {
        ctx.patch("pl/nim", { rankings: { languish: 1 } });
      },
    };

    const dir = makeNodesDir(NODES);
    try {
      const report = await runSource(rogue, { nodesDir: dir, fetch: offlineFetcher, noReport: true });
      expect(report.errors.join("\n")).toContain("may not write 'rankings.languish'");
      expect(report.changes).toEqual([]);
    } finally {
      removeDir(dir);
    }
  });

  it("rejects a malformed owns declaration before running", async () => {
    const bad: Source = { id: "bad", description: "test", owns: ["rankings"], run: async () => {} };
    const dir = makeNodesDir(NODES);
    try {
      await expect(runSource(bad, { nodesDir: dir, fetch: offlineFetcher, noReport: true })).rejects.toThrow(/namespaced map/);
    } finally {
      removeDir(dir);
    }
  });

  it("two sources with disjoint owns compose without clobbering", async () => {
    const other: Source = {
      id: "other",
      description: "test",
      owns: ["description", "rankings.other"],
      async run(ctx) {
        ctx.patch("pl/nim", { description: "A systems language.", rankings: { other: 3 } });
      },
    };

    const dir = makeNodesDir(NODES);
    try {
      await runSource(stableSource, { nodesDir: dir, fetch: offlineFetcher, noReport: true });
      await runSource(other, { nodesDir: dir, fetch: offlineFetcher, noReport: true });
      const nim = snapshotDir(dir)["plang/nim.yaml"] ?? "";
      // Both sources' rankings survive; neither overwrote the other's map.
      expect(nim).toContain("other: 3");
      expect(nim).toContain("stable: 7");
      expect(nim).toContain('githubColor: "#ffc200"');
      expect(nim).toContain("description: A systems language.");

      // Re-running the FIRST source after the second must still be a no-op.
      const again = await runSource(stableSource, { nodesDir: dir, fetch: offlineFetcher, noReport: true });
      expect(again.changes).toEqual([]);
      expect(again.written).toEqual([]);
    } finally {
      removeDir(dir);
    }
  });

  it("rejects a patch to an unknown node", async () => {
    const ghost: Source = {
      id: "ghost",
      description: "test",
      owns: ["githubColor"],
      async run(ctx) {
        ctx.patch("pl/does-not-exist", { githubColor: "#fff" });
      },
    };
    const dir = makeNodesDir(NODES);
    try {
      const report = await runSource(ghost, { nodesDir: dir, fetch: offlineFetcher, noReport: true });
      expect(report.errors.join("\n")).toContain("unknown node");
    } finally {
      removeDir(dir);
    }
  });
});
