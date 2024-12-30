import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.paradigm.set("para+reactive", {
    name: "Reactive",
    description: "Focuses on asynchronous data streams and the propagation of change.",
    extHomeURL: "https://en.wikipedia.org/wiki/Reactive_programming",
    keywords: ["reactive"],
  });
}
