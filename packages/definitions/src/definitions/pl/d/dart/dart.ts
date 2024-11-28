import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+dart", {
      name: "Dart",
      description:
        "Dart is a programming language designed by Lars Bak and Kasper Lund and developed by Google. It is used to develop web and mobile apps as well as server and desktop applications, supporting a broad range of platforms with efficient compilation techniques including JavaScript and WebAssembly.",
      keywords: ["dart", "google", "language", "programming"],
      extensions: [".dart"],
      isTranspiler: true,
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
      created: "2011",
    })
    .relCompilesTo.add(["pl+javascript"])
    .relInfluencedBy.add(["pl+c", "pl+c++", "pl+c-sharp", "pl+erlang", "pl+javascript", "pl+ruby", "pl+typescript"])
    .relLicenses.add(["lic+bsd"])
    .relParadigms.add(["para+functional", "para+imperative", "para+multi", "para+oop", "para+reflective"])
    .relPlatforms.add(["plat+android", "plat+apple", "plat+cross", "plat+linux", "plat+riscv", "plat+web", "plat+windows", "plat+x86-64"])
    .relTags.add(["tag+app", "tag+cli", "tag+embedded", "tag+framework", "tag+interpreters", "tag+scripting", "tag+ui"])
    .relTypeSystems.add(["tsys+dynamic", "tsys+inferred", "tsys+optional", "tsys+static", "tsys+strong"])
    .relWrittenWith.add(["pl+c++"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
