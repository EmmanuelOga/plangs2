import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+mruby", {
      name: "mruby",
      description:
        "mruby is an interpreter for the Ruby programming language with the intention of being lightweight and easily embeddable. The project is headed by Yukihiro Matsumoto, with over 100 contributors currently working on the project.",
      keywords: ["mruby"],
      websites: [
        { title: "mruby", href: "https://mruby.org/", kind: "homepage" },
        { title: "mruby - Wikipedia", href: "https://en.wikipedia.org/wiki/Mruby", kind: "wikipedia" },
      ],
      extensions: [".rb"],
      year: 2012,
      isMainstream: false,
    })
    .addImplements(["pl+ruby"])
    .addInfluencedBy(["pl+ruby"])
    .addLicenses(["license+mit"])
    .addParadigms(["paradigm+embedded", "paradigm+oop", "paradigm+scripting"])
    .addPlatforms(["plat+cross", "plat+embedded"])
    .addTags(["tag+compiler", "tag+embedded", "tag+interpreter"])
    .addTypeSystems(["tsys+duck", "tsys+dynamic"])
    .addWrittenIn(["pl+c"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
