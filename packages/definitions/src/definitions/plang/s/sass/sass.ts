import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+sass", {
      name: "Sass",
      description:
        "Sass (short for syntactically awesome style sheets) is a preprocessor scripting language that is interpreted or compiled into Cascading Style Sheets (CSS). SassScript is the scripting language itself.",
      shortDesc: "Sass is a preprocessor language that compiles to CSS.",
      created: "2006",
      extensions: [".sass", ".scss"],
      extGithubPath: "sass/sass",
      extHomeURL: "https://sass-lang.com/",
      extRedditPath: "Sass",
      extWikipediaPath: "Sass_(style_sheet_language)",
      githubColor: "#a53b70",
      githubLangId: "340",
      githubName: "Sass",
      githubPopular: false,
      githubStars: 15200,
      githubType: "markup",
      isTranspiler: true,
      keywords: ["sass"],
      releases: [
        { version: "1.75.0", name: "Sass 1.75.0", date: "2024-04-11" },
        { version: "1.80.7", name: "Dart Sass 1.80.7" },
        { version: "3.6.6", name: "LibSass 3.6.6" },
      ],
      stackovTags: ["sass"],
    })
    .relCompilesTo.add("pl+css")
    .relInfluencedBy.add("pl+css")
    .relLicenses.add("lic+mit")
    .relParadigms.add("para+dsl")
    .relPlatforms.add("plat+cross")
    .relTags.add("tag+automation", "tag+scripting")
    .relTypeSystems.add("tsys+dynamic")
    .relWrittenWith.add("pl+ruby");

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
