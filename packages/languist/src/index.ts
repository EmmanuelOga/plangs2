import languishData from "./languish.json" with { type: "json" };
import linguistData from "./linguist.json" with { type: "json" };
import type { KeysOfType, LanguishLang, LinguistLang } from "./types";

/** A Wrapper for all the data in Github Linguist ruby gem. */
export class GHLangs {
  constructor(public readonly all: LinguistLang[]) {}

  /** Return a map with all the possible ways to id a plang. */
  lookupMap() {
    const map = new Map<string, LinguistLang>();
    const add = (name: string | undefined, lang: LinguistLang) => {
      if (!name) return;
      const clean = name.trim().toLowerCase();
      if (clean && !map.has(clean)) map.set(clean, lang);
    };

    // We need to perform multiple passes to respect the priority of the keys types:
    // Each new pass becomes more generic.
    for (const lang of this.all) add(lang.name, lang);
    for (const lang of this.all) add(lang.defaultAlias, lang);
    for (const lang of this.all) for (const alias of lang.aliases ?? []) add(alias, lang);
    for (const lang of this.all) for (const alias of lang.interpreters ?? []) add(alias, lang);
    for (const lang of this.all) add(lang.groupName, lang);
    for (const lang of this.all) add(lang.nameFS, lang);

    // We could skip the langId, but we may as well use it as fallback.
    for (const lang of this.all) add(lang.langId, lang);

    return map;
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
