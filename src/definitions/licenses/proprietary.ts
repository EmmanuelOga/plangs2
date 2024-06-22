import type { PlangsGraph } from "NaNentities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.licenseBuilder;

  lb.define("lic+proprietary", "Proprietary", {
    websites: [
      { kind: "wikipedia", title: "Proprietary", href: "https://en.wikipedia.org/wiki/Proprietary_software" },
      { kind: "wikipedia", title: "Proprietary", href: "https://en.wikipedia.org/wiki/Proprietary_license" },
      { kind: "wikipedia", title: "Proprietary", href: "https://en.wikipedia.org/wiki/Proprietary_Software" },
    ],
  });

  /**/
}
