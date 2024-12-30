import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.paradigm.set("para+real-time", {
    name: "Real-Time",
    description: "Involves tasks that must be completed within strict timing constraints.",
    extHomeURL: "https://en.wikipedia.org/wiki/Real-time_computing",
    keywords: ["real-time"],
  });
}
