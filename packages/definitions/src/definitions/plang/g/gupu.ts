import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+gupu", {
      name: "GUPU",
      description:
        "An integrated teaching environment tailored for supporting the learning and debugging of Prolog and constraint logic programming methodologies.",
      shortDesc: "An environment specialized for Prolog and constraint programming.",
      created: "1992",
      extHomeURL: "https://www.complang.tuwien.ac.at/ulrich/gupu/",
      isTranspiler: false,
      keywords: ["constraint learning", "prolog", "teaching environment"],
      links: [{ url: "https://www.youtube.com/watch?v=w7rM3_4hJKM", title: "GUPU on YouTube" }],
    })
    .relInfluencedBy.add("pl+prolog")
    .relParadigms.add("para+educational", "para+logic")
    .relPlatforms.add("plat+cross")
    .relTags.add("tag+edu");
}
