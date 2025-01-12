import { join } from "node:path";
import OpenAI from "openai";

import { loadDefinitions } from "@plangs/definitions";
import { reformatCode } from "@plangs/languist/reformat";
import { PlangsGraph, type VPlang } from "@plangs/plangs/graph";
import type { VPlangKey } from "@plangs/plangs/graph/generated";
import type { AIVPlang } from "@plangs/plangs/graph/vertex_data_schemas";
import AIVPlangSchema from "@plangs/plangs/schema/AIVPlang.json";

import { bulkImport } from "./bulk";
import { plangFromAI } from "./fromAI";
import { plangPrompt } from "./plangPrompt";

const DEF_ROOT = join(import.meta.dir, "../../definitions");

export async function aiRegenPlang(pg: PlangsGraph, pl: VPlang): Promise<{ result: "success" } | { result: "error"; message: string }> {
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

    const path = join(DEF_ROOT, "src/definitions", pl.tsName);
    console.log("Writing ", path, "LLM Tokens used:", completions.usage?.total_tokens ?? "unknown");
    await Bun.write(path, await reformatCode(newPl.toCode()));
  } catch (err) {
    return { result: "error", message: `${err}` };
  }

  return { result: "success" };
}

export async function loadPG(): Promise<PlangsGraph> {
  const pg = new PlangsGraph();
  await loadDefinitions(pg, { scanImages: false });
  return pg.materialize();
}

/** Attempt to enrich the data for the language with given key. */
async function enrichOne(pg: PlangsGraph, key: VPlangKey) {
  const pl = pg.plang.get(process.argv[2] as VPlangKey);
  if (pl) {
    const result = await aiRegenPlang(pg, pl);
    if (result.result === "error") {
      console.error(result.message);
    }
  } else {
    console.error("Programming language not found:", key);
  }
}

/** Attempt to enrich the data for all existing programming languages. */
async function enrichAll(pg: PlangsGraph) {
  for (const pl of pg.plang.values) {
    await aiRegenPlang(pg, pl);
  }
}

const argv = process.argv[2] ?? "";
if (argv.startsWith("pl+")) {
  console.log("Enriching data for", argv);
  enrichOne(await loadPG(), argv as VPlangKey);
} else if (argv === "all") {
  console.log("Enriching data for all programming languages.");
  enrichAll(await loadPG());
} else if (argv === "bulk") {
  console.log("Bulk loading from bulk.ts script");
  await bulkImport(await loadPG());
} else {
  console.info('Usage: Provide the string "all" or a plang key (`pl+${key}`) as argument.\n');
  console.info("Example: bun run enrich pl+python");
  console.info("Example: bun run enrich all");
  console.info("Example: bun run enrich bulk");
  process.exit(1);
}
