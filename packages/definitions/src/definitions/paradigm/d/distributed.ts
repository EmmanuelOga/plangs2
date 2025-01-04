import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.paradigm.set("para+distributed", {
    name: "Distributed",
    description:
      "Involves multiple computers working together on a single task.",
    extHomeURL: "https://en.wikipedia.org/wiki/Distributed_programming",
    keywords: ["distributed"],
  });
}
