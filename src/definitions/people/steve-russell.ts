import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.personBuilder;

  lb.define("person+steve-russell", "Steve Russell", {
    websites: [
      {
        title: "Steve Russell",
        href: "https://en.wikipedia.org/wiki/Steve_Russell_(computer_scientist)",
        kind: "wikipedia",
      },
    ],
  });

  /**/
}
