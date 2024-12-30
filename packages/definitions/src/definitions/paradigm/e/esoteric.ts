import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.paradigm.set("para+esoteric", {
    name: "Esoteric",
    description: "Created as experiments, jokes, or for artistic purposes.",
    extHomeURL: "https://en.wikipedia.org/wiki/Esoteric_programming_language",
    keywords: ["esoteric"],
  });
}
