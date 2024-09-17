import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+pure", {
      name: "Pure",
      description:
        "Pure, successor to the equational language Q, is a dynamically typed, functional programming language based on term rewriting. It has facilities for user-defined operator syntax, macros, arbitrary-precision arithmetic (multiple-precision numbers), and compiling to native code through the LLVM. Pure is free and open-source software distributed (mostly) under the GNU Lesser General Public License version 3 or later.",
      firstAppeared: "2008-01-01",
      websites: [
        { href: "http://agraef.github.io/pure-lang", title: "agraef.github.io/pure-lang", kind: "repository" },
        { href: "https://en.wikipedia.org/wiki/Pure_(programming_language)", title: "Pure", kind: "wikipedia" },
      ],
      releases: [{ version: "0.68", date: "2018-01-01" }],
      images: [{ kind: "logo", title: "Pure", url: "/images/plangs/p/pure/logo.png" }],
    })
    .addInfluencedBy(["pl+alice", "pl+haskell", "pl+lisp"])
    .addParadigms(["paradigm+declarative", "paradigm+functional", "paradigm+rewriting"])
    .addPlatforms(["plat+apple", "plat+bsd", "plat+cross", "plat+linux", "plat+windows"])
    .addTags(["tag+app", "tag+audio-dev", "tag+cas", "tag+industrial", "tag+interpreter", "tag+multimedia", "tag+numeric", "tag+sci", "tag+video"])
    .addTypeSystems(["tsys+dynamic", "tsys+strong"]);
}
