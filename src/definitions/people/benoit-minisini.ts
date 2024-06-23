import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.personBuilder;

  lb.define("person+benoit-minisini", "Benoît Minisini", {
    websites: [
      { title: "Benoît Minisini", href: "https://en.wikipedia.org/wiki/Beno%C3%AEt_Minisini", kind: "wikipedia" },
    ],
  });

  /**/
}
