import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+clang", {
      name: "Clang",
      description:
        "Clang (/ˈklæŋ/) is a compiler front end for the C, C++, Objective-C, and Objective-C++ programming languages, as well as the OpenMP, OpenCL, RenderScript, CUDA, SYCL, and HIP frameworks. It acts as a drop-in replacement for the GNU Compiler Collection (GCC), supporting most of its compilation flags and unofficial language extensions. It includes a static analyzer, and several code analysis tools.",
      keywords: ["clang"],
      websites: [
        { title: "clang.llvm.org", href: "https://clang.llvm.org/", kind: "homepage" },
        { title: "Clang", href: "https://en.wikipedia.org/wiki/Clang", kind: "wikipedia" },
        { title: "Clang on Reddit", kind: "reddit", href: "https://reddit.com/r/clang" },
      ],
      year: 2007,
      isTranspiler: false,
      isMainstream: true,
      releases: [{ version: "18.1.8", name: "Clang 18.1.8", date: "2024-01-01" }],
      stackovTags: ["supercollider"],
      githubName: "SuperCollider",
      languishRanking: 218,
      githubLangId: "361",
      githubColor: "#46390b",
      githubPopular: false,
      githubType: "programming",
    })
    .addImplements(["pl+c", "pl+c++"])
    .addInfluencedBy(["pl+gcc", "pl+llvm"])
    .addLicenses(["license+apache"])
    .addParadigms(["paradigm+compiled"])
    .addPlatforms(["plat+apple", "plat+arm", "plat+bsd", "plat+cross", "plat+linux", "plat+windows", "plat+x86-64"])
    .addTags(["tag+analysis", "tag+automation", "tag+cli", "tag+compiler", "tag+ray-tracer", "tag+shell", "tag+viz"])
    .addTypeSystems(["tsys+manifest", "tsys+static", "tsys+strong"])
    .addWrittenIn(["pl+c++"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
