import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.n_plang
    .set("pl+lisp", {
      images: [{ title: "Lisp", kind: "logo", url: "/images/plangs/l/lisp/main.png" }],
      name: "Lisp",
      description:
        'Lisp (historically LISP, an abbreviation of "list processing") is a family of programming languages with a long history and a distinctive, fully parenthesized prefix notation.\nOriginally specified in the late 1950s, it is the second-oldest high-level programming language still in common use, after Fortran. Lisp has changed since its early days, and many dialects have existed over its history. Today, the best-known general-purpose Lisp dialects are Common Lisp, Scheme, Racket, and Clojure.',
      websites: [{ href: "https://en.wikipedia.org/wiki/Lisp_programming_language", title: "Lisp", kind: "wikipedia" }],
      extensions: [],
      releases: [],
    })
    .addParadigms(["para+functional", "para+metaprogramming", "para+multi", "para+procedural", "para+reflective"])
    .addTypeSystems(["tsys+dynamic", "tsys+strong"]);
}
