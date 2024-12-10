import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+lisp", {
      name: "Lisp",
      description:
        'Lisp (historically LISP, an abbreviation of "list processing") is a family of programming languages with a long history and a distinctive, fully parenthesized prefix notation. Originally specified in the late 1950s, it is the second-oldest high-level programming language still in common use, after Fortran. Lisp has changed since its early days, and many dialects have existed over its history. Today, the best-known general-purpose Lisp dialects are Common Lisp, Scheme, Racket, and Clojure.',
      keywords: ["lisp"],
      extensions: [".cl", ".fasl", ".lisp", ".lsp"],
      githubName: "Common Lisp",
      stackovTags: ["common-lisp"],
      githubLangId: "66",
      githubColor: "#3fb68b",
      githubPopular: false,
      githubType: "programming",
      extWikipediaPath: "Common_Lisp",
      extRedditPath: "Common_Lisp",
      created: "1960",
    })
    .relLicenses.add("lic+gnu-gpl", "lic+lgpl", "lic+mit")
    .relParadigms.add("para+functional", "para+metaprogramming", "para+multi", "para+procedural", "para+reflective")
    .relPlatforms.add("plat+cross")
    .relTags.add("tag+app", "tag+asm", "tag+compiler", "tag+editor", "tag+industrial", "tag+interpreters", "tag+scripting", "tag+viz")
    .relTypeSystems.add("tsys+dynamic", "tsys+strong");

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
