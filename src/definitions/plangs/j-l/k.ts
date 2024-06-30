import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+k").merge({
    name: "k",
    websites: [{ kind: "wikipedia", title: "K", href: "https://en.wikipedia.org/wiki/K_(programming_language)" }],
  });
}
