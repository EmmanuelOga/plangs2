import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+ciao", {
      name: "Ciao",
      description:
        "Ciao is a modern Prolog implementation that builds up from a logic-based simple kernel designed to be portable, extensible, and modular. It supports logic, constraint, functional, higher-order, and object-oriented programming styles.",
      keywords: ["ciao", "constraint", "logic", "programming", "prolog"],
      extensions: [".ciao", ".pl"],
      releases: [{ version: "v1.20", name: "Ciao v1.20", date: "2022-06-01" }],
      extWikipediaPath: "Ciao_(programming_language)",
      extHomeURL: "http://www.ciao-lang.org/",
      created: "1984",
    })
    .relImplements.add(["pl+prolog"])
    .relInfluencedBy.add(["pl+prolog", "pl+scheme"])
    .relLicenses.add(["license+gnu-gpl", "license+lgpl"])
    .relParadigms.add([
      "paradigm+concurrent",
      "paradigm+constraint",
      "paradigm+distributed",
      "paradigm+functional",
      "paradigm+logic",
      "paradigm+modular",
      "paradigm+multi",
      "paradigm+oop",
    ])
    .relPlatforms.add(["plat+apple", "plat+bsd", "plat+cross", "plat+linux", "plat+windows"])
    .relTags.add([
      "tag+3dg",
      "tag+cli",
      "tag+compiler",
      "tag+dbms",
      "tag+industrial",
      "tag+interpreters",
      "tag+proofs",
      "tag+scripting",
      "tag+server",
      "tag+shell",
      "tag+viz",
    ])
    .relTsys.add(["tsys+dynamic", "tsys+inferred", "tsys+static"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
