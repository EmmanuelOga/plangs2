import { describe, expect, it } from "vitest";
import { parseLegacyFragment } from "./legacy-fragment";

describe("legacy #rison fragment shim", () => {
  it("maps legacy vertex keys to v3 facet slugs", () => {
    expect(parseLegacyFragment("#(paradigms:!(para+functional,para+oop))")).toEqual({
      selected: { paradigms: ["functional", "oop"] },
      mode: "any",
    });
  });

  it("reads the match mode", () => {
    expect(parseLegacyFragment("#(paradigms:!(para+oop),mode:all)")?.mode).toBe("all");
    expect(parseLegacyFragment("#(paradigms:!(para+oop),mode:'any')")?.mode).toBe("any");
  });

  it("handles multiple dimensions and quoted values", () => {
    expect(parseLegacyFragment("#(paradigms:!('para+functional'),tags:!(tag+games),platforms:!(plat+web))")).toEqual({
      selected: { paradigms: ["functional"], tags: ["games"], platforms: ["web"] },
      mode: "any",
    });
  });

  it("ignores unknown dimensions", () => {
    expect(parseLegacyFragment("#(bogus:!(x+y),tags:!(tag+cli))")).toEqual({
      selected: { tags: ["cli"] },
      mode: "any",
    });
  });

  it("dedupes repeated values", () => {
    expect(parseLegacyFragment("#(tags:!(tag+cli,tag+cli))")?.selected.tags).toEqual(["cli"]);
  });

  it("returns undefined when there is nothing usable", () => {
    expect(parseLegacyFragment("")).toBeUndefined();
    expect(parseLegacyFragment("#")).toBeUndefined();
    expect(parseLegacyFragment("#(bogus:!(x+y))")).toBeUndefined();
    expect(parseLegacyFragment("#some-anchor")).toBeUndefined();
  });

  it("decodes percent-encoded fragments", () => {
    expect(parseLegacyFragment("#%28tags%3A%21%28tag%2Bcli%29%29")).toEqual({
      selected: { tags: ["cli"] },
      mode: "any",
    });
  });
});
