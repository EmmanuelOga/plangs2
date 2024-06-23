import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.personBuilder;

  lb.define("person+joe-armstrong", "Joe Armstrong", {
    websites: [
      { title: "Joe Armstrong", href: "https://en.wikipedia.org/wiki/Joe_Armstrong_(programmer)", kind: "wikipedia" },
    ],
  });

  /**/
}
