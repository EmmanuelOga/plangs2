import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+starlark", {
      name: "Starlark",
      description:
        "Python-like configuration language designed primarily as a scripting language for application configuration and build automation, commonly used with Bazel for defining build rules.",
      shortDesc:
        "Python-like configuration language used for application configuration and build automation with tools like Bazel.",
      created: "2015",
      extensions: [".bzl", ".star"],
      extGithubPath: "bazelbuild/bazel",
      extHomeURL: "https://bazel.build/rules/language",
      extRedditPath: "bazel",
      extWikipediaPath: "Bazel_(software)",
      githubColor: "#76d275",
      githubLangId: "960266174",
      githubName: "Starlark",
      githubPopular: false,
      githubStars: 23400,
      githubType: "programming",
      isTranspiler: false,
      keywords: [
        "Bazel",
        "Skylark",
        "Starlark",
        "build automation",
        "configuration language",
      ],
      languishRanking: 83,
      releases: [{ version: "1.0", name: "Version 1.0", date: "2019-10-01" }],
      stackovTags: ["bazel"],
    })
    .relInfluencedBy.add("pl+python")
    .relLicenses.add("lic+apache")
    .relParadigms.add("para+dataflow", "para+declarative", "para+scripting")
    .relPlatforms.add("plat+apple", "plat+cross", "plat+linux", "plat+windows")
    .relTags.add("tag+automation", "tag+compiler")
    .relTypeSystems.add("tsys+strong")
    .relWrittenWith.add("pl+go", "pl+java");
}
