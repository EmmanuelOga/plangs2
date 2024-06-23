import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.personBuilder;

  lb.define("person+martin-odersky", "Martin Odersky", {
    websites: [{ title: "Martin Odersky", href: "https://en.wikipedia.org/wiki/Martin_Odersky", kind: "wikipedia" }],
  });

  /**/
}
