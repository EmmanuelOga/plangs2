import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.personBuilder;

  lb.define("person+david-may", "David May", {
    websites: [
      { title: "David May", href: "https://en.wikipedia.org/wiki/David_May_(computer_scientist)", kind: "wikipedia" },
    ],
  });

  /**/
}
