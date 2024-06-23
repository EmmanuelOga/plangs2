import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.personBuilder;

  lb.define("person+donald-knuth", "Donald Knuth", {
    websites: [{ title: "Donald Knuth", href: "https://en.wikipedia.org/wiki/Donald_Knuth", kind: "wikipedia" }],
  });

  /**/
}
