/**
 * Simple Wikipedia crawler for programming language pages.
 */

import { env } from 'bun';
import { Cheerio, Element, load } from 'cheerio';
import { unlinkSync } from "node:fs";
import { mkdir } from "node:fs/promises";

const WIKIPEDIA_URL = 'https://en.wikipedia.org';

const START_PAGE = '/wiki/List_of_programming_languages';
const PYTHON_PAGE = '/wiki/Python_(programming_language)';

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
    const $ = load(await fetchWiki(START_PAGE));

    // Name -> Page path
    const plangs = new Map<string, string>();

    for (const link of $('#mw-content-text div.div-col li a')) {
        if (!link.attribs.href.startsWith('/wiki/')) continue;
        plangs.set($(link).text(), link.attribs.href);
    }

    for (const [name, url] of plangs) {
        scrapLanguagePage(name, await fetchWiki(url));
    }
}

function scrapLanguagePage(name: string, html: string) {
    const $ = load(html);

    const $infobox = $('table.infobox');

    if ($infobox.length === 0) return;

    const title = $infobox.find('.infobox-title.summary').text();
    const img = cleanImgUrl($infobox.find('.infobox-image img').attr('src'));

    function processA($a: Cheerio<Element>): { href?: string, title?: string } {
        let title = $a.attr('title')?.trim();
        if (!title) title = $a.text().trim();
        return { href: $a.attr('href')?.trim(), title };
    }

    const data = new Map<string, any>();

    for (const row of $infobox.find('tr')) {
        const $row = $(row);
        // Option (1): tr > td.key , td.val
        let key = $row.find('.infobox-label').text().trim();
        if (key) {
            const $data = $row.find('.infobox-data');
            data.set(key, $data.text().trim());
        } else {
            // Option (2): tr.key tr.val
            key = $row.find('.infobox-header').text().trim();
            if (title) {
                const $data = $row.next().find('.infobox-full-data').first();
                if ($data.length === 1) {
                    data.set(key, $data.text().trim());
                }
            }
        }
    }

    console.log({ name, title, img, data });
}

function cleanImgUrl(url: string | undefined): string {
    if (!url) return '';
    url = url.replace(/^\/\//, '');
    if (url.indexOf('.svg') < 0) return `https://${url}`;
    url = url.replace(/\/thumb\//, '/');
    return `https://${url.split('.svg')[0]}.svg`;
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
// scrapLanguagePage('Python', await fetchWiki(PYTHON_PAGE));