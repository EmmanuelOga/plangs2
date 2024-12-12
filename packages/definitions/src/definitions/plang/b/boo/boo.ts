import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+boo", {
      name: "Boo",
      description:
        "Boo is a statically typed, general-purpose programming language that integrates .NET features such as Unicode and web application support, while using a Python-inspired syntax with language and compiler extensibility.",
      keywords: ["boo"],
      extensions: [".boo"],
      releases: [{ version: "0.9.7", name: "Boo 0.9.7", date: "2013-03-25" }],
      stackovTags: ["boo"],
      githubName: "Boo",
      languishRanking: 312,
      githubLangId: "37",
      githubColor: "#d4bec1",
      githubPopular: false,
      githubType: "programming",
      extWikipediaPath: "Boo_(programming_language)",
      created: "2003",
      isTranspiler: false,
      shortDesc: "Boo is a statically typed language with Python-like syntax and support for .NET framework features.",
      githubStars: 875,
      extGithubPath: "boo-lang/boo",
    })
    .relInfluencedBy.add("pl+c-sharp", "pl+python")
    .relLicenses.add("lic+bsd")
    .relParadigms.add("para+multi", "para+oop", "para+scripting")
    .relPlatforms.add("plat+.net", "plat+cross")
    .relTags.add("tag+app", "tag+compiler", "tag+games", "tag+interpreters", "tag+scripting")
    .relTypeSystems.add("tsys+duck", "tsys+inferred", "tsys+static", "tsys+strong")
    .relWrittenWith.add("pl+c-sharp");

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
