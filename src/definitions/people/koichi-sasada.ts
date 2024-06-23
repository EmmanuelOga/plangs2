import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.personBuilder;

  lb.define("person+koichi-sasada", "Koichi Sasada", {
    websites: [{ title: "Koichi Sasada", href: "https://en.wikipedia.org/wiki/Koichi_Sasada", kind: "wikipedia" }],
  });

  /**/
}
