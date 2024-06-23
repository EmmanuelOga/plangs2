import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.personBuilder;

  lb.define("person+mark-s-miller", "Mark S. Miller", {
    websites: [{ title: "Mark S. Miller", href: "https://en.wikipedia.org/wiki/Mark_S._Miller", kind: "wikipedia" }],
  });

  /**/
}
