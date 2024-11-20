import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
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
        "CMake is a cross-platform, open-source tool that employs a compiler-independent method to build, test, and package software. It was developed as a response to the need for a cross-platform build environment for the Insight Segmentation and Registration Toolkit (ITK) and is distributed under the BSD-3-Clause License.",
      keywords: ["CMake", "build automation", "build system", "compiler-independent", "cross-platform", "open-source", "software development"],
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
    })
    .addCompilesTo(["pl+makefile"])
    .addLicenses(["license+bsd"])
    .addParadigms(["paradigm+scripting"])
    .addPlatforms(["plat+cross"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
