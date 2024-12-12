import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+coffeescript", {
      name: "CoffeeScript",
      description:
        "CoffeeScript is a little language that compiles into JavaScript. It adds syntactic sugar inspired by Haskell, Ruby, and Python to enhance JavaScript's brevity and readability. CoffeeScript was designed to expose the good parts of JavaScript in a simple way, compiling into equivalent JavaScript. Many unnecessary parentheses and braces can be omitted.",
      keywords: ["coffeescript"],
      extensions: [".coffee", ".litcoffee"],
      isTranspiler: true,
      releases: [{ version: "2.7.0", name: "CoffeeScript 2.7.0", date: "2022-04-24" }],
      stackovTags: ["coffeescript"],
      githubName: "CoffeeScript",
      languishRanking: 122,
      githubLangId: "63",
      githubColor: "#244776",
      githubPopular: true,
      githubType: "programming",
      extWikipediaPath: "CoffeeScript",
      extRedditPath: "coffeescript",
      extHomeURL: "https://coffeescript.org",
      created: "2009",
      shortDesc: "CoffeeScript compiles into JavaScript, enhancing its brevity with syntactic sugar inspired by Haskell, Ruby, and Python.",
      githubStars: 16500,
      extGithubPath: "jashkenas/coffeescript",
      ghRepoCreated: "2009-12-13",
    })
    .relCompilesTo.add("pl+javascript")
    .relInfluencedBy.add("pl+haskell", "pl+javascript", "pl+perl", "pl+python", "pl+ruby")
    .relLicenses.add("lic+mit")
    .relParadigms.add("para+functional", "para+imperative", "para+multi", "para+prototype", "para+scripting")
    .relPlatforms.add("plat+cross")
    .relTags.add("tag+compiler", "tag+interpreters", "tag+scripting")
    .relTypeSystems.add("tsys+dynamic")
    .relWrittenWith.add("pl+javascript");

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
