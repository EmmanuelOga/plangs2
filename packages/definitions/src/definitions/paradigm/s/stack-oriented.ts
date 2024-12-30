import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.paradigm.set("para+stack-oriented", {
    name: "Stack-Oriented",
    description: "Uses a stack-based data structure for passing parameters.",
    extHomeURL: "https://en.wikipedia.org/wiki/Stack-oriented_programming_language",
    keywords: ["stack-oriented"],
  });
}
