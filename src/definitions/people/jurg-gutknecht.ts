import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.personBuilder;

  lb.define("person+jurg-gutknecht", "Jürg Gutknecht", {
    websites: [
      { title: "Jürg Gutknecht", href: "https://en.wikipedia.org/wiki/J%C3%BCrg_Gutknecht", kind: "wikipedia" },
    ],
  });

  /**/
}
