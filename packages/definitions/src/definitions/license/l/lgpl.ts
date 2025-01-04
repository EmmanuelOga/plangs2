import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.license.set("lic+lgpl", {
    name: "LGPL",
    description:
      "The GNU Lesser General Public License is a free software license that allows for linking with proprietary software.",
    extHomeURL:
      "https://en.wikipedia.org/wiki/GNU_Lesser_General_Public_License",
    isFSFLibre: true,
    isOSIApproved: true,
    keywords: ["lgpl"],
    spdx: "LGPL-2.1-only",
  });
}
