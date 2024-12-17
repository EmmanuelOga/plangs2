import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+vim-script", {
      name: "Vim script",
      description:
        "Vim script is the scripting language built into the Vim text editor. It was designed for user customization and scripting, building upon the ex editor language of the original vi. Vim script supports imperative programming and offers features for functional and object-oriented programming.",
      shortDesc: "Vim script is the scripting language built into the Vim text editor, designed for user customization.",
      created: "1991",
      extensions: [".vim"],
      extGithubPath: "vim/vim",
      extHomeURL: "https://www.vim.org",
      extRedditPath: "vim",
      extWikipediaPath: "Vim_(text_editor)",
      filenames: [".vimrc"],
      githubColor: "#199f4b",
      githubLangId: "388",
      githubName: "Vim Script",
      githubPopular: false,
      githubStars: 36900,
      githubType: "programming",
      isTranspiler: false,
      keywords: [".vimrc", "Vim", "Vim script", "scripting language", "text editor"],
      languishRanking: 63,
      releases: [{ version: "9.1", name: "Vim 9.1", date: "2024-01-02" }],
      stackovTags: ["vim"],
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
