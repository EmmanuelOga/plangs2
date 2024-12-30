import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.paradigm.set("para+natural-language", {
    name: "Natural Lang",
    description: "Enables the development of software using human language commands.",
    extHomeURL: "https://en.wikipedia.org/wiki/Natural_language_programming",
    keywords: ["natural language programming"],
  });
}
