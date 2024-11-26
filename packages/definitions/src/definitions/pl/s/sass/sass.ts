import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang.    .set("pl+sass", {
      name: "Sass",
      description:
        "Sass (short for syntactically awesome style sheets) is a preprocessor scripting language that is interpreted or compiled into Cascading Style Sheets (CSS). SassScript is the scripting language itself.",
      keywords: ["sass"],
      extensions: [".sass", ".scss"],
      isTranspiler: true,
      releases: [
        { version: "1.75.0", name: "Sass 1.75.0", date: "2024-04-11" },
        { version: "1.80.7", name: "Dart Sass 1.80.7" },
        { version: "3.6.6", name: "LibSass 3.6.6" },
      ],
      stackovTags: ["sass"],
      githubName: "Sass",
      githubLangId: "340",
      githubColor: "#a53b70",
      githubPopular: false,
      githubType: "markup",
      extWikipediaPath: "Sass_(style_sheet_language)",
      extRedditPath: "Sass",
      extHomeURL: "https://sass-lang.com/",
      created: "2006",
    })
    .relCompilesTo.add(["pl+css"])
    .relInfluencedBy.add(["pl+css"])
    .relLicense.add(["license+mit"])
    .relParadigm.add(["para+dsl"])
    .relPlatforms.add(["plat+cross"])
    .relTags.add(["tag+automation", "tag+scripting"])
    .relTsys.add(["tsys+dynamic"])
    .relWrittenIn.add(["pl+ruby"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
