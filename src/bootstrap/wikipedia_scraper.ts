/**
 * Simple Wikipedia crawler for programming language pages.
 */

import { unlinkSync } from "node:fs";
import { mkdir } from "node:fs/promises";
import { type Cheerio, type Element, load } from "cheerio";
import { toAlphaNum } from "src/util";

export const WIKIPEDIA_URL = "https://en.wikipedia.org";

const START_PAGES = ["/wiki/List_of_programming_languages", "/wiki/Category:C_programming_language_family"];

const SHORTLIST = [
  "/wiki/CircuitPython",
  "/wiki/C%2B%2B",
  "/wiki/C_(programming_language)",
  "/wiki/Crystal_(programming_language)",
  "/wiki/Go_(programming_language)",
  "/wiki/Julia_(programming_language)",
  "/wiki/Lua_(programming_language)",
  "/wiki/Nim_(programming_language)",
  "/wiki/PHP",
  "/wiki/Perl",
  "/wiki/Python_(programming_language)",
  "/wiki/Red_(programming_language)",
  "/wiki/V_(programming_language)",
  "/wiki/Zig_(programming_language)",
];

// Some keys that seem consistent across pages.
const INFOBOX_KEYS = new Set<string>([
  "available_in",
  "bits",
  "defunct",
  "design",
  "designed_by",
  "designer",
  "developed_by",
  "developer",
  "developers",
  "dialects",
  "discontinued",
  "encoding",
  "endianness",
  "family",
  "filename_extension",
  "filename_extensions",
  "final_release",
  "first_appeared",
  "floating_point",
  "founded",
  "founder",
  "general-purpose",
  "implementation_language",
  "industry",
  "influenced",
  "influenced_by",
  "initial_release",
  "internet_media_type",
  "introduced",
  "kernel_type",
  "key_people",
  "latest_release",
  "license",
  "major_implementations",
  "official_website",
  "operating_system",
  "original_authors",
  "os",
  "os_family",
  "paradigm",
  "paradigms",
  "platform",
  "platforms",
  "predecessor",
  "preview_release",
  "products",
  "release_date",
  "repository",
  "revenue",
  "scope",
  "size",
  "software_used",
  "source_model",
  "stable_release",
  "successor",
  "type",
  "type_of_format",
  "typing_discipline",
  "website",
  "working_state",
  "written_in",
]);

// Cover the most important infobox keys as a type.
export type DATA_ATTR =
  | "designed_by"
  | "developed_by"
  | "developer"
  | "developers"
  | "dialects"
  | "family"
  | "filename_extension"
  | "filename_extensions"
  | "first_appeared"
  | "founder"
  | "implementation_language"
  | "influenced"
  | "influenced_by"
  | "initial_release"
  | "internet_media_type"
  | "latest_release"
  | "license"
  | "major_implementations"
  | "os"
  | "paradigm"
  | "paradigms"
  | "platform"
  | "preview_release"
  | "scope"
  | "stable_release"
  | "type"
  | "type_of_format"
  | "typing_discipline"
  | "website";

export type DATA_TYPE = "extensions" | "links" | "release" | "text";

const CACHE_PATH = Bun.fileURLToPath(`file:///${__dirname}/../../.cache`);

export function cachePath(type: string, path = ""): string {
  return Bun.fileURLToPath(`file:///${CACHE_PATH}/${type}/${path}`);
}

export function toBasename(str: string, type = "html"): string {
  return `${str.replace(/\/|\\|\:/g, "_")}.${type}`;
}

// Keep track of some state.
const STATE = {
  reqCount: 0,
  fetchCache: new Map<string, string>(),
  wikiPathScraped: new Set<string>(),
  plangs: new Map<string, any>(),
};

/**
 * Fetches a page, caching both to disk and to memory.
 */
async function fetchWiki(wikiPath: string): Promise<string> {
  // biome-ignore lint/style/noNonNullAssertion: the map _has_ the key.
  if (STATE.fetchCache.has(wikiPath)) return STATE.fetchCache.get(wikiPath)!;

  const cacheFile = cachePath("wiki", toBasename(wikiPath, "html"));

  const file = Bun.file(cacheFile);
  if (await file.exists()) {
    const text = await file.text();
    STATE.fetchCache.set(wikiPath, text);
    return text;
  }

  const fullUrl = `${WIKIPEDIA_URL}${wikiPath}`;
  console.info(`Fetching ${fullUrl}`);
  STATE.reqCount++;

  const response = await fetch(fullUrl);
  if (response.ok === false) throw new Error(`Failed to fetch ${wikiPath}`);

  const text = await response.text();
  Bun.write(cacheFile, text);
  STATE.fetchCache.set(wikiPath, text);

  return text;
}

// Do something with the language data.
function emit({ title, wikiUrl, img, data }: { title: string; wikiUrl: string; img: string; data: {} }) {
  const plKey = toAlphaNum(wikiUrl.split("wiki/")[1]);
  STATE.plangs.set(plKey, { title, wikiUrl, img, data });
}

async function scrapLanguagePage(wikiPath: string) {
  if (STATE.wikiPathScraped.has(wikiPath)) return;
  STATE.wikiPathScraped.add(wikiPath);

  const $ = load(await fetchWiki(wikiPath));
  const $infobox = $("table.infobox");
  if ($infobox.length === 0) return;

  const title = $infobox.find(".infobox-title.summary").text();

  if (!title || !/programming/gi.test($("#catlinks").text())) {
    return;
  }

  const img = cleanImgUrl($infobox.find(".infobox-image img").attr("src"));

  type ScrapedLink = { href?: string; title?: string; refs?: ScrapedLink[] };

  function processA($a: Cheerio<Element>): ScrapedLink {
    return { href: $a.attr("href")?.trim(), title: $a.text().trim() };
  }

  function getVersion(str: string): { version: string } | undefined {
    const match = str.match(/(\d+\.\d+(\.\d+)*)/);
    if (match?.[0]) return { version: match[0] };
  }

  function getMonth(str: string): number {
    const s = str.toLocaleLowerCase();
    const months = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"];
    for (const [i, p] of months.entries()) {
      if (s.includes(p)) return i + 1;
    }
    return 0;
  }

  function date(year: number, month: number, day: number): { date: string } | undefined {
    if (year < 1900 || year > 2100) return undefined;
    if (month < 1 || month > 12) return undefined;
    if (day < 1 || day > 31) return undefined;
    return {
      date: `${year}-${month.toString().padStart(2, "0")}-${day.toString().padStart(2, "0")}`,
    };
  }

  function getDate(str: string): { date: string } | { year: number } | undefined {
    let match = str.match(/(\d{4}).(\d{2}).(\d{2})/);
    if (match) {
      const d = date(Number.parseInt(match[1]), Number.parseInt(match[2]), Number.parseInt(match[3]));
      if (d) return d;
    }

    match = str.match(/(\d+)\s+([a-zA-Z]+)\s+(\d{4})/);
    if (match) {
      const d = date(Number.parseInt(match[1]), getMonth(match[2]), Number.parseInt(match[3]));
      if (d) return d;
    }

    match = str.match(/(\d{4})/);
    if (match) return { year: Number.parseInt(match[1]) };
  }

  function unquote(title: string): string {
    if (title.startsWith('"') && title.endsWith('"')) return title.slice(1, -1);
    return title;
  }

  /** Extract links from <sup> references. */
  function processSup(sup: Cheerio<Element>): { href?: string; title?: string }[] {
    const refs: { href?: string; title?: string }[] = [];

    for (const a of sup.find("a")) {
      const id = $(a).attr("href");

      // Wikipedia may have up to two links per reference.
      const [ref1, ref2] = $(id)
        .find("a")
        .map((i, a) => processA($(a)))
        .toArray()
        .filter((a) => a.href?.startsWith("http"));

      // When archived the first link contains the title, and the second the archived URL.
      // We want to save the archived URL, with the more informative title of the original URL.
      if (ref1 && ref2 && ref2.title?.toLowerCase().includes("archived")) {
        ref2.title = unquote(ref1.title ?? "");
        if (ref2.title) refs.push(ref2);
      } else if (ref1) {
        ref1.title = unquote(ref1.title ?? "");
        if (ref1.title) refs.push(ref1);
      }
    }

    return refs;
  }

  // biome-ignore lint/suspicious/noExplicitAny: let me be.
  function extractData(type: string, el: Cheerio<Element>): Partial<Record<DATA_TYPE, any>> {
    // biome-ignore lint/suspicious/noExplicitAny: let me be.
    const result: Partial<Record<DATA_TYPE, any>> = {};

    el.find('style, script, [style*="display:none"]').remove();
    el.find("br").replaceWith(",");

    const text = [
      ...el
        .children()
        .filter((_, e) => e.tagName !== "a" && e.tagName !== "sup")
        .map((_, e) => $(e).text()),
    ]
      .join(" ")
      .trim();

    const anchors = el.children().filter((_, e) => e.tagName === "a");

    if (type.includes("release") || type.includes("appear")) {
      const data = { ...getDate(text), ...getVersion(text) };
      if (Object.keys(data).length > 0) result.release = data;
    } else if (type.includes("extension")) {
      const data = text
        .replaceAll(/\([^)]+\)/g, "")
        .split(/\,|\s+/)
        .map((s) => s.trim())
        .filter((s) => s.length > 0 && s[0] === ".");
      if (data.length) result.extensions = data;
    } else if (anchors.length) {
      const processed: ReturnType<typeof processA>[] = [];
      for (const a of anchors) {
        const $a = $(a);
        const link = processA($a);
        if (link.href) processed.push(link);

        // Try to find references in the next <sup> tag.
        const ref = $a.next("sup");
        if (ref.index() === $a.index() + 1) {
          const prefs = processSup(ref);
          if (prefs.length > 0) link.refs = prefs;
        }
      }
      result.links = processed;
    } else {
      result.text = text.replace(/\n/g, " ");
    }

    return result;
  }

  function toKey(str: string): string {
    return str.trim().toLocaleLowerCase().replace(/\s/g, "_").replace(/\(|\)/g, "");
  }

  const infobox: Partial<Record<DATA_ATTR, Partial<Record<DATA_TYPE, any>>>> = {};

  for (const row of $infobox.find("tr")) {
    try {
      const $row = $(row);
      // Option (1): tr > td.key , td.val
      const key = toKey($row.find(".infobox-label").text());
      if (key) {
        if (!INFOBOX_KEYS.has(key)) continue;
        infobox[key] = extractData(key, $row.find(".infobox-data"));
      } else {
        // Option (2): tr.key tr.val
        const key = toKey($row.find(".infobox-header").text());
        if (!INFOBOX_KEYS.has(key)) continue;
        const $elem = $row.next().find(".infobox-full-data").first();
        if ($elem.length) infobox[key] = extractData(key, $elem);
      }
    } catch (e) {
      // Parsing error handling a row of the infobox... ignore.
    }
  }

  for (const key of [
    "implementation_language",
    "influenced",
    "influenced_by",
    "major_implementations",
    "software_used",
    "successor",
    "written_in",
  ]) {
    if (Array.isArray(infobox[key]?.links)) {
      for (const link of infobox[key].links) {
        if (!link.href?.startsWith("/wiki")) continue;
        await scrapLanguagePage(link.href);
      }
    }
  }

  emit({ title, wikiUrl: `${WIKIPEDIA_URL}${wikiPath}`, img, data: infobox });
}

function cleanImgUrl(url: string | undefined): string {
  if (!url) return "";
  let u = url.replace(/^\/\//, "");
  if (u.indexOf(".svg") < 0) return `https://${u}`;
  u = u.replace(/\/thumb\//, "/");
  return `https://${u.split(".svg")[0]}.svg`;
}

/**
 * Scrap the Wikipedia page for programming languages.
 */
async function wikiScrape(refresh = false) {
  console.log("Scraping Wikipedia. Using cache: ", CACHE_PATH);

  await mkdir(cachePath("wiki"), { recursive: true }).catch((_) => {});
  await mkdir(cachePath("json"), { recursive: true }).catch((_) => {});

  if (refresh) {
    // Delete starting cache files.
    for (const start of START_PAGES) {
      try {
        const p = cachePath("wiki", toBasename(start, "html"));
        unlinkSync(p);
      } catch (_) {}
    }
  }

  for (const lang of SHORTLIST) {
    await scrapLanguagePage(lang);
  }

  for (const start of START_PAGES) {
    const $ = load(await fetchWiki(start));
    for (const link of $("#mw-content-text").find("a")) {
      if (link.attribs.href === undefined) continue;
      if (!link.attribs.href?.startsWith("/wiki/")) continue;
      await scrapLanguagePage(link.attribs.href);
    }
  }

  console.log(`Writing ${STATE.plangs.size} programming languages to ${cachePath("json")}.`);

  for (const [key, value] of STATE.plangs) {
    Bun.write(cachePath("json", toBasename(key, "json")), JSON.stringify(value, null, 2));
  }
}

if (process.env.WIKI_SCRAPE) wikiScrape(process.env.WIKI_SCRAPE === "REFRESH");
