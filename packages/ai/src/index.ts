import OpenAI from "openai";
import type { ChatCompletionMessageParam } from "openai/resources/index.mjs";

import { loadAllDefinitions } from "@plangs/definitions";
import { plangCodeGen, tspath } from "@plangs/languist/codegen";
import { type NPlang, PlangsGraph } from "@plangs/plangs";
import type { CommonNodeData, N, NPlangAI, NPlangBaseData } from "@plangs/plangs/schema";
import NPlangAISchema from "@plangs/plangs/schemas/NPlangAI.json";
import { retrieveWebsites } from "./crawl";
import { plangFromAI } from "./fromAI";

type OpenAIMsg = ChatCompletionMessageParam;

async function plangPrompt(pg: PlangsGraph, pl: NPlang, examplePl: NPlang): Promise<OpenAIMsg[]> {
  const { name, description, websites, keywords }: Partial<CommonNodeData> = pl.data;
  const { extensions, filenames, year, images, isTranspiler, isMainstream, releases }: Partial<NPlangBaseData> = pl.data;

  const example: NPlangAI = {
    commonData: { name, description, websites, keywords } as CommonNodeData,
    basicPlangData: { extensions, filenames, year, images, isTranspiler, isMainstream, releases } as NPlangBaseData,
    apps: pl.relApps.keys.existing,
    compilesTo: pl.relCompilesTo.keys.existing,
    dialectOf: pl.relDialectOf.keys.existing,
    implements: pl.relImplements.keys.existing,
    influenced: pl.relInfluenced.keys.existing,
    influencedBy: pl.relInfluencedBy.keys.existing,
    libraries: pl.relLibs.keys.existing,
    licenses: pl.relLicenses.keys.existing,
    paradigms: pl.relParadigms.keys.existing,
    platforms: pl.relPlatforms.keys.existing,
    tags: pl.relTags.keys.existing,
    tools: pl.relTools.keys.existing,
    typeSystems: pl.relTsys.keys.existing,
    writtenIn: pl.relWrittenIn.keys.existing,
  };

  return [
    {
      role: "system",
      content: [
        "You are an expert at programming languages and structured data extraction. ",
        "You will be given unstructured text from websites about a programming language, and should convert it into the given structure.",
      ].join("."),
    },
    {
      role: "user",
      content: [
        `Describe the "${pl.name}" programming language, which we give id key "${pl.key}".`,
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
        const describeField = (keys: (keyof NPlangAI)[], node: N) =>
          `For fields: ${JSON.stringify(keys).slice(1, -1)}, use keys: ${pg.nodes[node].values.map(n => `${n.key} (for ${n.name})`).join(", ")}.`;

        return [
          "The following is a list of keys you can use to fill each field.",
          describeField(["apps"], "app"),
          describeField(["compilesTo", "dialectOf", "implements", "influencedBy", "influenced", "writtenIn"], "pl"),
          describeField(["libraries"], "lib"),
          describeField(["licenses"], "license"),
          describeField(["paradigms"], "paradigm"),
          describeField(["platforms"], "plat"),
          describeField(["tags"], "tag"),
          describeField(["tools"], "tool"),
          describeField(["typeSystems"], "tsys"),
        ].join("\n");
      })(),
    },
    ...(await retrieveWebsites(pl.websites)),
  ];
}

export async function aiCompletion(pg: PlangsGraph, pl: NPlang, examplePl: NPlang) {
  try {
    const openai = new OpenAI();
    const prompt = await plangPrompt(pg, pl, examplePl);

    console.info("Requesting completion for", pl.name);

    // https://platform.openai.com/docs/guides/structured-outputs
    // Structured Outputs is the evolution of JSON mode.
    // While both ensure valid JSON is produced, only Structured Outputs ensure schema adherance.
    const completions = await openai.chat.completions.create({
      model: "gpt-4o",
      messages: prompt,
      response_format: {
        type: "json_schema",
        json_schema: {
          name: "NPlangAI",
          description: "https://plangs.page programming language data",
          // https://platform.openai.com/docs/guides/structured-outputs#supported-schemas
          schema: NPlangAISchema,
          strict: true,
        },
      },
    });

    if (completions.usage?.total_tokens) console.info("Total tokens used for", pl.name, ":", completions.usage.total_tokens);

    if (!Array.isArray(completions.choices) || completions.choices.length === 0) {
      console.error("OpenAI didn't return any completions.");
      return;
    }

    // https://platform.openai.com/docs/guides/structured-outputs#refusals
    if (completions.choices[0].message.refusal) {
      console.error("OpenAI refused to answer!", completions.choices[0].message);
      return;
    }

    const result = JSON.parse(completions.choices[0].message.content ?? "{}") as NPlangAI;
    const newPl = plangFromAI(pg, pl, result);

    const path = tspath(pl.plainKey);
    console.log("Writing result to", path);
    Bun.write(path, plangCodeGen(newPl));
  } catch (e) {
    console.error("Error", e);
  }
}

/** return a pl for which we have pretty good data, to use as an example for the LLM. */
function examplePl(pg: PlangsGraph): NPlang {
  const exKey = "pl+python";
  const examplePl = pg.nodes.pl.get(exKey);
  if (!examplePl) throw new Error(`Example language not found: ${exKey}`);
  return examplePl;
}

/** Attempt to enrich the data for the language with given key. */
async function enrichOne(key: NPlang["key"]) {
  const pg = new PlangsGraph();
  await loadAllDefinitions(pg, { scanImages: false });

  const pl = pg.nodes.pl.get(process.argv[2] as NPlang["key"]);
  if (pl) {
    await aiCompletion(pg, pl, examplePl(pg));
  } else {
    console.error("Programming language not found:", key);
  }
}

/** Attempt to enrich the data for all existing programming languages. */
async function enrichAll() {
  const pg = new PlangsGraph();
  await loadAllDefinitions(pg, { scanImages: false });

  for (const pl of pg.nodes.pl.values) {
    await aiCompletion(pg, pl, examplePl(pg));
  }
}

const argv = process.argv[2] ?? "";
if (argv.startsWith("pl+")) {
  enrichOne(argv as NPlang["key"]);
} else if (argv === "all") {
  enrichAll();
} else {
  console.info('Usage: Provide the string "all" or a plang key (`pl+${key}`) as argument.\n');
  console.info(`Example: bun ${__filename} pl+python`);
  console.info(`Example: bun ${__filename} all`);
  process.exit(1);
}

console.warn("NOTE: remember that the generated code may need manual adjustments, sometimes MANY adjustments :-/.");
