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
        "Jupyter Notebook is a web-based interactive computational environment for creating notebook documents, supporting execution environments (kernels) for languages like Python, Julia, and R. It is extensively used for data science, scientific computing, and educational purposes.",
      keywords: ["computational", "data science", "interactive", "kernel", "multilanguage", "notebook", "scientific computing"],
      extensions: [".ipynb"],
      isTranspiler: true,
      extWikipediaPath: "Project_Jupyter",
      extRedditPath: "IPython",
      created: "2014",
      shortDesc: "Jupyter Notebook is a web-based interactive computational environment for creating notebook documents.",
      extHomeURL: "https://jupyter.org/",
      githubStars: 15000,
      extGithubPath: "jupyter/jupyter",
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
