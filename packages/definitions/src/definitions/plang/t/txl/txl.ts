import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+txl", {
      name: "TXL",
      description:
        "TXL is a domain-specific language designed for creating, manipulating, and prototyping programming languages. Developed in 1985 by Charles Halpern-Hamu and James Cordy, it utilizes term-rewriting and pattern-matching techniques.",
      keywords: ["language prototyping", "pattern-matching", "term-rewriting", "txl"],
      extensions: [".txl"],
      isTranspiler: false,
      githubName: "TXL",
      githubLangId: "366",
      githubColor: "#0178b8",
      githubPopular: false,
      githubType: "programming",
      releases: [{ version: "10.8b", name: "FreeTxl", date: "2022-07" }],
      extWikipediaPath: "TXL_(programming_language)",
      extHomeURL: "https://www.txl.ca/",
      created: "1985",
      shortDesc: "TXL is a language for creating and manipulating programming languages with pattern-matching.",
    })
    .relParadigms.add("para+dsl", "para+language-oriented", "para+pattern-matching", "para+rewriting")
    .relPlatforms.add("plat+cross")
    .relTags.add("tag+analysis", "tag+interpreters", "tag+languages", "tag+workflow")
    .relTypeSystems.add("tsys+untyped");

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
