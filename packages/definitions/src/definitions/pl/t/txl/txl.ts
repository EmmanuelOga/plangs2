import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+txl", {
      name: "TXL",
      description:
        'TXL is a special-purpose programming language originally designed by Charles Halpern-Hamu and James Cordy at the University of Toronto in 1985. It is primarily used for creating, manipulating, and prototyping programming languages and language tools. The name "TXL" originally stood for "Turing eXtender Language" but has since evolved beyond that specific application.',
      keywords: ["pattern-matching", "source transformation", "term-rewriting", "txl"],
      extensions: [".txl"],
      year: 1985,
      isTranspiler: false,
      githubName: "TXL",
      githubLangId: "366",
      githubColor: "#0178b8",
      githubPopular: false,
      githubType: "programming",
      releases: [{ version: "10.8b", name: "FreeTxl", date: "2022-07" }],
      extWikipediaPath: "TXL_(programming_language)",
      extHomeURL: "https://www.txl.ca/",
    })
    .addParadigms(["paradigm+dsl", "paradigm+language-oriented", "paradigm+pattern-matching", "paradigm+rewriting"])
    .addPlatforms(["plat+cross"])
    .addTags(["tag+analysis", "tag+interpreter", "tag+workflow"])
    .addTypeSystems(["tsys+untyped"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
