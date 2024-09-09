import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.n_plangs
    .set("pl+gambit", {
      name: "Gambit",
      description:
        "Gambit, also called Gambit-C, is a programming language, a variant of the language family Lisp, and its variants named Scheme. The Gambit implementation consists of a Scheme interpreter, and a compiler which compiles Scheme into the language C, which makes it cross-platform software. It conforms to the standards RRS, RRS, and Institute of Electrical and Electronics Engineers (IEEE), and to several Scheme Requests for Implementations (SRFIs). Gambit was released first in 1988, and Gambit-C (Gambit with a C backend) was released first in 1994. They are free and open-source software released under a GNU Lesser General Public License (LGPL) 2.1, and Apache License 2.0.",
      firstAppeared: "1988-01-01",
      websites: [
        { href: "http://gambitscheme.org/", title: "gambitscheme.org", kind: "homepage" },
        { href: "https://en.wikipedia.org/wiki/Gambit_(scheme_implementation)", title: "Gambit", kind: "wikipedia" },
      ],
      releases: [{ version: "4.9.5", date: "2023-01-01" }],
    })
    .addDialectOf(["pl+lisp"])
    .addInfluencedBy(["pl+lisp", "pl+scheme"])
    .addLicenses(["lic+apache", "lic+lgpl"])
    .addParadigms(["para+functional", "para+imperative", "para+metaprogramming", "para+multi"])
    .addPlatforms(["platf+cross", "platf+x86-64"])
    .addTypeSystems(["tsys+dynamic", "tsys+latent", "tsys+strong"]);
}
