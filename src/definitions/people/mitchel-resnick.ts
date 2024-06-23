import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.personBuilder;

  lb.define("person+mitchel-resnick", "Mitchel Resnick", {
    websites: [{ title: "Mitchel Resnick", href: "https://en.wikipedia.org/wiki/Mitchel_Resnick", kind: "wikipedia" }],
  });

  /**/
}
