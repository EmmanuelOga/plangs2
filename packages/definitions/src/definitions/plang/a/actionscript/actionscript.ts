import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+actionscript", {
      name: "ActionScript",
      description:
        "ActionScript is an object-oriented language mainly used for Adobe Flash applications and games. It traces its origins to Macromedia Flash, evolving alongside Adobe's suite of tools, and heavily influenced by ECMAScript, making it similar to JavaScript in syntax and semantics.",
      shortDesc: "ActionScript is an object-oriented language used for Flash, influenced by ECMAScript and similar to JavaScript.",
      created: "1998",
      extensions: [".as", ".swf"],
      extHomeURL: "https://www.adobe.com/devnet/actionscript.html",
      extRedditPath: "actionscript",
      extWikipediaPath: "ActionScript",
      githubColor: "#882B0F",
      githubLangId: "10",
      githubName: "ActionScript",
      githubPopular: false,
      githubType: "programming",
      isTranspiler: false,
      keywords: ["actionscript", "flash"],
      languishRanking: 134,
      links: [
        { url: "https://www.adobe.com/devnet/actionscript.html", title: "Adobe ActionScript Home" },
        { url: "https://en.wikipedia.org/wiki/ActionScript", title: "ActionScript on Wikipedia" },
      ],
      releases: [
        { version: "1.0", name: "ActionScript 1.0", date: "2000-01-01" },
        { version: "2.0", name: "ActionScript 2.0", date: "2003-01-01" },
        { version: "3.0", name: "ActionScript 3.0", date: "2006-01-01" },
      ],
      stackovTags: ["actionscript", "actionscript-2", "actionscript-3"],
    })
    .relInfluencedBy.add("pl+java", "pl+javascript")
    .relLicenses.add("lic+apache")
    .relParadigms.add("para+functional", "para+imperative", "para+multi", "para+oop", "para+prototype", "para+scripting")
    .relPlatforms.add("plat+apple", "plat+cross", "plat+web", "plat+windows")
    .relTags.add(
      "tag+app",
      "tag+audio-dev",
      "tag+compiler",
      "tag+dbms",
      "tag+editor",
      "tag+framework",
      "tag+games",
      "tag+industrial",
      "tag+interpreters",
      "tag+multimedia",
      "tag+scripting",
    )
    .relTypeSystems.add("tsys+static", "tsys+strong");

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
