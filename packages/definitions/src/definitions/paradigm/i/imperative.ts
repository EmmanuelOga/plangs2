import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.paradigm.set("para+imperative", {
    name: "Imperative",
    description: "Uses statements to change a program's state.",
    extHomeURL: "https://en.wikipedia.org/wiki/Imperative_programming",
    keywords: ["imperative"],
  });
}
