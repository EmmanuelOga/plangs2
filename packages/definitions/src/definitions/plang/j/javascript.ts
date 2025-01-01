import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+javascript", {
      name: "JavaScript",
      description:
        "Versatile Scripting language and a core technology of the World Wide Web, alongside HTML and CSS. It is widely used for web page interactivity, animation, and asynchronous server requests.",
      shortDesc: "Scripting language essential for web interactivity and development.",
      created: "1995",
      extensions: [".cjs", ".js", ".mjs"],
      extHomeURL: "https://ecma-international.org/publications-and-standards/standards/ecma-262/",
      extRedditPath: "javascript",
      extWikipediaPath: "JavaScript",
      githubColor: "#f1e05a",
      githubLangId: "183",
      githubName: "JavaScript",
      githubPopular: true,
      githubType: "programming",
      isTranspiler: false,
      keywords: ["javascript", "js"],
      languishRanking: 3,
      links: [{ url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript", title: "MDN JavaScript" }],
      stackovTags: ["javascript"],
    })
    .relInfluencedBy.add("pl+awk", "pl+c", "pl+java", "pl+lisp", "pl+lua", "pl+moonscript", "pl+perl", "pl+python", "pl+r5rs", "pl+scheme", "pl+self")
    .relLicenses.add("lic+public-domain")
    .relParadigms.add("para+event-driven", "para+functional", "para+imperative", "para+multi", "para+oop", "para+procedural")
    .relPlatforms.add("plat+android", "plat+apple", "plat+cross", "plat+linux", "plat+nodejs", "plat+wasm", "plat+web", "plat+windows")
    .relTags.add(
      "tag+app",
      "tag+asm",
      "tag+dbms",
      "tag+framework",
      "tag+industrial",
      "tag+interpreters",
      "tag+multimedia",
      "tag+ray-tracer",
      "tag+scripting",
      "tag+shell",
      "tag+viz",
      "tag+webdev",
    )
    .relTypeSystems.add("tsys+duck", "tsys+dynamic", "tsys+object", "tsys+weak")
    .relWrittenWith.add("pl+c", "pl+c++");
}
