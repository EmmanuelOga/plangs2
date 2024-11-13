import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+jupyter-notebook", {
      name: "Jupyter Notebook",
      languishRanking: 16,
      websites: [{ title: "Project Jupyter - Wikipedia", href: "https://en.wikipedia.org/wiki/Project_Jupyter", kind: "wikipedia" }],
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
      year: 2014,
      isMainstream: true,
    })
    .addCompilesTo(["pl+julia", "pl+python", "pl+r"])
    .addLicenses(["license+bsd"])
    .addParadigms(["paradigm+scripting"])
    .addPlatforms(["plat+cross"])
    .addTags(["tag+collab", "tag+dataq", "tag+sci"])
    .addTypeSystems(["tsys+dynamic"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
