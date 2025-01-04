import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.paradigm.set("para+dsl", {
    name: "DSL",
    description:
      "Domain-specific language is tailored to a particular application domain.",
    extHomeURL: "https://en.wikipedia.org/wiki/Domain-specific_language",
    keywords: ["domain-specific", "dsl"],
  });
}
