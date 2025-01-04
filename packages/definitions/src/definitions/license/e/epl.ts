import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.license.set("lic+epl", {
    name: "EPL",
    description:
      "The Eclipse Public License is a free software license used by the Eclipse Foundation for its open-source projects.",
    extHomeURL: "https://en.wikipedia.org/wiki/Eclipse_Public_License",
    isFSFLibre: true,
    isOSIApproved: true,
    keywords: ["epl"],
    spdx: "EPL-2.0",
  });
}
