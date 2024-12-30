import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.license.set("lic+artistic", {
    name: "AL2.0",
    description: "The Artistic License 2.0 is a free software license used for the Perl programming language and its associated libraries.",
    extHomeURL: "https://en.wikipedia.org/wiki/Artistic_License_2.0",
    isFSFLibre: true,
    isOSIApproved: true,
    keywords: ["artistic", "artistic-2", "artistic-2.0"],
    spdx: "Artistic-2.0",
  });
}
