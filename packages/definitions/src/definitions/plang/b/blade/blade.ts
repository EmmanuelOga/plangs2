import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
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
        "Blade is a simple yet powerful templating engine provided with Laravel, a PHP framework, which allows developers to seamlessly blend PHP logic with HTML. It offers template inheritance, conditional statements, and looping constructs, enhancing code readability and maintainability.",
      keywords: ["blade", "laravel", "php", "template inheritance", "templating"],
      extensions: [".blade.php"],
      isTranspiler: false,
      extWikipediaPath: "Laravel",
      extRedditPath: "laravel",
      created: "2011",
      shortDesc: "Blade is a templating engine integrated with Laravel, enabling PHP logic in HTML.",
      extHomeURL: "https://laravel.com/docs/5.8/blade",
      githubStars: 79000,
      extGithubPath: "laravel/laravel",
    })
    .relCompilesTo.add("pl+php")
    .relLicenses.add("lic+mit")
    .relParadigms.add("para+scripting")
    .relPlatforms.add("plat+cross")
    .relTags.add("tag+webdev");

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
