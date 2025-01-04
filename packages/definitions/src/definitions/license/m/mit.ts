import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.license.set("lic+mit", {
    name: "MIT",
    description:
      "The MIT License is a permissive free software license that is very simple and permissive, with very few restrictions.",
    extHomeURL: "https://en.wikipedia.org/wiki/MIT_License",
    isFSFLibre: true,
    isOSIApproved: true,
    keywords: ["mit"],
    spdx: "MIT",
  });
}
