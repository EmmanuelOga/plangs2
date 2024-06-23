import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.personBuilder;

  lb.define("person+media-lab", "Media Lab", {
    websites: [{ title: "Media Lab", href: "https://en.wikipedia.org/wiki/MIT_Media_Lab", kind: "wikipedia" }],
  });

  /**/
}
