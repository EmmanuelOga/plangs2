import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.community
    .set("comm+threejs-journey", {
      name: "ThreeJS Journey",
      description:
        "Public and Private communities for ThreeJS Journey students.",
      extHomeURL: "https://threejs-journey.com/discord",
    })
    .relPlangs.add("pl+javascript")
    .relTags.add("tag+3dg", "tag+games", "tag+webdev");
}
