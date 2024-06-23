import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.personBuilder;

  lb.define("person+scott-fahlman", "Scott Fahlman", {
    websites: [{ title: "Scott Fahlman", href: "https://en.wikipedia.org/wiki/Scott_Fahlman", kind: "wikipedia" }],
  });

  /**/
}
