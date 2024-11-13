import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+io", {
      name: "Io",
      description:
        "Io is a pure object-oriented programming language inspired by Smalltalk, Self, Lua, Lisp, Act1, and NewtonScript. Io has a prototype-based object model similar to those in Self and NewtonScript, eliminating the distinction between instance and class. Like Smalltalk, everything is an object and it uses dynamic typing. Like Lisp, programs are just data trees. Io uses actors for concurrency.",
      keywords: ["io"],
      websites: [
        { title: "iolanguage.org", href: "https://iolanguage.org/", kind: "homepage" },
        { title: "Io", href: "https://en.wikipedia.org/wiki/Io_(programming_language)", kind: "wikipedia" },
        { title: "Io on Reddit", kind: "reddit", href: "https://reddit.com/r/iolanguage" },
      ],
      extensions: [".io"],
      year: 2002,
      isTranspiler: false,
      isMainstream: false,
      releases: [{ version: "2019.05.22", name: "Io 2019.05.22", date: "2019-05-22" }],
      stackovTags: ["iolanguage"],
      githubName: "Io",
      languishRanking: 285,
      githubLangId: "168",
      githubColor: "#a9188d",
      githubPopular: false,
      githubType: "programming",
    })
    .addInfluencedBy(["pl+lisp", "pl+lua", "pl+self", "pl+smalltalk"])
    .addLicenses(["license+bsd"])
    .addParadigms(["paradigm+concurrent", "paradigm+oop", "paradigm+prototype"])
    .addPlatforms(["plat+.net", "plat+apple", "plat+cross", "plat+linux", "plat+windows"])
    .addTags(["tag+interpreter", "tag+scripting"])
    .addTypeSystems(["tsys+dynamic", "tsys+strong"])
    .addWrittenIn(["pl+c", "pl+python"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
