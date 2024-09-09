import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.n_plang
    .set("pl+llvm", {
      images: [{ kind: "logo", title: "LLVM", url: "/images/plangs/l/llvm/logo.png" }],
      name: "LLVM",
      description:
        "LLVM is a set of compiler and toolchain technologies that can be used to develop a frontend for any programming language and a backend for any instruction set architecture. LLVM is designed around a language-independent intermediate representation (IR) that serves as a portable, high-level assembly language that can be optimized with a variety of transformations over multiple passes. The name LLVM originally stood for Low Level Virtual Machine, though the project has expanded and the name is no longer officially an initialism.",
      websites: [
        { href: "https://www.llvm.org/", title: "www.llvm.org", kind: "homepage" },
        { href: "https://en.wikipedia.org/wiki/LLVM", title: "LLVM", kind: "wikipedia" },
      ],
      extensions: [],
      releases: [{ version: "18.1.8", date: "2024-01-01" }],
    })
    .addLicenses(["lic+apache", "lic+bsd"])
    .addPlatforms(["platf+cross"])
    .addTags(["tag+compiler"])
    .addWrittenIn(["pl+c++"]);
}
