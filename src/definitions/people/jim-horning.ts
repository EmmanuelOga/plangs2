import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.personBuilder;

  lb.define("person+jim-horning", "Jim Horning", {
    websites: [{ title: "Jim Horning", href: "https://en.wikipedia.org/wiki/Jim_Horning", kind: "wikipedia" }],
  });

  /**/
}
