import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.paradigm.set("para+event-driven", {
    name: "Event-Driven",
    description: "Centers around responding to user actions or other events.",
    extHomeURL: "https://en.wikipedia.org/wiki/Event-driven_programming",
    keywords: ["event-driven"],
  });
}
