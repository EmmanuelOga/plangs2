import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.tag.set("tag+dataflow", {
    name: "Dataflow",
    description: "Programming paradigm where the flow of data determines the execution of operations.",
    extHomeURL: "https://en.wikipedia.org/wiki/Dataflow_programming",
    keywords: ["data-driven", "dataflow", "dataflow architecture"],
  });
}
