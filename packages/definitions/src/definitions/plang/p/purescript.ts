import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+purescript", {
      name: "PureScript",
      description:
        "Strongly-typed, purely-functional programming language that compiles to JavaScript and other languages. It is used for developing web applications, server-side apps, and desktop applications. PureScript's syntax is similar to Haskell and includes features like row polymorphism, extensible records, and strict evaluation.",
      shortDesc: "Strongly-typed, purely-functional language similar to Haskell, compiling to JavaScript.",
      created: "2013",
      extensions: [".purs"],
      extGithubPath: "purescript/purescript",
      extHomeURL: "https://www.purescript.org/",
      extRedditPath: "purescript",
      extWikipediaPath: "PureScript",
      githubColor: "#1D222D",
      githubLangId: "302",
      githubName: "PureScript",
      githubPopular: false,
      githubStars: 8600,
      githubType: "programming",
      isTranspiler: true,
      keywords: ["functional", "haskell", "javascript", "purescript"],
      languishRanking: 222,
      releases: [{ version: "0.15.15", date: "2024-02-07" }],
      stackovTags: ["purescript"],
    })
    .relCompilesTo.add("pl+javascript")
    .relInfluencedBy.add("pl+haskell", "pl+javascript")
    .relLicenses.add("lic+bsd")
    .relParadigms.add("para+declarative", "para+functional")
    .relPlatforms.add("plat+cross", "plat+nodejs")
    .relTags.add("tag+app", "tag+compiler", "tag+editor", "tag+interpreters")
    .relTypeSystems.add("tsys+algebraic", "tsys+inferred", "tsys+static", "tsys+strong")
    .relWrittenWith.add("pl+haskell", "pl+javascript");
}
