import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.license.set("lic+afl", {
    name: "AFL",
    description:
      "The Academic Free License is a permissive free software license with provisions for academic use.",
    extHomeURL: "https://en.wikipedia.org/wiki/Academic_Free_License",
    isFSFLibre: true,
    isOSIApproved: true,
    keywords: ["afl", "afl-3"],
    spdx: "AFL-3.0",
  });
}
