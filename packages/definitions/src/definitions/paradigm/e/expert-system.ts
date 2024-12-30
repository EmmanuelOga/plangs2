import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.paradigm.set("para+expert-system", {
    name: "Expert System",
    description: "Use rule-based algorithms to simulate decision-making.",
    extHomeURL: "https://en.wikipedia.org/wiki/Expert_system",
    keywords: ["expert system"],
  });
}
