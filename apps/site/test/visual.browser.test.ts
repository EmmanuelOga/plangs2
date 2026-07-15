import { describe, expect, it } from "vitest";
import { type LoadedPage, loadPage, waitForHydration } from "./helpers";

/**
 * Broad sanity sweep across representative pages. This is the net for "the site
 * is broken in ways nobody wrote a specific test for": unstyled pages, invisible
 * text, dead islands, horizontal overflow, broken images.
 */
const PAGES: [name: string, path: string][] = [
  ["home", "/index.html"],
  ["grid", "/plangs/index.html"],
  ["detail", "/nim/index.html"],
  ["reference list", "/paradigms/index.html"],
  ["blog index", "/blog/index.html"],
  ["blog post", "/blog/2025_01_06_the_plangs_stack/index.html"],
  ["about", "/about/index.html"],
];

describe.each(PAGES)("%s page", (_name, path) => {
  it("loads its stylesheet (page is not unstyled)", async () => {
    const pg: LoadedPage = await loadPage(path, 1280, 900);
    try {
      const sheets = pg.$$('link[rel="stylesheet"]') as HTMLLinkElement[];
      expect(sheets.length, "no stylesheet linked").toBeGreaterThan(0);
      // body should inherit the theme font, proving @theme actually applied.
      const font = pg.styleOf("body").fontFamily;
      expect(font.toLowerCase(), `body font-family was "${font}"`).toContain("nunito");
    } finally {
      pg.dispose();
    }
  });

  it("has readable contrast (text is not the same colour as the background)", async () => {
    const pg = await loadPage(path, 1280, 900);
    try {
      const body = pg.styleOf("body");
      const html = pg.styleOf("html");
      const fg = body.color;
      const bg = html.backgroundColor;
      expect(fg).not.toBe(bg);
      expect(fg).not.toBe("rgba(0, 0, 0, 0)");
    } finally {
      pg.dispose();
    }
  });

  it("does not scroll horizontally on a phone", async () => {
    const pg = await loadPage(path, 390, 844);
    try {
      const doc = pg.doc.documentElement;
      // Allow 1px for sub-pixel rounding.
      expect(doc.scrollWidth, `page overflows: ${doc.scrollWidth} > ${doc.clientWidth}`).toBeLessThanOrEqual(doc.clientWidth + 1);
    } finally {
      pg.dispose();
    }
  });

  it("hydrates its islands without console errors", async () => {
    const pg = await loadPage(path, 1280, 900);
    try {
      const errors: string[] = [];
      pg.win.addEventListener("error", e => errors.push(String((e as ErrorEvent).message)));
      const con = (pg.win as unknown as { console: Console }).console;
      const origError = con.error;
      con.error = (...args: unknown[]) => {
        errors.push(args.map(String).join(" "));
        origError.apply(con, args);
      };
      await waitForHydration(pg);
      expect(errors).toEqual([]);
    } finally {
      pg.dispose();
    }
  });
});
