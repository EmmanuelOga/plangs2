import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.tag.set("tag+flow", {
    name: "Flow-Based",
    description:
      "A programming paradigm where applications are defined as networks of black-box processes that exchange data across predefined connections.",
    extHomeURL: "https://en.wikipedia.org/wiki/Flow-based_programming",
    keywords: ["FBP", "data flow", "flow-based programming"],
  });
}
