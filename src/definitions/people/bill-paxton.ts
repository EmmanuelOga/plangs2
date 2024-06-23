import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.personBuilder;

  lb.define("person+bill-paxton", "Bill Paxton", {
    websites: [
      {
        title: "Bill Paxton",
        href: "https://en.wikipedia.org/wiki/Bill_Paxton_(computer_scientist)",
        kind: "wikipedia",
      },
    ],
  });

  /**/
}
