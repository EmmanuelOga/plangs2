import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+lobster", {
      name: "Lobster",
      description:
        "Statically typed programming language with Python-like syntax, emphasizing friendly and efficient features for game development and graphical applications. It provides many features catering to developers such as compile-time memory management and an expressive type system, helping reduce the complexity of code.",
      shortDesc: "Statically typed, game-oriented language with Python-like syntax and compile-time memory management.",
      created: "2016",
      extensions: [".lobster"],
      extGithubPath: "aardappel/lobster",
      extHomeURL: "https://strlen.com/lobster/",
      githubStars: 2300,
      isTranspiler: false,
      keywords: ["game development", "lobster", "statically typed"],
      releases: [{ version: "1.0", name: "Initial Release", date: "2016-01-01" }],
    })
    .relInfluencedBy.add("pl+python")
    .relLicenses.add("lic+apache", "lic+zlib")
    .relParadigms.add("para+compiled", "para+functional", "para+multi", "para+oop")
    .relPlatforms.add("plat+cross", "plat+linux", "plat+web", "plat+windows")
    .relTags.add("tag+games", "tag+scripting")
    .relTypeSystems.add("tsys+inferred", "tsys+static", "tsys+strong")
    .relWrittenWith.add("pl+c++");
}
