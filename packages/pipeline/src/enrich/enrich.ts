/**
 * AI enrichment (PLAN §5, "AI enrichment, modernized").
 *
 * Crawl the pages a node points at, hand them to Claude, and take back a
 * structured patch. Differences from the legacy `packages/ai`:
 *
 *  - Anthropic SDK + `claude-sonnet-5`, replacing OpenAI `gpt-4o`.
 *  - The output schema is DERIVED from `@plangs/schema`'s Zod node schema via
 *    `zodOutputFormat`, replacing the hand-massaged `AIVPlang.json`. The schema
 *    and the enricher can no longer drift apart.
 *  - The legacy clobbering bug (`ai/src/index.ts`: "TODO: apply
 *    Linguist/Languish data here, which should take precedence") is fixed
 *    STRUCTURALLY rather than by re-applying data afterwards: this is an
 *    ordinary `Source` with an `owns` list that is disjoint from every
 *    importer's (asserted by `assertNoOwnershipConflicts`), so the patcher
 *    rejects any write to a pipeline-owned field. Ordering stops mattering.
 *  - Output is a patch + provenance report, reviewed as a PR. Never straight
 *    to main.
 *
 * This module is NOT run as part of `--all` and has no API key in CI: it is
 * built to typecheck and to be unit-tested against a mocked client.
 */

import { zodOutputFormat } from "@anthropic-ai/sdk/helpers/zod";
import { NODE_SCHEMAS } from "@plangs/schema";
import type { z } from "zod";
import type { NodeDoc, RunContext, Source } from "../core/types.ts";
import { type Crawler, crawl } from "./crawl.ts";

const SOURCE_ID = "ai";

/** The cost/quality tier the plan calls for. */
export const MODEL = "claude-sonnet-5";

/**
 * Fields the model may write.
 *
 * Deliberately excludes everything an importer owns: the github* / extensions
 * fields (linguist), the ranking + trend fields (languish), and created /
 * extHomeURL (wikidata, which has structured facts and beats a language model
 * reading a homepage).
 */
export const AI_OWNED_FIELDS = ["description", "shortDesc", "keywords", "extWikipediaPath", "extRedditPath", "stackovTags"] as const;

/**
 * The structured-output schema, projected off the canonical plang schema.
 * `.pick()` means a field added to `@plangs/schema` shows up here the moment it
 * is added to `AI_OWNED_FIELDS` — no second schema to maintain.
 */
export const aiPlangSchema: z.ZodObject = NODE_SCHEMAS.plang.pick(
  Object.fromEntries(AI_OWNED_FIELDS.map(f => [f, true])) as Record<(typeof AI_OWNED_FIELDS)[number], true>,
);

/** The slice of the Anthropic SDK we use. Narrow on purpose — trivial to mock. */
export interface AnthropicLike {
  messages: {
    parse(params: Record<string, unknown>): Promise<{ parsed_output?: unknown; stop_reason?: string | null }>;
  };
}

export const SYSTEM_PROMPT = [
  "You maintain plangs.page, a curated database of programming languages.",
  "You are given the crawled text of a language's own pages. Extract only facts those pages support.",
  "Rules:",
  "- Never guess. Omit a field entirely rather than invent a value.",
  "- description: 2-4 sentences, neutral and factual, no marketing language.",
  "- shortDesc: a single sentence under 160 characters.",
  "- keywords: lowercase search terms someone would actually type.",
  "- extWikipediaPath: the page title only (e.g. 'Nim_(programming_language)'), never a full URL.",
  "- extRedditPath: the subreddit name only (e.g. 'nim'), never a full URL.",
  "- stackovTags: exact StackOverflow tag slugs.",
].join("\n");

/** The URLs a node points at, in the order most likely to be informative. */
export function pagesFor(doc: NodeDoc): string[] {
  const s = (v: unknown) => (typeof v === "string" && v ? v : undefined);
  const home = s(doc.data.extHomeURL);
  const github = s(doc.data.extGithubPath);
  const wikipedia = s(doc.data.extWikipediaPath);
  return [home, github && `https://github.com/${github}`, wikipedia && `https://en.wikipedia.org/wiki/${wikipedia}`].filter(
    (u): u is string => typeof u === "string",
  );
}

export function buildUserPrompt(doc: NodeDoc, pages: { url: string; title: string; markdown: string }[]): string {
  const parts = [`Programming language: ${doc.data.name ?? doc.slug} (node key: ${doc.key}).`];
  for (const page of pages) {
    parts.push(`\n--- Source: ${page.url} (title: ${page.title}) ---\n${page.markdown}`);
  }
  return parts.join("\n");
}

export interface EnrichOptions {
  /** Injected in tests. Defaults to a real client built from ANTHROPIC_API_KEY. */
  client?: AnthropicLike;
  /** Injected in tests. Defaults to the real jsdom crawler. */
  crawler?: Crawler;
}

/** Lazily construct the real SDK client — importing must never require a key. */
async function defaultClient(): Promise<AnthropicLike> {
  const { default: Anthropic } = await import("@anthropic-ai/sdk");
  return new Anthropic() as unknown as AnthropicLike;
}

/**
 * Build the enrichment source. `--opt.keys=pl/nim,pl/rust` selects nodes;
 * enrichment is expensive and human-reviewed, so it never fans out over the
 * whole dataset by default.
 */
export function createEnrichSource(opts: EnrichOptions = {}): Source {
  return {
    id: SOURCE_ID,
    description: `AI enrichment via Anthropic ${MODEL} — prose + link fields only. Requires ANTHROPIC_API_KEY.`,
    owns: [...AI_OWNED_FIELDS],

    async run(ctx: RunContext): Promise<void> {
      const keys = (ctx.options.keys ?? "")
        .split(",")
        .map(k => k.trim())
        .filter(Boolean);
      if (!keys.length) {
        throw new Error("ai: pass --opt.keys=pl/nim[,pl/rust]. Enrichment is never run over the whole dataset unattended.");
      }

      const client = opts.client ?? (await defaultClient());
      const crawler = opts.crawler ?? (urls => crawl(urls));
      const format = zodOutputFormat(aiPlangSchema);

      for (const key of keys) {
        const doc = ctx.node(key);
        if (!doc) {
          ctx.review({ key, kind: "unknown-node", message: `No node file for '${key}'.` });
          continue;
        }

        const urls = pagesFor(doc);
        if (!urls.length) {
          ctx.review({ key, kind: "no-sources", message: "Node has no extHomeURL / extGithubPath / extWikipediaPath to crawl." });
          continue;
        }

        const pages = await crawler(urls);
        if (!pages.length) {
          ctx.review({ key, kind: "crawl-empty", message: `Nothing readable at: ${urls.join(", ")}` });
          continue;
        }
        for (const page of pages) ctx.origin(page.url);

        const response = await client.messages.parse({
          model: MODEL,
          max_tokens: 16000,
          system: SYSTEM_PROMPT,
          messages: [{ role: "user", content: buildUserPrompt(doc, pages) }],
          output_config: { format },
        });

        if (response.stop_reason === "refusal") {
          ctx.review({ key, kind: "refusal", message: "The model refused; output is not schema-shaped and was discarded." });
          continue;
        }

        // Re-validate rather than trust `parsed_output`: the schema is the
        // contract, and this also keeps the mocked-client tests honest.
        const parsed = aiPlangSchema.safeParse(response.parsed_output ?? {});
        if (!parsed.success) {
          ctx.review({
            key,
            kind: "invalid-output",
            message: `Model output failed schema validation: ${parsed.error.issues.map(i => `${i.path.join(".")} ${i.message}`).join("; ")}`,
          });
          continue;
        }

        // Drop absent fields: `undefined` in a patch deletes, and the model
        // staying quiet about a field is not a reason to erase curated data.
        const patch = Object.fromEntries(Object.entries(parsed.data).filter(([, v]) => v !== undefined));
        if (!Object.keys(patch).length) {
          ctx.review({ key, kind: "empty-output", message: "The model returned no usable fields." });
          continue;
        }

        // "exact": the node was named explicitly via --opt.keys and the facts
        // come from its own declared pages — no guessing, but not a
        // `sources.*` id lookup either.
        ctx.match({ key, method: "exact", remoteId: pages.map(p => p.url).join(" ") });
        ctx.patch(key, patch);
      }
    },
  };
}

/** The default enrichment source (real client, real crawler). */
export const enrichSource: Source = createEnrichSource();
