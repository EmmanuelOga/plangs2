import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+turbo-pascal", {
      name: "Turbo Pascal",
      description:
        "Turbo Pascal is a software development system that includes a compiler and an integrated development environment (IDE) for the programming language Pascal running on the operating systems CP/M, CP/M-86, and DOS. It was originally developed by Anders Hejlsberg at Borland, and was notable for its very fast compiling. Turbo Pascal, and the later but similar Turbo C, made Borland a leader in PC-based development tools.",
      websites: [{ href: "https://en.wikipedia.org/wiki/Turbo_Pascal", title: "Turbo Pascal", kind: "wikipedia" }],
    })
    .addDialectOf(["pl+pascal"])
    .addPlatforms(["plat+dos", "plat+windows"])
    .addTags(["tag+app", "tag+asm", "tag+automation", "tag+compiler", "tag+editor", "tag+interpreter", "tag+rad", "tag+ray-tracer", "tag+ui"]);
}
