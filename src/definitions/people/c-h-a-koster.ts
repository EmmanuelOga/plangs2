import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.personBuilder;

  lb.define("person+c-h-a-koster", "C. H. A. Koster", {
    websites: [
      { title: "C. H. A. Koster", href: "https://en.wikipedia.org/wiki/Cornelis_H._A._Koster", kind: "wikipedia" },
    ],
  });

  /**/
}
