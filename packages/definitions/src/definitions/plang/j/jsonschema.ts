import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+jsonschema", { name: "JSON Schema" })
    .relTags.add("tag+webdev");
}
