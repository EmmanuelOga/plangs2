import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.paradigm.set("para+aspect", {
    name: "Aspects",
    description:
      "Aims to increase modularity by allowing the separation of cross-cutting concerns. This allows behaviors that are not central to the business logic (such as logging) to be added to a program without cluttering the code of core functions.",
    extHomeURL: "https://en.wikipedia.org/wiki/Aspect-oriented_programming",
    keywords: ["aspect"],
  });
}
