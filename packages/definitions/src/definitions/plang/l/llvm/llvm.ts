import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+llvm", {
      name: "LLVM",
      description:
        "Set of compiler and toolchain technologies that can be used to develop a frontend for any programming language and a backend for any instruction set architecture. LLVM is designed around a language-independent intermediate representation (IR) that serves as a portable, high-level assembly language that can be optimized with a variety of transformations over multiple passes. The name LLVM originally stood for Low Level Virtual Machine, though the project has expanded and the name is no longer officially an initialism.",
      shortDesc: "Set of compiler technologies for developing language frontends and architecture backends.",
      created: "2003",
      extGithubPath: "llvm/llvm-project",
      extHomeURL: "https://llvm.org/",
      extRedditPath: "LLVM",
      extWikipediaPath: "LLVM",
      githubColor: "#185619",
      githubLangId: "191",
      githubName: "LLVM",
      githubPopular: false,
      githubStars: 29600,
      githubType: "programming",
      isTranspiler: false,
      keywords: ["llvm"],
      languishRanking: 83,
      releases: [
        { version: "19.1.3", name: "LLVM 19.1.3", date: "2024-10-30" },
        { version: "18.1.8", name: "LLVM 18.1.8", date: "2024-06-01" },
        { version: "17.0.6", name: "LLVM 17.0.6", date: "2023-11-01" },
      ],
      stackovTags: ["llvm", "llvm-ir"],
    })
    .relLicenses.add("lic+apache", "lic+bsd")
    .relParadigms.add("para+assembly", "para+compiled", "para+multi")
    .relPlatforms.add("plat+cross")
    .relTags.add("tag+analysis", "tag+asm", "tag+compiler", "tag+framework", "tag+interpreters", "tag+ray-tracer", "tag+shell", "tag+viz")
    .relWrittenWith.add("pl+c++");

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
