import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+dart", {
      name: "Dart",
      description:
        "Dart is a programming language designed by Lars Bak and Kasper Lund and developed by Google. It is used to develop web and mobile apps as well as server and desktop applications, supporting a broad range of platforms with efficient compilation techniques including JavaScript and WebAssembly.",
      keywords: ["dart", "google", "language", "programming"],
      extensions: [".dart"],
      year: 2011,
      isTranspiler: true,
      isMainstream: true,
      releases: [
        { version: "3.5.4", name: "Dart 3.5.4", date: "2024-10-17" },
        { version: "3.0.0", name: "Dart 3.0", date: "2023-05-01" },
        { version: "2.12.0", name: "Dart 2.12.0", date: "2021-02-25" },
        { version: "1.0.0", name: "Dart 1.0.0", date: "2013-11-14" },
        { version: "3.5.2", name: "Dart 3.5.2", date: "2024-01-01" },
      ],
      stackovTags: ["dart"],
      githubName: "Dart",
      languishRanking: 19,
      githubLangId: "87",
      githubColor: "#00B4AB",
      githubPopular: true,
      githubType: "programming",
      extWikipediaPath: "Dart_(programming_language)",
      extRedditPath: "dartlang",
      extHomeURL: "https://dart.dev/",
    })
    .addCompilesTo(["pl+javascript"])
    .addInfluencedBy(["pl+c", "pl+c++", "pl+c-sharp", "pl+erlang", "pl+javascript", "pl+ruby", "pl+typescript"])
    .addLicenses(["license+bsd"])
    .addParadigms(["paradigm+functional", "paradigm+imperative", "paradigm+multi", "paradigm+oop", "paradigm+reflective"])
    .addPlatforms(["plat+android", "plat+apple", "plat+cross", "plat+linux", "plat+riscv", "plat+web", "plat+windows", "plat+x86-64"])
    .addTags(["tag+app", "tag+cli", "tag+embedded", "tag+framework", "tag+interpreter", "tag+scripting", "tag+ui"])
    .addTypeSystems(["tsys+dynamic", "tsys+inferred", "tsys+optional", "tsys+static", "tsys+strong"])
    .addWrittenIn(["pl+c++"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
