import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+r5rs", {
      name: "R5RS",
      description:
        "R5RS is the fifth revision of the Scheme programming language, part of the Lisp family, known for its minimalist and clean design focusing on functional programming and domain-specific languages. This version, ratified in January 1998, introduced various standard features to make Scheme widely implementable and usable for educational, research, and multi-paradigm development.",
      keywords: ["scheme"],
      extensions: [".scm", ".ss"],
      releases: [{ version: "R5RS", name: "Revised^5 Report on the Algorithmic Language Scheme", date: "1998-01-01" }],
      extWikipediaPath: "R5RS",
      extHomeURL: "https://www.scheme.org/",
      created: "1998",
      isTranspiler: false,
      shortDesc: "R5RS is the fifth version of Scheme, emphasizing minimalist and functional programming.",
    })
    .relDialectOf.add("pl+lisp", "pl+scheme")
    .relInfluencedBy.add("pl+lisp")
    .relParadigms.add("para+functional", "para+imperative", "para+metaprogramming", "para+multi")
    .relPlatforms.add("plat+cross")
    .relTags.add("tag+analysis", "tag+compiler", "tag+industrial", "tag+interpreters", "tag+scripting", "tag+testing")
    .relTypeSystems.add("tsys+dynamic", "tsys+latent", "tsys+strong")
    .relWrittenWith.add("pl+c");

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
