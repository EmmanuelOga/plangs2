import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+astro", {
      name: "Astro",
      description:
        "Astro is a modern framework for building fast, content-focused websites by leveraging static site generation and minimal client-side JavaScript.",
      shortDesc: "Astro is a modern framework for building fast, content-focused websites using static site generation.",
      created: "2020",
      extensions: [".astro"],
      extGithubPath: "withastro/astro",
      extHomeURL: "https://astro.build",
      filenames: ["astro.config.mjs"],
      githubColor: "#ff5a03",
      githubLangId: "578209015",
      githubName: "Astro",
      githubPopular: false,
      githubStars: 47600,
      githubType: "markup",
      isTranspiler: true,
      keywords: ["astro", "static sites"],
      languishRanking: 68,
      links: [{ url: "https://docs.astro.build/", title: "Astro Documentation" }],
      releases: [
        { version: "1.0.0", name: "Version 1.0.0 Release", date: "2022-06-11" },
        { version: "astro@4.16.11", date: "2024-09-13" },
      ],
      stackovTags: ["astro"],
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
