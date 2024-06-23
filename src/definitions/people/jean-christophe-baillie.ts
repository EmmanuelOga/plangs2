import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.personBuilder;

  lb.define("person+jean-christophe-baillie", "Jean-Christophe Baillie", {
    websites: [
      {
        title: "Jean-Christophe Baillie",
        href: "https://en.wikipedia.org/wiki/Jean-Christophe_Baillie",
        kind: "wikipedia",
      },
    ],
  });

  /**/
}
