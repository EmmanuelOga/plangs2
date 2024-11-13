import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+javascript", {
      name: "JavaScript",
      description:
        "JavaScript, often abbreviated as JS, is a versatile scripting language and a core technology of the World Wide Web, alongside HTML and CSS. It is widely used for web page interactivity, animation, and asynchronous server requests.",
      keywords: ["javascript", "js"],
      websites: [
        { title: "ECMA-262", href: "https://ecma-international.org/publications-and-standards/standards/ecma-262/", kind: "homepage" },
        { title: "JavaScript on Reddit", kind: "reddit", href: "https://reddit.com/r/javascript" },
        { title: "JavaScript on Wikipedia", kind: "wikipedia", href: "https://en.wikipedia.org/wiki/JavaScript" },
      ],
      extensions: [".cjs", ".js", ".mjs"],
      year: 1995,
      isMainstream: true,
      stackovTags: ["javascript"],
      githubName: "JavaScript",
      languishRanking: 3,
      githubLangId: "183",
      githubColor: "#f1e05a",
      githubPopular: true,
      githubType: "programming",
      releases: [
        { version: "ECMAScript 2024", name: "ECMAScript 2024", date: "June 2024" },
        { version: "ECMAScript 2025", name: "ECMAScript 2025", date: "March 2024" },
      ],
    })
    .addImplements(["pl+ecmascript"])
    .addInfluencedBy(["pl+awk", "pl+c", "pl+lisp", "pl+lua", "pl+moonscript", "pl+perl", "pl+python", "pl+r5rs", "pl+scheme", "pl+self"])
    .addLicenses(["license+public-domain"])
    .addParadigms(["paradigm+event-driven", "paradigm+functional", "paradigm+imperative", "paradigm+multi", "paradigm+oop", "paradigm+procedural"])
    .addPlatforms(["plat+android", "plat+apple", "plat+cross", "plat+linux", "plat+nodejs", "plat+wasm", "plat+web", "plat+windows"])
    .addTags([
      "tag+app",
      "tag+asm",
      "tag+dbms",
      "tag+framework",
      "tag+industrial",
      "tag+interpreter",
      "tag+ray-tracer",
      "tag+scripting",
      "tag+shell",
      "tag+viz",
    ])
    .addTypeSystems(["tsys+duck", "tsys+dynamic", "tsys+weak"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
