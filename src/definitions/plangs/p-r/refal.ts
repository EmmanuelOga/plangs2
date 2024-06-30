import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+refal").merge({
    name: "Refal",
    websites: [
      { kind: "wikipedia", title: "Refal", href: "https://en.wikipedia.org/wiki/REFAL" },
      { kind: "homepage", title: "http://www.refal.net", href: "http://www.refal.net" },
    ],
  });
}
