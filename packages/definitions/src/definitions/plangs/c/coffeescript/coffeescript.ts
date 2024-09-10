import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.n_plangs
    .set("pl+coffeescript", {
      name: "CoffeeScript",
      description:
        "CoffeeScript is a programming language that compiles to JavaScript. It adds syntactic sugar inspired by Ruby, Python, and Haskell in an effort to enhance JavaScript's brevity and readability. Specific additional features include list comprehension and destructuring assignment.",
      firstAppeared: "2009-01-01",
      extensions: [".coffee", ".litcoffee[]"],
      websites: [
        { href: "https://coffeescript.org/", title: "coffeescript.org", kind: "homepage" },
        { href: "https://en.wikipedia.org/wiki/CoffeeScript", title: "CoffeeScript", kind: "wikipedia" },
      ],
      releases: [{ version: "2.7.0", date: "2022-01-01" }],
    })
    .addInfluencedBy(["pl+haskell", "pl+javascript", "pl+perl", "pl+ruby"])
    .addLicenses(["lic+mit"])
    .addParadigms(["para+functional", "para+imperative", "para+multi", "para+prototype", "para+scripting"])
    .addPlatforms(["platf+cross"])
    .addTypeSystems(["tsys+dynamic"]);
}