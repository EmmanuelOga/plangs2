import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+ejs", {
      name: "EJS",
      languishRanking: 86,
      stackovTags: ["ejs"],
      githubName: "EJS",
      githubLangId: "95",
      githubColor: "#a91e50",
      githubPopular: false,
      githubType: "markup",
      description:
        "EJS (Embedded JavaScript) is a simple templating language that lets you generate HTML markup with plain JavaScript. It is often used in web applications to embed dynamic content in HTML pages.",
      keywords: ["HTML", "JavaScript", "dynamic", "templating", "web"],
      extensions: [".ejs"],
      year: 2010,
      isTranspiler: true,
      isMainstream: true,
      extGithubPath: "mde/ejs",
      extHomeURL: "https://ejs.co/",
    })
    .addCompilesTo(["pl+javascript"])
    .addLicenses(["license+mit"])
    .addParadigms(["paradigm+declarative", "paradigm+scripting"])
    .addPlatforms(["plat+nodejs", "plat+web"])
    .addTags(["tag+scripting"])
    .addTypeSystems(["tsys+duck", "tsys+dynamic"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
