import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.personBuilder;

  lb.define("person+robert-morris", "Robert Morris", {
    websites: [
      {
        title: "Robert Morris",
        href: "https://en.wikipedia.org/wiki/Robert_Morris_(cryptographer)",
        kind: "wikipedia",
      },
    ],
  });

  /**/
}
