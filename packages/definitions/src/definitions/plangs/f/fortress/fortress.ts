import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+fortress", {
      name: "Fortress",
      description:
        "Fortress is a discontinued experimental programming language for high-performance computing, created by Sun Microsystems with funding from DARPA's High Productivity Computing Systems project. One of the language designers was Guy L. Steele Jr., whose previous work includes Scheme, Common Lisp, and Java.",
      keywords: ["fortress"],
      websites: [
        { title: "github.com/stokito/fortress-lang", href: "https://github.com/stokito/fortress-lang", kind: "repository" },
        { title: "Fortress", href: "https://en.wikipedia.org/wiki/Fortress_(programming_language)", kind: "wikipedia" },
      ],
      extensions: [".fss"],
      year: 2006,
      isTranspiler: false,
      isMainstream: false,
      releases: [{ version: "1.0", name: "Fortress 1.0", date: "2012-04-01" }],
    })
    .addInfluencedBy(["pl+fortran", "pl+haskell", "pl+scala"])
    .addLicenses(["license+bsd"])
    .addParadigms(["paradigm+multi", "paradigm+oop", "paradigm+parallel"])
    .addPlatforms(["plat+cross", "plat+java"])
    .addTags(["tag+compiler", "tag+high-performance", "tag+interpreter", "tag+modeling", "tag+parallel-computing", "tag+wavelet"])
    .addTypeSystems(["tsys+generic", "tsys+static", "tsys+strong"]);
}
