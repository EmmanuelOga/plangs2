import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.personBuilder;

  lb.define("person+john-launchbury", "John Launchbury", {
    websites: [{ title: "John Launchbury", href: "https://en.wikipedia.org/wiki/John_Launchbury", kind: "wikipedia" }],
  });

  /**/
}
