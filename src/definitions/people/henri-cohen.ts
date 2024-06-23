import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.personBuilder;

  lb.define("person+henri-cohen", "Henri Cohen", {
    websites: [
      { title: "Henri Cohen", href: "https://en.wikipedia.org/wiki/Henri_Cohen_(number_theorist)", kind: "wikipedia" },
    ],
  });

  /**/
}
