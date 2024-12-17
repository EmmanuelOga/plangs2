import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+lisp", {
      name: "Lisp",
      description:
        "Lisp is a family of programming languages known for their fully parenthesized prefix notation and rich macro systems, initially developed for AI research. It is one of the oldest high-level programming languages still in use, with widespread influence on subsequent languages.",
      shortDesc: "Lisp is a family of programming languages known for its fully parenthesized prefix notation and influence on AI research.",
      created: "1960",
      extensions: [".cl", ".fasl", ".lisp", ".lsp"],
      extRedditPath: "Common_Lisp",
      extWikipediaPath: "Common_Lisp",
      githubColor: "#3fb68b",
      githubLangId: "66",
      githubName: "Common Lisp",
      githubPopular: false,
      githubType: "programming",
      isTranspiler: false,
      keywords: ["lisp"],
      stackovTags: ["common-lisp"],
    })
    .relLicenses.add("lic+gnu-gpl", "lic+lgpl", "lic+mit")
    .relParadigms.add("para+functional", "para+metaprogramming", "para+multi", "para+procedural", "para+reflective")
    .relPlatforms.add("plat+cross")
    .relTags.add(
      "tag+app",
      "tag+asm",
      "tag+compiler",
      "tag+editor",
      "tag+industrial",
      "tag+interpreters",
      "tag+languages",
      "tag+scripting",
      "tag+viz",
    )
    .relTypeSystems.add("tsys+dynamic", "tsys+strong");

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
