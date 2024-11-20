import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+coffeescript", {
      name: "CoffeeScript",
      description:
        "CoffeeScript is a little language that compiles into JavaScript. It adds syntactic sugar inspired by Haskell, Ruby, and Python to enhance JavaScript's brevity and readability. CoffeeScript was designed to expose the good parts of JavaScript in a simple way, compiling into equivalent JavaScript. Many unnecessary parentheses and braces can be omitted.",
      keywords: ["coffeescript", "compiler", "haskell", "javascript", "perl", "python", "ruby", "scripting"],
      extensions: [".coffee", ".litcoffee"],
      year: 2009,
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
      extHomeURL: "https://coffeescript.org/",
    })
    .addCompilesTo(["pl+javascript"])
    .addInfluencedBy(["pl+haskell", "pl+javascript", "pl+perl", "pl+python", "pl+ruby"])
    .addLicenses(["license+mit"])
    .addParadigms(["paradigm+functional", "paradigm+imperative", "paradigm+multi", "paradigm+prototype", "paradigm+scripting"])
    .addPlatforms(["plat+cross"])
    .addTags(["tag+compiler", "tag+interpreters", "tag+scripting"])
    .addTypeSystems(["tsys+dynamic"])
    .addWrittenIn(["pl+javascript"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
