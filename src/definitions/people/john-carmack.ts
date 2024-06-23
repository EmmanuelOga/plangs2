import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.personBuilder;

  lb.define("person+john-carmack", "John Carmack", {
    websites: [{ title: "John Carmack", href: "https://en.wikipedia.org/wiki/John_Carmack", kind: "wikipedia" }],
  });

  /**/
}
