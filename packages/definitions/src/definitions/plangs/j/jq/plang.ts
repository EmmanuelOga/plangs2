import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.n_plang
    .set("pl+jq", {
      images: [{ kind: "logo", title: "jq" }],
      name: "jq",
      description:
        "jq is a very high-level lexically scoped functional programming language in which every JSON value is a constant. jq supports backtracking and managing indefinitely long streams of JSON data. It is related to the Icon and Haskell programming languages. The language supports a namespace-based module system and has some support for closures. In particular, functions and functional expressions can be used as parameters of other functions.",
      websites: [
        { href: "https://jqlang.github.io/jq", title: "jqlang.github.io/jq", kind: "repository" },
        { href: "https://en.wikipedia.org/wiki/Jq_(programming_language)", title: "jq", kind: "wikipedia" },
      ],
      extensions: [],
      releases: [{ version: "1.7.1", date: "2023-01-01" }],
    })
    .addInfluencedBy(["pl+icon"])
    .addLicenses(["lic+mit"])
    .addParadigms(["para+functional", "para+point-free"])
    .addPlatforms(["platf+cross"])
    .addWrittenIn(["pl+c", "pl+go", "pl+rust"]);
}