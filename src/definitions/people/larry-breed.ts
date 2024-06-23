import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.personBuilder;

  lb.define("person+larry-breed", "Larry Breed", {
    websites: [{ title: "Larry Breed", href: "https://en.wikipedia.org/wiki/Lawrence_M._Breed", kind: "wikipedia" }],
  });

  /**/
}
