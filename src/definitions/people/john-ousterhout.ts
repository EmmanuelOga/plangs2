import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.personBuilder;

  lb.define("person+john-ousterhout", "John Ousterhout", {
    websites: [{ title: "John Ousterhout", href: "https://en.wikipedia.org/wiki/John_Ousterhout", kind: "wikipedia" }],
  });

  /**/
}
