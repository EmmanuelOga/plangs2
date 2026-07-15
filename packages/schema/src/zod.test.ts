import { describe, expect, it } from "vitest";
import { NODE_SCHEMAS } from "./zod.ts";

const plang = NODE_SCHEMAS.plang;

describe("node schemas", () => {
  it("accepts a minimal node", () => {
    expect(plang.safeParse({ name: "Nim" }).success).toBe(true);
  });

  it("accepts nodes without a name (a few legacy nodes have none)", () => {
    expect(plang.safeParse({}).success).toBe(true);
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
});
