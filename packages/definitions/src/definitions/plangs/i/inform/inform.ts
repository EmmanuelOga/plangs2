import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+inform", {
      name: "Inform",
      description:
        "Inform is a programming language and design system for interactive fiction originally created in 1993 by Graham Nelson. It allows authors to create stories that operate through natural language sentences and can compile to platforms that support the Z-code or Glulx virtual machines. Inform's significant redesigns include Inform 7, which supports natural language-based story writing.",
      keywords: ["inform", "interactive fiction"],
      websites: [
        { title: "Inform's GitHub Website", href: "https://ganelson.github.io/inform-website/", kind: "homepage" },
        { title: "Inform on Wikipedia", href: "https://en.wikipedia.org/wiki/Inform_programming_language", kind: "wikipedia" },
        { title: "Inform on Reddit", kind: "reddit", href: "https://reddit.com/r/Inform7" },
      ],
      extensions: [".inform", ".ni", ".z5", ".z8"],
      year: 1993,
      isTranspiler: false,
      isMainstream: false,
      releases: [{ version: "10.1.1", name: "Inform 10.1.1", date: "2022-01-01" }],
      github: { name: "Inform 7", langId: "166", popular: false, type: "programming" },
      stackovTags: ["inform7"],
    })
    .addLicenses(["license+artistic"])
    .addParadigms(["paradigm+dsl", "paradigm+natural-language"])
    .addPlatforms(["plat+apple", "plat+linux", "plat+windows"])
    .addTags(["tag+compiler", "tag+editor", "tag+games", "tag+if", "tag+interpreter", "tag+testing"])
    .addTypeSystems(["tsys+dynamic", "tsys+untyped"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
