import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
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
      keywords: [".vimrc", "Vim", "Vim script", "scripting language", "text editor"],
      extensions: [".vim"],
      filenames: [".vimrc"],
      releases: [{ version: "9.1", name: "Vim 9.1", date: "2024-01-02" }],
      extWikipediaPath: "Vim_(text_editor)",
      extRedditPath: "vim",
      created: "1991",
      isTranspiler: false,
      shortDesc: "Vim script is the scripting language built into the Vim text editor, designed for user customization.",
      extHomeURL: "https://www.vim.org",
      githubStars: 36900,
      extGithubPath: "vim/vim",
      ghRepoCreated: "2012-11-22",
    })
    .relLicenses.add("lic+gnu-gpl")
    .relParadigms.add("para+functional", "para+imperative", "para+oop", "para+scripting")
    .relPlatforms.add("plat+android", "plat+bsd", "plat+cross", "plat+linux", "plat+windows")
    .relTags.add("tag+editor", "tag+scripting")
    .relTypeSystems.add("tsys+dynamic");

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
