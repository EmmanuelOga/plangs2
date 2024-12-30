import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.license.set("lic+gnu-gpl", {
    name: "GPL",
    description:
      "The GNU General Public License is a free software license that ensures end users have the freedom to run, study, share, and modify the software.",
    extHomeURL: "https://en.wikipedia.org/wiki/GNU_General_Public_License",
    isFSFLibre: true,
    isOSIApproved: true,
    keywords: ["gpl", "gplv2", "gplv3"],
    spdx: "GPL-3.0-only",
  });
}
