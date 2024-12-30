import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.paradigm.set("para+language-oriented", {
    name: "Lang-Oriented",
    description: "Involves the creation of domain-specific languages to solve specific problems.",
    extHomeURL: "https://en.wikipedia.org/wiki/Language_oriented_programming",
    keywords: ["language-oriented"],
  });
}
