import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+ironruby", {
      name: "IronRuby",
      description:
        "IronRuby is an implementation of the Ruby programming language targeting Microsoft .NET Framework. It is implemented on top of the Dynamic Language Runtime (DLR), a library running on top of the Common Language Infrastructure that provides dynamic typing and dynamic method dispatch, among other things, for dynamic languages.",
      keywords: ["ironruby"],
      websites: [
        { title: "www.ironruby.net", href: "http://www.ironruby.net/", kind: "homepage" },
        { title: "IronRuby", href: "https://en.wikipedia.org/wiki/IronRuby", kind: "wikipedia" },
      ],
      year: 2010,
      isTranspiler: false,
      isMainstream: false,
      releases: [
        { version: "1.0", name: "IronRuby 1.0", date: "2010-01-01" },
        { version: "1.1.3", name: "IronRuby 1.1.3", date: "2011-01-01" },
      ],
    })
    .addDialectOf(["pl+ruby"])
    .addInfluencedBy(["pl+ruby"])
    .addLicenses(["license+apache"])
    .addParadigms(["paradigm+interpreted", "paradigm+oop", "paradigm+scripting"])
    .addPlatforms(["plat+.net", "plat+apple", "plat+linux", "plat+windows"])
    .addTags(["tag+app", "tag+compiler", "tag+framework", "tag+interpreter", "tag+scripting"])
    .addTypeSystems(["tsys+duck", "tsys+dynamic"])
    .addWrittenIn(["pl+c-sharp"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
