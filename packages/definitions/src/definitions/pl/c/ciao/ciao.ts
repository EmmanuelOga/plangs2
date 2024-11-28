import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
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
    .relImplements.add("pl+prolog")
    .relInfluencedBy.add("pl+prolog", "pl+scheme")
    .relLicenses.add("lic+gnu-gpl", "lic+lgpl")
    .relParadigms.add(
      "para+concurrent",
      "para+constraint",
      "para+distributed",
      "para+functional",
      "para+logic",
      "para+modular",
      "para+multi",
      "para+oop",
    )
    .relPlatforms.add("plat+apple", "plat+bsd", "plat+cross", "plat+linux", "plat+windows")
    .relTags.add(
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
    )
    .relTypeSystems.add("tsys+dynamic", "tsys+inferred", "tsys+static");

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
