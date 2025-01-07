import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.community
    .set("comm+bembem", {
      name: "BEMBEM",
      description:
        "Community by the creator of Plangs! Welcome to Billie English Muffin's Brilliantly Engineered Machine of Boundless Excitement and Marvel! A place for friends to talk about anything. Feel free to share or talk about whatever you may find interesting!",
      extHomeURL: "https://emmanueloga.com/",
      links: [{ title: "Discord", url: "https://discord.gg/MRrkpywtKR" }],
    })
    .relPlangs.add(
      "pl+bun",
      "pl+c",
      "pl+c-sharp",
      "pl+go",
      "pl+javascript",
      "pl+python",
      "pl+typescript",
    )
    .relTags.add("tag+games", "tag+multimedia", "tag+webdev");
}
