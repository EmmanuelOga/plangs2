import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.typeSystem.set("tsys+uniqueness", {
    name: "Uniqueness",
    description: "Enforces that certain values are used only once, allowing optimizations like in-place updates in functional programming.",
    extHomeURL: "https://en.wikipedia.org/wiki/Uniqueness_type",
    keywords: ["unique"],
  });
}
