import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.personBuilder;

  lb.define("person+thomas-e-kurtz", "Thomas E. Kurtz", {
    websites: [{ title: "Thomas E. Kurtz", href: "https://en.wikipedia.org/wiki/Thomas_E._Kurtz", kind: "wikipedia" }],
  });

  /**/
}
