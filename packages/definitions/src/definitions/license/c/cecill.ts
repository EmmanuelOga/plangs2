import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.license.set("lic+cecill", {
    name: "CeCILL",
    description: "The CeCILL license is a French free software license compatible with the GNU General Public License.",
    extHomeURL: "https://en.wikipedia.org/wiki/CeCILL",
    isFSFLibre: true,
    isOSIApproved: false,
    keywords: ["cecill"],
    spdx: "CECILL-2.1",
  });
}
