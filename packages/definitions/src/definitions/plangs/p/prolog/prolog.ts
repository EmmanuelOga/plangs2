import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+prolog", {
      name: "Prolog",
      description:
        "Prolog is a logic programming language that has its origins in artificial intelligence, automated theorem proving and computational linguistics. It is influenced by first-order logic and is primarily used for declarative programming.",
      keywords: ["prolog"],
      extensions: [".P", ".pl", ".pro"],
      year: 1972,
      isMainstream: true,
      stackovTags: ["prolog"],
      githubName: "Prolog",
      languishRanking: 160,
      githubLangId: "295",
      githubColor: "#74283c",
      githubPopular: false,
      githubType: "programming",
      releases: [
        { version: "ISO/IEC 13211-1", name: "General core - Edition 1", date: "1995-06" },
        { version: "ISO/IEC 13211-2", name: "Modules - Edition 1", date: "2000-06" },
      ],
      extWikipediaPath: "Prolog",
      extRedditPath: "prolog",
      extHomeURL: "https://www.iso.org/standard/21413.html",
    })
    .addImplements(["pl+curry"])
    .addParadigms(["paradigm+declarative", "paradigm+logic"])
    .addPlatforms(["plat+cross", "plat+linux", "plat+windows"])
    .addTags([
      "tag+analysis",
      "tag+app",
      "tag+audio-dev",
      "tag+compiler",
      "tag+dbms",
      "tag+framework",
      "tag+industrial",
      "tag+interpreter",
      "tag+low-code",
      "tag+modeling",
      "tag+proofs",
      "tag+ray-tracer",
      "tag+uml",
      "tag+viz",
      "tag+wavelet",
    ])
    .addTypeSystems(["tsys+untyped"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
