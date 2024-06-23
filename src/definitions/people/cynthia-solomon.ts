import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.personBuilder;

  lb.define("person+cynthia-solomon", "Cynthia Solomon", {
    websites: [{ title: "Cynthia Solomon", href: "https://en.wikipedia.org/wiki/Cynthia_Solomon", kind: "wikipedia" }],
  });

  /**/
}
