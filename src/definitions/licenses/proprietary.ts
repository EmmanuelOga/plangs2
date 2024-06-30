import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  g.buildLicense("lic+proprietary").merge({
    name: "Proprietary",
    websites: [
      { kind: "wikipedia", title: "Proprietary", href: "https://en.wikipedia.org/wiki/Proprietary_software" },
      { kind: "wikipedia", title: "Proprietary", href: "https://en.wikipedia.org/wiki/Proprietary_license" },
    ],
  });

  /**/
}
