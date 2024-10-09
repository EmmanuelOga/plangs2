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

  console.info("Prompt: ", prompt);

  const result = JSON.parse(completion.choices[0].message.content ?? "{}") as PlAiResult;
  const code = generateCode(pl.key, result);

  const name = pl.plainKey;
  const escaped = name.startsWith(".") ? `_${name.slice(1)}` : name;
  const path = join(DEFINTIONS_PATH, name[0], escaped, `${escaped}.ts`);
  await mkdir(dirname(path), { recursive: true }).catch(() => {});

  console.log("Writing result to", path);
  Bun.write(path, code);
}

const py = pg.nodes.pl.get("pl+python") as NPlang;
await aiGenerate(py);
