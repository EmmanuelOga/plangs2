import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.personBuilder;

  lb.define("person+san-diego", "San Diego", {
    websites: [
      {
        title: "University of California, San Diego",
        href: "https://en.wikipedia.org/wiki/University_of_California,_San_Diego",
        kind: "wikipedia",
      },
    ],
  });

  /**/
}
