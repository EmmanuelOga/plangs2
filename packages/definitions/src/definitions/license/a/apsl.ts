import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.license.set("lic+apsl", {
    name: "APSL",
    description: "The Apple Public Source License is a free software license used by Apple for its open-source projects.",
    extHomeURL: "https://en.wikipedia.org/wiki/Apple_Public_Source_License",
    isFSFLibre: false,
    isOSIApproved: true,
    keywords: ["apsl"],
    spdx: "APSL-2.0",
  });
}
