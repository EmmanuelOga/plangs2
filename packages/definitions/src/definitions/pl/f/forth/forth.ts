import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
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
    .relInfluence.add(["pl+lisp"])
    .relLicense.add(["lic+public-domain"])
    .relParadigm.add(["para+concatenative", "para+procedural", "para+reflective", "para+stack-oriented"])
    .relPlatform.add(["plat+cross", "plat+embedded"])
    .relTag.add([
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
    .relTypeSystem.add(["tsys+untyped"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
