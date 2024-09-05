import { Cache, Key } from "./cache";
import { Fetcher } from "./fetcher";
import { START_URLS, WikiPage } from "./wikipedia";

async function scrape() {
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

async function analyze() {
  const wikiCache = new Cache("wikipedia");
  const dataCache = new Cache("meta");

  const candidates: string[] = [];
  const keyList = await wikiCache.list();

  if (keyList.length === 0) {
    console.error("No data found. Run scrape first.");
    return;
  }

  for (const key of keyList) {
    const body = await wikiCache.read(key);
    const url = new URL(key.unescaped);
    if (!body) continue;
    const page = new WikiPage(url, body);
    if (page.isPlangCandidate) candidates.push(key.value);
  }

  console.log("Found candidates pages: ", candidates.length);
  dataCache.write(Key.get("candidates"), JSON.stringify(candidates));
}

async function extract() {
  const dataCache = new Cache("meta");
  if (!dataCache.has(Key.get("candidates"))) {
    console.error("No candidates found. Run analyze first.");
    return;
  }

  const candidates = JSON.parse((await dataCache.read(Key.get("candidates"))) as string);

  const wikiCache = new Cache("wikipedia");

  for (const rawKey of candidates) {
    const key = Key.raw(rawKey);
    const body = await wikiCache.read(key);
    if (!body) continue;
    const page = new WikiPage(new URL(key.unescaped), body);
    // TODO.
  }
}

const cache = new Cache("wikipedia");
const key = Key.get("https://en.wikipedia.org/wiki/Python_(programming_language)");
const body = await cache.read(key);
const page = new WikiPage(new URL(key.unescaped), body);
console.log(page.title)
console.log(page.infobox)

// if (process.argv[2] === "scrape") scrape();
// if (process.argv[2] === "analyze") analyze();
// if (process.argv[2] === "extract") extract();