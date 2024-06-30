import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+cryptol").merge({
    name: "Cryptol",
    websites: [{ kind: "wikipedia", title: "Cryptol", href: "https://en.wikipedia.org/wiki/Cryptol" }],
  });
}
