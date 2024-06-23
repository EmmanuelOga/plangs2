import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.personBuilder;

  lb.define("person+steve-ward", "Steve Ward", {
    websites: [
      { title: "Steve Ward", href: "https://en.wikipedia.org/wiki/Steve_Ward_(computer_scientist)", kind: "wikipedia" },
    ],
  });

  /**/
}
