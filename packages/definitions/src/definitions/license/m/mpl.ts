import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.license.set("lic+mpl", {
    name: "MPL",
    description:
      "The Mozilla Public License is a free software license used by Mozilla for its open-source projects.",
    extHomeURL: "https://en.wikipedia.org/wiki/Mozilla_Public_License",
    isFSFLibre: true,
    isOSIApproved: true,
    keywords: ["mpl"],
    spdx: "MPL-2.0",
  });
}
