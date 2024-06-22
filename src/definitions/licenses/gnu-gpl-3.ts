import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.licenseBuilder;

  //-------------------------------------------------------------------------------

  lb.define("lic+gnu-gpl-3", "GNU GPLv3", {
    websites: [
      {
        kind: "wikipedia",
        title: "GNU General Public License v3.0",
        href: "https://en.wikipedia.org/wiki/GNU_General_Public_License#Version_3",
      },
      { kind: "wikipedia", title: "GNU GPLv3", href: "https://en.wikipedia.org/wiki/GNU_GPLv3" },
    ],
  });
}
