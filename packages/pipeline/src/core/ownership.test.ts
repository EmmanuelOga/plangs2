import { describe, expect, it } from "vitest";
import { enrichSource } from "../enrich/enrich.ts";
import { SOURCES } from "../sources/index.ts";
import { assertNoOwnershipConflicts, findNamespaceViolations, findOwnershipConflicts } from "./ownership.ts";
import { parseOwns } from "./patch.ts";
import type { Source } from "./types.ts";

const src = (id: string, owns: string[]): Source => ({ id, description: "", owns, run: async () => {} });

describe("findOwnershipConflicts", () => {
  it("is empty for disjoint sources", () => {
    expect(findOwnershipConflicts([src("a", ["x"]), src("b", ["y"])])).toEqual([]);
  });

  it("reports a field claimed twice", () => {
    expect(findOwnershipConflicts([src("a", ["x"]), src("b", ["x"])])).toEqual([{ field: "x", sources: ["a", "b"] }]);
  });
});

describe("findNamespaceViolations", () => {
  it("rejects a source claiming another's namespace", () => {
    expect(findNamespaceViolations([src("linguist", ["rankings.languish"])])).toEqual([{ source: "linguist", field: "rankings.languish" }]);
  });

  it("allows a source claiming its own namespace", () => {
    expect(findNamespaceViolations([src("languish", ["rankings.languish"])])).toEqual([]);
  });
});

describe("the registry's global ownership invariant", () => {
  const all = [...SOURCES, enrichSource];

  it("no two registered sources (importers OR the AI enricher) claim the same field", () => {
    expect(findOwnershipConflicts(all)).toEqual([]);
    expect(() => assertNoOwnershipConflicts(all)).not.toThrow();
  });

  it("every source only namespaces under its own id", () => {
    expect(findNamespaceViolations(all)).toEqual([]);
  });

  it("every source declares a well-formed, non-empty owns list", () => {
    for (const source of all) {
      expect(source.owns.length, `${source.id} owns nothing`).toBeGreaterThan(0);
      expect(() => parseOwns(source.owns), `${source.id} owns list`).not.toThrow();
    }
  });

  it("source ids are unique", () => {
    expect(new Set(all.map(s => s.id)).size).toBe(all.length);
  });

  it("the AI enricher owns no field any importer owns (the legacy clobbering bug)", () => {
    const importerFields = new Set(SOURCES.flatMap(s => s.owns));
    for (const field of enrichSource.owns) expect(importerFields.has(field), `ai must not own ${field}`).toBe(false);
  });
});
