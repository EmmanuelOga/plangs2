import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.paradigm.set("para+logic", {
    name: "Logic",
    description: "Based on formal logic, using facts and rules to derive conclusions.",
    extHomeURL: "https://en.wikipedia.org/wiki/Logic_Programming",
    keywords: ["logic"],
  });
}
