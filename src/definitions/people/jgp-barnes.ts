import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.personBuilder;

  lb.define("person+jgp-barnes", "J.G.P. Barnes", {
    websites: [
      {
        title: "J.G.P. Barnes",
        href: "https://en.wikipedia.org/wiki/John_Barnes_(computer_scientist)",
        kind: "wikipedia",
      },
    ],
  });

  /**/
}
