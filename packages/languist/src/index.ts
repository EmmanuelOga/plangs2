import languishData from "./languish.json" with { type: "json" };
import linguistData from "./linguist.json" with { type: "json" };
import type { KeysOfType, LanguishLang, LinguistLang } from "./types";

export class GHLangs {
  // Map of all languages by every possible name (lower case) to some matching language.
  #lookup = new Map<string, LinguistLang>();

  constructor(public readonly all: LinguistLang[]) {
    this.setupLookup();
  }

  setupLookup() {
    const m = this.#lookup;
    const add = (key: string | undefined, lang: LinguistLang) => {
      const cleanKey = (key ?? "").trim().toLowerCase();
      if (cleanKey) m.set(cleanKey, lang);
    };
    for (const lang of this.all) {
      add(lang.name, lang);
      add(lang.nameFS, lang);
      add(lang.groupName, lang);
      add(lang.defaultAlias, lang);
      add(lang.githubLangId, lang);
      for (const alias of lang.aliases ?? []) add(alias, lang);
      for (const alias of lang.interpreters ?? []) add(alias, lang);
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
}

export class LGLangs {
  constructor(public readonly all: LanguishLang[]) {}

  *byField(field: KeysOfType<LanguishLang, string | undefined>): Generator<[string, LanguishLang]> {
    for (const lang of this.all) {
      const key = field && lang[field];
      if (key) yield [key, lang];
      if (key !== null && key !== undefined) yield [key, lang];
    }
  }
}

export const GH_LANGS = new GHLangs(linguistData as LinguistLang[]);
export const LG_LANGS = new LGLangs(languishData as LanguishLang[]);
