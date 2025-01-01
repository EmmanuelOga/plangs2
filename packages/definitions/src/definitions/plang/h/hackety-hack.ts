import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+hackety-hack", {
      name: "Hackety Hack",
      description:
        "Application that teaches beginners how to program using the Ruby language, incorporating the Shoes toolkit for creating simple and intuitive GUI applications.",
      shortDesc: "Educational platform for learning Ruby programming, using the Shoes toolkit for GUI development.",
      created: "2009",
      extensions: [".rb"],
      extGithubPath: "hacketyhack/hacketyhack",
      extWikipediaPath: "Hackety_Hack",
      githubStars: 0,
      isTranspiler: false,
      keywords: ["beginner programming", "education platform", "hackety hack", "ruby programming", "shoes toolkit"],
      releases: [{ version: "1.0", name: "Hackety Hack 1.0", date: "2011-11-04" }],
    })
    .relInfluencedBy.add("pl+ruby")
    .relLicenses.add("lic+mit")
    .relParadigms.add("para+educational", "para+oop", "para+scripting")
    .relPlatforms.add("plat+apple", "plat+linux", "plat+windows")
    .relTags.add("tag+edu", "tag+gui", "tag+interpreters", "tag+scripting")
    .relTypeSystems.add("tsys+dynamic", "tsys+object")
    .relWrittenWith.add("pl+ruby");
}
