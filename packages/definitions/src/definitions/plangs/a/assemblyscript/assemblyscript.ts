import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+assemblyscript", {
      name: "AssemblyScript",
      description:
        "AssemblyScript is a TypeScript-based programming language that is optimized for, and statically compiled to, WebAssembly (currently using asc, the reference AssemblyScript compiler). Resembling ECMAScript and JavaScript, but with static typing, the language is developed by the AssemblyScript Project with contributions from the AssemblyScript community.",
      keywords: ["assemblyscript"],
      websites: [
        { title: "www.assemblyscript.org", href: "https://www.assemblyscript.org/", kind: "homepage" },
        { title: "AssemblyScript", href: "https://en.wikipedia.org/wiki/AssemblyScript", kind: "wikipedia" },
      ],
      extensions: [".ts"],
      year: 2017,
      isTranspiler: false,
      isMainstream: false,
      releases: [{ version: "0.27.29", name: "AssemblyScript 0.27.29", date: "2024-01-01" }],
    })
    .addDialectOf(["pl+javascript", "pl+typescript"])
    .addInfluencedBy(["pl+javascript", "pl+typescript"])
    .addLicenses(["license+apache"])
    .addParadigms(["paradigm+functional", "paradigm+imperative", "paradigm+multi", "paradigm+oop"])
    .addPlatforms(["plat+nodejs", "plat+wasm", "plat+web"])
    .addTags(["tag+asm", "tag+compiler", "tag+scripting"])
    .addTypeSystems(["tsys+static"]);
}
