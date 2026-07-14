import { describe, expect, it } from "vitest";
import { type FacetsContext, searchToSelection, selectionToSearch } from "./facets";

const ctx = (selected: Record<string, string[]>, mode: FacetsContext["mode"] = "any"): FacetsContext => ({ selected, mode });

describe("facet URL encoding (readable query params, PLAN §6.2/D4)", () => {
  it("encodes a selection to readable params", () => {
    expect(selectionToSearch(ctx({ paradigms: ["functional", "logic"] }))).toBe("?paradigms=functional%2Clogic");
  });

  it("omits the default mode and includes a non-default one", () => {
    expect(selectionToSearch(ctx({ tags: ["cli"] }))).not.toContain("mode");
    expect(selectionToSearch(ctx({ tags: ["cli"] }, "all"))).toContain("mode=all");
  });

  it("produces an empty search for an empty selection", () => {
    expect(selectionToSearch(ctx({}))).toBe("");
  });

  it("round-trips selection → search → selection", () => {
    const original = ctx({ paradigms: ["functional", "oop"], tags: ["games"] }, "all");
    expect(searchToSelection(selectionToSearch(original))).toEqual(original);
  });

  it("parses params written by hand (agent-constructed URLs)", () => {
    expect(searchToSelection("?paradigms=functional,logic&mode=all")).toEqual({
      selected: { paradigms: ["functional", "logic"] },
      mode: "all",
    });
  });

  it("defaults to 'any' for an unknown mode and drops empty values", () => {
    expect(searchToSelection("?mode=bogus&tags=")).toEqual({ selected: {}, mode: "any" });
  });
});
