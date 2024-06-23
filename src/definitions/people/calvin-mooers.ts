import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.personBuilder;

  lb.define("person+calvin-mooers", "Calvin Mooers", {
    websites: [{ title: "Calvin Mooers", href: "https://en.wikipedia.org/wiki/Calvin_Mooers", kind: "wikipedia" }],
  });

  /**/
}
