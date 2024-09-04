import * as cheerio from "cheerio";
import type { Element } from "domhandler";

export const BASE_URL = new URL("https://en.wikipedia.org");

export const START_URLS = ["/wiki/List_of_programming_languages", "/wiki/Category:C_programming_language_family"].map(
  (path) => new URL(path, BASE_URL),
);

function isNiceWikiLink(url: URL) {
  return (
    url.hostname === BASE_URL.hostname &&
    url.pathname.startsWith("/wiki/") &&
    !/^\/wiki\/(Wiki|User|Template|Help|File|Talk|Special)/.test(url.pathname)
  );
}

export class WikiPage {
  readonly $: cheerio.CheerioAPI;
  readonly infobox: InfoBox | undefined;

  constructor(
    public url: URL,
    public html: string,
  ) {
    this.$ = cheerio.load(html);
    const ib = this.$("table.infobox");
    this.infobox = ib.get(0) ? new InfoBox(this.$, ib) : undefined;
  }

  get image(): string | undefined {
    return this.$("meta[property='og:image']").attr("content");
  }

  get isGeneric(): boolean {
    return /^\/wiki\/(List|Category)/.test(this.url.pathname);
  }

  get title(): string {
    return this.$("h1#firstHeading").text();
  }

  get categories(): string[] {
    return this.$("#catlinks")
      .find("a")
      .map((i, el) => el.attribs.title.trim().toLocaleLowerCase())
      .toArray();
  }

  get isPlangCandidate(): boolean {
    if (this.isGeneric) return false;
    const categories = this.categories;
    if (categories.find((cat) => /(stub|book)s?$/.test(cat))) return false;
    if (!this.infobox) return false;
    return categories.find((cat) => cat.includes("programming languages")) !== undefined;
  }

  pageLinks(): { url: URL; title: string | undefined }[] {
    return this.getLinks("#mw-content-text");
  }

  categoryLinks(): { url: URL; title: string | undefined }[] {
    return this.getLinks("#catlinks");
  }

  getLinks(selector: string): { url: URL; title: string | undefined }[] {
    return this.$(selector)
      .find("a")
      .map((i, el) => {
        const url = new URL(el.attribs.href, BASE_URL);
        if (isNiceWikiLink(url)) return { url, title: el.attribs.title.trim() };
      })
      .toArray();
  }

  *infoboxEntries() {
    if (this.infobox) yield* this.infobox.entries();
  }
}

class InfoBox {
  constructor(
    readonly $: cheerio.CheerioAPI,
    readonly el: cheerio.Cheerio<Element>,
  ) {}

  /** Extract each entry of the infobox. */
  *entries() {
    for (const row of this.el.find("tr")) {
      const $row = this.$(row);
      // Option (1): tr > td.key , td.val
      const key = $row.find(".infobox-label").text().trim().toLowerCase();
      if (key) {
        const val = this.#processEntry(key, $row.find(".infobox-data"));
        yield { key, val };
      } else {
        // Option (2): tr.key tr.val
        const key = $row.find(".infobox-header").text().trim().toLowerCase();
        const $elem = $row.next().find(".infobox-full-data").first();
        if ($elem.length) {
          const val = this.#processEntry(key, $elem);
          yield { key, val };
        }
      }
    }
  }

  #processEntry(key: string, val: cheerio.Cheerio<Element>) {
    const result: Record<string, any> = {};

    val.find('style, script, [style*="display:none"]').remove();
    val.find("br").replaceWith(", ");

    const text = [
      ...val
        .children()
        .filter((_, e) => e.tagName !== "a" && e.tagName !== "sup")
        .map((_, e) => this.$(e).text()),
    ]
      .join(" ")
      .trim();

    const anchors = val.children().filter((_, e) => e.tagName === "a");

    if (key.includes("release") || key.includes("appear")) {
      const data = { ...getDate(text), ...getVersion(text) };
      if (Object.keys(data).length > 0) result.release = data;
    } else if (key.includes("extension")) {
      const data = text
        .replaceAll(/\([^)]+\)/g, "")
        .split(/\,|\s+/)
        .map((s) => s.trim())
        .filter((s) => s.length > 0 && s[0] === ".");
      if (data.length) result.extensions = data;
    } else if (anchors.length) {
      const processed: ReturnType<typeof this.processA>[] = [];
      for (const a of anchors) {
        const $a = this.$(a);
        const link = this.processA($a);
        if (link.href && !link.href.includes("/wiki/Wayback_Machine")) {
          processed.push(link);
        }

        // Try to find references in the next <sup> tag.
        const ref = $a.next("sup");
        if (ref.index() === $a.index() + 1) {
          const prefs = this.processSup(ref);
          if (prefs.length > 0) link.refs = prefs;
        }
      }
      result.links = processed;
    } else {
      result.text = text.replace(/\n/g, " ");
    }

    return result;
  }

  get summary(): string {
    return this.el.find(".infobox-title.summary").text();
  }

  processA($a: cheerio.Cheerio<Element>): { href: string | undefined; title: string; refs?: { href?: string; title?: string }[] } {
    const href = $a.attr("href")?.trim();
    const title = $a.text().trim();
    return { href, title };
  }

  processSup(sup: cheerio.Cheerio<Element>): { href?: string; title?: string }[] {
    const refs: { href?: string; title?: string }[] = [];

    for (const a of sup.find("a")) {
      const id = this.$(a).attr("href");

      // Wikipedia may have up to two links per reference.
      const [ref1, ref2] = this.$(id)
        .find("a")
        .map((i, a) => this.processA(this.$(a)))
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
