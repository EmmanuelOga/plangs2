import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.n_plang
    .set("pl+borland-turbo-c", {
      images: [{ kind: "other", title: "Borland Turbo C" }],
      name: "Borland Turbo C",
      description:
        "Turbo C is a discontinued integrated development environment (IDE) and compiler for the C programming language from Borland. First introduced in 1987, it was noted for its integrated development environment, small size, fast compile speed, comprehensive manuals and low price.",
      websites: [{ href: "https://en.wikipedia.org/wiki/Borland_Turbo_C", title: "Borland Turbo C", kind: "wikipedia" }],
      extensions: [],
      releases: [],
    })
    .addPlatforms(["platf+dos", "platf+windows"]);
}
