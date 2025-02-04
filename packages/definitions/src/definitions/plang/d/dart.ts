import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+dart", {
      name: "Dart",
      description:
        "Designed by Lars Bak and Kasper Lund and developed by Google. It is used to develop web and mobile apps as well as server and desktop applications, supporting a broad range of platforms with efficient compilation techniques including JavaScript and WebAssembly.",
      shortDesc:
        "Language for building web, mobile, and server apps, with tools to compile to JavaScript and WebAssembly.",
      created: "2011",
      extensions: [".dart"],
      extGithubPath: "dart-lang/sdk",
      extHomeURL: "https://dart.dev/",
      extRedditPath: "dartlang",
      extWikipediaPath: "Dart_(programming_language)",
      githubColor: "#00B4AB",
      githubLangId: "87",
      githubName: "Dart",
      githubPopular: true,
      githubStars: 10300,
      githubType: "programming",
      isTranspiler: true,
      keywords: ["dart", "google", "language", "programming"],
      languishRanking: 18,
      releases: [
        { version: "3.5.4", name: "Dart 3.5.4", date: "2024-10-17" },
        { version: "3.0.0", name: "Dart 3.0", date: "2023-05-01" },
        { version: "2.12.0", name: "Dart 2.12.0", date: "2021-02-25" },
        { version: "1.0.0", name: "Dart 1.0.0", date: "2013-11-14" },
        { version: "3.5.2", name: "Dart 3.5.2", date: "2024-01-01" },
      ],
      stackovTags: ["dart"],
    })
    .relCompilesTo.add("pl+javascript")
    .relInfluencedBy.add(
      "pl+c",
      "pl+c++",
      "pl+c-sharp",
      "pl+erlang",
      "pl+javascript",
      "pl+ruby",
      "pl+typescript",
    )
    .relLicenses.add("lic+bsd")
    .relParadigms.add(
      "para+functional",
      "para+general-purpose",
      "para+imperative",
      "para+multi",
      "para+oop",
      "para+reflective",
    )
    .relPlatforms.add(
      "plat+android",
      "plat+apple",
      "plat+cross",
      "plat+linux",
      "plat+riscv",
      "plat+web",
      "plat+windows",
      "plat+x86-64",
    )
    .relTags.add(
      "tag+app",
      "tag+cli",
      "tag+embedded",
      "tag+framework",
      "tag+gui",
      "tag+interpreters",
      "tag+scripting",
    )
    .relTypeSystems.add(
      "tsys+dynamic",
      "tsys+flow",
      "tsys+generic",
      "tsys+inferred",
      "tsys+object",
      "tsys+optional",
      "tsys+static",
      "tsys+strong",
    )
    .relWrittenWith.add("pl+c++");
}
