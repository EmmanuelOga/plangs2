import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.personBuilder;

  lb.define("person+dick-lathwell", "Dick Lathwell", {
    websites: [
      { title: "Dick Lathwell", href: "https://en.wikipedia.org/wiki/Richard_H._Lathwell", kind: "wikipedia" },
    ],
  });

  /**/
}
