import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+php", {
      name: "PHP",
      description:
        "Widely-used open source general-purpose scripting language especially suited for web development and embedded in HTML.",
      shortDesc: "Scripting language primarily used for web development.",
      created: "1995",
      extensions: [
        ".phar",
        ".php",
        ".php3",
        ".php4",
        ".php5",
        ".phps",
        ".pht",
        ".phtml",
      ],
      extGithubPath: "php/php-src",
      extHomeURL: "https://www.php.net/",
      extRedditPath: "PHP",
      extWikipediaPath: "PHP",
      githubColor: "#4F5D95",
      githubLangId: "272",
      githubName: "PHP",
      githubPopular: true,
      githubStars: 38400,
      githubType: "programming",
      isTranspiler: false,
      keywords: ["php", "php-script", "php5", "php7", "php8"],
      languishRanking: 11,
      releases: [
        { version: "8.3.13", name: "PHP 8.3.13", date: "2024-10-24" },
        { version: "8.2.25", name: "PHP 8.2.25", date: "2024-10-24" },
        { version: "8.1.30", name: "PHP 8.1.30", date: "2024-09-26" },
      ],
      stackovTags: ["php"],
    })
    .relInfluencedBy.add("pl+c", "pl+hack", "pl+java", "pl+perl")
    .relParadigms.add(
      "para+functional",
      "para+general-purpose",
      "para+imperative",
      "para+multi",
      "para+oop",
      "para+procedural",
      "para+reflective",
      "para+scripting",
    )
    .relPlatforms.add("plat+apple", "plat+cross", "plat+linux", "plat+windows")
    .relTags.add("tag+scripting", "tag+server", "tag+webdev")
    .relTypeSystems.add(
      "tsys+dynamic",
      "tsys+gradual",
      "tsys+object",
      "tsys+weak",
    )
    .relWrittenWith.add("pl+c");
}
