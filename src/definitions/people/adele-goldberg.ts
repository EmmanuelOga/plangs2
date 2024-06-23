import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.personBuilder;

  lb.define("person+adele-goldberg", "Adele Goldberg", {
    websites: [
      {
        title: "Adele Goldberg",
        href: "https://en.wikipedia.org/wiki/Adele_Goldberg_(computer_scientist)",
        kind: "wikipedia",
      },
    ],
  });

  /**/
}
