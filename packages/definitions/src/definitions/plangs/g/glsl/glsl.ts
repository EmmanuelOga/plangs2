import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+glsl", {
      name: "GLSL",
      languishRanking: 75,
      stackovTags: ["glsl"],
      githubName: "GLSL",
      githubLangId: "124",
      githubColor: "#5686a5",
      githubPopular: false,
      githubType: "programming",
      description:
        "OpenGL Shading Language (GLSL) is a high-level shading language with a syntax based on the C programming language, designed to provide developers with more control over the graphics pipeline. It compiles shaders to be executed on the GPU, providing cross-platform compatibility and hardware vendor-specific optimizations.",
      keywords: ["GLSL", "GPU", "OpenGL Shading Language", "graphics pipeline", "high-level", "shader"],
      extensions: [".frag", ".glsl", ".vert"],
      year: 2004,
      isMainstream: true,
      releases: [
        { version: "1.10.59", name: "Version 1.10.59", date: "2004-04-30" },
        { version: "3.30.6", name: "Version 3.30.6", date: "2010-03-11" },
        { version: "4.60.5", name: "Version 4.60.5", date: "2018-06-14" },
      ],
      extWikipediaPath: "OpenGL_Shading_Language",
      extRedditPath: "glsl",
    })
    .addParadigms(["paradigm+compiled", "paradigm+multi", "paradigm+procedural"])
    .addPlatforms(["plat+apple", "plat+cross", "plat+linux", "plat+windows"])
    .addTags(["tag+3dg", "tag+compiler"])
    .addTypeSystems(["tsys+static", "tsys+strong"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
