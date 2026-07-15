import { afterEach, describe, expect, it } from "vitest";
import { type LoadedPage, loadPage, waitForHydration } from "./helpers";

/**
 * These assert on COMPUTED STYLE and real DOM behaviour, not on markup.
 * `pnpm build` only proves a class string was emitted; only a browser proves the
 * rule applies. Every test here maps to a bug that sailed past the build and
 * URL-parity gates.
 *
 * Requires: pnpm -F @plangs/site build
 */
let pg: LoadedPage | undefined;
afterEach(() => {
  pg?.dispose();
  pg = undefined;
});

const cols = (p: LoadedPage) => p.styleOf("[data-grid-root]").gridTemplateColumns.split(" ").filter(Boolean).length;

describe("grid layout responds to width", () => {
  it("uses a two-column sidebar layout when wide", async () => {
    pg = await loadPage("/plangs/index.html", 1440, 900);
    // Regression: `@container` and `@3xl:grid-cols-*` were on the SAME element.
    // A container cannot query itself, so this silently collapsed to one column
    // at EVERY width — the sidebar layout never once applied.
    expect(cols(pg), "expected a 2-column grid at 1440px").toBe(2);
  });

  it("collapses to one column on a phone", async () => {
    pg = await loadPage("/plangs/index.html", 390, 844);
    expect(cols(pg)).toBe(1);
  });
});

describe("facets panel", () => {
  it("is a visible static sidebar when wide, with no sheet trigger", async () => {
    pg = await loadPage("/plangs/index.html", 1440, 900);
    await waitForHydration(pg);
    const aside = pg.styleOf("aside[aria-label^='Filter']");
    expect(aside.display).not.toBe("none");
    expect(aside.position).toBe("static");

    const trigger = pg.$$("button").find(b => /^Filters/.test(b.textContent ?? ""));
    expect(trigger, "sheet trigger should exist in the DOM").toBeTruthy();
    expect(pg.win.getComputedStyle(trigger as Element).display).toBe("none");
  });

  it("hides behind a trigger and becomes a bottom sheet on a phone", async () => {
    pg = await loadPage("/plangs/index.html", 390, 844);
    await waitForHydration(pg);
    expect(pg.styleOf("aside[aria-label^='Filter']").display).toBe("none");

    const trigger = pg.$$("button").find(b => /^Filters/.test(b.textContent ?? ""));
    expect(trigger).toBeTruthy();
    expect(pg.win.getComputedStyle(trigger as Element).display).not.toBe("none");

    (trigger as HTMLElement).click();
    await new Promise(r => setTimeout(r, 150));
    const aside = pg.styleOf("aside[aria-label^='Filter']");
    expect(aside.display, "sheet should open on tap").not.toBe("none");
    expect(aside.position, "sheet should be fixed to the bottom").toBe("fixed");
  });
});

describe("theme tokens actually resolve", () => {
  it("paints brand colors rather than falling back to transparent", async () => {
    pg = await loadPage("/plangs/index.html", 1440, 900);
    const probe = pg.doc.createElement("div");
    probe.className = "text-primary bg-background";
    pg.doc.body.appendChild(probe);
    const cs = pg.win.getComputedStyle(probe);
    // If the @theme wiring breaks these silently become rgba(0,0,0,0) and the
    // site renders "unstyled but not obviously broken".
    expect(cs.color).not.toBe("rgba(0, 0, 0, 0)");
    expect(cs.backgroundColor).not.toBe("rgba(0, 0, 0, 0)");
    probe.remove();
  });

  it("swaps primary between light and dark mode", async () => {
    pg = await loadPage("/plangs/index.html", 1440, 900);
    const read = () => {
      const probe = (pg as LoadedPage).doc.createElement("div");
      probe.className = "text-primary";
      (pg as LoadedPage).doc.body.appendChild(probe);
      const c = (pg as LoadedPage).win.getComputedStyle(probe).color;
      probe.remove();
      return c;
    };
    pg.doc.documentElement.classList.remove("dark");
    const light = read();
    pg.doc.documentElement.classList.add("dark");
    const dark = read();
    expect(light).not.toBe(dark);
  });
});

describe("detail page", () => {
  it("renders the node name and its relationships", async () => {
    pg = await loadPage("/nim/index.html", 1440, 900);
    expect(pg.$("h1")?.textContent).toContain("Nim");
    const text = pg.doc.body.textContent ?? "";
    expect(text).toContain("Influenced By");
    expect(text).toContain("Paradigms");
  });

  it("loads its logo (no broken images)", async () => {
    pg = await loadPage("/nim/index.html", 1440, 900);
    const imgs = pg.$$("img") as HTMLImageElement[];
    await new Promise(r => setTimeout(r, 600));
    const broken = imgs.filter(i => i.complete && i.naturalWidth === 0).map(i => i.getAttribute("src"));
    expect(broken, "images failed to load").toEqual([]);
  });
});
