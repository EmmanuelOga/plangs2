import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.license.set("lic+isc", {
    name: "ISC",
    description:
      "The ISC License is a permissive free software license similar to the MIT License, with simplified terms.",
    extHomeURL: "https://en.wikipedia.org/wiki/ISC_license",
    isFSFLibre: true,
    isOSIApproved: true,
    keywords: ["isc"],
    spdx: "ISC",
  });
}
