import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.paradigm.set("para+general-purpose", {
    name: "General-Purpose",
    description: "Designed to solve a wide range of problems.",
    extHomeURL:
      "https://en.wikipedia.org/wiki/General-purpose_programming_language",
    keywords: ["general-purpose"],
  });
}
