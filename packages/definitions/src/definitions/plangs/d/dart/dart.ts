import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+dart", {
      name: "Dart",
      description:
        "Dart is a programming language designed by Lars Bak and Kasper Lund and developed by Google. It can be used to develop web and mobile apps as well as server and desktop applications.",
      keywords: ["dart"],
      websites: [
        { title: "dart.dev", href: "https://dart.dev/", kind: "homepage" },
        { title: "Dart", href: "https://en.wikipedia.org/wiki/Dart_(programming_language)", kind: "wikipedia" },
        { title: "Dart on Reddit", kind: "reddit", href: "https://reddit.com/r/dartlang" },
      ],
      extensions: [".dart"],
      year: 2011,
      isTranspiler: true,
      isMainstream: true,
      releases: [
        { version: "3.5.2", name: "Dart 3.5.2", date: "2024-01-01" },
        { version: "2.12.0", name: "Dart 2.12.0", date: "2021-03-03" },
        { version: "1.0.0", name: "Dart 1.0.0", date: "2013-11-14" },
      ],
      stackovTags: ["dart"],
      githubName: "Dart",
      languishRanking: 19,
      githubLangId: "87",
      githubColor: "#00B4AB",
      githubPopular: true,
      githubType: "programming",
    })
    .addCompilesTo(["pl+javascript"])
    .addInfluencedBy(["pl+c", "pl+c++", "pl+c-sharp", "pl+erlang", "pl+javascript", "pl+ruby", "pl+typescript"])
    .addLicenses(["license+bsd"])
    .addParadigms(["paradigm+functional", "paradigm+imperative", "paradigm+multi", "paradigm+oop", "paradigm+reflective"])
    .addPlatforms(["plat+android", "plat+apple", "plat+cross", "plat+linux", "plat+windows"])
    .addTags(["tag+app", "tag+cli", "tag+framework", "tag+interpreter", "tag+ui"])
    .addTypeSystems(["tsys+inferred", "tsys+optional", "tsys+static", "tsys+strong"])
    .addWrittenIn(["pl+c++"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
