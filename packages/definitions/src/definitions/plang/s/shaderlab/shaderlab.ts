import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+shaderlab", {
      name: "ShaderLab",
      languishRanking: 99,
      stackovTags: ["shaderlab"],
      githubName: "ShaderLab",
      githubLangId: "664257356",
      githubColor: "#222c37",
      githubPopular: false,
      githubType: "programming",
      description:
        "ShaderLab is Unity's language for defining shaders, allowing developers to write code that describes how to render graphics in the Unity engine.",
      keywords: ["graphics", "rendering", "shader", "unity"],
      extensions: [".shader"],
      extHomeURL: "https://docs.unity3d.com/Manual/SL-ShaderPrograms.html",
      created: "2005",
      isTranspiler: false,
      shortDesc: "ShaderLab allows developers to define shaders within the Unity engine for custom graphics rendering.",
      links: [{ url: "https://learn.unity.com", title: "Unity Learn" }],
    })
    .relParadigms.add("para+dsl", "para+visual")
    .relPlatforms.add("plat+cross")
    .relTags.add("tag+3dg", "tag+games", "tag+workflow");

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
