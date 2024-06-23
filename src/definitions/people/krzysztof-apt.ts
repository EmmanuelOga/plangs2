import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.personBuilder;

  lb.define("person+krzysztof-apt", "Krzysztof Apt", {
    websites: [{ title: "Krzysztof Apt", href: "https://en.wikipedia.org/wiki/Krzysztof_R._Apt", kind: "wikipedia" }],
  });

  /**/
}
