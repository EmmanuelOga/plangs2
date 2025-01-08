import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.library
    .set("lib+typescript-json-schema", {
      name: "typescript-json-schema",
      description: "Generate json-schema from your Typescript sources.",
      shortDesc: "Generate json-schema from your Typescript sources.",
      extGithubPath: "YousefED/typescript-json-schema",
    })
    .relPlangs.add(
      "pl+javascript",
      "pl+javascriptcore",
      "pl+jsonschema",
      "pl+typescript",
    )
    .relTags.add("tag+webdev")
    .relWrittenWith.add("pl+typescript");
}
