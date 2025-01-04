import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.license.set("lic+boost", {
    name: "Boost",
    description:
      "The Boost Software License is a permissive free software license used by the Boost C++ Libraries.",
    extHomeURL: "https://en.wikipedia.org/wiki/Boost_Software_License",
    isFSFLibre: true,
    isOSIApproved: true,
    keywords: ["boost"],
    spdx: "BSL-1.0",
  });
}
