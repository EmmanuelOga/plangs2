import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.personBuilder;

  lb.define("person+j-e-l-peck", "J. E. L. Peck", {
    websites: [{ title: "J. E. L. Peck", href: "https://en.wikipedia.org/wiki/John_E._L._Peck", kind: "wikipedia" }],
  });

  /**/
}
