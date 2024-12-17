import type { ChatCompletionMessageParam } from "openai/resources/index.mjs";

import type { Vertices } from "@plangs/graphgen/library";
import type { PlangsGraph, VPlang } from "@plangs/plangs/graph";
import type { TPlangsVertex } from "@plangs/plangs/graph/generated";
import type { AIVPlang } from "@plangs/plangs/graph/vertex_data_schemas";

import { retrieveWebsites } from "./crawl";
type OpenAIMsg = ChatCompletionMessageParam;

// The example programming language to use as a reference, which should have pretty good data.
const EXAMPLE_PLANG_KEY = "pl+python";

// Typescript doesn't reify this so we need to list attributes manually.
const DATA_ATTR = [
  "created",
  "description",
  "extGithubPath",
  "extHomeURL",
  "extRedditPath",
  "extWikipediaPath",
  "extensions",
  "filenames",
  "githubStars",
  "images",
  "isTranspiler",
  "keywords",
  "links",
  "name",
  "releases",
  "shortDesc",
  "stackovTags",
] as const;

/** Create the prompt to enrich Plang data. */
export async function plangPrompt(pg: PlangsGraph, pl: VPlang): Promise<OpenAIMsg[]> {
  const examplePl = pg.plang.get(EXAMPLE_PLANG_KEY);
  if (!examplePl) throw new Error(`Example language not found: ${EXAMPLE_PLANG_KEY}`);

  const example: AIVPlang = {
    data: {},
    compilesTo: [...pl.relCompilesTo.keys],
    dialectOf: [...pl.relDialectOf.keys],
    implements: [...pl.relImplements.keys],
    influenced: [...pl.relInfluenced.keys],
    influencedBy: [...pl.relInfluencedBy.keys],
    licenses: [...pl.relLicenses.keys],
    paradigms: [...pl.relParadigms.keys],
    platforms: [...pl.relPlatforms.keys],
    tags: [...pl.relTags.keys],
    typeSystems: [...pl.relTypeSystems.keys],
    writtenWith: [...pl.relWrittenWith.keys],
  };

  // Copy only the data attributes that belong to the AIVPlang schema.
  for (const attr of DATA_ATTR) {
    if (pl.data[attr]) example.data[attr] = pl.data[attr] as any;
  }

  const externalLinks = new Set<string>();
  if (pl.urlHome) externalLinks.add(pl.urlHome);
  if (pl.github.url) externalLinks.add(pl.github.url);
  if (pl.urlWikipedia) externalLinks.add(pl.urlWikipedia);

  // TODO: maybe count tokens better.
  // We don't want to exceed the tokens limit, although this is not the nicest way to handle it.
  if (externalLinks.size < 3) for (const link of pl.links) externalLinks.add(link.url);

  return [
    {
      role: "system",
      content: ["You are an expert at programming languages and structured data extraction."].join(" "),
    },
    {
      role: "user",
      content: [
        `Describe the "${pl.name}" programming language, which we give id key "${pl.key}".`,
        "You will be given unstructured text from websites about a programming language, and should convert it into the given structure.",
        "If you don't find a good match for a field, you can leave it empty.",
        "For instance, you can leave the field compileTo as an empty array if the language is not a transpiler.",
        "If you don't have 99% certainty about releases and other fields, don't fill anything.",
        "When adding keywords, bear in mind that keywords should help identify the language in raw text,",
        "and not be generic terms, so a term like 'programming language' is not useful since it could match any and all languages.",
        "Use your own understanding of the language, if you know it, but prioritize the information provided by me.",
        "The 'description' SHOULD be information dense, but not long, perhaps 1 to 3 sentences.",
        "The 'description' SHOULD NOT include superfluous adjectives or generalization like 'used in many applications', which don't really provide valuable information.",
        "The 'shortDesc' should be an abbreviated, short, one-sentence version of the 'description' field.",
        "Avoid using the terms 'free' and 'open-source' on the description, since we include license info elsewhere.",
        "BOTH the 'description' and 'shortDesc' should be unique and not contain the language name; for instance, say: 'A dynamic language' instead of: 'Python is a dynamic language'.",
        "I'll provide some data and an example of what a good result looks like.",
      ].join("\n"),
    },
    {
      role: "user",
      content: `Example of a good result for language "${examplePl.name}", with key "${examplePl.key}", in JSON format:\n\n${JSON.stringify(example)}`,
    },
    {
      role: "user",
      content: (() => {
        const describeField = (keys: (keyof AIVPlang)[], vertices: Vertices<any>) =>
          `For fields: ${JSON.stringify(keys).slice(1, -1)}, use keys: ${[...vertices.values].map((vertex: TPlangsVertex) => `${vertex.key} (for ${vertex.name})`).join(", ")}.`;

        return [
          "The following is a list of keys you can use to fill each field.",
          describeField(["compilesTo", "dialectOf", "implements", "influencedBy", "influenced", "writtenWith"], pg.plang),
          describeField(["licenses"], pg.license),
          describeField(["paradigms"], pg.paradigm),
          describeField(["platforms"], pg.platform),
          describeField(["tags"], pg.tag),
          describeField(["typeSystems"], pg.typeSystem),
        ].join("\n");
      })(),
    },
    ...(await retrieveWebsites(externalLinks)),
  ];
}
