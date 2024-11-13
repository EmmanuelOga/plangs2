import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl.set("pl+glsl", {
    name: "GLSL",
    languishRanking: 75,
    websites: [
      { kind: "reddit", title: "GLSL on Reddit", href: "https://reddit.com/r/glsl" },
      { kind: "wikipedia", title: "GLSL on Wikipedia", href: "https://en.wikipedia.org/wiki/OpenGL_Shading_Language" },
    ],
    stackovTags: ["glsl"],
    githubName: "GLSL",
    githubLangId: "124",
    githubColor: "#5686a5",
    githubPopular: false,
    githubType: "programming",
  });

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
