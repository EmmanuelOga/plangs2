import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+ejs", {
      name: "EJS",
      description:
        "EJS (Embedded JavaScript) is a simple templating language that lets you generate HTML markup with plain JavaScript. It is often used in web applications to embed dynamic content in HTML pages.",
      shortDesc: "EJS is a simple templating language for embedding JavaScript in HTML.",
      created: "2010",
      extensions: [".ejs"],
      extGithubPath: "mde/ejs",
      extHomeURL: "https://ejs.co/",
      githubColor: "#a91e50",
      githubLangId: "95",
      githubName: "EJS",
      githubPopular: false,
      githubStars: 7800,
      githubType: "markup",
      isTranspiler: true,
      keywords: ["ejs", "templating"],
      languishRanking: 86,
      stackovTags: ["ejs"],
    })
    .relCompilesTo.add("pl+javascript")
    .relInfluencedBy.add("pl+javascript")
    .relLicenses.add("lic+mit")
    .relParadigms.add("para+declarative", "para+scripting")
    .relPlatforms.add("plat+nodejs", "plat+web")
    .relTags.add("tag+scripting", "tag+webdev")
    .relTypeSystems.add("tsys+duck", "tsys+dynamic");

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
