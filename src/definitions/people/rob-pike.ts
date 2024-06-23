import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.personBuilder;

  lb.define("person+rob-pike", "Rob Pike", {
    websites: [{ title: "Rob Pike", href: "https://en.wikipedia.org/wiki/Rob_Pike", kind: "wikipedia" }],
  });

  /**/
}
