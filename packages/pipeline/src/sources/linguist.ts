/**
 * GitHub Linguist importer (PLAN §5.1) — MIT licensed.
 *
 * Parses `languages.yml` + `popular.yml` straight from the upstream repo.
 * This DELETES the legacy Docker + Ruby step (`packages/languist/in/main.rb`,
 * which shelled out to the linguist gem to dump JSON): `languages.yml` is the
 * gem's own data file, so we can read it directly.
 */

import { parse as parseYaml } from "yaml";
import { indexRemote, normalize, resolveNode, reviewFor } from "../core/match.ts";
import type { NodeDoc, RunContext, Source } from "../core/types.ts";

const SOURCE_ID = "linguist";
const RAW = "https://raw.githubusercontent.com/github-linguist/linguist/main/lib/linguist";
export const LANGUAGES_URL = `${RAW}/languages.yml`;
export const POPULAR_URL = `${RAW}/popular.yml`;

/** One entry of `languages.yml`, plus the name (which is the YAML map key). */
export interface LinguistLang {
  name: string;
  type?: string;
  color?: string;
  extensions?: string[];
  filenames?: string[];
  interpreters?: string[];
  aliases?: string[];
  language_id?: number;
  group?: string;
  fs_name?: string;
  popular?: boolean;
}

/** Shape of a raw `languages.yml` entry (snake_case, as upstream writes it). */
interface RawLang {
  type?: string;
  color?: string;
  extensions?: string[];
  filenames?: string[];
  interpreters?: string[];
  aliases?: string[];
  language_id?: number;
  group?: string;
  fs_name?: string;
}

/** Parse `languages.yml` + `popular.yml` into a flat list. */
export function parseLinguist(languagesYml: string, popularYml: string): LinguistLang[] {
  const langs = (parseYaml(languagesYml) ?? {}) as Record<string, RawLang>;
  const popular = new Set(((parseYaml(popularYml) ?? []) as string[]).map(n => n.trim()));
  return Object.entries(langs).map(([name, raw]) => ({
    name,
    type: raw.type,
    color: raw.color,
    extensions: raw.extensions,
    filenames: raw.filenames,
    interpreters: raw.interpreters,
    aliases: raw.aliases,
    language_id: raw.language_id,
    group: raw.group,
    fs_name: raw.fs_name,
    popular: popular.has(name),
  }));
}

/**
 * Build the field patch for a matched linguist record.
 *
 * `githubLangId` is a STRING in our schema while linguist stores a number —
 * converting here (rather than at write time) keeps re-runs byte-identical.
 */
export function patchFor(lang: LinguistLang): Record<string, unknown> {
  return {
    githubName: lang.name,
    githubColor: lang.color,
    githubLangId: lang.language_id === undefined ? undefined : String(lang.language_id),
    githubType: lang.type,
    githubPopular: lang.popular ?? false,
    extensions: lang.extensions?.length ? [...lang.extensions] : undefined,
    sources: { linguist: lang.name },
  };
}

/**
 * Node-side identifiers to try against the linguist index, in priority order.
 *
 * Deliberately NOT `doc.slug`: slugs are short URL identifiers of our own
 * making and collide with other languages' alias tables (the slug `ts` is a
 * real TypeScript alias, `c` and `d` are single letters, …). A slug hit would
 * be recorded as a confident `exact` match and write the wrong language's
 * colour and extensions. Only upstream-shaped names are trusted.
 */
function exactNamesOf(doc: NodeDoc): (string | undefined)[] {
  const s = (v: unknown) => (typeof v === "string" ? v : undefined);
  return [s(doc.data.githubName), s(doc.data.name)];
}

export const linguistSource: Source = {
  id: SOURCE_ID,
  description: "GitHub Linguist languages.yml — colors, extensions, language ids, type, popularity (MIT).",
  owns: ["githubColor", "extensions", "githubLangId", "githubType", "githubPopular", "githubName", `sources.${SOURCE_ID}`],

  async run(ctx: RunContext): Promise<void> {
    const languagesUrl = ctx.options.languagesUrl ?? LANGUAGES_URL;
    const popularUrl = ctx.options.popularUrl ?? POPULAR_URL;
    ctx.origin(languagesUrl);
    ctx.origin(popularUrl);

    const langs = parseLinguist(await ctx.fetch(languagesUrl), await ctx.fetch(popularUrl));

    /*
     * Every identity our own dataset already tracks.
     *
     * Needed because Linguist's alias/interpreter tables answer a DIFFERENT
     * question than ours: they exist to label a *file*, not to identify a
     * *project*. So JavaScript lists `node` among its aliases and
     * `bun`/`deno`/`v8` among its interpreters; Ruby lists `jruby`; Python
     * lists `pypy`; Lua lists `luajit`. Each of those is a language or runtime
     * we model as its own node, and taking them as identities matched pl/bun to
     * JavaScript — which would have written githubName "JavaScript",
     * githubLangId 183 and all 25 JS extensions onto the Bun runtime. Silently,
     * and the same for node, deno, v8, jruby, pypy, luajit, sbcl, rakudo, tsx.
     */
    const ourIdentities = new Set<string>();
    for (const doc of ctx.nodesOfKind("plang")) {
      ourIdentities.add(normalize(doc.slug));
      const name = doc.data.name;
      if (typeof name === "string") ourIdentities.add(normalize(name));
    }

    const index = indexRemote(langs, lang => {
      const self = normalize(lang.name);
      // `fs_name` is this same language spelled for a filesystem; `language_id`
      // is GitHub's numeric id. Both are unambiguously ITS own identifiers.
      const exact = [...(lang.fs_name ? [lang.fs_name] : []), ...(lang.language_id === undefined ? [] : [String(lang.language_id)])];
      const fuzzy: string[] = [];

      /*
       * An upstream alias is an identity only if it does not name a DIFFERENT
       * thing we track.
       *
       *   "objectivec" for Objective-C -> same topic, nothing else claims it,
       *                                   so it is a real spelling. Exact.
       *   "node" for JavaScript        -> pl/node is its own node. Ambiguous,
       *                                   so it becomes a review candidate.
       *
       * The check is against OUR dataset, which is the only place the conflict
       * is visible: upstream sees no problem, because upstream is not trying to
       * tell Bun and JavaScript apart.
       */
      for (const alias of [...(lang.aliases ?? []), ...(lang.interpreters ?? [])]) {
        const n = normalize(alias);
        if (n !== self && ourIdentities.has(n)) fuzzy.push(alias);
        else exact.push(alias);
      }
      return { id: lang.name, exact, fuzzy };
    });

    for (const doc of ctx.nodesOfKind("plang")) {
      const res = resolveNode(index, doc, SOURCE_ID, exactNamesOf(doc), l => l.name);

      const review = reviewFor(doc, SOURCE_ID, res, l => l.name);
      if (review) {
        ctx.review(review);
        continue;
      }

      if (!res.record) {
        ctx.unmatched(doc.key);
        continue;
      }

      ctx.match({ key: doc.key, method: res.method, remoteId: res.record.name });
      ctx.patch(doc.key, patchFor(res.record));
    }
  },
};
