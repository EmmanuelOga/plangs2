import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.personBuilder;

  lb.define("person+meta-platforms", "Meta Platforms", {
    websites: [{ title: "Meta Platforms", href: "https://en.wikipedia.org/wiki/Meta_Platforms", kind: "wikipedia" }],
  });

  /**/
}
