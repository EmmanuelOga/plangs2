import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.n_plang
    .set("pl+zig", {
      images: [{ kind: "logo", title: "Zig", url: "/images/plangs/z/zig/logo.png" }],
      name: "Zig",
      description:
        "Zig is an imperative, general-purpose, statically typed, compiled system programming language designed by Andrew Kelley. It is intended as a successor to the language C, with the intent of being even smaller and simpler to program in, while offering more function. It is free and open-source software, released under an MIT License.",
      websites: [
        { href: "https://ziglang.org/", title: "ziglang.org", kind: "homepage" },
        { href: "https://en.wikipedia.org/wiki/Zig_(programming_language)", title: "Zig", kind: "wikipedia" },
      ],
      extensions: [".zig", ".zigr", ".zir", ".zon"],
      releases: [{ version: "0.13.0", date: "2024-01-01" }],
    })
    .addInfluencedBy(["pl+c", "pl+c++", "pl+go", "pl+javascript", "pl+rust"])
    .addLicenses(["lic+mit"])
    .addParadigms(["para+concurrent", "para+functional", "para+imperative", "para+multi", "para+procedural"])
    .addPlatforms(["platf+arm", "platf+bsd", "platf+cross", "platf+linux", "platf+riscv", "platf+wasm", "platf+windows", "platf+x86-64"])
    .addTypeSystems(["tsys+generic", "tsys+inferred", "tsys+static", "tsys+strong", "tsys+structural"]);
}
