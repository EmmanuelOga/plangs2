import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+rascal", {
      name: "Rascal",
      description:
        "Rascal is a domain-specific language for metaprogramming and language oriented programming, such as static code analysis, program transformation, program generation and implementation of domain-specific languages. It is a general meta language in the sense that it does not have a bias for any particular software language. It includes primitives from relational calculus and term rewriting. Its syntax and semantics are based on procedural (imperative) and functional programming.",
      websites: [
        { href: "http://www.rascal-mpl.org/", title: "http://www.rascal-mpl.org", kind: "homepage" },
        { href: "https://en.wikipedia.org/wiki/RascalMPL", title: "Rascal", kind: "wikipedia" },
      ],
      releases: [{ version: "0.30.1", date: "2023-01-01" }],
    })
    .addLicenses(["license+epl"])
    .addPlatforms(["plat+linux", "plat+windows"])
    .addTags(["tag+analysis"]);
}
