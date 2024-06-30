import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define("pl+cryptol", {
    name: "Cryptol",
    websites: [{ kind: "wikipedia", title: "Cryptol", href: "https://en.wikipedia.org/wiki/Cryptol" }],
  });
}
