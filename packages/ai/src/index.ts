import OpenAI from "openai";
const openai = new OpenAI();

import { mkdir } from "node:fs/promises";
import { dirname, join } from "node:path";

import schema from "@plangs/plangs/schemas/PlAiResult.json";

import { loadAllDefinitions } from "@plangs/definitions";
import { type NPlang, PlangsGraph } from "@plangs/plangs";
import type { PlAiResult } from "@plangs/plangs/schema";

import { example, existingData } from "./example";
import { generateCode } from "./generate";

export const DEFINTIONS_PATH = join(import.meta.dir, "../../definitions/src/definitions/plangs/");

const pg = new PlangsGraph();
await loadAllDefinitions(pg);

export async function aiGenerate(pl: NPlang) {
  const prompt = [
    `Describe the "${pl.name}" programming language, which we give key "${pl.key}" and has websites: ${pl.websites.map(({ href }) => href).join(", ")}.`,
    "All possible fields must be filled, and any that cannot be should be left empty or explained.",
    "Use the URLS provided and any other sources you may have to fill in the data.",
    "",
    "For fields that accept string keys, like licenses, paradigms, platforms, influences, etc., please use the keys from the following lists:",
    JSON.stringify(existingData(pg), null, 2),
    "For apps, tools and libraries, feel free to fill a URL instead of a key, if you can't find a matching key.",
    "If you link images, ensure the width and height are at least 512px each, or skip it.",
    "",
    "Here's an example of proper output for a language like Python (key: pl+python):",
    "",
    JSON.stringify(example(pg.nodes.pl.get("pl+python") as NPlang), null, 2),
    "",
    "Here's the existing data for this language, that you will hopefully improve on. Please reuse the existing data unless it is wrong in some way:",
    "",
    JSON.stringify(example(pl), null, 2),
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

  const name = pl.plainKey;
  const escaped = name.startsWith(".") ? `_${name.slice(1)}` : name;
  const path = join(DEFINTIONS_PATH, name[0], escaped, `${escaped}.ts`);
  await mkdir(dirname(path), { recursive: true }).catch(() => {});

  console.log("Writing result to", path);
  Bun.write(path, code);
}

if (process.argv[2] === "improve-all") {
  console.log("Re-generating all definitions... this may take a while.");
  let count = pg.nodes.pl.size;
  for (const pl of pg.nodes.pl.values) {
    console.log("Prompting node #", count--, pl.key, pl.name, pl.websites.existing);
    await aiGenerate(pl);
  }
} else if (process.argv[2] === "generate") {
  try {
    const data = JSON.parse(process.argv[3]);
    console.log("TODO: generate", data);
  } catch (e) {
    console.error(
      "Invalid JSON data provided. Data must be a JSON object like: '{ key: 'pl+python', name: 'Python', websites: ['https://python.org'] }'",
    );
  }
} else {
  console.log("Usage: cmd <improve-all|generate>");
}
