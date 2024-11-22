import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+javascript", {
      name: "JavaScript",
      description:
        "JavaScript, often abbreviated as JS, is a versatile scripting language and a core technology of the World Wide Web, alongside HTML and CSS. It is widely used for web page interactivity, animation, and asynchronous server requests.",
      keywords: ["javascript", "js"],
      extensions: [".cjs", ".js", ".mjs"],
      stackovTags: ["javascript"],
      githubName: "JavaScript",
      languishRanking: 3,
      githubLangId: "183",
      githubColor: "#f1e05a",
      githubPopular: true,
      githubType: "programming",
      extWikipediaPath: "JavaScript",
      extRedditPath: "javascript",
      extHomeURL: "https://ecma-international.org/publications-and-standards/standards/ecma-262/",
      created: "1995",
    })
    .relInfluencedBy.add(["pl+awk", "pl+c", "pl+lisp", "pl+lua", "pl+moonscript", "pl+perl", "pl+python", "pl+r5rs", "pl+scheme", "pl+self"])
    .relLicenses.add(["license+public-domain"])
    .relParadigms.add([
      "paradigm+event-driven",
      "paradigm+functional",
      "paradigm+imperative",
      "paradigm+multi",
      "paradigm+oop",
      "paradigm+procedural",
    ])
    .relPlatforms.add(["plat+android", "plat+apple", "plat+cross", "plat+linux", "plat+nodejs", "plat+wasm", "plat+web", "plat+windows"])
    .relTags.add([
      "tag+app",
      "tag+asm",
      "tag+dbms",
      "tag+framework",
      "tag+industrial",
      "tag+interpreters",
      "tag+ray-tracer",
      "tag+scripting",
      "tag+shell",
      "tag+viz",
    ])
    .relTsys.add(["tsys+duck", "tsys+dynamic", "tsys+weak"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
