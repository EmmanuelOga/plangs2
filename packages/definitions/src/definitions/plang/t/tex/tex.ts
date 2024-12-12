import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+tex", {
      name: "TeX",
      description:
        "TeX is a typesetting system designed by Donald Knuth in 1978, primarily used for crafting complex mathematical and scientific documents. Known for its precision and professional presentation quality, TeX has become foundational for most academic publishing workflows, particularly through its derivative, LaTeX.",
      keywords: ["latex", "tex", "typesetting", "typography"],
      extensions: [".tex"],
      releases: [{ version: "3.14159265", name: "TeX 3", date: "2021-01-01" }],
      stackovTags: ["latex"],
      githubName: "TeX",
      languishRanking: 39,
      githubLangId: "369",
      githubColor: "#3D6117",
      githubPopular: false,
      githubType: "markup",
      extWikipediaPath: "LaTeX",
      extRedditPath: "LaTeX",
      extHomeURL: "https://www.tug.org/tex/",
      created: "1978",
      isTranspiler: false,
      shortDesc: "TeX is a typesetting system for scientific and academic documents, designed by Donald Knuth.",
      links: [{ url: "https://ctan.org/", title: "Comprehensive TeX Archive Network" }],
    })
    .relLicenses.add("lic+public-domain")
    .relParadigms.add("para+declarative", "para+dsl", "para+macro")
    .relPlatforms.add("plat+cross")
    .relTags.add("tag+editor", "tag+sci")
    .relTypeSystems.add("tsys+untyped")
    .relWrittenWith.add("pl+pascal");

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
