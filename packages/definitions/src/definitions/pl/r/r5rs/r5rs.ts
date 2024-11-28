import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+r5rs", {
      name: "R5RS",
      description:
        "Scheme is a classic programming language in the Lisp family. It emphasizes functional programming and domain-specific languages but adapts to other styles. Known for its clean and minimalist design, Scheme is one of the longest-lived and best-studied dynamic languages, and has many fast and portable implementations. It was originally developed by Guy L. Steele and Gerald Jay Sussman in the 1970s. Scheme is lexically scoped, supports first-class continuations, and includes tail-call optimization.",
      keywords: ["scheme"],
      extensions: [".scm", ".ss"],
      releases: [{ version: "R5RS", name: "Revised^5 Report on the Algorithmic Language Scheme", date: "1998-01-01" }],
      extWikipediaPath: "R5RS",
      extHomeURL: "https://www.scheme.org/",
      created: "1998",
    })
    .relDialectOf.add(["pl+lisp", "pl+scheme"])
    .relInfluencedBy.add(["pl+lisp"])
    .relParadigms.add(["para+functional", "para+imperative", "para+metaprogramming", "para+multi"])
    .relPlatforms.add(["plat+cross"])
    .relTags.add(["tag+analysis", "tag+compiler", "tag+industrial", "tag+interpreters", "tag+scripting", "tag+testing"])
    .relTypeSystems.add(["tsys+dynamic", "tsys+latent", "tsys+strong"])
    .relWrittenWith.add(["pl+c"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
