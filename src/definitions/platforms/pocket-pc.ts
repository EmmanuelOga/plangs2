import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.platformBuilder;

  lb.define("platf+pocket-pc", "Pocket PC", {
    websites: [{ kind: "wikipedia", title: "Pocket PC", href: "https://en.wikipedia.org/wiki/Pocket_PC" }],
  });
}
