import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.paradigm.set("para+pipeline", {
    name: "Pipeline",
    description:
      "Passes data through a series of processing stages, each stage producing input for the next.",
    extHomeURL: "https://en.wikipedia.org/wiki/Pipeline_(software)",
    keywords: ["pipeline"],
  });
}
