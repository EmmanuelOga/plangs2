import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.personBuilder;

  lb.define("person+james-strachan", "James Strachan", {
    websites: [
      { title: "James Strachan", href: "https://en.wikipedia.org/wiki/James_Strachan_(programmer)", kind: "wikipedia" },
    ],
  });

  /**/
}
