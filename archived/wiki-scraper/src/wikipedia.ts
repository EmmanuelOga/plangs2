import { arrayMerge } from "@plangs/plangs/util";
import * as cheerio from "cheerio";
import type { Element } from "domhandler";

export const BASE_URL = new URL("https://en.wikipedia.org");

export const START_URLS = ["/wiki/List_of_programming_languages", "/wiki/Category:C_programming_language_family"].map(
  (path) => new URL(path, BASE_URL),
);

export class WikiPage {
  readonly $: cheerio.CheerioAPI;
  readonly infobox?: InfoBox;

  constructor(
    public url: URL,
    public html: string,
  ) {
    this.$ = cheerio.load(html);
    const ibel = this.$("table.infobox").get(0);
    if (ibel) this.infobox = parseInfobox(this.$, ibel);
  }

  get image(): string | undefined {
    return this.$("meta[property='og:image']").attr("content");
  }

  get isGeneric(): boolean {
    return /^\/wiki\/(Wikipedia|List|Category)/.test(this.url.pathname);
  }

  get title(): string {
    return cleanText(this.$("h1#firstHeading").text());
  }

  get description(): string {
    const p = this.$("#mw-content-text > div.mw-content-ltr.mw-parser-output > p:not([class])").first();
    p.find("*").remove("sup");
    return cleanText(p.text());
  }

  get categories(): string[] {
    return this.categoryLinks().map((link) => link.title);
  }

  get isPlangCandidate(): boolean {
    if (this.isGeneric) return false;
    if (this.title.includes("(programming language)")) return true;
    const categories = this.categories;
    if (categories.find((cat) => /(stub|book|frameworks|libraries)s?$/.test(cat))) return false;
    if (!this.infobox) return false;
    return categories.find((cat) => cat.includes("programming languages")) !== undefined;
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

type Link = { href: string; title: string };

class InfoBox {
  summary = "";
  readonly releases: { version: string; date?: string }[] = [];
  readonly extensions: string[] = [];

  readonly authors: Link[] = []; // KEYS_AUTHORS
  readonly paradigms: Link[] = []; // KEYS_PARADIGMS
  readonly platforms: Link[] = []; // KEYS_PLATFORMS
  readonly licenses: Link[] = []; // KEYS_LICENSES
  readonly typeSystem: Link[] = []; // KEYS_TYPE_SYSTEM
  readonly tags: Link[] = []; // KEYS_TAGS
  readonly dialects: Link[] = []; // KEYS_DIALECTS
  readonly family: Link[] = []; // KEYS_FAMILY
  readonly implementations: Link[] = []; // KEYS_IMPLEMENTATIONS
  readonly influenced: Link[] = []; // KEYS_INFLUENCED
  readonly influencedBy: Link[] = []; // KEYS_INFLUENCED_BY
  readonly writtenIn: Link[] = []; // KEY_WRITTEN_IN
  readonly websites: Link[] = []; // KEY_WRITTEN_IN
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
const KEYS_WEBSITES = new Set(["website", "code repository", "code", "official website"]);
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
      const [href, title] = [decodeURIComponent(a.attribs.href.trim()), cleanText($a.text())];
      if (href && title && href.startsWith("/wiki")) return { href: new URL(href, BASE_URL).href, title };
    })
    .toArray();
  const text = cleanText(val.text());

  if (key.includes("release") || key.includes("appear") || key.includes("version") || key.includes("date")) {
    const [date, version] = [parseDate(text), parseVersion(text)];
    if (version) arrayMerge(box.releases, [{ version, date }], (a, b) => a.version === b.version);
  } else if (key.includes("extension")) {
    arrayMerge(box.extensions, parseExtensions(text));
  } else if (KEYS_AUTHORS.has(key)) {
    arrayMerge(box.authors, links, (a, b) => a.href === b.href);
  } else if (KEYS_DIALECTS.has(key)) {
    arrayMerge(box.dialects, links, (a, b) => a.href === b.href);
  } else if (KEYS_FAMILY.has(key)) {
    arrayMerge(box.family, links, (a, b) => a.href === b.href);
  } else if (KEYS_IMPLEMENTATIONS.has(key)) {
    arrayMerge(box.implementations, links, (a, b) => a.href === b.href);
  } else if (KEYS_INFLUENCED.has(key)) {
    arrayMerge(box.influenced, links, (a, b) => a.href === b.href);
  } else if (KEYS_INFLUENCED_BY.has(key)) {
    arrayMerge(box.influencedBy, links, (a, b) => a.href === b.href);
  } else if (KEYS_LICENSES.has(key)) {
    arrayMerge(box.licenses, links, (a, b) => a.href === b.href);
  } else if (KEYS_PARADIGMS.has(key)) {
    arrayMerge(box.paradigms, links, (a, b) => a.href === b.href);
  } else if (KEYS_PLATFORMS.has(key)) {
    arrayMerge(box.platforms, links, (a, b) => a.href === b.href);
  } else if (KEYS_TAGS.has(key)) {
    arrayMerge(box.tags, links, (a, b) => a.href === b.href);
  } else if (KEYS_TYPE_SYSTEM.has(key)) {
    arrayMerge(box.typeSystem, links, (a, b) => a.href === b.href);
  } else if (KEYS_WRITTEN_IN.has(key)) {
    arrayMerge(box.writtenIn, links, (a, b) => a.href === b.href);
  } else if (KEYS_WEBSITES.has(key)) {
    arrayMerge(box.websites, links, (a, b) => a.href === b.href);
  } else {
    UNKNOWN_KEYS.add(key); // For debugging.
  }
}

function parseVersion(str: string): string | undefined {
  return str.match(/(\d+\.\d+(\.\d+)*)/)?.[0];
}

function parseDate(str: string): string | undefined {
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

function validateDate(val: string[] | undefined): string | undefined {
  if (!val) return undefined;
  const [year, month, day] = val;
  const [y, m, d] = [Number.parseInt(year), /a-zA-Z/.test(month) ? parseMonth(month) : Number.parseInt(month ?? 1), Number.parseInt(day ?? 1)];
  if (y < 1900 || y > 2100 || m < 1 || m > 12 || d < 1 || d > 31) return undefined;
  return `${year}-${`${m}`.padStart(2, "0")}-${`${d}`.padStart(2, "0")}`;
}

function parseExtensions(str: string): string[] {
  return str
    .replaceAll(/\([^)]+\)/g, "")
    .split(/\,|\s+/)
    .map((s) => s.trim())
    .filter((s) => s.length > 0 && s[0] === ".");
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
