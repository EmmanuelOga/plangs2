import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang.set("pl+jsonschema", {}).relTags.add("tag+webdev");
}
