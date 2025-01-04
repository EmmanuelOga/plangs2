import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.license.set("lic+dual", {
    name: "Dual",
    description:
      "Dual license allows software to be licensed under two different licenses, providing users with a choice.",
    extHomeURL: "https://en.wikipedia.org/wiki/Dual_license",
    keywords: ["dual-license"],
  });
}
