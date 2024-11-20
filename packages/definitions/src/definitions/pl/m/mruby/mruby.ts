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
    .addImplements(["pl+ruby"])
    .addInfluencedBy(["pl+ruby"])
    .addLicenses(["license+mit"])
    .addParadigms(["paradigm+embedded", "paradigm+oop", "paradigm+scripting"])
    .addPlatforms(["plat+cross", "plat+embedded"])
    .addTags(["tag+compiler", "tag+embedded", "tag+interpreters"])
    .addTypeSystems(["tsys+duck", "tsys+dynamic"])
    .addWrittenIn(["pl+c"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
