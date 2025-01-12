import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+clang", {
      name: "Clang",
      description:
        "Compiler front end for C, C++, Objective-C, and Objective-C++, integrating with LLVM to provide a modular, reusable compiler framework.",
      shortDesc:
        "Compiler front end for C, C++, Objective-C, and Objective-C++, integrating with LLVM.",
      created: "2007",
      extensions: [".c", ".cpp", ".cu", ".m", ".mm"],
      extGithubPath: "llvm/llvm-project",
      extHomeURL: "https://clang.llvm.org",
      extRedditPath: "supercollider",
      extWikipediaPath: "SuperCollider",
      githubColor: "#46390b",
      githubLangId: "361",
      githubPopular: false,
      githubStars: 29600,
      githubType: "programming",
      isTranspiler: false,
      keywords: ["clang", "compiler", "llvm"],
      releases: [
        { version: "13.0.1", name: "Clang 13.0.1", date: "2024-10-30" },
        { version: "19.1.3", name: "Clang 19.1.3", date: "2024-10-30" },
        { version: "18.1.8", name: "Clang 18.1.8", date: "2024-01-01" },
      ],
    })
    .relImplements.add("pl+c", "pl+c++", "pl+objective-c")
    .relInfluencedBy.add("pl+llvm")
    .relLicenses.add("lic+apache")
    .relParadigms.add("para+compiled", "para+general-purpose", "para+multi")
    .relPlatforms.add(
      "plat+apple",
      "plat+arm",
      "plat+bsd",
      "plat+cross",
      "plat+linux",
      "plat+windows",
      "plat+x86-64",
    )
    .relTags.add(
      "tag+analysis",
      "tag+automation",
      "tag+cli",
      "tag+compiler",
      "tag+ray-tracer",
      "tag+shell",
      "tag+viz",
    )
    .relTypeSystems.add("tsys+manifest", "tsys+static", "tsys+strong")
    .relWrittenWith.add("pl+c++");
}
