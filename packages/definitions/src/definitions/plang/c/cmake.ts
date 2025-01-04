import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+cmake", {
      name: "CMake",
      description:
        "Cross-platform build system that automates the configuration and generation of build files for software projects, abstracting platform-specific details by using a compiler-independent approach. Initially developed for the ITK toolkit, CMake has become the standard build tool for many open-source projects.",
      shortDesc:
        "Cross-platform build system that generates build files for software projects.",
      created: "2000",
      extensions: [".cmake"],
      extGithubPath: "Kitware/CMake",
      extHomeURL: "https://cmake.org/",
      extRedditPath: "cmake",
      extWikipediaPath: "CMake",
      filenames: ["CMakeLists.txt"],
      githubColor: "#DA3434",
      githubLangId: "47",
      githubName: "CMake",
      githubPopular: false,
      githubStars: 6900,
      githubType: "programming",
      isTranspiler: true,
      keywords: ["CMake", "build system", "compiler-independent"],
      languishRanking: 35,
      releases: [
        { version: "3.30.5", name: "Stable release", date: "2024-10-09" },
        { version: "3.31.0-rc3", name: "Preview release", date: "2024-10-29" },
      ],
      stackovTags: ["cmake"],
    })
    .relCompilesTo.add("pl+makefile")
    .relLicenses.add("lic+bsd")
    .relParadigms.add("para+procedural", "para+scripting")
    .relPlatforms.add("plat+cross")
    .relTags.add("tag+automation");
}
