import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.paradigm.set("para+extensible", {
    name: "Extensible",
    description: "Designed to be extended with new features.",
    extHomeURL: "https://en.wikipedia.org/wiki/Extensible_programming",
    keywords: ["extensible"],
  });
}
