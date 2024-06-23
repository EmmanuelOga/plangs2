import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.personBuilder;

  lb.define("person+charles-h-lindsey", "Charles H. Lindsey", {
    websites: [
      { title: "Charles H. Lindsey", href: "https://en.wikipedia.org/wiki/Charles_H._Lindsey", kind: "wikipedia" },
    ],
  });

  /**/
}
