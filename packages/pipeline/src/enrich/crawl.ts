/**
 * Crawl -> readable-content -> markdown.
 *
 * Ported from the legacy `packages/ai/src/crawl.ts` (jsdom + readability +
 * turndown). Two real bugs in the original are fixed here:
 *
 *  1. the GitHub branch called `document.querySelector(".markdown-body")` on
 *     the GLOBAL `document`, which does not exist under Node — it threw, and
 *     the `catch` silently swallowed it into `undefined`. Now scoped to
 *     `dom.window.document`.
 *  2. `retrieveWebsites` filtered its input with
 *     `hostname.endsWith("reddit.com")`, so it only ever crawled Reddit and
 *     dropped the home / GitHub / Wikipedia pages it was given. The filter is
 *     gone.
 */

import { Readability } from "@mozilla/readability";
import { JSDOM } from "jsdom";
import TurndownService from "turndown";

/** Elements with no textual value to a language model. */
const REMOVE_SEL =
  "img, script, style, iframe, noscript, svg, canvas, video, audio, object, embed, applet, map, area, base, link, meta, param, source, track";

export interface Article {
  url: string;
  title: string;
  /** Extracted content as HTML. */
  content: string;
}

/** Loads a URL into a DOM. Injected so tests never hit the network. */
export type DomLoader = (url: string) => Promise<JSDOM>;

export const jsdomLoader: DomLoader = url => JSDOM.fromURL(url);

/** Extract the readable content of a page. Returns `undefined` if unusable. */
export async function getDomContent(stringUrl: string, load: DomLoader = jsdomLoader): Promise<Article | undefined> {
  // jsdom logs CSS parse errors through console.error for basically every real
  // page; silence it for the duration rather than drown the run's output.
  const consoleError = console.error;
  console.error = () => {};

  try {
    const dom = await load(stringUrl);
    const doc = dom.window.document;
    const url = new URL(stringUrl);

    for (const elem of doc.querySelectorAll(REMOVE_SEL)) elem.remove();

    // Wikipedia's reference list is long and carries no facts we want.
    if (/wikipedia/i.test(url.hostname)) for (const ref of doc.querySelectorAll(".reflist")) ref.remove();

    // Replace links with their text — the href adds tokens, not meaning.
    for (const link of doc.querySelectorAll("a")) {
      const text = link.textContent;
      if (text) link.replaceWith(text);
      else link.remove();
    }

    // Readability mangles GitHub READMEs; grab the rendered markdown directly.
    if (/github/i.test(url.hostname)) {
      const title = doc.querySelector("title")?.textContent ?? "";
      const content = doc.querySelector(".markdown-body")?.innerHTML;
      if (content) return { url: stringUrl, title, content };
    }

    const parsed = new Readability(doc).parse();
    return parsed?.content ? { url: stringUrl, title: parsed.title ?? "", content: parsed.content } : undefined;
  } catch (err) {
    console.warn(`crawl: ${stringUrl}: ${err instanceof Error ? err.message : String(err)}`);
    return undefined;
  } finally {
    console.error = consoleError;
  }
}

/** Cap per-page markdown so one huge page can't dominate the context window. */
export const PAGE_LENGTH_LIMIT = 85_000;

export interface CrawledPage {
  url: string;
  title: string;
  /** Content as markdown, capped at `PAGE_LENGTH_LIMIT`. */
  markdown: string;
  truncated: boolean;
}

/** Crawls a set of URLs into markdown. Injected so tests never hit the network. */
export type Crawler = (urls: Iterable<string>) => Promise<CrawledPage[]>;

/** Fetch each URL and convert its readable content to markdown. */
export async function crawl(urls: Iterable<string>, load: DomLoader = jsdomLoader): Promise<CrawledPage[]> {
  const turndown = new TurndownService();
  const out: CrawledPage[] = [];

  for (const url of urls) {
    const article = await getDomContent(url, load);
    if (!article) {
      console.warn(`crawl: no readable content at ${url}`);
      continue;
    }
    const markdown = turndown.turndown(article.content);
    const truncated = markdown.length > PAGE_LENGTH_LIMIT;
    if (truncated) console.warn(`crawl: ${url} is ${markdown.length} chars, truncating to ${PAGE_LENGTH_LIMIT}`);
    out.push({ url, title: article.title, markdown: markdown.slice(0, PAGE_LENGTH_LIMIT), truncated });
  }

  return out;
}
