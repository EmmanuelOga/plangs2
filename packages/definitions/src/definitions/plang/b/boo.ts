import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+boo", {
      name: "Boo",
      description:
        "Statically typed, general-purpose programming language that integrates .NET features such as Unicode and web application support, while using a Python-inspired syntax with language and compiler extensibility.",
      shortDesc: "Statically typed language with Python-like syntax and support for .NET framework features.",
      created: "2003",
      extensions: [".boo"],
      extGithubPath: "boo-lang/boo",
      extWikipediaPath: "Boo_(programming_language)",
      githubColor: "#d4bec1",
      githubLangId: "37",
      githubName: "Boo",
      githubPopular: false,
      githubStars: 875,
      githubType: "programming",
      isTranspiler: false,
      keywords: ["boo"],
      languishRanking: 312,
      releases: [{ version: "0.9.7", name: "Boo 0.9.7", date: "2013-03-25" }],
      stackovTags: ["boo"],
    })
    .relInfluencedBy.add("pl+c-sharp", "pl+python")
    .relLicenses.add("lic+bsd")
    .relParadigms.add("para+multi", "para+oop", "para+scripting")
    .relPlatforms.add("plat+.net", "plat+cross")
    .relTags.add("tag+app", "tag+compiler", "tag+games", "tag+interpreters", "tag+scripting")
    .relTypeSystems.add("tsys+duck", "tsys+inferred", "tsys+static", "tsys+strong")
    .relWrittenWith.add("pl+c-sharp");
}
