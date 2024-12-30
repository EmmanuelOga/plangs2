import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.license.set("lic+cpl", {
    name: "CPL",
    description: "The Common Public License is a free software license used by IBM for some of its software projects.",
    extHomeURL: "https://en.wikipedia.org/wiki/Common_Public_License",
    isFSFLibre: true,
    isOSIApproved: true,
    keywords: ["cpl"],
    spdx: "CPL-1.0",
  });
}
