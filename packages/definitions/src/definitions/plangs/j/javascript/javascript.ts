import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+javascript", {
      name: "JavaScript",
      description:
        "JavaScript (/ˈdʒɑːvəskrɪpt/), often abbreviated as JS, is a versatile scripting language, primarily known for its role as the standard for web interactivity and behavior on the client-side. It's a core technology of the World Wide Web.",
      keywords: ["javascript"],
      websites: [
        { title: "ECMA-262", href: "https://ecma-international.org/publications-and-standards/standards/ecma-262/", kind: "homepage" },
        { title: "JavaScript on Reddit", kind: "reddit", href: "https://reddit.com/r/javascript" },
        { title: "JavaScript on Wikipedia", kind: "wikipedia", href: "https://en.wikipedia.org/wiki/JavaScript" },
      ],
      extensions: [".cjs", ".js", ".mjs"],
      year: 1995,
      isTranspiler: false,
      isMainstream: true,
      github: { name: "JavaScript", langId: "183", color: "#f1e05a", popular: true, type: "programming" },
      stackovTags: ["javascript"],
    })
    .addImplements(["pl+ecmascript"])
    .addInfluencedBy(["pl+awk", "pl+c", "pl+lisp", "pl+lua", "pl+moonscript", "pl+perl", "pl+python", "pl+r5rs", "pl+scheme", "pl+self"])
    .addLicenses(["license+public-domain"])
    .addParadigms(["paradigm+event-driven", "paradigm+functional", "paradigm+imperative", "paradigm+multi", "paradigm+oop", "paradigm+procedural"])
    .addPlatforms(["plat+android", "plat+apple", "plat+cross", "plat+linux", "plat+nodejs", "plat+wasm", "plat+windows"])
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
