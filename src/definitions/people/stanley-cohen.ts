import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.personBuilder;

  lb.define("person+stanley-cohen", "Stanley Cohen", {
    websites: [
      { title: "Stanley Cohen", href: "https://en.wikipedia.org/wiki/Stanley_Cohen_(physicist)", kind: "wikipedia" },
    ],
  });

  /**/
}
