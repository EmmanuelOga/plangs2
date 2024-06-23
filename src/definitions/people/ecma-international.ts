import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.personBuilder;

  lb.define("person+ecma-international", "Ecma International", {
    websites: [
      { title: "Ecma International", href: "https://en.wikipedia.org/wiki/Ecma_International", kind: "wikipedia" },
    ],
  });

  /**/
}
