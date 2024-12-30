import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.paradigm.set("para+structured", {
    name: "Structured",
    description: "Emphasizes control structures like loops and conditionals, avoiding the use of 'goto' statements.",
    extHomeURL: "https://en.wikipedia.org/wiki/Structured_programming",
    keywords: ["structured"],
  });
}
