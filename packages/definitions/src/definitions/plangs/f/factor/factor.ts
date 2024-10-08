import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+factor", {
      name: "Factor",
      description:
        "Factor is a stack-oriented programming language created by Slava Pestov. Factor is dynamically typed and has automatic memory management, as well as powerful metaprogramming features. The language has a single implementation featuring a self-hosted optimizing compiler and an interactive development environment. The Factor distribution includes a large standard library.",
      keywords: ["factor"],
      websites: [
        { title: "factorcode.org", href: "http://factorcode.org/", kind: "homepage" },
        { title: "Factor", href: "https://en.wikipedia.org/wiki/Factor_(programming_language)", kind: "wikipedia" },
      ],
      extensions: [".factor"],
      firstAppeared: "2003-01-01",
      isTranspiler: false,
      isMainstream: false,
      releases: [{ version: "0.99", name: "Factor 0.99", date: "2023-01-01" }],
    })
    .addInfluencedBy(["pl+forth", "pl+joy", "pl+lisp", "pl+self"])
    .addLicenses(["license+bsd"])
    .addParadigms(["paradigm+concatenative", "paradigm+functional", "paradigm+multi", "paradigm+oop"])
    .addPlatforms(["plat+apple", "plat+linux", "plat+windows"])
    .addTags(["tag+compiler", "tag+interpreter", "tag+scripting"])
    .addTypeSystems(["tsys+dynamic", "tsys+strong"]);
}
