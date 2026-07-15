import { beforeEach, describe, expect, it } from "vitest";
import { type FacetsContext, facetsStore, searchToSelection, selectionToSearch } from "./facets";

describe("store transitions preserve the whole context", () => {
  beforeEach(() => facetsStore.trigger.restore({ selected: {}, mode: "any" }));

  // Regression: @xstate/store v4 REPLACES context with the handler's return
  // value. Handlers returned partials, so setMode wiped `selected` and the very
  // next toggle threw "Cannot read properties of undefined". In the UI that
  // meant: click "match all", click any facet, filtering dies.
  it("keeps selected when the mode changes", () => {
    facetsStore.trigger.toggle({ dim: "paradigms", value: "oop" });
    facetsStore.trigger.setMode({ mode: "all" });
    const ctx = facetsStore.getSnapshot().context;
    expect(ctx.selected).toEqual({ paradigms: ["oop"] });
    expect(ctx.mode).toBe("all");
  });

  it("keeps the mode when a facet is toggled", () => {
    facetsStore.trigger.setMode({ mode: "all" });
    facetsStore.trigger.toggle({ dim: "paradigms", value: "oop" });
    const ctx = facetsStore.getSnapshot().context;
    expect(ctx.mode, "mode must survive a toggle").toBe("all");
    expect(ctx.selected).toEqual({ paradigms: ["oop"] });
  });

  it("keeps the mode when everything is cleared", () => {
    facetsStore.trigger.setMode({ mode: "all" });
    facetsStore.trigger.toggle({ dim: "tags", value: "cli" });
    facetsStore.trigger.clearAll();
    const ctx = facetsStore.getSnapshot().context;
    expect(ctx.selected).toEqual({});
    expect(ctx.mode).toBe("all");
  });

  it("toggles a value off and drops the empty dimension", () => {
    facetsStore.trigger.toggle({ dim: "tags", value: "cli" });
    facetsStore.trigger.toggle({ dim: "tags", value: "cli" });
    expect(facetsStore.getSnapshot().context.selected).toEqual({});
  });
});

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
