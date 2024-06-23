import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.personBuilder;

  lb.define("person+peter-deutsch", "Peter Deutsch", {
    websites: [{ title: "Peter Deutsch", href: "https://en.wikipedia.org/wiki/L._Peter_Deutsch", kind: "wikipedia" }],
  });

  /**/
}
