import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.license.set("lic+public-domain", {
    name: "PD",
    description:
      "Public Domain refers to works that are free from copyright restrictions and can be freely used by anyone.",
    extHomeURL: "https://en.wikipedia.org/wiki/Public_domain",
    isFSFLibre: false,
    isOSIApproved: false,
    keywords: ["public-domain"],
  });
}
