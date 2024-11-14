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
      websites: [
        { title: "Astro Homepage", href: "https://astro.build", kind: "homepage" },
        { title: "Astro GitHub Repository", href: "https://github.com/withastro/astro", kind: "repository" },
      ],
      keywords: ["framework", "lightweight", "static site generation", "web development"],
      extensions: [".astro"],
      year: 2021,
      isTranspiler: true,
      isMainstream: false,
      releases: [{ version: "astro@4.16.11", date: "2024-09-13" }],
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
