import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+purescript", {
      name: "PureScript",
      description:
        "PureScript is a strongly-typed, purely-functional programming language that compiles to JavaScript and other languages. It is used for developing web applications, server-side apps, and desktop applications. PureScript's syntax is similar to Haskell and includes features like row polymorphism, extensible records, and strict evaluation. It was initially designed by Phil Freeman in 2013. The community plays a key role in its development and offers a variety of tools and learning resources.",
      keywords: ["functional", "haskell", "javascript", "purescript"],
      extensions: [".purs"],
      isTranspiler: true,
      releases: [{ version: "0.15.15", name: "", date: "2024-02-07" }],
      stackovTags: ["purescript"],
      githubName: "PureScript",
      languishRanking: 222,
      githubLangId: "302",
      githubColor: "#1D222D",
      githubPopular: false,
      githubType: "programming",
      extWikipediaPath: "PureScript",
      extRedditPath: "purescript",
      extHomeURL: "https://www.purescript.org/",
      created: "2013",
    })
    .relCompilesTo.add("pl+javascript")
    .relInfluencedBy.add("pl+haskell", "pl+javascript")
    .relLicenses.add("lic+bsd")
    .relParadigms.add("para+declarative", "para+functional")
    .relPlatforms.add("plat+cross", "plat+nodejs")
    .relTags.add("tag+app", "tag+compiler", "tag+editor", "tag+interpreters")
    .relTypeSystems.add("tsys+inferred", "tsys+static", "tsys+strong")
    .relWrittenWith.add("pl+haskell", "pl+javascript");

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
