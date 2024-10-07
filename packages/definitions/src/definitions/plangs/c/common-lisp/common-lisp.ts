import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+common-lisp", {
      name: "Common Lisp",
      description:
        "Common Lisp (CL) is a dialect of the Lisp programming language, published in American National Standards Institute (ANSI) standard document ANSI INCITS 226-1994 (S2018) (formerly X3.226-1994 (R1999)). The Common Lisp HyperSpec, a hyperlinked HTML version, has been derived from the ANSI Common Lisp standard.",
      firstAppeared: "1984-01-01",
      extensions: [".cl", ".fasl", ".l", ".lisp", ".lsp"],
      websites: [
        { href: "http://common-lisp.net/", title: "common-lisp.net", kind: "other" },
        { href: "https://en.wikipedia.org/wiki/Common_Lisp", title: "Common Lisp", kind: "wikipedia" },
      ],
    })
    .addDialectOf(["pl+lisp"])
    .addInfluencedBy(["pl+lisp", "pl+r5rs", "pl+scheme"])
    .addParadigms(["paradigm+functional", "paradigm+metaprogramming", "paradigm+multi", "paradigm+oop", "paradigm+procedural", "paradigm+reflective"])
    .addPlatforms(["plat+cross"])
    .addTags([
      "tag+app",
      "tag+compiler",
      "tag+industrial",
      "tag+interpreter",
      "tag+low-code",
      "tag+modeling",
      "tag+rad",
      "tag+scripting",
      "tag+shell",
      "tag+viz",
      "tag+wavelet",
    ])
    .addTypeSystems(["tsys+dynamic", "tsys+strong"]);
}
