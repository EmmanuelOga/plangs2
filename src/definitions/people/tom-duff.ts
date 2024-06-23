import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.personBuilder;

  lb.define("person+tom-duff", "Tom Duff", {
    websites: [{ title: "Tom Duff", href: "https://en.wikipedia.org/wiki/Tom_Duff", kind: "wikipedia" }],
  });

  /**/
}
