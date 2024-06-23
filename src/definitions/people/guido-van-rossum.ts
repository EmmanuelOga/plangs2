import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.personBuilder;

  lb.define("person+guido-van-rossum", "Guido van Rossum", {
    websites: [
      { title: "Guido van Rossum", href: "https://en.wikipedia.org/wiki/Guido_van_Rossum", kind: "wikipedia" },
    ],
  });

  /**/
}
