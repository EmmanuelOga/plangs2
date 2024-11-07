import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+pure", {
      name: "Pure",
      description:
        "Pure, successor to the equational language Q, is a dynamically typed, functional programming language based on term rewriting. It has facilities for user-defined operator syntax, macros, arbitrary-precision arithmetic (multiple-precision numbers), and compiling to native code through the LLVM. Pure is free and open-source software distributed (mostly) under the GNU Lesser General Public License version 3 or later.",
      keywords: ["pure"],
      websites: [
        { title: "agraef.github.io/pure-lang", href: "http://agraef.github.io/pure-lang", kind: "repository" },
        { title: "Pure", href: "https://en.wikipedia.org/wiki/Pure_(programming_language)", kind: "wikipedia" },
      ],
      extensions: [".pure"],
      year: 2008,
      isTranspiler: false,
      isMainstream: false,
      releases: [{ version: "0.68", name: "Pure 0.68", date: "2018-01-01" }],
    })
    .addInfluencedBy(["pl+alice", "pl+haskell", "pl+lisp"])
    .addLicenses(["license+lgpl"])
    .addParadigms(["paradigm+declarative", "paradigm+functional", "paradigm+rewriting"])
    .addPlatforms(["plat+apple", "plat+bsd", "plat+cross", "plat+linux", "plat+windows"])
    .addTags(["tag+app", "tag+audio-dev", "tag+cas", "tag+industrial", "tag+interpreter", "tag+multimedia", "tag+numeric", "tag+sci", "tag+video"])
    .addTypeSystems(["tsys+dynamic", "tsys+strong"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
