import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.personBuilder;

  lb.define("person+david-ungar", "David Ungar", {
    websites: [{ title: "David Ungar", href: "https://en.wikipedia.org/wiki/David_Ungar", kind: "wikipedia" }],
  });

  /**/
}
