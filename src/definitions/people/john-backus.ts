import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.personBuilder;

  lb.define("person+john-backus", "John Backus", {
    websites: [{ title: "John Backus", href: "https://en.wikipedia.org/wiki/John_Backus", kind: "wikipedia" }],
  });

  /**/
}
