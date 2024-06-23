import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.personBuilder;

  lb.define("person+tony-hoare", "Tony Hoare", {
    websites: [{ title: "Tony Hoare", href: "https://en.wikipedia.org/wiki/Tony_Hoare", kind: "wikipedia" }],
  });

  /**/
}
