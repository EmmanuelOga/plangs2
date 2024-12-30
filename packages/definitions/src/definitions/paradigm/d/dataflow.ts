import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.paradigm.set("para+dataflow", {
    name: "Dataflow",
    description: "Programs as a directed graph of the data flowing between operations.",
    extHomeURL: "https://en.wikipedia.org/wiki/Dataflow_programming",
    keywords: ["dataflow"],
  });
}
