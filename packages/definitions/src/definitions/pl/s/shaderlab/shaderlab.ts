import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+shaderlab", {
      name: "ShaderLab",
      languishRanking: 99,
      stackovTags: ["shaderlab"],
      githubName: "ShaderLab",
      githubLangId: "664257356",
      githubColor: "#222c37",
      githubPopular: false,
      githubType: "programming",
      description: "ShaderLab is Unity's language for defining shaders. It is used for controlling the graphics pipeline in games and simulations.",
      keywords: ["graphics", "shader", "shader programming", "unity"],
      extensions: [".shader"],
      year: 2005,
      isMainstream: true,
      extHomeURL: "https://docs.unity3d.com/Manual/SL-Shader.html",
    })
    .addParadigms(["paradigm+dsl", "paradigm+visual"])
    .addPlatforms(["plat+cross"])
    .addTags(["tag+3dg", "tag+games", "tag+workflow"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
