import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.platformBuilder;

  lb.define("platf+arduino", "Arduino", {
    websites: [{ kind: "wikipedia", title: "Arduino", href: "https://en.wikipedia.org/wiki/Arduino" }],
  });
}
