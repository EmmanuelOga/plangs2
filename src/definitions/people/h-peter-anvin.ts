import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.personBuilder;

  lb.define("person+h-peter-anvin", "H. Peter Anvin", {
    websites: [{ title: "H. Peter Anvin", href: "https://en.wikipedia.org/wiki/H._Peter_Anvin", kind: "wikipedia" }],
  });

  /**/
}
