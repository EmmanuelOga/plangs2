import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+inform", {
      name: "Inform",
      description:
        "Inform is a programming language and design system for interactive fiction originally created in 1993 by Graham Nelson. It allows authors to create stories that operate through natural language sentences and can compile to platforms that support the Z-code or Glulx virtual machines. Inform's significant redesigns include Inform 6 and Inform 7, which supports natural language-based story writing.",
      keywords: ["inform", "inform 7", "interactive fiction"],
      extensions: [".inform", ".ni", ".z5", ".z8"],
      releases: [
        { version: "10.1.2", name: "Inform 10.1.2", date: "2022-08-31" },
        { version: "10.1.1", name: "Inform 10.1.1", date: "2022-01-01" },
      ],
      stackovTags: ["inform7"],
      githubName: "Inform 7",
      githubLangId: "166",
      githubPopular: false,
      githubType: "programming",
      extWikipediaPath: "Inform",
      extRedditPath: "Inform7",
      extHomeURL: "https://ganelson.github.io/inform-website/",
      created: "1993",
    })
    .relLicenses.add("lic+artistic")
    .relParadigms.add("para+declarative", "para+dsl", "para+natural-language", "para+oop", "para+procedural")
    .relPlatforms.add("plat+apple", "plat+linux", "plat+windows")
    .relTags.add("tag+compiler", "tag+editor", "tag+games", "tag+if", "tag+interpreters", "tag+testing")
    .relTypeSystems.add("tsys+dynamic", "tsys+untyped");

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
