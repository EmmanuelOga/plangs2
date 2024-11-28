import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+jupyter-notebook", {
      name: "Jupyter Notebook",
      languishRanking: 16,
      stackovTags: ["jupyter"],
      githubName: "Jupyter Notebook",
      githubLangId: "185",
      githubColor: "#DA5B0B",
      githubPopular: false,
      githubType: "markup",
      description:
        "Jupyter Notebook (formerly IPython Notebook) is a web-based interactive computational environment for creating notebook documents. It supports execution environments (kernels) for dozens of languages, including Python, Julia, and R. Jupyter is extensively used for data science, scientific computing, and educational purposes.",
      keywords: ["computational", "data science", "interactive", "kernel", "multilanguage", "notebook", "scientific computing"],
      extensions: [".ipynb"],
      isTranspiler: true,
      extWikipediaPath: "Project_Jupyter",
      extRedditPath: "IPython",
      created: "2014",
    })
    .relCompilesTo.add("pl+julia", "pl+python", "pl+r")
    .relLicenses.add("lic+bsd")
    .relParadigms.add("para+scripting")
    .relPlatforms.add("plat+cross")
    .relTags.add("tag+collab", "tag+dataq", "tag+sci")
    .relTypeSystems.add("tsys+dynamic");

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
