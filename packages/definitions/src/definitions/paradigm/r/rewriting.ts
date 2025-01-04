import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.paradigm.set("para+rewriting", {
    name: "Term Rewriting",
    description:
      "Involves transforming expressions according to a set of rules to perform computation.",
    extHomeURL: "https://en.wikipedia.org/wiki/Term-rewriting",
    keywords: ["rewriting", "term-rewriting"],
  });
}
