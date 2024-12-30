import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.license.set("lic+cc-by", {
    name: "CCA",
    description:
      "The Creative Commons Attribution license allows for the sharing and adaptation of works, provided that appropriate credit is given.",
    extHomeURL: "https://en.wikipedia.org/wiki/Creative_Commons_license#Attribution",
    isFSFLibre: false,
    isOSIApproved: false,
    keywords: ["cc-by"],
    spdx: "CC-BY-4.0",
  });
}
