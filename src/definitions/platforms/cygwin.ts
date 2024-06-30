import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.platformBuilder;

  lb.define("platf+cygwin", "Cygwin", {
    websites: [{ kind: "wikipedia", title: "Cygwin", href: "https://en.wikipedia.org/wiki/Cygwin" }],
  });
}
