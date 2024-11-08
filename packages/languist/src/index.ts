import languishData from "./languish.json" with { type: "json" };
import linguistData from "./linguist.json" with { type: "json" };
import type { KeysOfType, LanguishLang, LinguistLang } from "./types";

/** A Wrapper for all the data in Github Linguist ruby gem. */
export class GHLangs {
  // Map of all languages by every possible name (lower case) to some matching language.
  #lookup = new Map<string, LinguistLang>();

  constructor(public readonly all: LinguistLang[]) {
    this.setupLookup();
  }

  setupLookup() {
    for (const lang of this.all) {
      for (const name of this.names(lang)) {
        this.#lookup.set(name.trim().toLowerCase(), lang);
      }
    }
  }

  /** Quickly lookup a GH language by any possible field in linguist that identifies it. */
  lookup(name?: string): LinguistLang | undefined {
    return this.#lookup.get((name ?? "").trim().toLowerCase());
  }

  *filterType(type: LinguistLang["type"]): Generator<LinguistLang> {
    for (const lang of this.all) if (lang.type === type) yield lang;
  }

  *byField(field: KeysOfType<LinguistLang, string | undefined>): Generator<[string, LinguistLang]> {
    for (const lang of this.all) {
      const key = field && lang[field];
      if (key !== null && key !== undefined) yield [key, lang];
    }
  }

  /** Yield each possible name/identifier on the data. */
  *names(lang: LinguistLang): Generator<string> {
    if (lang.name) yield lang.name;
    if (lang.nameFS) yield lang.nameFS;
    if (lang.groupName) yield lang.groupName;
    if (lang.defaultAlias) yield lang.defaultAlias;
    if (lang.langId) yield lang.langId;
    for (const alias of lang.aliases ?? []) if (alias) yield alias;
    for (const alias of lang.interpreters ?? []) if (alias) yield alias;
  }

  /** Returns true if the given name matches any of the possible names/ids of the language. */
  nameMatches(lang: LinguistLang | undefined, name: string): boolean {
    if (!lang) return false;
    const key = name.trim().toLowerCase();
    for (const name of this.names(lang)) {
      const cleanName = name.trim().toLowerCase();
      if (cleanName === key || cleanName.includes(key)) return true;
    }
    return false;
  }
}

/** A Wrapper for all the data in Languish's keys.csv. */
export class LGLangs {
  // Map of all languages by Github Name.
  #lookup = new Map<string, LanguishLang>();

  constructor(public readonly all: LanguishLang[]) {
    this.setupLookup();
  }

  setupLookup() {
    const m = this.#lookup;
    const add = (key: string | undefined, lang: LanguishLang) => {
      const cleanKey = (key ?? "").trim().toLowerCase();
      if (cleanKey) m.set(cleanKey, lang);
    };
    for (const lang of this.all) add(lang.githubName, lang);
  }

  lookup(name?: string): LanguishLang | undefined {
    return this.#lookup.get((name ?? "").trim().toLowerCase());
  }

  *byField(field: KeysOfType<LanguishLang, string | undefined>): Generator<[string, LanguishLang]> {
    for (const lang of this.all) {
      const key = field && lang[field];
      if (key !== null && key !== undefined) yield [key, lang];
    }
  }
}

export const GH_LANGS = new GHLangs(linguistData as LinguistLang[]);
export const LG_LANGS = new LGLangs(languishData as LanguishLang[]);
