import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+clang", {
      name: "Clang",
      description:
        "Clang is a compiler front end for the C, C++, Objective-C, and Objective-C++ programming languages, as well as the OpenMP, OpenCL, RenderScript, CUDA, SYCL, and HIP frameworks. It acts as a drop-in replacement for the GNU Compiler Collection (GCC), supporting most of its compiling flags and unofficial language extensions. It includes a static analyzer, and several code analysis tools. It operates in tandem with the LLVM compiler back end and has been a subproject of LLVM.",
      keywords: ["clang", "compiler", "llvm"],
      releases: [
        { version: "13.0.1", name: "Clang 13.0.1", date: "2024-10-30" },
        { version: "19.1.3", name: "Clang 19.1.3", date: "2024-10-30" },
        { version: "18.1.8", name: "Clang 18.1.8", date: "2024-01-01" },
      ],
      githubLangId: "361",
      githubColor: "#46390b",
      githubPopular: false,
      githubType: "programming",
      extensions: [".c", ".cpp", ".cu", ".m", ".mm"],
      extWikipediaPath: "SuperCollider",
      extRedditPath: "supercollider",
      extHomeURL: "https://clang.llvm.org/",
      created: "2007",
    })
    .relImplements.add("pl+c", "pl+c++")
    .relInfluencedBy.add("pl+llvm")
    .relLicenses.add("lic+apache")
    .relParadigms.add("para+compiled", "para+multi")
    .relPlatforms.add("plat+apple", "plat+arm", "plat+bsd", "plat+cross", "plat+linux", "plat+windows", "plat+x86-64")
    .relTags.add("tag+analysis", "tag+automation", "tag+cli", "tag+compiler", "tag+ray-tracer", "tag+shell", "tag+viz")
    .relTypeSystems.add("tsys+manifest", "tsys+static", "tsys+strong")
    .relWrittenWith.add("pl+c++");

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
