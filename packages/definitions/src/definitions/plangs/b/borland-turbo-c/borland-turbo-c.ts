import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+borland-turbo-c", {
      name: "Borland Turbo C",
      description:
        "Turbo C is a discontinued integrated development environment (IDE) and compiler for the C programming language from Borland. First introduced in 1987, it was noted for its integrated development environment, small size, fast compile speed, comprehensive manuals and low price.",
      websites: [{ href: "https://en.wikipedia.org/wiki/Borland_Turbo_C", title: "Borland Turbo C", kind: "wikipedia" }],
    })
    .addPlatforms(["plat+dos", "plat+windows"])
    .addTags(["tag+app", "tag+asm", "tag+compiler", "tag+editor", "tag+interpreter", "tag+ray-tracer"]);
}
