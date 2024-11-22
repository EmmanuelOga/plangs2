import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+assemblyscript", {
      name: "AssemblyScript",
      description:
        "AssemblyScript is a TypeScript-based programming language that is optimized for, and statically compiled to, WebAssembly (currently using asc, the reference AssemblyScript compiler). Resembling ECMAScript and JavaScript, but with static typing, the language is developed by the AssemblyScript Project with contributions from the AssemblyScript community.",
      keywords: ["assemblyscript"],
      extensions: [".ts"],
      isTranspiler: true,
      releases: [{ version: "0.27.30", name: "AssemblyScript 0.27.30", date: "2024-09-27" }],
      extWikipediaPath: "AssemblyScript",
      extHomeURL: "https://www.assemblyscript.org/",
      created: "2017",
    })
    .relCompilesTo.add(["pl+webassembly"])
    .relDialectOf.add(["pl+javascript", "pl+typescript"])
    .relInfluencedBy.add(["pl+javascript", "pl+typescript"])
    .relLicenses.add(["license+apache"])
    .relParadigms.add(["paradigm+functional", "paradigm+imperative", "paradigm+multi", "paradigm+oop"])
    .relPlatforms.add(["plat+nodejs", "plat+wasm", "plat+web"])
    .relTags.add(["tag+asm", "tag+compiler", "tag+scripting"])
    .relTsys.add(["tsys+static"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
