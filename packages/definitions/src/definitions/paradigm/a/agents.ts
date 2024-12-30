import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.paradigm.set("para+agents", {
    name: "Agents",
    description: "Agent-oriented programming simulates the actions and interactions of autonomous agents.",
    extHomeURL: "https://en.wikipedia.org/wiki/Agent-oriented_programming",
    keywords: ["agent"],
  });
}
