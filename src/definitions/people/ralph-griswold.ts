import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.personBuilder;

  lb.define("person+ralph-griswold", "Ralph Griswold", {
    websites: [{ title: "Ralph Griswold", href: "https://en.wikipedia.org/wiki/Ralph_Griswold", kind: "wikipedia" }],
  });

  /**/
}
