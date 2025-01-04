import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.tag.set("tag+graph", {
    name: "Graph Theory",
    description:
      "Software for working with graphs and graph theory algorithms, graph traversals, etc.",
    extHomeURL: "https://en.wikipedia.org/wiki/Rapid_Application_Development",
    keywords: ["graph"],
  });
}
