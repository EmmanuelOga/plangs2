import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+txl", {
      name: "TXL",
      description:
        "Domain-specific language designed for creating, manipulating, and prototyping programming languages. Developed in 1985 by Charles Halpern-Hamu and James Cordy, it utilizes term-rewriting and pattern-matching techniques.",
      shortDesc:
        "Language for creating and manipulating programming languages with pattern-matching.",
      created: "1985",
      extensions: [".txl"],
      extHomeURL: "https://www.txl.ca/",
      extWikipediaPath: "TXL_(programming_language)",
      githubColor: "#0178b8",
      githubLangId: "366",
      githubName: "TXL",
      githubPopular: false,
      githubType: "programming",
      isTranspiler: false,
      keywords: [
        "language prototyping",
        "pattern-matching",
        "term-rewriting",
        "txl",
      ],
      releases: [{ version: "10.8b", name: "FreeTxl", date: "2022-07" }],
    })
    .relParadigms.add(
      "para+dsl",
      "para+language-oriented",
      "para+pattern-matching",
      "para+rewriting",
    )
    .relPlatforms.add("plat+cross")
    .relTags.add(
      "tag+analysis",
      "tag+interpreters",
      "tag+languages",
      "tag+workflow",
    )
    .relTypeSystems.add("tsys+untyped");
}
