import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
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
    .relLicense.add(["lic+apache"])
    .relParadigm.add(["para+functional", "para+imperative", "para+multi", "para+oop"])
    .relPlatform.add(["plat+nodejs", "plat+wasm", "plat+web"])
    .relTag.add(["tag+asm", "tag+compiler", "tag+scripting"])
    .relTypeSystem.add(["tsys+static"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
