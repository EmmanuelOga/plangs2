import OpenAI from "openai";
const openai = new OpenAI();

import { mkdir } from "node:fs/promises";
import { dirname, join } from "node:path";

import schema from "@plangs/plangs/schemas/PlAiResult.json";

import { loadAllDefinitions } from "@plangs/definitions";
import { type N, type NPlang, PlangsGraph } from "@plangs/plangs";
import type { PlAiResult } from "@plangs/plangs/schema";
import { example } from "./example";
import { generateCode } from "./generate";

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
  key: "pl+typescript" as NPlang["key"],
  plainKey: "typescript",
  name: "TypeScript",
  urls: ["https://www.typescriptlang.org/"],
};

const prompt = [
  `Describe the following programming language: ${JSON.stringify(pl)}, `,
  "all possible fields must be filled, and any that cannot be should be left empty or explained.",
  "Use the URLS provided and any other sources you may have to fill in the data.",
  "",
  "For fields that accept string keys, like licenses, paradigms, platforms, influences, etc., please use the keys from the following lists:",
  JSON.stringify(existingData, null, 2),
  "For apps, tools and libraries, feel free to fill a URL instead of a key, if you can't find a matching key.",
  "If you link images, ensure the width and height are at least 512px each, or skip it.",
  "",
  "Here's an example of proper output for a language like Python (key: pl+python):",
  "",
  // biome-ignore lint/style/noNonNullAssertion: it exists.
  JSON.stringify(example(pg.nodes.pl.get("pl+python")!), null, 2),
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

const result = JSON.parse(completion.choices[0].message.content ?? "{}") as PlAiResult;
const code = generateCode(pl.key, result);

export const DEFINTIONS_PATH = join(import.meta.dir, "../../definitions/src/definitions/plangs/");

const name = pl.plainKey;
const escaped = name.startsWith(".") ? `_${name.slice(1)}` : name;
const path = join(DEFINTIONS_PATH, name[0], escaped, `${escaped}.ts`);
await mkdir(dirname(path), { recursive: true }).catch(() => {});

console.log("Writing result to", path);
Bun.write(path, code);
