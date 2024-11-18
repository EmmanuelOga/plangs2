import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+jq", {
      name: "jq",
      description:
        "jq is a very high-level lexically scoped functional programming language in which every JSON value is a constant. jq supports backtracking and managing indefinitely long streams of JSON data. It is related to the Icon and Haskell programming languages. The language supports a namespace-based module system and has some support for closures. In particular, functions and functional expressions can be used as parameters of other functions.",
      keywords: ["jq"],
      extensions: [".jq"],
      year: 2012,
      releases: [
        { version: "1.7.1", name: "jq 1.7.1", date: "2023-12-13" },
        { version: "1.7", name: "jq 1.7", date: "2023-09-07" },
        { version: "1.6", name: "jq 1.6", date: "2018-11-01" },
        { version: "1.5", name: "jq 1.5", date: "2015-08-15" },
        { version: "1.4", name: "jq 1.4", date: "2014-06-09" },
        { version: "1.3", name: "jq 1.3", date: "2013-05-19" },
      ],
      stackovTags: ["jq"],
      githubName: "jq",
      languishRanking: 102,
      githubLangId: "905371884",
      githubColor: "#c7254e",
      githubPopular: false,
      githubType: "programming",
      extWikipediaPath: "Jq_(programming_language)",
      extHomeURL: "https://jqlang.github.io/jq",
    })
    .addInfluencedBy(["pl+haskell"])
    .addLicenses(["license+mit", "license+public-domain"])
    .addParadigms(["paradigm+functional", "paradigm+point-free", "paradigm+query", "paradigm+scripting"])
    .addPlatforms(["plat+bsd", "plat+cross", "plat+linux", "plat+windows"])
    .addTags(["tag+cli", "tag+interpreter", "tag+shell", "tag+workflow"])
    .addWrittenIn(["pl+c"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
