import OpenAI from "openai";
const openai = new OpenAI();

import schema from "@plangs/plangs/schemas/PlAiResult.json";

import { loadAllDefinitions } from "@plangs/definitions";
import { type N, type NPlang, PlangsGraph } from "@plangs/plangs";
import type { NPlangData, PlAiResult } from "@plangs/plangs/schema";

const pg = new PlangsGraph();
await loadAllDefinitions(pg);

const toMap = (k: N) => Object.fromEntries([...pg.nodes[k]].slice(0, 3).map(([key, data]) => [key, data.name]));

const existingData = {
  apps: toMap("app"),
  tool: toMap("tool"),
  lib: toMap("lib"),
  licenses: toMap("license"),
  paradigms: toMap("paradigm"),
  platforms: toMap("plat"),
  tags: toMap("tag"),
  tsys: toMap("tsys"),
};

const pl = {
  key: "pl+typescript",
  name: "TypeScript",
  urls: ["https://www.typescriptlang.org/"],
};

const py = pg.nodes.pl.get("pl+python") as NPlang;
const example: PlAiResult = {
  data: py.data as NPlangData,
  compilesTo: py.relCompilesTo.keys.existing,
  dialectOf: py.relDialectOf.keys.existing,
  implements: py.relImplements.keys.existing,
  influencedBy: py.relInfluencedBy.keys.existing,
  influenced: py.relInfluenced.keys.existing,
  licenses: py.relLicenses.keys.existing,
  paradigms: py.relParadigms.keys.existing,
  platforms: py.relPlatforms.keys.existing,
  tags: py.relTags.keys.existing,
  typeSystems: py.relTsys.keys.existing,
  writtenIn: py.relWrittenIn.keys.existing,

  apps: py.relApps.keys.existing,
  tools: py.relTools.keys.existing,
  libraries: py.relLibs.keys.existing,
};

const prompt = [
  `Describe the following programming language: ${JSON.stringify(pl)}, `,
  "all possible fields must be filled, and any that cannot be should be left empty or explained.",
  "Use the URLS provided and any other sources you may have to fill in the data.",
  "",
  "For fields that accept string keys, like licenses, paradigms, platforms, influences, etc., please use the keys from the following lists:",
  JSON.stringify(existingData, null, 2),
  "For apps, tools and libraries, feel free to fill a URL instead of a key, if you can't find a matching key.",
  "",
  "Here's an example of proper output for a language like Python (key: pl+python):",
  "",
  JSON.stringify(example, null, 2),
].join("\n");

const completion = await openai.chat.completions.create({
  model: "gpt-4o",
  messages: [
    { role: "system", content: "You are a programming languages expert." },
    { role: "user", content: prompt },
  ],
  response_format: {
    type: "json_schema",
    json_schema: {
      name: "PlAiResult",
      description: "https://plangs.page programming language data",
      schema: schema,
      strict: true, // Strict is "too strict" ... we need human review on the output anyway.
    },
  },
});

console.log(JSON.stringify(JSON.parse(completion.choices[0].message.content ?? "{}"), null, 2));
