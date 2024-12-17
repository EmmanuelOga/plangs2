import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+tcl", {
      name: "Tcl",
      description:
        'Tcl (pronounced "tickle" or as an initialism) is a high-level, general-purpose, interpreted, dynamic programming language. Designed for extensibility and embeddability, Tcl supports multiple programming paradigms including event-driven, functional, imperative, and object-oriented styles. It is often used together with the Tk toolkit for GUI development, and is widely used for web applications, testing, and script automation.',
      shortDesc: "Tcl is a dynamic, interpreted programming language known for its extensibility, embeddability, and support for multiple paradigms.",
      created: "1988",
      extensions: [".tbc", ".tcl"],
      extGithubPath: "tcltk/tcl",
      extHomeURL: "https://www.tcl-lang.org/",
      extRedditPath: "Tcl",
      extWikipediaPath: "Tcl",
      githubColor: "#e4cc98",
      githubLangId: "367",
      githubName: "Tcl",
      githubPopular: false,
      githubStars: 688,
      githubType: "programming",
      isTranspiler: false,
      keywords: ["tcl", "tk"],
      languishRanking: 120,
      releases: [{ version: "9.0.0", date: "2024-09-26" }],
      stackovTags: ["tcl"],
    })
    .relInfluencedBy.add("pl+awk", "pl+lisp")
    .relLicenses.add("lic+bsd")
    .relParadigms.add("para+event-driven", "para+functional", "para+imperative", "para+multi", "para+oop", "para+procedural")
    .relPlatforms.add("plat+cross", "plat+linux", "plat+windows")
    .relTags.add(
      "tag+app",
      "tag+automation",
      "tag+control",
      "tag+dbms",
      "tag+framework",
      "tag+gui",
      "tag+industrial",
      "tag+interpreters",
      "tag+ray-tracer",
      "tag+scripting",
      "tag+testing",
    )
    .relTypeSystems.add("tsys+dynamic", "tsys+string")
    .relWrittenWith.add("pl+c");

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
