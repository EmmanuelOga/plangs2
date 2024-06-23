import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.personBuilder;

  lb.define("person+dennis-allison", "Dennis Allison", {
    websites: [{ title: "Dennis Allison", href: "https://en.wikipedia.org/wiki/Dennis_Allison", kind: "wikipedia" }],
  });

  /**/
}
