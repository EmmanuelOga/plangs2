import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+mruby", {
      name: "mruby",
      description:
        "Interpreter for the Ruby programming language that aims to be lightweight and easily embeddable. It is developed under the leadership of Yukihiro Matsumoto and features contributions from over 100 developers.",
      shortDesc: "Lightweight Ruby interpreter designed for embeddability.",
      created: "2012",
      extensions: [".rb"],
      extGithubPath: "mruby/mruby",
      extHomeURL: "https://mruby.org/",
      extWikipediaPath: "Mruby",
      githubStars: 5300,
      isTranspiler: false,
      keywords: ["embedded ruby", "lightweight ruby", "mruby"],
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
