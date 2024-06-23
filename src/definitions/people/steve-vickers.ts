import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.personBuilder;

  lb.define("person+steve-vickers", "Steve Vickers", {
    websites: [
      {
        title: "Steve Vickers",
        href: "https://en.wikipedia.org/wiki/Steve_Vickers_(computer_scientist)",
        kind: "wikipedia",
      },
    ],
  });

  /**/
}
