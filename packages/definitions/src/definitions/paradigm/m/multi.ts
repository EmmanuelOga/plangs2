import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.paradigm.set("para+multi", {
    name: "Multi",
    description: "Based on more than one paradigm.",
    extHomeURL: "https://en.wikipedia.org/wiki/Multi-paradigm_programming_language",
    keywords: ["multi-paradigm", "multiparadigm"],
  });
}
