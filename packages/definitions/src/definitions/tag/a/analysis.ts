import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.tag.set("tag+analysis", {
    name: "Data Analysis",
    description:
      "Software tools designed to analyze and interpret large datasets.",
    extHomeURL: "https://en.wikipedia.org/wiki/Data_analysis",
    keywords: ["analysis", "big data", "data processing"],
  });
}
