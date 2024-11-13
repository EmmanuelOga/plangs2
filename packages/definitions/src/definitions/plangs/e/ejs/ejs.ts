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
      websites: [
        { title: "EJS Official GitHub Repository", href: "https://github.com/mde/ejs", kind: "repository" },
        { title: "EJS - Embedded JavaScript templates", href: "https://ejs.co/", kind: "homepage" },
        { title: "EJS Documentation", href: "https://ejs.co/#docs", kind: "apidocs" },
      ],
      keywords: ["HTML", "JavaScript", "dynamic", "templating", "web"],
      extensions: [".ejs"],
      year: 2010,
      isTranspiler: true,
      isMainstream: true,
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
