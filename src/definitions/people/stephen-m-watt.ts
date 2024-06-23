import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.personBuilder;

  lb.define("person+stephen-m-watt", "Stephen M. Watt", {
    websites: [{ title: "Stephen M. Watt", href: "https://en.wikipedia.org/wiki/Stephen_M._Watt", kind: "wikipedia" }],
  });

  /**/
}
