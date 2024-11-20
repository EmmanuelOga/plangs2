import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
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
    .addCompilesTo(["pl+javascript", "pl+svelte", "pl+typescript", "pl+vue"])
    .addLicenses(["license+mit"])
    .addParadigms(["paradigm+declarative", "paradigm+reactive"])
    .addPlatforms(["plat+web"])
    .addTags(["tag+framework"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
