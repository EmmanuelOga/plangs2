import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+ironruby", {
      name: "IronRuby",
      description:
        "IronRuby is an open-source implementation of the Ruby programming language which is tightly integrated with the .NET Framework. IronRuby can use the .NET Framework and Ruby libraries, and other .NET languages can use Ruby code just as easily. It is built on the Dynamic Language Runtime (DLR), allowing dynamic typing and method dispatch for dynamic languages.",
      keywords: ["ironruby"],
      releases: [
        { version: "1.0", name: "IronRuby 1.0", date: "2010-04-12" },
        { version: "1.1.3", name: "IronRuby 1.1.3", date: "2011-03-13" },
      ],
      extWikipediaPath: "IronRuby",
      extHomeURL: "http://www.ironruby.net/",
      created: "2007",
    })
    .relDialectOf.add(["pl+ruby"])
    .relInfluence.add(["pl+ruby"])
    .relLicense.add(["lic+apache"])
    .relParadigm.add(["para+interpreted", "para+oop", "para+scripting"])
    .relPlatform.add(["plat+.net", "plat+apple", "plat+linux", "plat+windows"])
    .relTag.add(["tag+app", "tag+compiler", "tag+framework", "tag+interpreters", "tag+scripting"])
    .relTypeSystem.add(["tsys+duck", "tsys+dynamic"])
    .relWrittenInPlang.add(["pl+c-sharp"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
