import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+jupyter-notebook", {
      name: "Jupyter Notebook",
      description:
        "A web-based interactive computational environment for creating notebook documents, supporting execution environments (kernels) for languages like Python, Julia, and R. It is extensively used for data science, scientific computing, and educational purposes.",
      shortDesc: "Web-based interactive computational environment for creating notebook documents.",
      created: "2014",
      extensions: [".ipynb"],
      extGithubPath: "jupyter/jupyter",
      extHomeURL: "https://jupyter.org/",
      extRedditPath: "IPython",
      extWikipediaPath: "Project_Jupyter",
      githubColor: "#DA5B0B",
      githubLangId: "185",
      githubName: "Jupyter Notebook",
      githubPopular: false,
      githubStars: 15000,
      githubType: "markup",
      isTranspiler: true,
      keywords: ["computational", "data science", "interactive", "kernel", "multilanguage", "notebook", "scientific computing"],
      languishRanking: 16,
      stackovTags: ["jupyter"],
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
