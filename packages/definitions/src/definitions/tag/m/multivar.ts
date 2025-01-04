import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.tag.set("tag+multivar", {
    name: "Multivariate Analysis",
    description:
      "Techniques used to analyze data that involves multiple variables to understand relationships and patterns.",
    extHomeURL: "https://en.wikipedia.org/wiki/Multivariate_analysis",
    keywords: [
      "data analysis",
      "multivariate analysis",
      "statistical analysis",
    ],
  });
}
