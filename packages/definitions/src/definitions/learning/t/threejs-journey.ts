import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.learning
    .set("learn+threejs-journey", {
      name: "ThreeJS Journey",
      description: "Everything you need in one place: 93 hours of video to go from absolute beginner to advanced Three.js developer.",
      extHomeURL: "https://threejs-journey.com/",
      kinds: ["course"],
    })
    .relCommunities.add("comm+threejs-journey")
    .relPlangs.add("pl+javascript")
    .relTags.add("tag+3dg", "tag+games", "tag+webdev");
}
