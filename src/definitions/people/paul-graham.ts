import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.personBuilder;

  lb.define("person+paul-graham", "Paul Graham", {
    websites: [
      { title: "Paul Graham", href: "https://en.wikipedia.org/wiki/Paul_Graham_(programmer)", kind: "wikipedia" },
    ],
  });

  /**/
}
