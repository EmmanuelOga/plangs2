import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.personBuilder;

  lb.define("person+chuck-geschke", "Chuck Geschke", {
    websites: [{ title: "Chuck Geschke", href: "https://en.wikipedia.org/wiki/Chuck_Geschke", kind: "wikipedia" }],
  });

  /**/
}
