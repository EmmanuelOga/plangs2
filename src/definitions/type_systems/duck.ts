import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.typeSystemBuilder;

  lb.define("tsys+duck", "Duck", {
    websites: [{ title: "Duck Type System", href: "https://en.wikipedia.org/wiki/duck_typing", kind: "wikipedia" }],
  });
}
