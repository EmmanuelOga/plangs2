import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.personBuilder;

  lb.define("person+andrei-alexandrescu", "Andrei Alexandrescu", {
    websites: [
      { title: "Andrei Alexandrescu", href: "https://en.wikipedia.org/wiki/Andrei_Alexandrescu", kind: "wikipedia" },
    ],
  });

  /**/
}
