import { describe, expect, it } from "vitest";
import { zAnnotatedRef, zRelTarget } from "./refs.ts";
import type { NodeDataOf } from "./zod.ts";
import { NODE_SCHEMAS } from "./zod.ts";

const plang = NODE_SCHEMAS.plang;

/**
 * TYPE-LEVEL tests: these assert at compile time, so a regression here is a
 * `pnpm build` failure, not a red test.
 *
 * They exist because the failure mode is invisible at runtime. Annotating
 * NODE_SCHEMAS as `Record<NodeKind, z.ZodObject>` widens every entry, and
 * `z.infer` then yields `{}` for every kind — every call site still compiles,
 * every test still passes, and `data.languishRanking` silently becomes an
 * error-or-`any` that people work around with `typeof` checks. That is exactly
 * the state 4a undid; these keep it undone.
 */
describe("per-kind data types are inferred from the schemas", () => {
  it("gives plang its own fields", () => {
    const d: NodeDataOf<"plang"> = { name: "Nim", languishRanking: 9, isTranspiler: false };
    expect(d.languishRanking).toBe(9);
  });

  it("gives license its own fields", () => {
    const d: NodeDataOf<"license"> = { name: "MIT", spdx: "MIT", isOSIApproved: true };
    expect(d.spdx).toBe("MIT");
  });

  it("does not merge shapes across kinds", () => {
    // @ts-expect-error `spdx` belongs to license, not plang. If NODE_SCHEMAS is
    // ever re-annotated to `Record<NodeKind, z.ZodObject>`, inference collapses
    // to `{}`, this error disappears, and the build fails on the unused
    // directive — which is the point.
    const d: NodeDataOf<"plang"> = { name: "Nim", spdx: "MIT" };
    expect(d.name).toBe("Nim");
  });
});

describe("node schemas", () => {
  it("accepts a minimal node", () => {
    expect(plang.safeParse({ name: "Nim" }).success).toBe(true);
  });

  it("requires a name", () => {
    // Was optional purely because four legacy nodes were authored without one.
    // They were named in PLAN §4e, so the schema now says what was always
    // intended — and integrity.test.ts enforces it across the whole dataset.
    expect(plang.safeParse({}).success).toBe(false);
    expect(plang.safeParse({ name: "" }).success, "an empty name is still a name").toBe(true);
  });

  it("validates the v3 pipeline fields: sources, rankings, trends", () => {
    const res = plang.safeParse({
      name: "Nim",
      sources: { wikidata: "Q567134", pldb: "nim" },
      rankings: { languish: 119, pypl: 42 },
      trends: {
        languish: { metric: "weighted-share", quarters: ["2025Q1", "2025Q2"], scores: [0.12, 0.13], ranks: [120, 119] },
      },
    });
    expect(res.success).toBe(true);
  });

  it("rejects a malformed trend series", () => {
    const bad = plang.safeParse({
      name: "Nim",
      trends: { languish: { metric: "weighted-share", quarters: ["2025Q1"], scores: ["not-a-number"], ranks: [1] } },
    });
    expect(bad.success).toBe(false);
  });

  it("rejects a ranking that is not numeric", () => {
    expect(plang.safeParse({ name: "Nim", rankings: { languish: "119" } }).success).toBe(false);
  });

  it("keeps kind-specific fields distinct", () => {
    expect(NODE_SCHEMAS.license.safeParse({ name: "MIT", spdx: "MIT", isOSIApproved: true }).success).toBe(true);
    expect(NODE_SCHEMAS.learning.safeParse({ name: "Book", kinds: ["book"] }).success).toBe(true);
    expect(NODE_SCHEMAS.learning.safeParse({ name: "Book", kinds: ["nope"] }).success).toBe(false);
  });

  it("validates inception (ex-O6) — the first valid-time field", () => {
    expect(plang.safeParse({ name: "Python", inception: "1989-12" }).success).toBe(true);
    expect(plang.safeParse({ name: "Python", inception: 1989 }).success, "YAML needs the quotes").toBe(false);
  });
});

describe("annotated refs (D8)", () => {
  it("accepts a bare key and a qualified ref alike", () => {
    expect(zRelTarget.safeParse("lic/mit").success).toBe(true);
    expect(zRelTarget.safeParse({ ref: "lic/apache", since: "2015-12-03" }).success).toBe(true);
    expect(zRelTarget.safeParse({ ref: "lic/mit", since: "1.0", until: "3.0" }).success).toBe(true);
  });

  it("rejects a typo'd qualifier key — strictness is the typo net", () => {
    expect(zAnnotatedRef.safeParse({ ref: "lic/mit", sinse: "2010" }).success).toBe(false);
  });

  it("rejects unquoted (numeric) qualifiers instead of silently mangling them", () => {
    expect(zAnnotatedRef.safeParse({ ref: "lic/mit", since: 2010 }).success).toBe(false);
    expect(zAnnotatedRef.safeParse({ since: "2010" }).success, "ref is required").toBe(false);
  });
});
