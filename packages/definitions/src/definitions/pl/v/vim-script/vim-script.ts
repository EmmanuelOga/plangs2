import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+vim-script", {
      name: "Vim script",
      languishRanking: 63,
      stackovTags: ["vim"],
      githubName: "Vim Script",
      githubLangId: "388",
      githubColor: "#199f4b",
      githubPopular: false,
      githubType: "programming",
      description:
        "Vim script is the scripting language built into the Vim text editor. It was designed for user customization and scripting, building upon the ex editor language of the original vi. Vim script supports imperative programming and offers features for functional and object-oriented programming.",
      keywords: ["Vim", "Vim script", "free software", "scripting language", "text editor"],
      extensions: [".vim"],
      filenames: [".vimrc"],
      year: 1991,
      releases: [{ version: "9.1", name: "Vim 9.1", date: "2024-01-02" }],
      extWikipediaPath: "Vim_(text_editor)",
      extRedditPath: "vim",
    })
    .addLicenses(["license+gnu-gpl"])
    .addParadigms(["paradigm+functional", "paradigm+imperative", "paradigm+oop", "paradigm+scripting"])
    .addPlatforms(["plat+android", "plat+bsd", "plat+cross", "plat+linux", "plat+windows"])
    .addTags(["tag+editor", "tag+scripting"])
    .addTypeSystems(["tsys+dynamic"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
