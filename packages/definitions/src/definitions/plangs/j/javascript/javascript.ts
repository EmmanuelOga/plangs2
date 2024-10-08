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
        { title: "JavaScript", href: "https://en.wikipedia.org/wiki/Javascript_(programming_language)", kind: "wikipedia" },
      ],
      extensions: [".cjs", ".js", ".mjs"],
      firstAppeared: "1995-01-01",
      isTranspiler: false,
      isMainstream: true,
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
}
