import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.personBuilder;

  lb.define("person+ole-johan-dahl", "Ole-Johan Dahl", {
    websites: [{ title: "Ole-Johan Dahl", href: "https://en.wikipedia.org/wiki/Ole-Johan_Dahl", kind: "wikipedia" }],
  });

  /**/
}
