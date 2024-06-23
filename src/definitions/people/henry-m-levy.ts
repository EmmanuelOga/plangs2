import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.personBuilder;

  lb.define("person+henry-m-levy", "Henry M. Levy", {
    websites: [
      {
        title: "Henry M. Levy",
        href: "https://en.wikipedia.org/wiki/Hank_Levy_(computer_scientist)",
        kind: "wikipedia",
      },
    ],
  });

  /**/
}
