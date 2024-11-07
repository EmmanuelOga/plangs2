import OpenAI from "openai";
const openai = new OpenAI();

import { mkdir } from "node:fs/promises";
import { dirname } from "node:path";

import { loadAllDefinitions } from "@plangs/definitions";
import { plangCodeGen } from "@plangs/languist/codegen";
import { NPlang, PlangsGraph } from "@plangs/plangs";
import type { NPlangAI } from "@plangs/plangs/schema";
import schema from "@plangs/plangs/schemas/PlAiResult.json";

import { example, existingData } from "./example";

const pg = new PlangsGraph();
await loadAllDefinitions(pg);

export async function aiGenerate(pl: NPlang) {
  // TODO: this is not gonna be as accurate as possible because the model won't crawl the page.
  // So, we need to crawl the page/s here and then send the data to the model.
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
        strict: true,
      },
    },
  });

  const result = JSON.parse(completion.choices[0].message.content ?? "{}") as NPlangAI;

  const newPl = new NPlang(pg, pl.key); // TODO: convert the result to a new NPlang.

  const code = plangCodeGen(newPl);

  await mkdir(dirname(pl.tspath), { recursive: true }).catch(() => {});

  // console.log("Writing result to", path); Bun.write(path, code);
}

const GENERATE_SAMPLE = [{ name: "Python", key: "pl+python", websites: ["https://python.org"] }] as const;

if (process.argv[2] === "improve-all") {
  console.log("Re-generating all definitions... this may take a while.");
  let count = pg.nodes.pl.size;
  for (const pl of pg.nodes.pl.values) {
    console.log("Prompting node #", count--, pl.key, pl.name, pl.websites.existing);
    await aiGenerate(pl);
  }
} else if (process.argv[2] === "generate") {
  try {
    const data = JSON.parse(await Bun.file(process.argv[3]).text()) as {
      name: string;
      key: NPlang["key"];
      websites: string[];
    }[];

    for (const plData of data) {
      const pl = pg.nodes.pl.set(plData.key, { name: plData.name, websites: plData.websites.map(href => ({ href, title: plData.name })) });
      await aiGenerate(pl);
    }
  } catch (e) {
    console.log(`Error parsing (${e}). Data should look lilke this:\n\n${JSON.stringify(GENERATE_SAMPLE)}`);
  }
} else {
  console.log(
    "Usage: cmd improve-all - WARNING: will call openai to regenerate all definitions! This can be done every now and then to attempt to find more data.",
  );
  console.log(`Usage: cmd generate input.json - Requires a JSON array of objects, example: ${JSON.stringify(GENERATE_SAMPLE)}`);
}
