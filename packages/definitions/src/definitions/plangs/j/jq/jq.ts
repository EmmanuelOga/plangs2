import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+jq", {
      name: "jq",
      description:
        "jq is a very high-level lexically scoped functional programming language in which every JSON value is a constant. jq supports backtracking and managing indefinitely long streams of JSON data. It is related to the Icon and Haskell programming languages. The language supports a namespace-based module system and has some support for closures. In particular, functions and functional expressions can be used as parameters of other functions.",
      keywords: ["jq"],
      websites: [
        { title: "jqlang.github.io/jq", href: "https://jqlang.github.io/jq", kind: "repository" },
        { title: "jq", href: "https://en.wikipedia.org/wiki/Jq_(programming_language)", kind: "wikipedia" },
      ],
      extensions: [".jq"],
      year: 2012,
      isTranspiler: false,
      isMainstream: false,
      releases: [{ version: "1.7.1", name: "jq 1.7.1", date: "2023-01-01" }],
      github: { name: "jq", langId: "905371884", color: "#c7254e", popular: false, type: "programming" },
      stackovTags: ["jq"],
    })
    .addInfluencedBy(["pl+haskell", "pl+icon"])
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
