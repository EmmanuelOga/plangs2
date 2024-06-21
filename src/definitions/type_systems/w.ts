import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.typeSystemBuilder;

  //-------------------------------------------------------------------------------

  lb.define("tsys+weak", "Weak", [
    { title: "${name} Type System", href: "https://en.wikipedia.org/wiki/weak_typing", kind: "wikipedia" },
  ]);
}