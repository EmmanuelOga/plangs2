import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.n_plang
    .set("pl+clang", {
      images: [],
      name: "Clang",
      description:
        "Clang (/ˈklæŋ/) is a compiler front end for the C, C++, Objective-C, and Objective-C++ programming languages, as well as the OpenMP, OpenCL, RenderScript, CUDA, SYCL, and HIP frameworks. It acts as a drop-in replacement for the GNU Compiler Collection (GCC), supporting most of its compilation flags and unofficial language extensions. It includes a static analyzer, and several code analysis tools.",
      websites: [
        { href: "https://clang.llvm.org/", title: "clang.llvm.org", kind: "homepage" },
        { href: "https://en.wikipedia.org/wiki/Clang", title: "Clang", kind: "wikipedia" },
      ],
      extensions: [],
      releases: [{ version: "18.1.8", date: "2024-01-01" }],
    })
    .addImplements(["pl+c", "pl+c++"])
    .addLicenses(["lic+apache"])
    .addPlatforms(["platf+arm", "platf+x86-64"])
    .addTags(["tag+compiler"])
    .addWrittenIn(["pl+c++"]);
}
