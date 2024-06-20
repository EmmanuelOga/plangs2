import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.typeSystemBuilder;

  lb.define("tsys+uniqueness", "Uniqueness", [
    {
      title: "${name} Type System",
      href: "https://en.wikipedia.org/wiki/uniqueness_type",
      kind: "wikipedia",
    },
  ]);
}
