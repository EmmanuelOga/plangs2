import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+zig", {
      name: "Zig",
      description:
        "Zig is an imperative, general-purpose, statically typed, compiled system programming language designed by Andrew Kelley. It is intended as a successor to the language C, with the intent of being even smaller and simpler to program in, while offering more function. It is free and open-source software, released under an MIT License.",
      keywords: ["zig"],
      websites: [
        { title: "ziglang.org", href: "https://ziglang.org/", kind: "homepage" },
        { title: "Zig (Wikipedia)", href: "https://en.wikipedia.org/wiki/Zig_(programming_language)", kind: "wikipedia" },
      ],
      extensions: [".zig", ".zigr", ".zir", ".zon"],
      year: 2016,
      isTranspiler: false,
      isMainstream: false,
      releases: [{ version: "0.13.0", name: "Zig 0.13.0", date: "2024-01-01" }],
    })
    .addInfluencedBy(["pl+c", "pl+c++", "pl+go", "pl+javascript", "pl+rust"])
    .addLicenses(["license+mit"])
    .addParadigms(["paradigm+concurrent", "paradigm+functional", "paradigm+imperative", "paradigm+multi", "paradigm+procedural"])
    .addPlatforms(["plat+arm", "plat+bsd", "plat+cross", "plat+linux", "plat+riscv", "plat+wasm", "plat+windows", "plat+x86-64"])
    .addTags(["tag+app", "tag+asm", "tag+compiler", "tag+framework", "tag+industrial", "tag+interpreter", "tag+testing", "tag+viz"])
    .addTypeSystems(["tsys+generic", "tsys+inferred", "tsys+static", "tsys+strong", "tsys+structural"]);
}
