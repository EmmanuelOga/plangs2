import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+korn-shell").merge({
    name: "Korn Shell",
    websites: [{ kind: "wikipedia", title: "Korn Shell", href: "https://en.wikipedia.org/wiki/Korn_Shell" }],
  });
}
