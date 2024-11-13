/**
 * Helpers to crawl the web for information and convert it to markdown,
 * so OpenAI can use it more economically.
 */

import { Readability } from "@mozilla/readability";
import { JSDOM } from "jsdom";
import type { ChatCompletionMessageParam } from "openai/resources/index.mjs";
import TurndownService from "turndown";

import type { IterTap } from "@plangs/auxiliar/iter_tap";
import type { Link } from "@plangs/plangs/schema";

type OpenAIMsg = ChatCompletionMessageParam;
type ReadabilityResult = ReturnType<Readability["parse"]>;

// CSS Selectors to remove from the DOM.
const REMOVE_SEL =
  "img, script, style, iframe, noscript, svg, canvas, video, audio, object, embed, applet, map, area, base, link, meta, param, source, track";

/** Extract readable content from a web URL. */
export async function getDomContent(url: string): Promise<ReadabilityResult | undefined> {
  // JSDOM attempts to call console.error, which produces a lot of errors in the console.
  // We don't care about them, so we'll silence them.
  const consoleError = console.error;
  console.error = () => {};

  try {
    const dom = await JSDOM.fromURL(url);

    // Simplify the DOM even before the Readability process.
    for (const elem of dom.window.document.querySelectorAll(REMOVE_SEL)) elem.remove();

    // In wikipedia pages, remove the long references at the end of the page.
    if (url.includes("wikipedia")) for (const ref of dom.window.document.querySelectorAll(".reflist")) ref.remove();

    // Replace links with their text content for brevity.
    for (const link of dom.window.document.querySelectorAll("a")) {
      const text = link.textContent;
      if (text) link.replaceWith(text);
      else link.remove();
    }

    return new Readability(dom.window.document).parse();
  } catch (err) {
    console.warn(err);
  } finally {
    console.error = consoleError;
  }

  return;
}

// OpenAI has a limit of 30,000 tokens for gpt-4o.
// Here we limit the content to 85,000 characters, which is not a perfect cap but *some* line of defense.
const PAGE_LENGTH_LIMIT = 85_000;

/**
 * OpenAI doesn't scrape for use, so we'll scrape the websites and convert them to markdown.
 */
export async function retrieveWebsites(links: IterTap<Link>): Promise<OpenAIMsg[]> {
  const result: OpenAIMsg[] = [];
  const turndown = new TurndownService();

  for (const w of links.filter(w => w.kind !== "reddit")) {
    const article = await getDomContent(w.href);
    if (!article) {
      console.warn("Couldn't retrieve readable version of", w.href);
      continue;
    }
    const content = [
      `Make use of the content from "${w.href}" (title: "${article.title}""), `,
      `seen in Markdown format below:\n\n${turndown.turndown(article.content)}`,
    ].join("");

    if (content.length > PAGE_LENGTH_LIMIT) {
      console.warn(`Content too long ${w.href} ${content.length} chars, sliced to ${PAGE_LENGTH_LIMIT} chars.`);
    }

    result.push({ role: "user", content: content.slice(0, PAGE_LENGTH_LIMIT) });
  }

  return result;
}
