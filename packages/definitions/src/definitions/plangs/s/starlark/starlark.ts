import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+starlark", {
      name: "Starlark",
      languishRanking: 77,
      stackovTags: ["bazel"],
      githubName: "Starlark",
      githubLangId: "960266174",
      githubColor: "#76d275",
      githubPopular: false,
      githubType: "programming",
      description: "Starlark is a subset of Python, originally called Skylark, used for defining build rules and macros in Bazel.",
      keywords: ["Bazel", "Python", "Skylark", "Starlark", "build tool"],
      extensions: [".bzl", ".star"],
      year: 2015,
      isMainstream: true,
      releases: [{ version: "1.0", name: "Version 1.0", date: "2019-10-01" }],
      extWikipediaPath: "Bazel_(software)",
      extRedditPath: "bazel",
    })
    .addLicenses(["license+apache"])
    .addParadigms(["paradigm+dataflow", "paradigm+declarative", "paradigm+scripting"])
    .addPlatforms(["plat+apple", "plat+cross", "plat+linux", "plat+windows"])
    .addTags(["tag+automation", "tag+compiler"])
    .addTypeSystems(["tsys+strong"])
    .addWrittenIn(["pl+go", "pl+java"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
