import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.personBuilder;

  lb.define("person+john-warnock", "John Warnock", {
    websites: [{ title: "John Warnock", href: "https://en.wikipedia.org/wiki/John_Warnock", kind: "wikipedia" }],
  });

  /**/
}
