import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.paradigm.set("para+scientific", {
    name: "Scientific",
    description: "Supports the automation of complex scientific processes.",
    extHomeURL: "https://en.wikipedia.org/wiki/Scientific_workflow_system",
    keywords: ["scientific"],
  });
}
