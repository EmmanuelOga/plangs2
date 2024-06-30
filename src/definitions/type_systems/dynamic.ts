import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.typeSystemBuilder;

  lb.define("tsys+dynamic", "Dynamic", {
    websites: [
      { title: "Dynamic Type System", href: "https://en.wikipedia.org/wiki/dynamic_typing", kind: "wikipedia" },
    ],
  });
}
