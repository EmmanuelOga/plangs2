import { describe, expect, it } from "vitest";
import { asDim, DIMS, type FacetCard, facetAttrs, matches, type Selection } from "./facets-contract";

/**
 * The whole point of this module is that the emit side and the read side agree.
 * So the tests exercise them TOGETHER: build attributes with `facetAttrs`, hang
 * them on an element, and match with `matches`. A test that asserted the literal
 * string "data-facet-paradigms" would pass even if the two sides drifted, which
 * is the bug this replaced.
 */
function card(facets: Partial<Record<(typeof DIMS)[number], string[]>>): FacetCard {
  const attrs = facetAttrs(facets);
  return { getAttribute: name => attrs[name] ?? null };
}

const python = card({ paradigms: ["functional", "oop"], tags: ["scripting"], typeSystems: ["dynamic"] });

describe("facet attributes round-trip", () => {
  it("matches a card the emit side stamped", () => {
    expect(matches(python, { paradigms: ["functional"] }, "any")).toBe(true);
  });

  it("covers every declared dimension", () => {
    // Guards a dimension being added to DIMS but forgotten by the emit side.
    const attrs = Object.keys(facetAttrs({}));
    expect(attrs.length).toBe(DIMS.length);
    for (const dim of DIMS) expect(attrs.some(a => a.endsWith(dim.toLowerCase()))).toBe(true);
  });

  it("round-trips typeSystems — the mixed-case dimension", () => {
    // The one that used to work only by luck: `dim.toLowerCase()` happened to
    // equal the hand-written `data-typesystems`. Now both sides derive it.
    expect(matches(python, { typeSystems: ["dynamic"] }, "any")).toBe(true);
    expect(matches(python, { typeSystems: ["static"] }, "any")).toBe(false);
  });
});

describe("selection semantics", () => {
  const empty: Selection = {};

  it("shows everything when nothing is selected", () => {
    expect(matches(python, empty, "any")).toBe(true);
    expect(matches(python, empty, "all")).toBe(true);
  });

  it("'any' needs one value of a dimension, 'all' needs them all", () => {
    expect(matches(python, { paradigms: ["functional", "logic"] }, "any")).toBe(true);
    expect(matches(python, { paradigms: ["functional", "logic"] }, "all")).toBe(false);
    expect(matches(python, { paradigms: ["functional", "oop"] }, "all")).toBe(true);
  });

  it("ANDs across dimensions in both modes", () => {
    // "any" is any-within-a-dimension, never any-across-dimensions.
    expect(matches(python, { paradigms: ["functional"], tags: ["games"] }, "any")).toBe(false);
    expect(matches(python, { paradigms: ["functional"], tags: ["scripting"] }, "any")).toBe(true);
  });

  it("does not match a card that carries nothing for the dimension", () => {
    expect(matches(card({}), { paradigms: ["functional"] }, "any")).toBe(false);
  });
});

describe("asDim", () => {
  it("accepts known dimensions and rejects anything else", () => {
    expect(asDim("paradigms")).toBe("paradigms");
    expect(asDim("typeSystems")).toBe("typeSystems");
    // URL params are user input: `?nope=x` must not become a selection key.
    expect(asDim("nope")).toBeUndefined();
    // Case matters — the Dim is the canonical spelling, not the attribute's.
    expect(asDim("typesystems")).toBeUndefined();
  });
});
