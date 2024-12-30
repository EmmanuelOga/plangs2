import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.paradigm.set("para+visual", {
    name: "Visual",
    description: "Lets users create programs by manipulating program elements graphically rather than textually.",
    extHomeURL: "https://en.wikipedia.org/wiki/Visual_programming_language",
    keywords: ["block-based", "block-coding", "diagrammatic", "graphical", "visual"],
  });
}
