import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.personBuilder;

  lb.define("person+gerard-huet", "Gérard Huet", {
    websites: [{ title: "Gérard Huet", href: "https://en.wikipedia.org/wiki/G%C3%A9rard_Huet", kind: "wikipedia" }],
  });

  /**/
}
