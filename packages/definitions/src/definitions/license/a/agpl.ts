import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.license.set("lic+agpl", {
    name: "AGPL",
    description:
      "The Affero General Public License is a free software license that requires the source code to be made available to all users who interact with the software over a network.",
    extHomeURL: "https://en.wikipedia.org/wiki/Affero_General_Public_License",
    isFSFLibre: true,
    isOSIApproved: true,
    keywords: ["agpl", "agpl-3.0-or-later"],
    spdx: "AGPL-3.0-only",
  });
}
