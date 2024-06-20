import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.typeSystemBuilder;

  lb.define("tsys+latent", "Latent", [
    {
      title: "${name} Type System",
      href: "https://en.wikipedia.org/wiki/latent_typing",
      kind: "wikipedia",
    },
  ]);
}
