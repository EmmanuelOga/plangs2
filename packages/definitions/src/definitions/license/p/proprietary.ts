import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.license.set("lic+proprietary", {
    name: "Proprietary",
    description: "Proprietary software is software that is not free or open-source and is subject to restrictions on use and distribution.",
    extHomeURL: "https://en.wikipedia.org/wiki/Proprietary_software",
    isFSFLibre: false,
    isOSIApproved: false,
    keywords: ["proprietary"],
  });
}
