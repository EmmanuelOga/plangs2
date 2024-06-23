import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.personBuilder;

  lb.define("person+john-g-kemeny", "John G. Kemeny", {
    websites: [{ title: "John G. Kemeny", href: "https://en.wikipedia.org/wiki/John_G._Kemeny", kind: "wikipedia" }],
  });

  /**/
}
