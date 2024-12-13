import OpenAI from "openai";

import { loadDefinitions } from "@plangs/definitions";
import { tsLongPath, vertexCodeGen } from "@plangs/languist/codegen";
import { reformatCode } from "@plangs/languist/reformat";
import { PlangsGraph, type VPlang } from "@plangs/plangs/graph";
import type { VPlangKey } from "@plangs/plangs/graph/generated";
import type { AIVPlang } from "@plangs/plangs/graph/vertex_data_schemas";
import AIVPlangSchema from "@plangs/plangs/schema/AIVPlang.json";

import { plangFromAI } from "./fromAI";
import { plangPrompt } from "./plangPrompt";

export async function aiCompletion(pg: PlangsGraph, pl: VPlang): Promise<{ result: "success" } | { result: "error"; message: string }> {
  try {
    const openai = new OpenAI();
    const prompt = await plangPrompt(pg, pl);

    // https://platform.openai.com/docs/guides/structured-outputs#supported-schemas
    const completions = await openai.chat.completions.create({
      model: "gpt-4o",
      messages: prompt,
      response_format: {
        type: "json_schema",
        json_schema: { name: "AIVPlang", strict: true, schema: AIVPlangSchema },
      },
    });

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
    // TODO: query Github API if we have a Github repository.

    const path = tsLongPath(pl);
    console.log("Writing ", path, "LLM Tokens used:", completions.usage?.total_tokens ?? "unknown");
    Bun.write(path, await reformatCode(vertexCodeGen(newPl)));
  } catch (err) {
    return { result: "error", message: `${err}` };
  }

  return { result: "success" };
}

/** Attempt to enrich the data for the language with given key. */
async function enrichOne(key: VPlangKey) {
  const pg = new PlangsGraph();
  await loadDefinitions(pg, { scanImages: false });
  pg.materialize();

  const pl = pg.plang.get(process.argv[2] as VPlangKey);
  if (pl) {
    const result = await aiCompletion(pg, pl);
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
  pg.materialize();

  for (const pl of pg.plang.values) {
    await aiCompletion(pg, pl);
  }
}

const argv = process.argv[2] ?? "";
if (argv.startsWith("pl+")) {
  console.log("Enriching data for", argv);
  enrichOne(argv as VPlangKey);
} else if (argv === "all") {
  console.log("Enriching data for all programming languages.");
  enrichAll();
} else {
  console.info('Usage: Provide the string "all" or a plang key (`pl+${key}`) as argument.\n');
  console.info(`Example: bun ${__filename} pl+python`);
  console.info(`Example: bun ${__filename} all`);
  process.exit(1);
}
