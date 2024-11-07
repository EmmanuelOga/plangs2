import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+jruby", {
      name: "JRuby",
      description:
        "JRuby is an implementation of the Ruby programming language atop the Java Virtual Machine, written largely in Java. It is free software released under a dual Eclipse Public License version 1.0 / GNU General Public License. JRuby is tightly integrated with Java to allow the embedding of the interpreter into any Java application with full two-way access between the Java and the Ruby code, similar to Jython for Python.",
      keywords: ["jruby"],
      websites: [
        { title: "JRuby Official Website", href: "https://www.jruby.org/", kind: "homepage" },
        { title: "JRuby on Wikipedia", href: "https://en.wikipedia.org/wiki/JRuby", kind: "wikipedia" },
      ],
      extensions: [".rb"],
      year: 2001,
      isTranspiler: false,
      isMainstream: true,
      releases: [{ version: "9.4.5.0", name: "JRuby 9.4.5.0", date: "2023-01-01" }],
    })
    .addImplements(["pl+ruby"])
    .addInfluencedBy(["pl+ruby"])
    .addLicenses(["license+epl", "license+gnu-gpl"])
    .addParadigms(["paradigm+concurrent", "paradigm+oop", "paradigm+reflective", "paradigm+scripting"])
    .addPlatforms(["plat+cross", "plat+java"])
    .addTags(["tag+compiler", "tag+framework", "tag+interpreter", "tag+scripting", "tag+shell"])
    .addTypeSystems(["tsys+duck", "tsys+dynamic", "tsys+strong"])
    .addWrittenIn(["pl+java"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
