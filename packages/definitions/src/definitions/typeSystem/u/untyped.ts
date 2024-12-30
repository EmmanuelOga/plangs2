import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.typeSystem.set("tsys+untyped", {
    name: "Untyped",
    description: "Lacks explicit types, with variables and functions being dynamically interpreted based on their usage.",
    extHomeURL: "https://en.wikipedia.org/wiki/Type_system",
    keywords: ["untyped"],
  });
}
