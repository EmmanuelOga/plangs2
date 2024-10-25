import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+mruby", {
      name: "mruby",
      description:
        "mruby is an interpreter for the Ruby programming language with the intention of being lightweight and easily embeddable. The project is headed by Yukihiro Matsumoto, with over 100 contributors currently working on the project.",
      keywords: ["mruby"],
      websites: [
        { title: "mruby.org", href: "https://mruby.org/", kind: "homepage" },
        { title: "mruby", href: "https://en.wikipedia.org/wiki/Mruby", kind: "wikipedia" },
      ],
      extensions: [".rb"],
      year: 2012,
      isTranspiler: false,
      isMainstream: false,
      releases: [
        { version: "1.0.0", name: "mruby 1.0.0", date: "2014-02-20" },
        { version: "2.0.1", name: "mruby 2.0.1", date: "2019-09-12" },
        { version: "3.0.0", name: "mruby 3.0.0", date: "2021-11-06" },
        { version: "3.3.0", name: "mruby 3.3.0", date: "2024-01-01" },
      ],
    })
    .addImplements(["pl+ruby"])
    .addInfluencedBy(["pl+ruby"])
    .addLicenses(["license+mit"])
    .addParadigms(["paradigm+embedded", "paradigm+oop", "paradigm+scripting"])
    .addPlatforms(["plat+cross", "plat+embedded"])
    .addTags(["tag+compiler", "tag+embedded", "tag+interpreter"])
    .addTypeSystems(["tsys+duck", "tsys+dynamic"])
    .addWrittenIn(["pl+c"]);
}
