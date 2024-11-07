import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+llvm", {
      name: "LLVM",
      description:
        "LLVM is a set of compiler and toolchain technologies that can be used to develop a frontend for any programming language and a backend for any instruction set architecture. LLVM is designed around a language-independent intermediate representation (IR) that serves as a portable, high-level assembly language that can be optimized with a variety of transformations over multiple passes. The name LLVM originally stood for Low Level Virtual Machine, though the project has expanded and the name is no longer officially an initialism.",
      keywords: ["llvm"],
      websites: [
        { title: "www.llvm.org", href: "https://www.llvm.org/", kind: "homepage" },
        { title: "LLVM", href: "https://en.wikipedia.org/wiki/LLVM", kind: "wikipedia" },
      ],
      year: 2003,
      isTranspiler: true,
      isMainstream: true,
      releases: [{ version: "18.1.8", name: "LLVM 18.1.8", date: "2024-01-01" }],
    })
    .addLicenses(["license+apache", "license+bsd"])
    .addParadigms(["paradigm+assembly", "paradigm+compiled", "paradigm+multi"])
    .addPlatforms(["plat+cross"])
    .addTags(["tag+analysis", "tag+asm", "tag+compiler", "tag+framework", "tag+interpreter", "tag+ray-tracer", "tag+shell", "tag+viz"])
    .addWrittenIn(["pl+c++"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
