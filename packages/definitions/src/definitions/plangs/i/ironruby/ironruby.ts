import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+ironruby", {
      name: "IronRuby",
      description:
        "IronRuby is an open-source implementation of the Ruby programming language which is tightly integrated with the .NET Framework. IronRuby can use the .NET Framework and Ruby libraries, and other .NET languages can use Ruby code just as easily. It is built on the Dynamic Language Runtime (DLR), allowing dynamic typing and method dispatch for dynamic languages.",
      keywords: ["ironruby"],
      websites: [
        { title: "IronRuby.net", href: "http://www.ironruby.net/", kind: "homepage" },
        { title: "IronRuby - Wikipedia", href: "https://en.wikipedia.org/wiki/IronRuby", kind: "wikipedia" },
      ],
      year: 2007,
      isMainstream: false,
      releases: [
        { version: "1.0", name: "IronRuby 1.0", date: "2010-04-12" },
        { version: "1.1.3", name: "IronRuby 1.1.3", date: "2011-03-13" },
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
