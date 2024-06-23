import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.personBuilder;

  lb.define("person+anthony-w-knapp", "Anthony W. Knapp", {
    websites: [
      { title: "Anthony W. Knapp", href: "https://en.wikipedia.org/wiki/Anthony_W._Knapp", kind: "wikipedia" },
    ],
  });

  /**/
}
