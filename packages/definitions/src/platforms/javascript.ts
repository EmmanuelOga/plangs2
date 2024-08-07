import type { PlangsGraph } from "../../schema/graph";

export function define(g: PlangsGraph) {
  g.buildPlatform("platf+javascript").merge({
    name: "JavaScript",
    websites: [{ kind: "wikipedia", title: "JavaScript", href: "https://en.wikipedia.org/wiki/JavaScript" }],
  });

  /**/
}
