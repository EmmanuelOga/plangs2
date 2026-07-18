import { afterEach, describe, expect, it } from "vitest";
import { type LoadedPage, loadPage } from "./helpers";

/**
 * The blog is the only content rendered through the markdown pipeline, and its
 * one bespoke piece is `remark-vertex-refs`: the legacy `(pl+python)` inline
 * syntax that becomes a link to a node page. If the plugin silently stops
 * running, the build still succeeds and the posts render — with `(pl+python)`
 * sitting in the prose as literal text. Nothing else notices.
 *
 * `packages/../remark-vertex-refs` has unit tests for the transform; these
 * assert it is actually WIRED UP in the shipped pages.
 */
let pg: LoadedPage | undefined;
afterEach(() => {
  pg?.dispose();
  pg = undefined;
});

const POST = "/blog/2025_01_01_python/index.html";

/**
 * Scope to <article>: the post itself, without the site header.
 *
 * `document.body.textContent` also returns the text of inline <script>s, and
 * Astro's island runtime is minified JS full of parenthesised arrow functions —
 * enough to match a `(kind+key)` regex and fail on prose that is perfectly fine.
 */
const article = (p: LoadedPage) => {
  const el = p.$("article") ?? p.$("main");
  if (!el) throw new Error("no <article> on the page");
  return el;
};
const postText = (p: LoadedPage) => article(p).textContent ?? "";
const postLinks = (p: LoadedPage) => [...article(p).querySelectorAll("a")];

describe("blog index", () => {
  it("lists every post, newest first, each linked and dated", async () => {
    pg = await loadPage("/blog/index.html", 1280, 900);
    const items = pg.$$("main li, article");
    expect(items.length, "no posts listed").toBeGreaterThanOrEqual(4);

    const links = postLinks(pg).filter(a => a.getAttribute("href")?.startsWith("/blog/"));
    expect(links.length, "posts are listed but not linked").toBeGreaterThanOrEqual(4);
    for (const a of links) expect(a.textContent?.trim(), "a post link has no title").toBeTruthy();

    const dates = pg.$$("time").map(t => t.getAttribute("datetime") ?? "");
    expect(dates.length, "posts have no dates").toBeGreaterThanOrEqual(4);
    expect([...dates].sort().reverse(), "posts are not newest-first").toEqual(dates);
  });
});

describe("blog post", () => {
  it("renders markdown as real elements, not escaped text", async () => {
    pg = await loadPage(POST, 1280, 900);
    expect(pg.$("h1")?.textContent?.trim(), "post has no title").toBeTruthy();
    const body = postText(pg);
    expect(body.length, "post body is empty").toBeGreaterThan(200);
    // Markdown that failed to parse shows up as its own source.
    expect(body, "raw markdown leaked into the page").not.toMatch(/^\s*#{1,6}\s/m);
    expect(article(pg).querySelectorAll("p").length, "no paragraphs rendered").toBeGreaterThan(0);
    expect(article(pg).querySelectorAll("h2").length, "no headings rendered").toBeGreaterThan(0);
  });

  it("links vertex refs and leaves no (kind+key) source in the prose", async () => {
    pg = await loadPage(POST, 1280, 900);

    // The whole article, not just p/li: the plugin walks mdast text nodes, so
    // refs inside RAW HTML blocks are never rewritten (raw HTML is one opaque
    // `html` node). This post used to hit that gap with a hand-written <table>
    // shipping a literal "(pl+python)"; the owner chose to fix the authored
    // content (2026-07-17: table restructured to markdown) rather than teach
    // the plugin to regex raw HTML. Whole-article scope keeps the gap from
    // silently reopening in any post.
    expect(postText(pg), "unprocessed (kind+key) ref left in the rendered post").not.toMatch(/\([a-z]+\+[a-zA-Z0-9_+-]+\)/);

    const python = postLinks(pg).find(a => a.getAttribute("href") === "/python");
    expect(python, "(pl+python) did not become a link to /python").toBeTruthy();
    expect(python?.textContent?.trim()).toBe("Python");
  });

  it("links only the FIRST mention of a vertex, matching v2", async () => {
    pg = await loadPage(POST, 1280, 900);
    // The post mentions (pl+python) many times; v2 linked the first only, and
    // the plugin comment says this is deliberate. A regression here would make
    // every mention a link — visually noisy and a silent behaviour change.
    const pythonLinks = postLinks(pg).filter(a => a.getAttribute("href") === "/python");
    expect(pythonLinks.length, "expected exactly one linked mention of Python").toBe(1);
  });

  it("points its vertex links at pages that exist", async () => {
    pg = await loadPage(POST, 1280, 900);
    const hrefs = [...new Set(postLinks(pg).map(a => a.getAttribute("href") ?? ""))].filter(h => /^\/[a-z0-9_+-]+$/.test(h));
    expect(hrefs.length, "no vertex links in the post").toBeGreaterThan(0);
    for (const href of hrefs) {
      const res = await fetch(`/__dist__${href}/index.html`);
      expect(res.ok, `vertex link ${href} 404s`).toBe(true);
    }
  });
});
