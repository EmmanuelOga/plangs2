import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+txl", {
      name: "TXL",
      description:
        'TXL is a special-purpose programming language originally designed by Charles Halpern-Hamu and James Cordy at the University of Toronto in 1985. It is primarily used for creating, manipulating, and prototyping programming languages and language tools. The name "TXL" originally stood for "Turing eXtender Language" but has since evolved beyond that specific application.',
      keywords: ["pattern-matching", "source transformation", "term-rewriting", "txl"],
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
    })
    .relParadigm.add(["para+dsl", "para+language-oriented", "para+pattern-matching", "para+rewriting"])
    .relPlatform.add(["plat+cross"])
    .relTag.add(["tag+analysis", "tag+interpreters", "tag+workflow"])
    .relTypeSystem.add(["tsys+untyped"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
