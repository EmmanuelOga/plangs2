import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+asm.js", {
      name: "asm.js",
      description:
        "asm.js is a subset of JavaScript designed to allow computer software written in languages such as C to be run as web applications while maintaining performance characteristics considerably better than standard JavaScript, which is the typical language used for such applications.",
      keywords: ["asm.js"],
      websites: [
        { title: "asmjs.org", href: "http://asmjs.org/", kind: "homepage" },
        { title: "asm.js", href: "https://en.wikipedia.org/wiki/Asm.js", kind: "wikipedia" },
      ],
      year: 2013,
      isTranspiler: false,
      isMainstream: false,
    })
    .addInfluencedBy(["pl+javascript"])
    .addParadigms(["paradigm+compiled", "paradigm+dsl"])
    .addPlatforms(["plat+cross", "plat+wasm"])
    .addTags(["tag+asm"])
    .addTypeSystems(["tsys+untyped"])
    .addWrittenIn(["pl+javascript"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
