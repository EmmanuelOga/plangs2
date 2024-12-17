import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+assemblyscript", {
      name: "AssemblyScript",
      description:
        "AssemblyScript is designed to compile a variant of TypeScript to WebAssembly. By building upon TypeScript, it offers static typing with a syntax familiar to JavaScript developers, thus enabling efficient compilation to WebAssembly without the need for arcane languages or tools.",
      shortDesc: "AssemblyScript compiles a TypeScript variant to WebAssembly.",
      created: "2017",
      extensions: [".ts"],
      extGithubPath: "AssemblyScript/assemblyscript",
      extHomeURL: "https://www.assemblyscript.org",
      extWikipediaPath: "AssemblyScript",
      githubStars: 17000,
      isTranspiler: true,
      keywords: ["assemblyscript", "statically-typed", "typescript", "webassembly"],
      releases: [
        { version: "0.20.6", name: "AssemblyScript 0.20.6", date: "2022-01-22" },
        { version: "0.27.30", name: "AssemblyScript 0.27.30", date: "2024-09-27" },
      ],
    })
    .relCompilesTo.add("pl+webassembly")
    .relDialectOf.add("pl+javascript", "pl+typescript")
    .relInfluencedBy.add("pl+javascript", "pl+typescript")
    .relLicenses.add("lic+apache")
    .relParadigms.add("para+functional", "para+imperative", "para+multi", "para+oop")
    .relPlatforms.add("plat+nodejs", "plat+wasm", "plat+web")
    .relTags.add("tag+asm", "tag+compiler", "tag+scripting")
    .relTypeSystems.add("tsys+static", "tsys+strong");

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
