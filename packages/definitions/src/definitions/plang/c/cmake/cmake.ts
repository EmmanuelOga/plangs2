import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+cmake", {
      name: "CMake",
      languishRanking: 35,
      stackovTags: ["cmake"],
      githubName: "CMake",
      githubLangId: "47",
      githubColor: "#DA3434",
      githubPopular: false,
      githubType: "programming",
      description:
        "CMake is a cross-platform build system that automates the configuration and generation of build files for software projects, abstracting platform-specific details by using a compiler-independent approach. Initially developed for the ITK toolkit, CMake has become the standard build tool for many open-source projects.",
      keywords: ["CMake", "build system", "compiler-independent"],
      extensions: [".cmake"],
      filenames: ["CMakeLists.txt"],
      isTranspiler: true,
      releases: [
        { version: "3.30.5", name: "Stable release", date: "2024-10-09" },
        { version: "3.31.0-rc3", name: "Preview release", date: "2024-10-29" },
      ],
      extWikipediaPath: "CMake",
      extRedditPath: "cmake",
      created: "2000",
      shortDesc: "CMake is a cross-platform build system that generates build files for software projects.",
      extHomeURL: "https://cmake.org/",
      githubStars: 6900,
      extGithubPath: "Kitware/CMake",
      ghRepoCreated: "2000-05-06",
    })
    .relCompilesTo.add("pl+makefile")
    .relLicenses.add("lic+bsd")
    .relParadigms.add("para+procedural", "para+scripting")
    .relPlatforms.add("plat+cross")
    .relTags.add("tag+automation");

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
