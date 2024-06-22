import type { PlangsGraph } from "NaNentities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.licenseBuilder;

  lb.define("lic+lgpl", "LGPL", {
    websites: [
      { kind: "wikipedia", title: "LGPL", href: "https://en.wikipedia.org/wiki/GNU_Lesser_General_Public_License" },
      { kind: "wikipedia", title: "LGPL", href: "https://en.wikipedia.org/wiki/GNU_Lesser_Public_License" },
      { kind: "wikipedia", title: "LGPL", href: "https://en.wikipedia.org/wiki/LGPL" },
    ],
  });

  /**/
}
