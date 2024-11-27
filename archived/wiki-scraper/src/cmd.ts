import { loadAllDefinitions } from "@plangs/definitions";
import { PlangsGraph } from "@plangs/plangs/graph";

import { Cache, Key } from "./cache";
import { Fetcher } from "./fetcher";
import { genAllPlangs, toPlang } from "./generate";
import { PL_WHITELIST } from "./whitelist";
import { START_URLS, WikiPage } from "./wikipedia";

/**
 * Starting on a few top pages, scrape a bunch of wikipedia pages
 * that are candidates for defining programming languages.
 */
async function scrape() {
  console.log("Scraping wikipedia...");

  const cache = new Cache("wikipedia");
  await cache.mkdir();

  const fetcher = new Fetcher(cache);

  const start: URL[] = [...START_URLS];
  const pending: URL[] = [];
  const seen = new Set<string>();

  // We over fetch but at least we don't miss anything and we cache the results.
  while (start.length > 0) {
    const current = start.pop() as URL;

    if (seen.has(current.href)) continue;
    seen.add(current.href);

    const [reqUrl, body] = await fetcher.fetch(current);
    if (!body) continue;

    const page = new WikiPage(reqUrl, body);

    for (const { url, title } of page.pageLinks()) {
      if (title?.match(/^(List|Category)[^p]+programming/i)) {
        start.push(url);
      } else {
        pending.push(url);
      }
    }
  }

  while (pending.length > 0) {
    const url = pending.pop() as URL;
    await fetcher.fetch(url);
    if (pending.length % 500 === 0) console.log("Pending:", pending.length);
  }
}

/**
 * Since determining if a page is a programming language is slow on its own right,
 * we first analyze the pages we have and store the candidates.
 */
async function analyze() {
  console.log("Analyzing pages scraped...");

  const wikiCache = new Cache("wikipedia");
  const dataCache = new Cache("meta");

  // Save the candidates as a list of URL hrefs.
  const candidates = new Set<string>();
  const keyList = await wikiCache.list();

  if (keyList.length === 0) {
    console.error("No data found. Run scrape first.");
    return;
  }

  const fetcher = new Fetcher(wikiCache);

  for (const key of keyList) {
    const body = await wikiCache.read(key);
    const url = new URL(key.unescaped);
    if (!body) continue;

    const page = new WikiPage(url, body);
    if (!page.isPlangCandidate) continue;

    candidates.add(page.url.href);

    if (page.infobox) {
      // Further analyze the infobox for candidates.
      for (const link of page.infobox.plangCandidates()) {
        candidates.add(link.href);
        // This is why we run multiple analyze passes:
        // there may be new urls we haven't fetched before.
        const url = new URL(link.href);
        if (url.hostname === "en.wikipedia.org") fetcher.fetch(url);
      }
    }
  }

  console.log("Found candidates pages: ", candidates.size);
  dataCache.write(Key.get("candidates"), JSON.stringify([...candidates].sort()));
}

/**
 * We used {@link analyze} to (manually) determine the PL_WHITELIST,
 * but now we can just walk through the whitelisted languages.
 */
async function extract() {
  console.log("Generating...");

  const wikiCache = new Cache("wikipedia");

  const g = new PlangsGraph();
  await loadAllDefinitions(g, { scanImages: false });

  for (const key of (await wikiCache.list()).sort()) {
    const body = await wikiCache.read(key);
    if (!body) continue;

    const page = new WikiPage(new URL(key.unescaped), body);
    if (page.key && PL_WHITELIST.has(page.key)) toPlang(g, page, PL_WHITELIST);
  }

  await genAllPlangs(g);
}

if (process.argv[2] === "scrape") {
  // Inigial Scrape.
  await scrape();
} else if (process.argv[2] === "analyze") {
  // Run several passes: each time the candidates list grows as we parse new infoboxes.
  await analyze();
  await analyze();
  await analyze();
} else if (process.argv[2] === "extract") {
  await extract();
} else if (process.argv[2] === "test") {
  await test();
} else {
  console.log("Usage: cmd <scrape|analyze|extract|test>");
}

async function test() {
  const g = new PlangsGraph();
  await loadAllDefinitions(g, { scanImages: false });

  const wikiCache = new Cache("wikipedia");

  for (const href of [
    "https://en.wikipedia.org/wiki/Python_(programming_language)",
    "https://en.wikipedia.org/wiki/Ruby_(programming_language)",
    "https://en.wikipedia.org/wiki/C++_(programming_language)",
    "https://en.wikipedia.org/wiki/Crystal_(programming_language)",
  ]) {
    const url = new URL(href);
    const body = await wikiCache.read(Key.get(url.href));
    if (!body) continue;

    const page = new WikiPage(url, body);
    if (!page.infobox) continue;

    const plang = await toPlang(g, page, new Set());

    if (!plang) {
      console.log("Failed to extract:", url.href);
    } else {
      console.log(plang.key, plang.relTag.vertices);
    }
  }
}
