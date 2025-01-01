import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+coffeescript", {
      name: "CoffeeScript",
      description:
        "A little language that compiles into JavaScript. It adds syntactic sugar inspired by Haskell, Ruby, and Python to enhance JavaScript's brevity and readability. CoffeeScript was designed to expose the good parts of JavaScript in a simple way, compiling into equivalent JavaScript. Many unnecessary parentheses and braces can be omitted.",
      shortDesc: "Compiles into JavaScript, enhancing its brevity with syntactic sugar inspired by Haskell, Ruby, and Python.",
      created: "2009",
      extensions: [".coffee", ".litcoffee"],
      extGithubPath: "jashkenas/coffeescript",
      extHomeURL: "https://coffeescript.org",
      extRedditPath: "coffeescript",
      extWikipediaPath: "CoffeeScript",
      githubColor: "#244776",
      githubLangId: "63",
      githubName: "CoffeeScript",
      githubPopular: true,
      githubStars: 16500,
      githubType: "programming",
      isTranspiler: true,
      keywords: ["coffeescript"],
      languishRanking: 122,
      releases: [{ version: "2.7.0", name: "CoffeeScript 2.7.0", date: "2022-04-24" }],
      stackovTags: ["coffeescript"],
    })
    .relCompilesTo.add("pl+javascript")
    .relInfluencedBy.add("pl+haskell", "pl+javascript", "pl+perl", "pl+python", "pl+ruby")
    .relLicenses.add("lic+mit")
    .relParadigms.add("para+functional", "para+imperative", "para+multi", "para+prototype", "para+scripting")
    .relPlatforms.add("plat+cross")
    .relTags.add("tag+compiler", "tag+interpreters", "tag+scripting")
    .relTypeSystems.add("tsys+dynamic", "tsys+object")
    .relWrittenWith.add("pl+javascript");
}
