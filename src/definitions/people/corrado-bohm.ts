import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.personBuilder;

  lb.define("person+corrado-bohm", "Corrado Böhm", {
    websites: [{ title: "Corrado Böhm", href: "https://en.wikipedia.org/wiki/Corrado_B%C3%B6hm", kind: "wikipedia" }],
  });

  /**/
}
