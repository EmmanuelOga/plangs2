import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.personBuilder;

  lb.define("person+john-chambers", "John Chambers", {
    websites: [
      { title: "John Chambers", href: "https://en.wikipedia.org/wiki/John_Chambers_(statistician)", kind: "wikipedia" },
    ],
  });

  /**/
}
