import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+forth", {
      name: "Forth",
      description:
        'Forth is a stack-oriented programming language and interactive integrated development environment designed by Charles H. "Chuck" Moore and first introduced in 1970. The language\'s unique feature is its ability to extend itself at runtime, making it quite flexible and powerful. Commonly used in embedded systems, spaceflight applications, and boot loaders, it is known for its efficiency and small memory footprint. Forth combines a compiler with an interactive command shell and relies on Reverse Polish Notation.',
      keywords: ["concatenative", "forth", "procedural", "reflective", "stack-oriented"],
      extensions: [".4th", ".f", ".forth", ".fs", ".fth"],
      stackovTags: ["forth"],
      githubName: "Forth",
      languishRanking: 202,
      githubLangId: "114",
      githubColor: "#341708",
      githubPopular: false,
      githubType: "programming",
      extWikipediaPath: "Forth_(programming_language)",
      extRedditPath: "Forth",
      extHomeURL: "https://forth-standard.org/",
      created: "1970",
    })
    .addInfluencedBy(["pl+lisp"])
    .addLicenses(["license+public-domain"])
    .addParadigms(["paradigm+concatenative", "paradigm+procedural", "paradigm+reflective", "paradigm+stack-oriented"])
    .addPlatforms(["plat+cross", "plat+embedded"])
    .addTags([
      "tag+app",
      "tag+asm",
      "tag+compiler",
      "tag+dbms",
      "tag+dsp",
      "tag+editor",
      "tag+embedded",
      "tag+games",
      "tag+industrial",
      "tag+interpreters",
      "tag+ray-tracer",
      "tag+shell",
      "tag+testing",
    ])
    .addTypeSystems(["tsys+untyped"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
