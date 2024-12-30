import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.typeSystem.set("tsys+dynamic", {
    name: "Dynamic",
    description: "Dynamic typing defers type checking until runtime, allowing variables to hold different types at different times.",
    extHomeURL: "https://en.wikipedia.org/wiki/Dynamic_typing",
    keywords: ["dynamic"],
  });
}
