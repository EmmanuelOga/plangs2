import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.licenseBuilder;

  //-------------------------------------------------------------------------------

  lb.define("lic+gnu-gpl-2", "GNU GPLv2", {
    websites: [
      { kind: "wikipedia", title: "GNU GPL v2", href: "https://en.wikipedia.org/wiki/GNU_GPL#Version_2" },
      {
        kind: "wikipedia",
        title: "GNU GPL-2.0",
        href: "https://en.wikipedia.org/wiki/GNU_General_Public_License#Version_2",
      },
      { kind: "wikipedia", title: "GNU GPLv2", href: "https://en.wikipedia.org/wiki/GNU_General_Public_License" },
    ],
  });
}
