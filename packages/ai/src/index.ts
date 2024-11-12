import OpenAI from "openai";
import type { ChatCompletionMessageParam } from "openai/resources/index.mjs";

import { loadAllDefinitions } from "@plangs/definitions";
import { plangCodeGen, tspath } from "@plangs/languist/codegen";
import { type NPlang, PlangsGraph } from "@plangs/plangs";
import type { N, NPlangAI, NPlangData } from "@plangs/plangs/schema";
import schema from "@plangs/plangs/schemas/PlAiResult.json";
import { retrieveWebsites } from "./crawl";
import { plangFromAI } from "./fromAI";

type OpenAIMsg = ChatCompletionMessageParam;

async function plangPrompt(pg: PlangsGraph, pl: NPlang): Promise<OpenAIMsg[]> {
  return [
    { role: "system", content: "You are a programming languages expert." },
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
      content: `Example of a good result for language "${pl.name}", with key "${pl.key}", in JSON format:\n\n${JSON.stringify({
        data: pl.data as NPlangData,

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
      })}`,
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

export async function aiCompletion(pg: PlangsGraph, pl: NPlang) {
  try {
    const openai = new OpenAI();
    const prompt = await plangPrompt(pg, pl);

    const numTokens = prompt
      .map(m => m.content)
      .join("\n")
      .split(/\s+/).length;

    console.info("Requesting completion for", pl.name, "prompt size: ", numTokens, "tokens.");

    const completions = await openai.chat.completions.create({
      model: "gpt-4o",
      messages: prompt,
      response_format: {
        type: "json_schema",
        json_schema: {
          name: "NPlangAI",
          description: "https://plangs.page programming language data",
          schema: schema,
          strict: true,
        },
      },
    });

    if (!Array.isArray(completions.choices) || completions.choices.length === 0) {
      console.error("OpenAI didn't return any completions.");
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

/** Attempt to enrich the data for the language with given key. */
async function enrichOne(key: NPlang["key"]) {
  const pg = new PlangsGraph();
  await loadAllDefinitions(pg, { scanImages: false });

  const pl = pg.nodes.pl.get(process.argv[2] as NPlang["key"]);
  if (pl) {
    await aiCompletion(pg, pl);
  } else {
    console.error("Programming language not found:", key);
  }
}

/** Attempt to enrich the data for all existing programming languages. */
async function enrichAll() {
  const pg = new PlangsGraph();
  await loadAllDefinitions(pg, { scanImages: false });

  for (const pl of pg.nodes.pl.values) {
    await aiCompletion(pg, pl);
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
