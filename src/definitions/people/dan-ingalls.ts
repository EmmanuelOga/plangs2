import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.personBuilder;

  lb.define("person+dan-ingalls", "Dan Ingalls", {
    websites: [{ title: "Dan Ingalls", href: "https://en.wikipedia.org/wiki/Dan_Ingalls", kind: "wikipedia" }],
  });

  /**/
}
