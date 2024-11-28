import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+tcl", {
      name: "Tcl",
      description:
        'Tcl (pronounced "tickle" or as an initialism) is a high-level, general-purpose, interpreted, dynamic programming language. Designed for extensibility and embeddability, Tcl supports multiple programming paradigms including event-driven, functional, imperative, and object-oriented styles. It is often used together with the Tk toolkit for GUI development, and is widely used for web applications, testing, and script automation.',
      keywords: ["tcl", "tk"],
      extensions: [".tbc", ".tcl"],
      releases: [
        { version: "9.0.0", name: "Tcl/Tk 9.0.0", date: "2024-09-26" },
        { version: "8.6.15", name: "Tcl/Tk 8.6.15", date: "2024-09-26" },
        { version: "8.6.14", name: "Tcl 8.6.14", date: "2024-01-01" },
        { version: "8.6.13", name: "Tcl 8.6.13", date: "2023-04-11" },
      ],
      stackovTags: ["tcl"],
      githubName: "Tcl",
      languishRanking: 120,
      githubLangId: "367",
      githubColor: "#e4cc98",
      githubPopular: false,
      githubType: "programming",
      extWikipediaPath: "Tcl",
      extRedditPath: "Tcl",
      extHomeURL: "https://www.tcl-lang.org/",
      created: "1988",
    })
    .relInfluencedBy.add(["pl+awk", "pl+lisp"])
    .relLicenses.add(["lic+bsd"])
    .relParadigms.add(["para+event-driven", "para+functional", "para+imperative", "para+multi", "para+oop", "para+procedural"])
    .relPlatforms.add(["plat+cross", "plat+linux", "plat+windows"])
    .relTags.add([
      "tag+app",
      "tag+automation",
      "tag+control",
      "tag+dbms",
      "tag+framework",
      "tag+industrial",
      "tag+interpreters",
      "tag+ray-tracer",
      "tag+scripting",
      "tag+testing",
      "tag+ui",
    ])
    .relTypeSystems.add(["tsys+dynamic", "tsys+string"])
    .relWrittenWith.add(["pl+c"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
