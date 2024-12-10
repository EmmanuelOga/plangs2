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
        "Astro is a modern, lightweight framework for building web applications with a focus on speed and simplicity. It is optimized for performance by delivering minimal client-side JavaScript, utilizing static site generation by default.",
      keywords: ["framework", "lightweight", "static site generation", "web development"],
      extensions: [".astro"],
      isTranspiler: true,
      releases: [{ version: "astro@4.16.11", date: "2024-09-13" }],
      extGithubPath: "withastro/astro",
      extHomeURL: "https://astro.build",
      created: "2021",
    })
    .relCompilesTo.add("pl+javascript", "pl+svelte", "pl+typescript", "pl+vue")
    .relLicenses.add("lic+mit")
    .relParadigms.add("para+declarative", "para+reactive")
    .relPlatforms.add("plat+web")
    .relTags.add("tag+framework");

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
