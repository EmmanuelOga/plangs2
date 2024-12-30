import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.paradigm.set("para+process-oriented", {
    name: "Process-Oriented",
    description: "Based on the concept of processes as the primary abstraction.",
    extHomeURL: "https://en.wikipedia.org/wiki/Process-oriented_programming",
    keywords: ["process-oriented"],
  });
}
