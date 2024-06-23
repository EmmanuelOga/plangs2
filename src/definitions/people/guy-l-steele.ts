import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.personBuilder;

  lb.define("person+guy-l-steele", "Guy L. Steele", {
    websites: [
      { title: "Guy L. Steele", href: "https://en.wikipedia.org/wiki/Guy_L._Steele", kind: "wikipedia" },
      { title: "Guy L. Steele, Jr.", href: "https://en.wikipedia.org/wiki/Guy_L._Steele,_Jr.", kind: "wikipedia" },
    ],
  });

  /**/
}
