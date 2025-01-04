import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.typeSystem.set("tsys+latent", {
    name: "Latent",
    description:
      "Dynamic typing model where type constraints are deferred until runtime, similar to duck typing.",
    extHomeURL: "https://en.wikipedia.org/wiki/Latent_typing",
    keywords: ["latent"],
  });
}
