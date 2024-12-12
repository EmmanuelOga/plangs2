import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+hackety-hack", {
      name: "Hackety Hack",
      description:
        "Hackety Hack is an open-source application that teaches beginners how to program using the Ruby language, incorporating the Shoes toolkit for creating simple and intuitive GUI applications.",
      keywords: ["beginner programming", "education platform", "hackety hack", "ruby programming", "shoes toolkit"],
      releases: [{ version: "1.0", name: "Hackety Hack 1.0", date: "2011-11-04" }],
      extGithubPath: "hacketyhack/hacketyhack",
      extWikipediaPath: "Hackety_Hack",
      created: "2009",
      extensions: [".rb"],
      isTranspiler: false,
      shortDesc: "Hackety Hack is an educational platform for learning Ruby programming, using the Shoes toolkit for GUI development.",
      githubStars: 0,
    })
    .relInfluencedBy.add("pl+ruby")
    .relLicenses.add("lic+mit")
    .relParadigms.add("para+educational", "para+oop", "para+scripting")
    .relPlatforms.add("plat+apple", "plat+linux", "plat+windows")
    .relTags.add("tag+edu", "tag+gui", "tag+interpreters", "tag+scripting")
    .relTypeSystems.add("tsys+dynamic")
    .relWrittenWith.add("pl+ruby");

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
