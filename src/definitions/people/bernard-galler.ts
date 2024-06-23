import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.personBuilder;

  lb.define("person+bernard-galler", "Bernard Galler", {
    websites: [{ title: "Bernard Galler", href: "https://en.wikipedia.org/wiki/Bernard_Galler", kind: "wikipedia" }],
  });

  /**/
}
