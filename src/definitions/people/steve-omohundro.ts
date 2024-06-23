import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.personBuilder;

  lb.define("person+steve-omohundro", "Steve Omohundro", {
    websites: [{ title: "Steve Omohundro", href: "https://en.wikipedia.org/wiki/Steve_Omohundro", kind: "wikipedia" }],
  });

  /**/
}
