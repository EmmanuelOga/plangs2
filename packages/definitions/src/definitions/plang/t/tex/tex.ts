import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+tex", {
      name: "TeX",
      description:
        "Typesetting system designed by Donald Knuth in 1978, primarily used for crafting complex mathematical and scientific documents. Known for its precision and professional presentation quality, TeX has become foundational for most academic publishing workflows, particularly through its derivative, LaTeX.",
      shortDesc: "Typesetting system for scientific and academic documents, designed by Donald Knuth.",
      created: "1978",
      extensions: [".tex"],
      extHomeURL: "https://www.tug.org/tex/",
      extRedditPath: "LaTeX",
      extWikipediaPath: "LaTeX",
      githubColor: "#3D6117",
      githubLangId: "369",
      githubName: "TeX",
      githubPopular: false,
      githubType: "markup",
      isTranspiler: false,
      keywords: ["latex", "tex", "typesetting", "typography"],
      languishRanking: 39,
      links: [{ url: "https://ctan.org/", title: "Comprehensive TeX Archive Network" }],
      releases: [{ version: "3.14159265", name: "TeX 3", date: "2021-01-01" }],
      stackovTags: ["latex"],
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
