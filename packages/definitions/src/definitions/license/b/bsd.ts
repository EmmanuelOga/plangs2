import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.license.set("lic+bsd", {
    name: "BSD",
    description:
      "BSD licenses are a family of permissive free software licenses, imposing minimal restrictions on the use and distribution of covered software.",
    extHomeURL: "https://en.wikipedia.org/wiki/BSD_licenses",
    isFSFLibre: true,
    isOSIApproved: true,
    keywords: ["bsd", "bsd3", "bsd4"],
    spdx: "BSD-3-Clause",
  });
}
