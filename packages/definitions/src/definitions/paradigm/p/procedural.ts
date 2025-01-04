import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.paradigm.set("para+procedural", {
    name: "Procedural",
    description:
      "Focuses on the use of procedures or functions to perform tasks.",
    extHomeURL: "https://en.wikipedia.org/wiki/Procedural_programming",
    keywords: ["procedural"],
  });
}
