import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+jsonschema", {
      name: "JSON Schema",
      description:
        "While JSON is probably the most popular format for exchanging data, JSON Schema is the vocabulary that enables JSON data consistency, validity, and interoperability at scale.",
      shortDesc:
        "JSON Schema enables the confident and reliable use of the JSON data format.",
      extGithubPath: "json-schema-org/json-schema-spec",
      extHomeURL: "https://json-schema.org/",
      isTranspiler: false,
    })
    .relParadigms.add("para+validation")
    .relTags.add("tag+webdev");
}
