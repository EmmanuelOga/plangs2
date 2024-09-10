import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.n_plangs
    .set("pl+fortress", {
      name: "Fortress",
      description:
        "Fortress is a discontinued experimental programming language for high-performance computing, created by Sun Microsystems with funding from DARPA's High Productivity Computing Systems project. One of the language designers was Guy L. Steele Jr., whose previous work includes Scheme, Common Lisp, and Java.",
      firstAppeared: "2006-01-01",
      websites: [
        { href: "https://github.com/stokito/fortress-lang", title: "github.com/stokito/fortress-lang", kind: "repository" },
        { href: "https://en.wikipedia.org/wiki/Fortress_(programming_language)", title: "Fortress", kind: "wikipedia" },
      ],
      releases: [{ version: "1.0" }],
    })
    .addInfluencedBy(["pl+fortran", "pl+haskell", "pl+scala"])
    .addLicenses(["lic+bsd"])
    .addPlatforms(["platf+cross", "platf+java"])
    .addTypeSystems(["tsys+static"]);
}