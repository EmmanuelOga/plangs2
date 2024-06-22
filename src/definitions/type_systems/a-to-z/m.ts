import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.typeSystemBuilder;

  //-------------------------------------------------------------------------------

  lb.define("tsys+manifest", "Manifest", {
    websites: [
      { title: "${name} Type System", href: "https://en.wikipedia.org/wiki/manifest_typing", kind: "wikipedia" },
    ],
  });
}
