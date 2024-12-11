import OpenAI from "openai";
import type { ChatCompletionMessageParam } from "openai/resources/index.mjs";

import { loadDefinitions } from "@plangs/definitions";
import type { Vertices } from "@plangs/graphgen/library";
import { tsLongPath, vertexCodeGen } from "@plangs/languist/codegen";
import { PlangsGraph, type VPlang } from "@plangs/plangs/graph";
import type { TPlangsVertex, VPlangKey } from "@plangs/plangs/graph/generated";
import type { AIVPlang } from "@plangs/plangs/graph/vertex_data_schemas";
import AIVPlangSchema from "@plangs/plangs/schema/AIVPlang.json";

import { retrieveWebsites } from "./crawl";
import { plangFromAI } from "./fromAI";

type OpenAIMsg = ChatCompletionMessageParam;

async function plangPrompt(pg: PlangsGraph, pl: VPlang, examplePl: VPlang): Promise<OpenAIMsg[]> {
  const { name, description, keywords, extensions, filenames, created, isTranspiler, releases } = pl.data;

  const example: AIVPlang = {
    data: { name, description, keywords, extensions, filenames, created, isTranspiler, releases },
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

  const externalLinks: string[] = [];

  if (pl.urlHome) externalLinks.push(pl.urlHome);
  if (pl.github.url) externalLinks.push(pl.github.url);
  if (pl.urlRepository) externalLinks.push(pl.urlRepository);
  if (pl.urlWikipedia) externalLinks.push(pl.urlWikipedia);

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
        "For instance, you can live the field compileTo as an empty array if the language is not a transpiler.",
        "When adding keywords, bear in mind that keywords should help identify the language in raw text,",
        "and not be generic terms, so a term like 'programming language' is not useful since it could match any and all languages.",
        "Use your own understanding of the language, if you know it, but prioritize the information provided by me.",
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

export async function aiCompletion(
  pg: PlangsGraph,
  pl: VPlang,
  examplePl: VPlang,
): Promise<{ result: "success" } | { result: "error"; message: string }> {
  try {
    const openai = new OpenAI();
    const prompt = await plangPrompt(pg, pl, examplePl);

    console.info("Requesting completion for", pl.name);

    // https://platform.openai.com/docs/guides/structured-outputs
    const completions = await openai.chat.completions.create({
      model: "gpt-4o",
      messages: prompt,
      // https://platform.openai.com/docs/guides/structured-outputs#supported-schemas
      response_format: {
        type: "json_schema",
        json_schema: { name: "AIVPlang", strict: true, schema: AIVPlangSchema },
      },
    });

    if (completions.usage?.total_tokens) {
      console.info("Total tokens used for", pl.name, ":", completions.usage.total_tokens);
    }

    if (!Array.isArray(completions.choices) || completions.choices.length === 0) {
      return { result: "error", message: "OpenAI didn't return any completions." };
    }

    // https://platform.openai.com/docs/guides/structured-outputs#refusals
    if (completions.choices[0].message.refusal) {
      return { result: "error", message: `OpenAI refused to answer! ${completions.choices[0].message}` };
    }

    const result = JSON.parse(completions.choices[0].message.content ?? "{}") as AIVPlang;

    const newPl = plangFromAI(pg, pl, result);

    // TODO: apply Linguist/Languish data here, which should take precedence over the AI data.

    const path = tsLongPath(pl);
    console.log("Writing result to", path);
    Bun.write(path, vertexCodeGen(newPl));
  } catch (err) {
    return { result: "error", message: `${err}` };
  }

  return { result: "success" };
}

/** return a pl for which we have pretty good data, to use as an example for the LLM. */
function examplePl(pg: PlangsGraph): VPlang {
  const exKey = "pl+python";
  const examplePl = pg.plang.get(exKey);
  if (!examplePl) throw new Error(`Example language not found: ${exKey}`);
  return examplePl;
}

/** Attempt to enrich the data for the language with given key. */
async function enrichOne(key: VPlangKey) {
  const pg = new PlangsGraph();
  await loadDefinitions(pg, { scanImages: false });

  const pl = pg.plang.get(process.argv[2] as VPlangKey);
  if (pl) {
    const result = await aiCompletion(pg, pl, examplePl(pg));
    if (result.result === "error") {
      console.error(result.message);
    }
  } else {
    console.error("Programming language not found:", key);
  }
}

/** Attempt to enrich the data for all existing programming languages. */
async function enrichAll() {
  const pg = new PlangsGraph();
  await loadDefinitions(pg, { scanImages: false });

  for (const pl of pg.plang.values) {
    await aiCompletion(pg, pl, examplePl(pg));
  }
}

const argv = process.argv[2] ?? "";
if (argv.startsWith("pl+")) {
  enrichOne(argv as VPlangKey);
} else if (argv === "all") {
  enrichAll();
} else {
  console.info('Usage: Provide the string "all" or a plang key (`pl+${key}`) as argument.\n');
  console.info(`Example: bun ${__filename} pl+python`);
  console.info(`Example: bun ${__filename} all`);
  process.exit(1);
}
