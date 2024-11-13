import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+ciao", {
      name: "Ciao",
      description:
        "Ciao is a modern Prolog implementation that builds up from a logic-based simple kernel designed to be portable, extensible, and modular. It supports logic, constraint, functional, higher-order, and object-oriented programming styles.",
      keywords: ["ciao", "constraint", "logic", "programming", "prolog"],
      websites: [
        { title: "The Ciao Prolog system", href: "http://www.ciao-lang.org/", kind: "homepage" },
        { title: "Ciao (programming language) - Wikipedia", href: "https://en.wikipedia.org/wiki/Ciao_(programming_language)", kind: "wikipedia" },
      ],
      extensions: [".ciao", ".pl"],
      year: 1984,
      isMainstream: false,
      releases: [{ version: "v1.20", name: "Ciao v1.20", date: "2022-06-01" }],
    })
    .addImplements(["pl+prolog"])
    .addInfluencedBy(["pl+prolog", "pl+scheme"])
    .addLicenses(["license+gnu-gpl", "license+lgpl"])
    .addParadigms([
      "paradigm+concurrent",
      "paradigm+constraint",
      "paradigm+distributed",
      "paradigm+functional",
      "paradigm+logic",
      "paradigm+modular",
      "paradigm+multi",
      "paradigm+oop",
    ])
    .addPlatforms(["plat+apple", "plat+bsd", "plat+cross", "plat+linux", "plat+windows"])
    .addTags([
      "tag+3dg",
      "tag+cli",
      "tag+compiler",
      "tag+dbms",
      "tag+industrial",
      "tag+interpreter",
      "tag+proofs",
      "tag+scripting",
      "tag+server",
      "tag+shell",
      "tag+viz",
    ])
    .addTypeSystems(["tsys+dynamic", "tsys+inferred", "tsys+static"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
