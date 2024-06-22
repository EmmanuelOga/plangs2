import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.licenseBuilder;

  //-------------------------------------------------------------------------------

  lb.define("lic+gnu-gpl", "GNU GPL", {
    websites: [
      {
        kind: "wikipedia",
        title: "GNU General Public License",
        href: "https://en.wikipedia.org/wiki/GNU_General_Public_License",
      },
      { kind: "wikipedia", title: "GNU GPL", href: "https://en.wikipedia.org/wiki/GNU_GPL" },
    ],
  });
}
