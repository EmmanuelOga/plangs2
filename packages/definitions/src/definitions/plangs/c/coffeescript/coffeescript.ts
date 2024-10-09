import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+coffeescript", {
      name: "CoffeeScript",
      description:
        "CoffeeScript is a programming language that compiles to JavaScript. It adds syntactic sugar inspired by Ruby, Python, and Haskell in an effort to enhance JavaScript's brevity and readability. Specific additional features include list comprehension and destructuring assignment.",
      keywords: ["coffeescript"],
      websites: [
        { title: "coffeescript.org", href: "https://coffeescript.org/", kind: "homepage" },
        { title: "CoffeeScript", href: "https://en.wikipedia.org/wiki/CoffeeScript", kind: "wikipedia" },
      ],
      extensions: [".coffee", ".litcoffee"],
      firstAppeared: "2009-01-01",
      images: [],
      isTranspiler: true,
      isMainstream: false,
      releases: [{ version: "2.7.0", name: "CoffeeScript 2.7.0", date: "2022-01-01" }],
    })
    .addInfluencedBy(["pl+haskell", "pl+javascript", "pl+perl", "pl+python", "pl+ruby"])
    .addLicenses(["license+mit"])
    .addParadigms(["paradigm+functional", "paradigm+imperative", "paradigm+multi", "paradigm+prototype", "paradigm+scripting"])
    .addPlatforms(["plat+cross"])
    .addTags(["tag+compiler", "tag+interpreter", "tag+scripting"])
    .addTypeSystems(["tsys+dynamic"])
    .addWrittenIn(["pl+javascript"]);
}
