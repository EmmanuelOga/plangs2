import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.personBuilder;

  lb.define("person+william-r-cook", "William R. Cook", {
    websites: [
      {
        title: "William R. Cook",
        href: "https://en.wikipedia.org/wiki/William_Cook_(computer_scientist)",
        kind: "wikipedia",
      },
    ],
  });

  /**/
}
