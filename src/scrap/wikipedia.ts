import * as cheerio from 'cheerio';
import { mkdir } from "node:fs/promises";
import { unlinkSync } from "node:fs";
import { env } from 'bun';

/**
 * Simple Wikipedia crawler for programming language pages.
 */
const WIKIPEDIA_URL = 'https://en.wikipedia.org';
const START_PAGE = '/wiki/List_of_programming_languages';

const PAGE_CACHE = new Map<string, string>();
const CACHE_PATH = Bun.fileURLToPath(`file:///${__dirname}/../../.cache`)

/**
 * Convert a page path to a cache path.
 */
function cachePath(pagePath: string): string {
    return Bun.fileURLToPath(`file:///${CACHE_PATH}/${pagePath.replace(/\/|\\|\:/g, '_')}.html`);
}

/**
 * Fetches a page, caching both to disk and to memory.
 */
async function fetchWiki(url: string): Promise<string> {
    if (PAGE_CACHE.has(url)) return PAGE_CACHE.get(url)!;

    const cacheFile = cachePath(url);
    const file = Bun.file(cacheFile);
    if (await file.exists()) {
        const text = await file.text();
        PAGE_CACHE.set(url, text);
        return text;
    }

    const fullUrl = `${WIKIPEDIA_URL}${url}`;
    console.info(`Fetching ${fullUrl}`);

    const response = await fetch(fullUrl);
    if (response.ok === false) throw new Error(`Failed to fetch ${url}`);

    const text = await response.text();
    Bun.write(cacheFile, text);
    PAGE_CACHE.set(url, text);

    return text;
}

/**
 * Scrap the Wikipedia page for programming languages.
 */
async function crawlWikipedia() {
    const $ = cheerio.load(await fetchWiki(START_PAGE));

    // Name -> Page path
    const plangs = new Map<string, string>();

    for (const link of $('#mw-content-text div.div-col li a')) {
        if (!link.attribs.href.startsWith('/wiki/')) continue;
        plangs.set($(link).text(), link.attribs.href);
    }

    for (const [name, url] of plangs) {
        await fetchWiki(url);
    }
}

async function main(refresh: boolean = false) {
    await mkdir(CACHE_PATH).catch((_) => { });
    console.log("Using cache: ", CACHE_PATH);

    if (refresh) {
        try { unlinkSync(cachePath(START_PAGE)); } catch (_) { }
    }

    await crawlWikipedia();
}

await main(env.REFRESH === 'true');