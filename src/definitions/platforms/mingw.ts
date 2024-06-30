import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.platformBuilder;

  lb.define("platf+mingw", "MinGW", {
    websites: [{ kind: "wikipedia", title: "MinGW", href: "https://en.wikipedia.org/wiki/MinGW" }],
  });
}
