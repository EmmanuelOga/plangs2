import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.typeSystemBuilder;

  lb.define("tsys+nominative", "Nominative", [
    {
      title: "${name} Type System",
      href: "https://en.wikipedia.org/wiki/nominative_type_system",
      kind: "wikipedia",
    },
  ]);
}
