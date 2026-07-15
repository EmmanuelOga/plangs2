import { afterEach, describe, expect, it } from "vitest";
import { type LoadedPage, loadPage, waitForHydration } from "./helpers";

let pg: LoadedPage | undefined;
afterEach(() => {
  pg?.dispose();
  pg = undefined;
});

async function facetRows(p: LoadedPage): Promise<HTMLElement[]> {
  await waitForHydration(p);
  return p.$$("aside[aria-label^='Filter'] fieldset label");
}

describe("facet rows are actually legible", () => {
  it("does not collapse rows into each other", async () => {
    pg = await loadPage("/plangs/index.html", 1440, 900);
    const rows = await facetRows(pg);
    expect(rows.length, "expected facet rows").toBeGreaterThan(5);

    // Regression: rows lived in a `max-h-64 flex-col` scroller, so flex shrank
    // them below their content height — every label collapsed to a few px and
    // the text overlapped. Markup was perfect; only geometry showed it.
    const tooShort = rows.filter(r => r.getBoundingClientRect().height < 16);
    expect(tooShort.length, `${tooShort.length}/${rows.length} facet rows collapsed under 16px`).toBe(0);
  });

  it("stacks rows without overlapping", async () => {
    pg = await loadPage("/plangs/index.html", 1440, 900);
    const rows = (await facetRows(pg)).slice(0, 12);
    for (let i = 1; i < rows.length; i++) {
      const prev = rows[i - 1]?.getBoundingClientRect();
      const cur = rows[i]?.getBoundingClientRect();
      if (!prev || !cur) continue;
      // Same scroll column: each row must start at/below the previous row's end.
      if (Math.abs(prev.x - cur.x) > 1) continue;
      expect(cur.top, `facet row ${i} overlaps row ${i - 1}`).toBeGreaterThanOrEqual(prev.bottom - 1);
    }
  });

  it("keeps checkboxes square, not squashed to slivers", async () => {
    pg = await loadPage("/plangs/index.html", 1440, 900);
    await waitForHydration(pg);
    const boxes = pg.$$("aside[aria-label^='Filter'] input[type=checkbox]").slice(0, 10);
    expect(boxes.length).toBeGreaterThan(0);
    for (const b of boxes) {
      const r = b.getBoundingClientRect();
      expect(r.height, "checkbox collapsed vertically").toBeGreaterThanOrEqual(10);
      expect(Math.abs(r.width - r.height), "checkbox is not square").toBeLessThanOrEqual(2);
    }
  });
});

describe("filtering actually filters", () => {
  it("narrows the grid and writes a readable URL when a facet is picked", async () => {
    pg = await loadPage("/plangs/index.html", 1440, 900);
    await waitForHydration(pg);

    const before = pg.$$("[data-grid-item]").filter(el => !el.hidden).length;
    expect(before).toBeGreaterThan(100);

    const box = pg.$("aside[aria-label^='Filter'] input[type=checkbox]") as HTMLInputElement;
    box.click();
    await new Promise(r => setTimeout(r, 250));

    const after = pg.$$("[data-grid-item]").filter(el => !el.hidden).length;
    expect(after, "picking a facet should hide some cards").toBeLessThan(before);
    expect(after, "picking a facet should not hide everything").toBeGreaterThan(0);

    // The count readout must track what's actually visible.
    expect(pg.$("[data-result-count]")?.textContent).toBe(String(after));
    // …and the URL must be shareable (PLAN §6.2 / D4).
    expect(pg.win.location.search).toMatch(/\?\w+=/);
  });

  it("survives 'match all' followed by a facet click", async () => {
    pg = await loadPage("/plangs/index.html", 1440, 900);
    await waitForHydration(pg);
    const errors: string[] = [];
    pg.win.addEventListener("error", e => errors.push((e as ErrorEvent).message));

    // Regression: @xstate/store v4 replaces context wholesale, and setMode
    // returned only { mode } — wiping `selected`. This exact click order threw
    // "Cannot read properties of undefined" and killed filtering entirely.
    const modeBtn = pg.$$("button").find(b => /^match /.test(b.textContent ?? ""));
    expect(modeBtn, "match-mode button").toBeTruthy();
    (modeBtn as HTMLElement).click();
    await new Promise(r => setTimeout(r, 120));

    const box = pg.$("aside[aria-label^='Filter'] input[type=checkbox]") as HTMLInputElement;
    box.click();
    await new Promise(r => setTimeout(r, 220));

    expect(errors, "clicking a facet after 'match all' threw").toEqual([]);
    expect(pg.win.location.search, "mode must persist into the URL").toContain("mode=all");
    expect(pg.$$("[data-grid-item]").filter(el => !el.hidden).length).toBeGreaterThan(0);
  });
});
