import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+cg", {
      name: "Cg/HLSL",
      description:
        "Cg (short for C for Graphics) and High-Level Shader Language (HLSL) are two names given to a high-level shading language developed by Nvidia and Microsoft for programming shaders. Cg/HLSL is based on the C programming language and although they share the same core syntax, some features of C were modified and new data types were added to make Cg/HLSL more suitable for programming graphics processing units.",
      keywords: ["cg", "hlsl", "shader", "graphics"],
      websites: [
        { title: "developer.nvidia.com/cg-toolkit", href: "https://developer.nvidia.com/cg-toolkit", kind: "other" },
        { title: "Cg/HLSL", href: "https://en.wikipedia.org/wiki/Cg_(programming_language)", kind: "wikipedia" },
      ],
      extensions: [".cg", ".hlsl"],
      year: 2002,
      isTranspiler: false,
      isMainstream: false,
    })
    .addInfluencedBy(["pl+c"])
    .addParadigms(["paradigm+functional", "paradigm+multi", "paradigm+procedural"])
    .addPlatforms(["plat+cross", "plat+linux", "plat+windows"])
    .addTags(["tag+3dg", "tag+asm", "tag+compiler", "tag+games", "tag+industrial", "tag+ray-tracer"])
    .addTypeSystems(["tsys+static", "tsys+strong"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
