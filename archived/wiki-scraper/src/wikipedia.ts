import * as cheerio from "cheerio";
import type { Element } from "domhandler";

import { arrayMerge } from "@plangs/auxiliar/array";
import type { StrDate } from "@plangs/auxiliar/str_date";
import type { VPlangKey } from "@plangs/plangs/graph/generated";

import { PL_WHITELIST } from "./whitelist";

export const BASE_URL = new URL("https://en.wikipedia.org");

export const START_URLS = ["/wiki/List_of_programming_languages", "/wiki/Category:C_programming_language_family"].map(
  path => new URL(path, BASE_URL),
);

const PLR = /programming languages/i;

export type Link = {
  href: string;
  title: string;
  kind?: string;
};

export function keyFromWikiURL(url: URL): VPlangKey | undefined {
  if (url.hostname !== BASE_URL.hostname || !url.pathname.startsWith("/wiki/")) return;
  const key = decodeURIComponent(url.pathname.slice(6))
    .replaceAll(/\([^\)]+\)/g, "")
    .replaceAll("programming_language", "")
    .replaceAll("_", " ")
    .trim()
    .replaceAll(" ", "-")
    .replaceAll("/", "-")
    .toLowerCase()
    .normalize("NFD")
    // biome-ignore lint/suspicious/noMisleadingCharacterClass: Should remove combining diacritical marks.
    .replaceAll(/[\u0300-\u036f]/g, "");

  if (key === "c＃") return "pl+c-sharp";
  if (key === "assembly-language") return "pl+assembly";
  if (key === "clozure-cl") return "pl+clozure";
  if (key === "rascalmpl") return "pl+rascal";
  if (key === "rpython") return "pl+pypy";

  return `pl+${key}`;
}

export class WikiPage {
  readonly $: cheerio.CheerioAPI;
  readonly infobox?: InfoBox;

  constructor(
    public url: URL,
    public html: string,
  ) {
    this.$ = cheerio.load(html);
    const ibel = this.$("table.infobox").first().get(0);
    if (ibel) this.infobox = parseInfobox(this.$, ibel);
  }

  get key(): VPlangKey | undefined {
    return keyFromWikiURL(this.url);
  }

  get link(): Link {
    return { href: this.url.href, title: this.title };
  }

  get image(): string | undefined {
    return this.$("meta[property='og:image']").attr("content");
  }

  /** Fetch the image, if any. We don't cache this since the fetcher cache is designed for text files, not blobs. */
  async fetchImage(): Promise<[string, Blob] | undefined> {
    const img = this.image;
    if (!img) return;
    const resp = await fetch(img);
    if (!resp.ok) return;
    const blob = await resp.blob();
    if (blob.size > 0) return [img, blob];
  }

  get websites(): Link[] {
    const sites = this.infobox?.websites ?? [];
    mergeLinks(sites, [{ href: this.url.href, title: this.title, kind: "wikipedia" }]);

    for (const link of sites) {
      const url = new URL(link.href);
      const hostname = url.hostname.toLowerCase();

      if (hostname.includes("wikipedia")) {
        link.kind = "wikipedia";
      } else if (
        hostname.includes("github") ||
        hostname.includes("gitlab") ||
        hostname.includes("bitbucket") ||
        hostname.includes("svn") ||
        hostname.includes("cvs")
      ) {
        link.kind = "repository";
      } else if (hostname.includes(this.title.toLowerCase())) {
        link.kind = "homepage";
      } else {
        link.kind = "other";
      }
    }

    return sites;
  }

  get isGeneric(): boolean {
    return /^\/wiki\/(Wikipedia|List|Category)/.test(this.url.pathname);
  }

  get mainHeading(): string {
    return cleanText(this.$("h1#firstHeading").text());
  }

  get title(): string {
    let title: string;
    if (this.infobox) title = cleanText(this.$(".infobox-title.summary").first().text());
    title ||= this.mainHeading;
    title = title.replaceAll(/programming\s*language/gi, "");
    title = title.replaceAll(/\([^\)]+\)/gi, "");
    return title.trim();
  }

  get description(): string {
    const p = this.$("#mw-content-text > div.mw-content-ltr.mw-parser-output > p:not([class])").first();
    p.find("*").remove("sup, style, script, [style*='display:none']");
    return cleanText(p.text());
  }

  get contentText(): string {
    const p = this.$("#mw-content-text > div.mw-content-ltr.mw-parser-output > p:not([class])");
    p.find("*").remove("sup, style, script, [style*='display:none']");
    return cleanText(p.text());
  }

  get categories(): string[] {
    return this.categoryLinks()
      .map(link => link.title.replaceAll("Category:", "").toLowerCase())
      .sort();
  }

  get isPlangCandidate(): boolean {
    if (this.key && PL_WHITELIST.has(this.key)) return true;
    if (this.isGeneric) return false;
    if (!this.title) return false;
    if (this.mainHeading.toLowerCase().includes("programming language")) return true;

    const categories = this.categories;
    if (categories.find(cat => /(stub|book|frameworks|libraries)s?$/.test(cat))) return false;

    if (!this.infobox) return false;
    return categories.find(cat => PLR.test(cat)) !== undefined;
  }

  pageLinks(): { url: URL; title: string }[] {
    return this.getLinks("#mw-content-text");
  }

  categoryLinks(): { url: URL; title: string }[] {
    return this.getLinks("#catlinks");
  }

  getLinks(selector: string): { url: URL; title: string }[] {
    return this.$(selector)
      .find("a")
      .map((i, el) => {
        if (!el.attribs.href || !el.attribs.title) return;
        const url = new URL(decodeURIComponent(el.attribs.href), BASE_URL);
        if (isNiceWikiLink(url)) return { url, title: cleanText(el.attribs.title) };
      })
      .toArray();
  }
}

export const cmpLink = (a: Link, b: Link) => a.href === b.href;
export const mergeLinks = (target: Link[], src: Link[]) => arrayMerge(target, src, cmpLink);

class InfoBox {
  summary = "";
  firstAppeared?: StrDate;
  year?: number;

  readonly releases: { version: string; date?: StrDate }[] = [];
  readonly extensions: string[] = [];

  readonly authors: Link[] = []; // KEYS_AUTHORS

  readonly paradigms: Link[] = []; // KEYS_PARADIGMS
  readonly platforms: Link[] = []; // KEYS_PLATFORMS
  readonly licenses: Link[] = []; // KEYS_LICENSES
  readonly typeSystem: Link[] = []; // KEYS_TYPE_SYSTEM
  readonly tags: Link[] = []; // KEYS_TAGS

  readonly websites: Link[] = []; // KEYS_WEBSITES

  readonly dialects: Link[] = []; // KEYS_DIALECTS
  readonly family: Link[] = []; // KEYS_FAMILY
  readonly implementations: Link[] = []; // KEYS_IMPLEMENTATIONS
  readonly influenced: Link[] = []; // KEYS_INFLUENCED
  readonly influencedBy: Link[] = []; // KEYS_INFLUENCED_BY
  readonly writtenWith: Link[] = []; // KEY_WRITTEN_IN

  plangCandidates(): Link[] {
    const res: Link[] = [];
    mergeLinks(res, this.dialects);
    mergeLinks(res, this.family);
    mergeLinks(res, this.implementations);
    mergeLinks(res, this.influenced);
    mergeLinks(res, this.influencedBy);
    mergeLinks(res, this.writtenWith);
    return res.filter(link => new URL(link.href).hostname === BASE_URL.hostname);
  }

  nonWikiLinks(): Link[] {
    return this.websites.filter(link => new URL(link.href).hostname !== BASE_URL.hostname);
  }
}

export const UNKNOWN_KEYS = new Set<string>();

const KEYS_DIALECTS = new Set(["dialects"]);
const KEYS_FAMILY = new Set(["family"]);
const KEYS_IMPLEMENTATIONS = new Set(["major implementations"]);
const KEYS_INFLUENCED = new Set(["influenced"]);
const KEYS_INFLUENCED_BY = new Set(["influenced by"]);
const KEYS_LICENSES = new Set(["license", "content license"]);
const KEYS_PARADIGMS = new Set(["paradigm", "paradigms"]);
const KEYS_PLATFORMS = new Set(["os", "platform", "operating system", "cpu"]);
const KEYS_TAGS = new Set(["type"]);
const KEYS_TYPE_SYSTEM = new Set(["typing discipline"]);
const KEYS_WEBSITES = new Set(["website", "code repository", "code", "official website", "websites"]);
const KEYS_WRITTEN_IN = new Set(["implementation language", "written in"]);

const KEYS_AUTHORS = new Set([
  "designed by",
  "developer",
  "developer(s)",
  "original author(s)",
  "developers",
  "owners",
  "author",
  "designer",
  "designer(s)",
  "employees",
  "employer",
  "employer(s)",
  "founder",
  "founder(s)",
  "founders",
]);

function parseInfobox($: cheerio.CheerioAPI, el: Element): InfoBox {
  const res = new InfoBox();

  const $el = $(el);
  const summary = cleanText($el.find(".infobox-title.summary").text());
  if (summary) res.summary = summary;

  for (const row of $el.find("tr")) {
    const $row = $(row);
    // Option (1): tr > td.key , td.val
    const key = cleanText($row.find(".infobox-label").text()).toLowerCase();
    if (key) {
      const val = $row.find(".infobox-data");
      processEntry($, key, val, res);
    } else {
      // Option (2): tr.key tr.val
      const key = cleanText($row.find(".infobox-header").text()).toLowerCase();
      const val = $row.next().find(".infobox-full-data").first();
      if (key && val.length > 0) processEntry($, key, val, res);
    }
  }

  return res;
}

function processEntry($: cheerio.CheerioAPI, key: string, val: cheerio.Cheerio<Element>, box: InfoBox) {
  val.find('style, script, [style*="display:none"]').remove();
  val.find("br").replaceWith(", ");

  const links = val
    .find("a")
    .remove()
    .map((_, a) => {
      if (!a.attribs.href) return;
      const $a = $(a);
      let [href, title] = [decodeURIComponent(a.attribs.href.trim()) ?? "", cleanText($a.text())];
      href = href.replace(/#.*$/, "");
      if (href && title) {
        const url = new URL(href, BASE_URL);
        return { href: url.href, title };
      }
    })
    .toArray();
  const text = cleanText(val.text());

  if (key.includes("appear")) {
    const date = parseDate(text);
    if (date) {
      box.firstAppeared = date;
      box.year = Number.parseInt(date.slice(0, 4));
    }
  } else if (key.includes("release") || key.includes("version") || key.includes("date")) {
    const [date, version] = [parseDate(text), parseVersion(text)];
    if (version) arrayMerge(box.releases, [{ version, date: date as StrDate }], (a, b) => a.version === b.version);
  } else if (key.includes("extension")) {
    arrayMerge(box.extensions, parseExtensions(text));
  } else if (KEYS_AUTHORS.has(key)) {
    mergeLinks(box.authors, links);
  } else if (KEYS_DIALECTS.has(key)) {
    mergeLinks(box.dialects, links);
  } else if (KEYS_FAMILY.has(key)) {
    mergeLinks(box.family, links);
  } else if (KEYS_IMPLEMENTATIONS.has(key)) {
    mergeLinks(box.implementations, links);
  } else if (KEYS_INFLUENCED.has(key)) {
    mergeLinks(box.influenced, links);
  } else if (KEYS_INFLUENCED_BY.has(key)) {
    mergeLinks(box.influencedBy, links);
  } else if (KEYS_LICENSES.has(key)) {
    mergeLinks(box.licenses, links);
  } else if (KEYS_PARADIGMS.has(key)) {
    mergeLinks(box.paradigms, links);
  } else if (KEYS_PLATFORMS.has(key)) {
    mergeLinks(box.platforms, links);
  } else if (KEYS_TAGS.has(key)) {
    mergeLinks(box.tags, links);
  } else if (KEYS_TYPE_SYSTEM.has(key)) {
    mergeLinks(box.typeSystem, links);
  } else if (KEYS_WRITTEN_IN.has(key)) {
    mergeLinks(box.writtenWith, links);
  } else if (KEYS_WEBSITES.has(key)) {
    mergeLinks(box.websites, links);
  } else {
    UNKNOWN_KEYS.add(key); // For debugging.
  }
}

function parseVersion(str: string): string | undefined {
  return str.match(/(\d+\.\d+(\.\d+)*)/)?.[0];
}

function parseDate(str: string): StrDate | undefined {
  return (
    validateDate(str.match(/(\d{4}).(\d{2}).(\d{2})/)?.slice(1)) ??
    validateDate(str.match(/(\d+)\s+([a-zA-Z]+)\s+(\d{4})/)?.slice(1)) ??
    validateDate(str.match(/(\d{4})/)?.slice(1))
  );
}

function parseMonth(str: string): number {
  const s = str.toLowerCase();
  const months = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"];
  for (const [i, p] of months.entries()) {
    if (s.includes(p)) return i + 1;
  }
  return 1;
}

function validateDate(val: string[] | undefined): StrDate | undefined {
  if (!val) return undefined;
  const [year, month, day] = val;
  const [y, m, d] = [Number.parseInt(year), /a-zA-Z/.test(month) ? parseMonth(month) : Number.parseInt(month ?? 1), Number.parseInt(day ?? 1)];
  if (y < 1940 || y > 2100 || m < 1 || m > 12 || d < 1 || d > 31) return undefined;
  return `${y}-${`${m}`.padStart(2, "0")}-${`${d}`.padStart(2, "0")}`;
}

function parseExtensions(str: string): string[] {
  return str
    .replaceAll(/\([^)]+\)/g, "")
    .split(/\,|\s+/)
    .map(s => s.trim())
    .filter(s => s.length > 0 && s[0] === ".");
}

// Replace various types of non-standard whitespace characters with regular spaces
function cleanText(str: string): string {
  return str.replace(/[\u00A0\u1680\u2000-\u200A\u202F\u205F\u3000]/g, " ").trim();
}

function isNiceWikiLink(url: URL) {
  return (
    url.hostname === BASE_URL.hostname &&
    url.pathname.startsWith("/wiki/") &&
    !/^\/wiki\/(Wiki|User|Template|Help|File|Talk|Special)/.test(url.pathname)
  );
}
