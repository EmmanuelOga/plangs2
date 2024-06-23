import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.personBuilder;

  lb.define("person+martin-richards", "Martin Richards", {
    websites: [
      {
        title: "Martin Richards",
        href: "https://en.wikipedia.org/wiki/Martin_Richards_(computer_scientist)",
        kind: "wikipedia",
      },
    ],
  });

  /**/
}
