import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+cg", {
      name: "Cg/HLSL",
      description:
        "Cg (short for C for Graphics) and High-Level Shader Language (HLSL) are two names given to a  high-level shading language developed by Nvidia and Microsoft for programming shaders. Cg/HLSL is based on the C programming language and although they share the same core syntax, some features of C were modified and new data types were added to make Cg/HLSL more suitable for programming graphics processing units.",
      websites: [
        { href: "https://developer.nvidia.com/cg-toolkit", title: "developer.nvidia.com/cg-toolkit", kind: "other" },
        { href: "https://en.wikipedia.org/wiki/Cg_(programming_language)", title: "Cg/HLSL", kind: "wikipedia" },
      ],
    })
    .addInfluencedBy(["pl+c"])
    .addTags(["tag+3dg", "tag+asm", "tag+compiler", "tag+editor", "tag+games", "tag+industrial", "tag+interpreter", "tag+ray-tracer"]);
}
