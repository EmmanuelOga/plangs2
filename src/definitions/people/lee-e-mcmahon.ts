import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.personBuilder;

  lb.define("person+lee-e-mcmahon", "Lee E. McMahon", {
    websites: [{ title: "Lee E. McMahon", href: "https://en.wikipedia.org/wiki/Lee_E._McMahon", kind: "wikipedia" }],
  });

  /**/
}
