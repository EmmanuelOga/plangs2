/**
 * Canonical formatting + `data-fmt` idempotency.
 *
 * The strongest assertion here runs the formatter over the REAL dataset: if
 * `data-fmt` is not a no-op on committed data, every future PR carries
 * unrelated reformatting noise.
 */

import { readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import { canonicalize, FIELD_ORDER_HEAD, FIELD_ORDER_TAIL, formatNodeYaml, formatText, orderData } from "./fields.ts";
import { NODES_DIR } from "./paths.ts";

describe("orderData", () => {
  it("pins the head fields, sorts the middle, pins the tail", () => {
    const ordered = orderData({
      rels: { licenses: ["lic/mit"] },
      githubColor: "#ffc200",
      sources: { linguist: "Nim" },
      description: "d",
      extensions: [".nim"],
      name: "Nim",
      created: "2008",
      rankings: { languish: 1 },
      shortDesc: "s",
      keywords: ["nim"],
    });
    expect(Object.keys(ordered)).toEqual([
      "name",
      "shortDesc",
      "description",
      "created",
      "keywords",
      "extensions",
      "githubColor",
      "rankings",
      "sources",
      "rels",
    ]);
  });

  it("keeps rels last, always", () => {
    const keys = Object.keys(orderData({ rels: {}, zzz: 1, name: "x" }));
    expect(keys[keys.length - 1]).toBe("rels");
  });

  it("head and tail do not overlap", () => {
    expect(FIELD_ORDER_HEAD.filter(f => FIELD_ORDER_TAIL.includes(f))).toEqual([]);
  });
});

describe("canonicalize", () => {
  it("sorts rel keys, rel targets, and dedupes targets", () => {
    const doc = canonicalize({ rels: { paradigms: ["para/oop", "para/fn", "para/oop"], licenses: ["lic/mit"] } });
    expect(doc.rels).toEqual({ licenses: ["lic/mit"], paradigms: ["para/fn", "para/oop"] });
    expect(Object.keys(doc.rels as object)).toEqual(["licenses", "paradigms"]);
  });

  it("sorts namespaced map sub-keys", () => {
    const doc = canonicalize({ rankings: { pypl: 3, languish: 1 } });
    expect(Object.keys(doc.rankings as object)).toEqual(["languish", "pypl"]);
  });

  it("drops null/undefined and empty collections", () => {
    expect(canonicalize({ name: "x", a: null, b: undefined, c: [], d: {}, e: 0, f: false })).toEqual({ name: "x", e: 0, f: false });
  });
});

describe("annotated rel targets (D8)", () => {
  it("collapses an unqualified {ref} object to the bare key", () => {
    const doc = canonicalize({ rels: { licenses: [{ ref: "lic/mit" }] } });
    expect(doc.rels).toEqual({ licenses: ["lic/mit"] });
  });

  it("orders qualifier keys ref/since/until and sorts targets by key", () => {
    const doc = canonicalize({ rels: { licenses: [{ until: "2010", ref: "lic/mit" }, "lic/apache"] } });
    const targets = (doc.rels as Record<string, unknown[]>).licenses ?? [];
    expect(targets).toEqual(["lic/apache", { ref: "lic/mit", until: "2010" }]);
    expect(Object.keys(targets[1] as object)).toEqual(["ref", "until"]);
  });

  it("drops a bare key subsumed by an annotated form of the same ref", () => {
    const doc = canonicalize({ rels: { licenses: ["lic/mit", { ref: "lic/mit", since: "2015" }] } });
    expect(doc.rels).toEqual({ licenses: [{ ref: "lic/mit", since: "2015" }] });
  });

  it("keeps two annotated entries with the same ref but different intervals (never picks a winner)", () => {
    const doc = canonicalize({
      rels: {
        licenses: [
          { ref: "lic/mit", since: "2010" },
          { ref: "lic/mit", until: "2005" },
        ],
      },
    });
    expect((doc.rels as Record<string, unknown[]>).licenses).toHaveLength(2);
  });

  it("is idempotent through formatText with annotated refs", () => {
    const once = formatNodeYaml({ name: "X", rels: { licenses: [{ ref: "lic/apache", since: "2015-12-03" }, "lic/mit"] } });
    expect(formatText(once)).toBe(once);
  });
});

describe("formatNodeYaml", () => {
  it("is idempotent", () => {
    const once = formatNodeYaml({ name: "Nim", githubColor: "#ffc200", rels: { licenses: ["lic/mit"] } });
    expect(formatText(once)).toBe(once);
    expect(formatText(formatText(once))).toBe(once);
  });

  it("does not wrap long strings (one fact per line)", () => {
    const long = "x".repeat(400);
    const text = formatNodeYaml({ name: "N", description: long });
    const descLine = text.split("\n").find(l => l.startsWith("description:"));
    expect(descLine).toContain(long);
  });

  it("quotes year-like strings so they round-trip as strings", () => {
    const text = formatNodeYaml({ name: "Nim", created: "2008" });
    expect(text).toContain('created: "2008"');
  });
});

describe("data-fmt against the real dataset", () => {
  const files = (readdirSync(NODES_DIR, { recursive: true }) as string[]).filter(f => f.endsWith(".yaml"));

  it("finds the committed dataset", () => {
    expect(files.length).toBeGreaterThan(400);
  });

  it("is a zero-diff no-op on every committed node file", () => {
    const unformatted: string[] = [];
    for (const rel of files) {
      const before = readFileSync(join(NODES_DIR, rel), "utf8");
      if (formatText(before) !== before) unformatted.push(rel);
    }
    expect(unformatted).toEqual([]);
  });

  it("is idempotent on every committed node file", () => {
    const unstable: string[] = [];
    for (const rel of files) {
      const once = formatText(readFileSync(join(NODES_DIR, rel), "utf8"));
      if (formatText(once) !== once) unstable.push(rel);
    }
    expect(unstable).toEqual([]);
  });
});
