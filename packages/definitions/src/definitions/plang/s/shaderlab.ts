import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+shaderlab", {
      name: "ShaderLab",
      description:
        "ShaderLab is Unity's language for defining shaders, allowing developers to write code that describes how to render graphics in the Unity engine.",
      shortDesc: "ShaderLab allows developers to define shaders within the Unity engine for custom graphics rendering.",
      created: "2005",
      extensions: [".shader"],
      extHomeURL: "https://docs.unity3d.com/Manual/SL-ShaderPrograms.html",
      githubColor: "#222c37",
      githubLangId: "664257356",
      githubName: "ShaderLab",
      githubPopular: false,
      githubType: "programming",
      isTranspiler: false,
      keywords: ["graphics", "rendering", "shader", "unity"],
      languishRanking: 99,
      links: [{ url: "https://learn.unity.com", title: "Unity Learn" }],
      stackovTags: ["shaderlab"],
    })
    .relParadigms.add("para+dsl", "para+visual")
    .relPlatforms.add("plat+cross")
    .relTags.add("tag+3dg", "tag+games", "tag+workflow");
}
