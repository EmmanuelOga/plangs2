import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
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
    .relLicenses.add(["license+mit"])
    .relParadigms.add(["paradigm+embedded", "paradigm+oop", "paradigm+scripting"])
    .relPlatforms.add(["plat+cross", "plat+embedded"])
    .relTags.add(["tag+compiler", "tag+embedded", "tag+interpreters"])
    .relTsys.add(["tsys+duck", "tsys+dynamic"])
    .relWrittenIn.add(["pl+c"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
