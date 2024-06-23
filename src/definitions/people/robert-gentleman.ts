import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.personBuilder;

  lb.define("person+robert-gentleman", "Robert Gentleman", {
    websites: [
      {
        title: "Robert Gentleman",
        href: "https://en.wikipedia.org/wiki/Robert_Gentleman_(statistician)",
        kind: "wikipedia",
      },
    ],
  });

  /**/
}
