import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+c", {
      name: "C",
      description:
        "C (pronounced /ˈsiː/ – like the letter c) is a general-purpose programming language. It was created in the 1970s by Dennis Ritchie and remains very widely used and influential. By design, C's features cleanly reflect the capabilities of the targeted CPUs. It has found lasting use in operating systems code (especially in kernels), device drivers, and protocol stacks, but its use in application software has been decreasing. C is commonly used on computer architectures that range from the largest supercomputers to the smallest microcontrollers and embedded systems.",
      keywords: ["c", "general-purpose", "systems programming"],
      websites: [
        { title: "ISO C Standard Documentation", href: "https://www.iso.org/standard/74528.html", kind: "other" },
        { title: "WG14 Committee (C Language)", href: "http://www.open-std.org/jtc1/sc22/wg14/", kind: "other" },
        { title: "C Language (Wikipedia)", href: "https://en.wikipedia.org/wiki/C_(programming_language)", kind: "wikipedia" },
        { title: "C on Reddit", kind: "reddit", href: "https://reddit.com/r/C_Programming" },
      ],
      extensions: [".c", ".h"],
      year: 1972,
      isTranspiler: false,
      isMainstream: true,
      releases: [
        { version: "C18", name: "Standard C18", date: "2018-06-01" },
        { version: "C11", name: "Standard C11", date: "2011-12-08" },
      ],
      github: { name: "C", langId: "41", color: "#555555", popular: true, type: "programming" },
      stackovTags: ["c"],
    })
    .addInfluencedBy(["pl+algol", "pl+fortran"])
    .addLicenses(["license+bsd"])
    .addParadigms(["paradigm+compiled", "paradigm+imperative", "paradigm+multi", "paradigm+procedural", "paradigm+structured"])
    .addPlatforms(["plat+android", "plat+apple", "plat+bsd", "plat+cross", "plat+dos", "plat+linux", "plat+windows"])
    .addTags([
      "tag+app",
      "tag+asm",
      "tag+compiler",
      "tag+embedded",
      "tag+flow",
      "tag+framework",
      "tag+industrial",
      "tag+interpreter",
      "tag+modeling",
      "tag+scripting",
      "tag+shell",
      "tag+testing",
      "tag+ui",
      "tag+viz",
      "tag+wavelet",
    ])
    .addTypeSystems(["tsys+manifest", "tsys+nominal", "tsys+static", "tsys+weak"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
