import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  g.buildLicense("lic+mit").merge({
    name: "MIT",
    websites: [{ kind: "wikipedia", title: "MIT", href: "https://en.wikipedia.org/wiki/MIT_License" }],
  });

  /**/
}
