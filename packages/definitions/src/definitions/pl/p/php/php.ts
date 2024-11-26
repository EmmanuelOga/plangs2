import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+php", {
      name: "PHP",
      description:
        "PHP is a popular general-purpose scripting language especially suited to web development. Fast, flexible and pragmatic, PHP powers everything from your blog to the most popular websites in the world.",
      keywords: ["php", "php5", "php7", "php8"],
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
    })
    .relInfluence.add(["pl+c", "pl+java"])
    .relParadigm.add(["para+functional", "para+imperative", "para+multi", "para+oop", "para+procedural", "para+reflective", "para+scripting"])
    .relPlatform.add(["plat+apple", "plat+cross", "plat+linux", "plat+windows"])
    .relTag.add(["tag+scripting", "tag+server"])
    .relTypeSystem.add(["tsys+dynamic", "tsys+gradual", "tsys+weak"])
    .relWrittenInPlang.add(["pl+c"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
