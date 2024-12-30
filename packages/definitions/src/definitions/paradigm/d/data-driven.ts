import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.paradigm.set("para+data-driven", {
    name: "Data-Centric",
    description: "Programs describe the data to be matched and the processing required rather than defining a sequence of steps to be taken.",
    extHomeURL: "https://en.wikipedia.org/wiki/Data-driven_programming",
    keywords: ["data-driven"],
  });
}
