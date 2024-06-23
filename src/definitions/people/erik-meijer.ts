import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.personBuilder;

  lb.define("person+erik-meijer", "Erik Meijer", {
    websites: [
      {
        title: "Erik Meijer",
        href: "https://en.wikipedia.org/wiki/Erik_Meijer_(computer_scientist)",
        kind: "wikipedia",
      },
    ],
  });

  /**/
}
