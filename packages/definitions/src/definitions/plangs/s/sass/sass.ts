import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+sass", {
      name: "Sass",
      description:
        "Sass (short for syntactically awesome style sheets) is a preprocessor scripting language that is interpreted or compiled into Cascading Style Sheets (CSS). SassScript is the scripting language itself.",
      keywords: ["sass"],
      extensions: [".sass", ".scss"],
      year: 2006,
      isTranspiler: true,
      isMainstream: true,
      releases: [
        { version: "1.75.0", name: "Sass 1.75.0", date: "2024-04-11" },
        { version: "1.80.7", name: "Dart Sass 1.80.7", date: "" },
        { version: "3.6.6", name: "LibSass 3.6.6", date: "" },
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
    })
    .addCompilesTo(["pl+css"])
    .addInfluencedBy(["pl+css"])
    .addLicenses(["license+mit"])
    .addParadigms(["paradigm+dsl"])
    .addPlatforms(["plat+cross"])
    .addTags(["tag+automation", "tag+scripting"])
    .addTypeSystems(["tsys+dynamic"])
    .addWrittenIn(["pl+ruby"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
