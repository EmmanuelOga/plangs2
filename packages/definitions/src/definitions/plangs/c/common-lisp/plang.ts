import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.n_plang
    .set("pl+common-lisp", {
      images: [{ kind: "logo", title: "Common Lisp" }],
      name: "Common Lisp",
      description:
        "Common Lisp (CL) is a dialect of the Lisp programming language, published in American National Standards Institute (ANSI) standard document ANSI INCITS 226-1994 (S2018) (formerly X3.226-1994 (R1999)). The Common Lisp HyperSpec, a hyperlinked HTML version, has been derived from the ANSI Common Lisp standard.",
      websites: [
        { href: "http://common-lisp.net/", title: "common-lisp.net", kind: "other" },
        { href: "https://en.wikipedia.org/wiki/Common_Lisp", title: "Common Lisp", kind: "wikipedia" },
      ],
      extensions: [".cl", ".fasl", ".l", ".lisp", ".lsp"],
      releases: [],
    })
    .addDialectOf(["pl+lisp"])
    .addInfluencedBy(["pl+lisp", "pl+r5rs", "pl+scheme"])
    .addParadigms(["para+functional", "para+metaprogramming", "para+multi", "para+oop", "para+procedural", "para+reflective"])
    .addPlatforms(["platf+cross"])
    .addTypeSystems(["tsys+dynamic", "tsys+strong"]);
}