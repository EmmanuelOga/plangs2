import { Link } from "@plangs/plangs/index";
import { Cache, Key } from "./cache";
import { Fetcher } from "./fetcher";
import { mergeLinks, START_URLS, UNKNOWN_KEYS, WikiPage } from "./wikipedia";
import { merge } from "cheerio";

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
        fetcher.fetch(new URL(link.href));
      }
    }
  }

  console.log("Found candidates pages: ", candidates.size);
  dataCache.write(Key.get("candidates"), JSON.stringify([...candidates].sort()));
}

/**
 * Furter analyze the candidates and extract the relevant information.
 */
async function extract() {
  console.log("extracting candidates...");

  const dataCache = new Cache("meta");
  if (!dataCache.has(Key.get("candidates"))) {
    console.error("No candidates found. Run analyze first.");
    return;
  }

  const candidates = JSON.parse((await dataCache.read(Key.get("candidates"))) as string);
  const wikiCache = new Cache("wikipedia");
  const fetcher = new Fetcher(wikiCache);

  let count = 0;

  for (const href of candidates) {
    const [url, body] = await fetcher.fetch(new URL(href));
    if (!body) continue;

    const page = new WikiPage(url, body);
    if (page.isPlangCandidate && page.infobox) {
      count++;
      console.info({title: page.title, key: page.key});
    }
  }

  console.log("Final candidates: ", count);
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
} else {
  console.log("Invalid command: ", process.argv);
  console.log("Usage: cmd <scrape|analyze|extract>");
}
