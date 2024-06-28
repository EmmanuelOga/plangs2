import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.personBuilder;

  lb.define("person+berkeley", "Berkeley", {
    websites: [
      {
        title: "University of California, Berkeley",
        href: "https://en.wikipedia.org/wiki/University_of_California,_Berkeley",
        kind: "wikipedia",
      },
    ],
  });

  /**/
}
