import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+lisp", {
      name: "Lisp",
      description:
        'Lisp (historically LISP, an abbreviation of "list processing") is a family of programming languages with a long history and a distinctive, fully parenthesized prefix notation. Originally specified in the late 1950s, it is the second-oldest high-level programming language still in common use, after Fortran. Lisp has changed since its early days, and many dialects have existed over its history. Today, the best-known general-purpose Lisp dialects are Common Lisp, Scheme, Racket, and Clojure.',
      keywords: ["lisp"],
      websites: [{ title: "Lisp", href: "https://en.wikipedia.org/wiki/Lisp_programming_language", kind: "wikipedia" }],
      extensions: [".lisp", ".lsp", ".cl", ".fasl"],
      firstAppeared: "1960-01-01",
      isTranspiler: false,
      isMainstream: true,
    })
    .addLicenses(["license+gnu-gpl", "license+lgpl", "license+mit"])
    .addParadigms(["paradigm+functional", "paradigm+metaprogramming", "paradigm+multi", "paradigm+procedural", "paradigm+reflective"])
    .addPlatforms(["plat+cross"])
    .addTags(["tag+app", "tag+asm", "tag+compiler", "tag+editor", "tag+industrial", "tag+interpreter", "tag+scripting", "tag+viz"])
    .addTypeSystems(["tsys+dynamic", "tsys+strong"]);
}
