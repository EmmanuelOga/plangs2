import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+mruby", {
      name: "mruby",
      description:
        "mruby is an interpreter for the Ruby programming language that aims to be lightweight and easily embeddable. It is developed under the leadership of Yukihiro Matsumoto and features contributions from over 100 developers.",
      keywords: ["embedded ruby", "lightweight ruby", "mruby"],
      extensions: [".rb"],
      extWikipediaPath: "Mruby",
      extHomeURL: "https://mruby.org/",
      created: "2012",
      isTranspiler: false,
      shortDesc: "mruby is a lightweight Ruby interpreter designed for embeddability.",
      githubStars: 5300,
      extGithubPath: "mruby/mruby",
    })
    .relImplements.add("pl+ruby")
    .relInfluencedBy.add("pl+ruby")
    .relLicenses.add("lic+mit")
    .relParadigms.add("para+embedded", "para+oop", "para+scripting")
    .relPlatforms.add("plat+cross", "plat+embedded")
    .relTags.add("tag+compiler", "tag+embedded", "tag+interpreters")
    .relTypeSystems.add("tsys+duck", "tsys+dynamic")
    .relWrittenWith.add("pl+c");

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
