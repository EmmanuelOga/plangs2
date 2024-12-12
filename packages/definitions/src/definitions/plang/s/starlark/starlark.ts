import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+starlark", {
      name: "Starlark",
      languishRanking: 77,
      stackovTags: ["bazel"],
      githubName: "Starlark",
      githubLangId: "960266174",
      githubColor: "#76d275",
      githubPopular: false,
      githubType: "programming",
      description:
        "Starlark is an independent, Python-like configuration language designed primarily as a scripting language for application configuration and build automation, commonly used with Bazel for defining build rules.",
      keywords: ["Bazel", "Skylark", "Starlark", "build automation", "configuration language"],
      extensions: [".bzl", ".star"],
      releases: [{ version: "1.0", name: "Version 1.0", date: "2019-10-01" }],
      extWikipediaPath: "Bazel_(software)",
      extRedditPath: "bazel",
      created: "2015",
      isTranspiler: false,
      shortDesc: "Starlark is a Python-like configuration language used for application configuration and build automation with tools like Bazel.",
      extHomeURL: "https://bazel.build/rules/language",
      githubStars: 23400,
      extGithubPath: "bazelbuild/bazel",
    })
    .relInfluencedBy.add("pl+python")
    .relLicenses.add("lic+apache")
    .relParadigms.add("para+dataflow", "para+declarative", "para+scripting")
    .relPlatforms.add("plat+apple", "plat+cross", "plat+linux", "plat+windows")
    .relTags.add("tag+automation", "tag+compiler")
    .relTypeSystems.add("tsys+strong")
    .relWrittenWith.add("pl+go", "pl+java");

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
