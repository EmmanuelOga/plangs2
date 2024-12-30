import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.paradigm.set("para+pattern-matching", {
    name: "Pattern-Matching",
    description: "Allows for checking and decomposing data structures based on patterns.",
    extHomeURL: "https://en.wikipedia.org/wiki/Pattern-matching",
    keywords: ["pattern-matching"],
  });
}
