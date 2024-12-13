import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+astro", {
      name: "Astro",
      languishRanking: 68,
      stackovTags: ["astro"],
      githubName: "Astro",
      githubLangId: "578209015",
      githubColor: "#ff5a03",
      githubPopular: false,
      githubType: "markup",
      description:
        "Astro is a modern framework for building fast, content-focused websites by leveraging static site generation and minimal client-side JavaScript.",
      keywords: ["astro", "static sites"],
      extensions: [".astro"],
      isTranspiler: true,
      releases: [
        { version: "1.0.0", name: "Version 1.0.0 Release", date: "2022-06-11" },
        { version: "astro@4.16.11", date: "2024-09-13" },
      ],
      extGithubPath: "withastro/astro",
      extHomeURL: "https://astro.build",
      created: "2020",
      filenames: ["astro.config.mjs"],
      shortDesc: "Astro is a modern framework for building fast, content-focused websites using static site generation.",
      links: [{ url: "https://docs.astro.build/", title: "Astro Documentation" }],
      githubStars: 47600,
    })
    .relCompilesTo.add("pl+javascript", "pl+svelte", "pl+typescript", "pl+vue")
    .relLicenses.add("lic+mit")
    .relParadigms.add("para+declarative", "para+reactive")
    .relPlatforms.add("plat+web")
    .relTags.add("tag+framework", "tag+webdev")
    .relTypeSystems.add("tsys+static")
    .relWrittenWith.add("pl+javascript", "pl+typescript");

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
