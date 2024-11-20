import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+blade", {
      name: "Blade",
      languishRanking: 69,
      stackovTags: ["laravel-blade"],
      githubName: "Blade",
      githubLangId: "33",
      githubColor: "#f7523f",
      githubPopular: false,
      githubType: "markup",
      description:
        "Blade is a first-party templating engine that allows the use of dynamic PHP directives in HTML-based views. It is part of the Laravel framework and provides features such as template inheritance, sections, and conditional statements.",
      keywords: ["Blade", "Laravel", "PHP", "template inheritance", "templating engine"],
      extensions: [".blade.php"],
      isTranspiler: true,
      extWikipediaPath: "Laravel",
      extRedditPath: "laravel",
      created: "2011",
    })
    .addCompilesTo(["pl+php"])
    .addLicenses(["license+mit"])
    .addPlatforms(["plat+cross"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
