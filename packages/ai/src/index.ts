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

async function plangPrompt(pl: NPlang): Promise<OpenAIMsg[]> {
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

export async function aiCompletion(pl: NPlang) {
  const openai = new OpenAI();
  const prompt = await plangPrompt(pl);

  console.info("Requesting completion for", pl.name, "prompt size: ", prompt.map(m => m.content).join("").length);

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
  const newPl = plangFromAI(pg, pl.key, result);

  const path = tspath(pl.plainKey);
  console.log("Writing result to", path);
  const code = plangCodeGen(newPl);
  Bun.write("result.ts", code);
}

const pg = new PlangsGraph();
await loadAllDefinitions(pg, { scanImages: false });

const pl = pg.nodes.pl.get("pl+python") as NPlang;
// console.log((await plangPrompt(pl)).map(m => m.content).join("\n".repeat(10)));
console.log(await aiCompletion(pl));
