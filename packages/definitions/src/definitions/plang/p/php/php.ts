import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+php", {
      name: "PHP",
      description: "PHP is a widely-used open source general-purpose scripting language especially suited for web development and embedded in HTML.",
      keywords: ["php", "php-script", "php5", "php7", "php8"],
      extensions: [".phar", ".php", ".php3", ".php4", ".php5", ".phps", ".pht", ".phtml"],
      releases: [
        { version: "8.3.13", name: "PHP 8.3.13", date: "2024-10-24" },
        { version: "8.2.25", name: "PHP 8.2.25", date: "2024-10-24" },
        { version: "8.1.30", name: "PHP 8.1.30", date: "2024-09-26" },
      ],
      stackovTags: ["php"],
      githubName: "PHP",
      languishRanking: 9,
      githubLangId: "272",
      githubColor: "#4F5D95",
      githubPopular: true,
      githubType: "programming",
      extWikipediaPath: "PHP",
      extRedditPath: "PHP",
      extHomeURL: "https://www.php.net/",
      created: "1995",
      isTranspiler: false,
      shortDesc: "PHP is a scripting language primarily used for web development.",
      githubStars: 38400,
      extGithubPath: "php/php-src",
    })
    .relInfluencedBy.add("pl+c", "pl+hack", "pl+java", "pl+perl")
    .relParadigms.add("para+functional", "para+imperative", "para+multi", "para+oop", "para+procedural", "para+reflective", "para+scripting")
    .relPlatforms.add("plat+apple", "plat+cross", "plat+linux", "plat+windows")
    .relTags.add("tag+scripting", "tag+server", "tag+webdev")
    .relTypeSystems.add("tsys+dynamic", "tsys+gradual", "tsys+weak")
    .relWrittenWith.add("pl+c");

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
