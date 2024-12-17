import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+blade", {
      name: "Blade",
      description:
        "Simple yet powerful templating engine provided with Laravel, a PHP framework, which allows developers to seamlessly blend PHP logic with HTML. It offers template inheritance, conditional statements, and looping constructs, enhancing code readability and maintainability.",
      shortDesc: "Templating engine integrated with Laravel, enabling PHP logic in HTML.",
      created: "2011",
      extensions: [".blade.php"],
      extGithubPath: "laravel/laravel",
      extHomeURL: "https://laravel.com/docs/5.8/blade",
      extRedditPath: "laravel",
      extWikipediaPath: "Laravel",
      githubColor: "#f7523f",
      githubLangId: "33",
      githubName: "Blade",
      githubPopular: false,
      githubStars: 79000,
      githubType: "markup",
      isTranspiler: false,
      keywords: ["blade", "laravel", "php", "template inheritance", "templating"],
      languishRanking: 69,
      stackovTags: ["laravel-blade"],
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
