import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+mruby", {
      name: "mruby",
      description:
        "mruby is an interpreter for the Ruby programming language with the intention of being lightweight and easily embeddable. The project is headed by Yukihiro Matsumoto, with over 100 contributors currently working on the project.",
      keywords: ["mruby"],
      extensions: [".rb"],
      extWikipediaPath: "Mruby",
      extHomeURL: "https://mruby.org/",
      created: "2012",
    })
    .relImplements.add(["pl+ruby"])
    .relInfluencedBy.add(["pl+ruby"])
    .relLicenses.add(["lic+mit"])
    .relParadigms.add(["para+embedded", "para+oop", "para+scripting"])
    .relPlatforms.add(["plat+cross", "plat+embedded"])
    .relTags.add(["tag+compiler", "tag+embedded", "tag+interpreters"])
    .relTypeSystems.add(["tsys+duck", "tsys+dynamic"])
    .relWrittenWith.add(["pl+c"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
