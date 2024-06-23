import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.personBuilder;

  lb.define("person+david-h-munro", "David H. Munro", {
    websites: [{ title: "David H. Munro", href: "https://en.wikipedia.org/wiki/David_H._Munro", kind: "wikipedia" }],
  });

  /**/
}
