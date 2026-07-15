import { describe, expect, it } from "vitest";
import { applyPatch, assertOwned, deepEqual, parseOwns } from "./patch.ts";
import type { NodeDoc } from "./types.ts";

const doc = (data: Record<string, unknown> = {}): NodeDoc => ({
  key: "pl/nim",
  kind: "plang",
  slug: "nim",
  path: "/tmp/nim.yaml",
  data,
  rels: {},
});

describe("parseOwns", () => {
  it("parses plain and namespaced entries", () => {
    expect(parseOwns(["githubColor", "rankings.languish"])).toEqual([{ field: "githubColor" }, { field: "rankings", subKey: "languish" }]);
  });

  it("rejects owning a whole namespaced map", () => {
    expect(() => parseOwns(["sources"])).toThrow(/namespaced map/);
  });

  it("rejects a dotted path on a non-namespaced field", () => {
    expect(() => parseOwns(["githubColor.x"])).toThrow(/not a namespaced map/);
  });
});

describe("deepEqual", () => {
  it("compares arrays and nested objects structurally", () => {
    expect(deepEqual([1, [2, { a: 3 }]], [1, [2, { a: 3 }]])).toBe(true);
    expect(deepEqual({ a: 1, b: 2 }, { b: 2, a: 1 })).toBe(true);
    expect(deepEqual([1, 2], [2, 1])).toBe(false);
    expect(deepEqual({ a: 1 }, { a: 1, b: undefined })).toBe(false);
    expect(deepEqual("249", 249)).toBe(false);
  });
});

describe("assertOwned", () => {
  it("allows owned fields", () => {
    expect(() => assertOwned("s", ["a", "rankings.s"], { a: 1, rankings: { s: 2 } })).not.toThrow();
  });

  it("rejects unowned fields", () => {
    expect(() => assertOwned("s", ["a"], { b: 1 })).toThrow(/may not write 'b'/);
  });

  it("rejects an unowned sub-key of an owned map", () => {
    expect(() => assertOwned("s", ["rankings.s"], { rankings: { other: 1 } })).toThrow(/may not write 'rankings.other'/);
  });

  it("rejects a non-object value for a namespaced map", () => {
    expect(() => assertOwned("s", ["rankings.s"], { rankings: 5 })).toThrow(/object of sub-keys/);
  });
});

describe("applyPatch", () => {
  it("returns only fields that actually changed", () => {
    const d = doc({ githubColor: "#ffc200", githubType: "programming" });
    const changes = applyPatch("linguist", ["githubColor", "githubType"], d, {
      githubColor: "#ffc200", // unchanged
      githubType: "markup", // changed
    });
    expect(changes).toEqual([{ key: "pl/nim", field: "githubType", from: "programming", to: "markup" }]);
  });

  it("is a no-op the second time (idempotency at the patch level)", () => {
    const d = doc({});
    const patch = { extensions: [".nim", ".nims"] };
    expect(applyPatch("s", ["extensions"], d, patch)).toHaveLength(1);
    expect(applyPatch("s", ["extensions"], d, patch)).toEqual([]);
  });

  it("merges namespaced maps sub-key-wise, leaving other sources alone", () => {
    const d = doc({ rankings: { languish: 119 } });
    const changes = applyPatch("pypl", ["rankings.pypl"], d, { rankings: { pypl: 4 } });
    expect(d.data.rankings).toEqual({ languish: 119, pypl: 4 });
    expect(changes).toEqual([{ key: "pl/nim", field: "rankings.pypl", from: undefined, to: 4 }]);
  });

  it("treats undefined as a deletion", () => {
    const d = doc({ githubColor: "#fff" });
    const changes = applyPatch("s", ["githubColor"], d, { githubColor: undefined });
    expect("githubColor" in d.data).toBe(false);
    expect(changes).toEqual([{ key: "pl/nim", field: "githubColor", from: "#fff", to: undefined }]);
  });

  it("removes a namespaced map once its last sub-key is deleted", () => {
    const d = doc({ rankings: { pypl: 4 } });
    applyPatch("pypl", ["rankings.pypl"], d, { rankings: { pypl: undefined } });
    expect("rankings" in d.data).toBe(false);
  });

  it("throws before mutating anything when the patch is not fully owned", () => {
    const d = doc({ githubColor: "#000" });
    expect(() => applyPatch("s", ["githubColor"], d, { githubColor: "#fff", description: "nope" })).toThrow(/description/);
    // The legal half of the patch must NOT have been applied.
    expect(d.data.githubColor).toBe("#000");
  });
});
