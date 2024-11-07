import languishData from "./languish.json" with { type: "json" };
import linguistData from "./linguist.json" with { type: "json" };
import type { LanguishLang, LinguistLang, StringKeys } from "./types";

export class GHLangs {
  constructor(public readonly all: LinguistLang[]) {}

  *byField(field: StringKeys<LinguistLang>): Generator<[string, LinguistLang]> {
    for (const lang of this.all) {
      const key = field && lang[field];
      if (key) yield [key, lang];
      else console.warn(`missing lang.${field} for ${lang.name}`);
    }
  }
}

export class LGLangs {
  constructor(public readonly all: LanguishLang[]) {}

  *byField(field: StringKeys<LanguishLang>): Generator<[string, LanguishLang]> {
    for (const lang of this.all) {
      const key = field && lang[field];
      if (key) yield [key, lang];
      else console.warn(`missing lang.${field} for ${lang.key}`);
    }
  }
}

export const GH_LANGS = new GHLangs(linguistData as LinguistLang[]);
export const LG_LANGS = new LGLangs(languishData as LanguishLang[]);
