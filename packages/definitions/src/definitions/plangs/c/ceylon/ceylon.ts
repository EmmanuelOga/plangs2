import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+ceylon", {
      name: "Ceylon",
      description:
        "Ceylon was an object-oriented, strongly statically typed programming language with an emphasis on immutability, created by Red Hat. Ceylon programs run on the Java virtual machine (JVM), and could be compiled to JavaScript. The language design focuses on source code readability, predictability, toolability, modularity, and metaprogrammability.",
      keywords: ["ceylon"],
      websites: [
        { title: "ceylon-lang.org", href: "http://ceylon-lang.org/", kind: "homepage" },
        { title: "Ceylon", href: "https://en.wikipedia.org/wiki/Ceylon_(programming_language)", kind: "wikipedia" },
        { title: "Ceylon on Reddit", kind: "reddit", href: "https://reddit.com/r/ceylon" },
      ],
      extensions: [".ceylon"],
      year: 2011,
      isTranspiler: true,
      isMainstream: false,
      releases: [{ version: "1.3.3", name: "Ceylon 1.3.3", date: "2017-01-01" }],
      github: { name: "Ceylon", langId: "54", color: "#dfa535", popular: false, type: "programming" },
      stackovTags: ["ceylon"],
      githubName: "Ceylon",
      languishRanking: 406,
    })
    .addInfluencedBy(["pl+lisp", "pl+ml", "pl+scala", "pl+whiley"])
    .addLicenses(["license+apache"])
    .addParadigms(["paradigm+compiled", "paradigm+functional", "paradigm+metaprogramming", "paradigm+modular", "paradigm+oop"])
    .addPlatforms(["plat+cross", "plat+java"])
    .addTags(["tag+compiler"])
    .addTypeSystems(["tsys+generic", "tsys+polymorphic", "tsys+safe", "tsys+static", "tsys+strong"])
    .addWrittenIn(["pl+java"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
