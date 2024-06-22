import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.licenseBuilder;

  //-------------------------------------------------------------------------------

  lb.define("lic+gpl-3", "GPLv3", {
    websites: [
      { kind: "wikipedia", title: "GPLv3", href: "https://en.wikipedia.org/wiki/GNU_General_Public_License" },
      { kind: "wikipedia", title: "GPLv3", href: "https://en.wikipedia.org/wiki/GNU_General_Public_License#Version_3" },
      { kind: "wikipedia", title: "GPL 3", href: "https://en.wikipedia.org/wiki/GPL3" },
    ],
  });
}
