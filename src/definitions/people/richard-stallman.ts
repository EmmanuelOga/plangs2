import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.personBuilder;

  lb.define("person+richard-stallman", "Richard Stallman", {
    websites: [
      { title: "Richard Stallman", href: "https://en.wikipedia.org/wiki/Richard_Stallman", kind: "wikipedia" },
    ],
  });

  /**/
}
