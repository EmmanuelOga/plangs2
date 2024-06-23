import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.personBuilder;

  lb.define("person+a-van-wijngaarden", "A. van Wijngaarden", {
    websites: [
      { title: "A. van Wijngaarden", href: "https://en.wikipedia.org/wiki/Adriaan_van_Wijngaarden", kind: "wikipedia" },
    ],
  });

  /**/
}
