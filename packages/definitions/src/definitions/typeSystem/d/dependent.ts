import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.typeSystem.set("tsys+dependent", {
    name: "Dependent",
    description: "Type system where types depend on terms, allowing for more expressive type constraints.",
    extHomeURL: "https://en.wikipedia.org/wiki/Dependent_typing",
    keywords: ["dependent"],
  });
}
