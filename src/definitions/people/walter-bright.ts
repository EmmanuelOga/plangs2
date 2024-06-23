import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.personBuilder;

  lb.define("person+walter-bright", "Walter Bright", {
    websites: [{ title: "Walter Bright", href: "https://en.wikipedia.org/wiki/Walter_Bright", kind: "wikipedia" }],
  });

  /**/
}
