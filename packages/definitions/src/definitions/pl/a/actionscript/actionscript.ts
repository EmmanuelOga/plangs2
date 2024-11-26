import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang.    .set("pl+actionscript", {
      name: "ActionScript",
      description:
        "ActionScript is an object-oriented programming language originally developed by Macromedia Inc. (later acquired by Adobe). It is influenced by HyperTalk, the scripting language for HyperCard. It is now an implementation of ECMAScript (meaning it is a superset of the syntax and semantics of the language more widely known as JavaScript), though it originally arose as a sibling, both being influenced by HyperTalk. ActionScript code is usually converted to bytecode format by a compiler.",
      keywords: ["actionscript", "flash"],
      extensions: [".as", ".swf"],
      releases: [
        { version: "1.0", name: "ActionScript 1.0", date: "2000-01-01" },
        { version: "2.0", name: "ActionScript 2.0", date: "2003-01-01" },
        { version: "3.0", name: "ActionScript 3.0", date: "2006-01-01" },
      ],
      stackovTags: ["actionscript", "actionscript-2", "actionscript-3"],
      githubName: "ActionScript",
      languishRanking: 134,
      githubLangId: "10",
      githubColor: "#882B0F",
      githubPopular: false,
      githubType: "programming",
      extWikipediaPath: "ActionScript",
      extRedditPath: "actionscript",
      extHomeURL: "https://www.adobe.com/devnet/actionscript/articles/actionscript3_overview.html",
      created: "1998",
    })
    .relInfluencedBy.add(["pl+java", "pl+javascript"])
    .relLicense.add(["license+apache"])
    .relParadigm.add(["para+functional", "para+imperative", "para+multi", "para+oop", "para+prototype", "para+scripting"])
    .relPlatforms.add(["plat+apple", "plat+cross", "plat+web", "plat+windows"])
    .relTags.add([
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
    ])
    .relTsys.add(["tsys+static", "tsys+strong"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
