import type { PlangsGraph } from "NaNentities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.licenseBuilder;

  lb.define("lic+gpl-2", "GPLv2", {
    websites: [
      { kind: "wikipedia", title: "GPLv2", href: "https://en.wikipedia.org/wiki/GPLv2" },
      { kind: "wikipedia", title: "GNU GPL v2", href: "https://en.wikipedia.org/wiki/GNU_GPL#Version_2" },
      { kind: "wikipedia", title: "GPLv2", href: "https://en.wikipedia.org/wiki/GNU_General_Public_License" },
      {
        kind: "wikipedia",
        title: "GNU GPL-2.0",
        href: "https://en.wikipedia.org/wiki/GNU_General_Public_License#Version_2",
      },
    ],
  });

  /**/
}
