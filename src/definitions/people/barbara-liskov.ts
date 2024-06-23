import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.personBuilder;

  lb.define("person+barbara-liskov", "Barbara Liskov", {
    websites: [{ title: "Barbara Liskov", href: "https://en.wikipedia.org/wiki/Barbara_Liskov", kind: "wikipedia" }],
  });

  /**/
}
