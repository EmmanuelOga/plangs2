import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.typeSystemBuilder;

  lb.define("tsys+optional", "Optional", {
    websites: [
      { title: "Optional Type System", href: "https://en.wikipedia.org/wiki/optional_typing", kind: "wikipedia" },
    ],
  });
}
