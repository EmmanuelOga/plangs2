import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.n_plang
    .set("pl+pure", {
      images: [{ title: "Pure", kind: "logo", url: "/images/plangs/p/pure/main.png" }],
      name: "Pure",
      description:
        "Pure, successor to the equational language Q, is a dynamically typed, functional programming language based on term rewriting. It has facilities for user-defined operator syntax, macros, arbitrary-precision arithmetic (multiple-precision numbers), and compiling to native code through the LLVM. Pure is free and open-source software distributed (mostly) under the GNU Lesser General Public License version 3 or later.",
      websites: [
        { href: "http://agraef.github.io/pure-lang", title: "agraef.github.io/pure-lang", kind: "repository" },
        { href: "https://en.wikipedia.org/wiki/Pure_(programming_language)", title: "Pure", kind: "wikipedia" },
      ],
      extensions: [],
      releases: [{ version: "0.68", date: "2018-01-01" }],
    })
    .addInfluencedBy(["pl+alice", "pl+haskell", "pl+lisp"])
    .addParadigms(["para+declarative", "para+functional", "para+rewriting"])
    .addPlatforms(["platf+apple", "platf+bsd", "platf+cross", "platf+linux", "platf+windows"])
    .addTypeSystems(["tsys+dynamic", "tsys+strong"]);
}
