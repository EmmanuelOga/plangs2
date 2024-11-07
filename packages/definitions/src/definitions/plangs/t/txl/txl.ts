import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+txl", {
      name: "TXL",
      description:
        'TXL is a special-purpose programming language originally designed by Charles Halpern-Hamu and James Cordy at the University of Toronto in 1985. It is primarily used for creating, manipulating, and prototyping programming languages and language tools. The name "TXL" originally stood for "Turing eXtender Language" but has since evolved beyond that specific application.',
      keywords: ["txl"],
      websites: [
        { title: "www.txl.ca", href: "https://www.txl.ca/", kind: "homepage" },
        { title: "TXL", href: "https://en.wikipedia.org/wiki/TXL_(programming_language)", kind: "wikipedia" },
      ],
      extensions: [".txl"],
      year: 1985,
      isTranspiler: false,
      isMainstream: false,
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
