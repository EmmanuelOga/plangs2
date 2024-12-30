import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.tag.set("tag+stats", {
    name: "Statistics",
    description: "Software for statistical analysis and modeling of data.",
    extHomeURL: "https://en.wikipedia.org/wiki/List_of_statistical_packages",
    keywords: ["data analysis", "statistical software", "statistics"],
  });
}
