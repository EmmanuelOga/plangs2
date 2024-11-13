import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+jruby", {
      name: "JRuby",
      description:
        "JRuby is an implementation of the Ruby programming language atop the Java Virtual Machine, written largely in Java. It is free software released under a three-way EPL/GPL/LGPL license. JRuby is tightly integrated with Java to allow the embedding of the interpreter into any Java application with full two-way access between Java and Ruby code, similar to Jython for Python.",
      keywords: ["interpreter", "java", "jruby", "jvm", "ruby"],
      websites: [
        { title: "Home — JRuby.org", href: "https://www.jruby.org/", kind: "homepage" },
        { title: "JRuby - Wikipedia", href: "https://en.wikipedia.org/wiki/JRuby_programming_language", kind: "wikipedia" },
      ],
      extensions: [".rb"],
      year: 2001,
      isMainstream: true,
      releases: [
        { version: "9.4.5.0", name: "JRuby 9.4.5.0", date: "2023-11-02" },
        { version: "9.4.9.0", name: "JRuby 9.4.9.0", date: "2023-01-01" },
      ],
      githubName: "Ruby",
      languishRanking: 24,
      stackovTags: ["ruby"],
      githubLangId: "326",
      githubColor: "#701516",
      githubPopular: true,
      githubType: "programming",
    })
    .addImplements(["pl+ruby"])
    .addInfluencedBy(["pl+ruby"])
    .addLicenses(["license+epl", "license+gnu-gpl", "license+lgpl"])
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
