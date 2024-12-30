import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.paradigm.set("para+simulation", {
    name: "Simulation",
    description: "Specialized for modeling and simulating complex systems.",
    extHomeURL: "https://en.wikipedia.org/wiki/Simulation_language",
    keywords: ["simulation"],
  });
}
