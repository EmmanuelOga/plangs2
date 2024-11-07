import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+alda", {
      name: "Alda",
      description:
        "Alda is a music programming language used to create music and sounds through code. It is designed for musicians, composers, and hobbyists who enjoy working with code to create music.",
      keywords: ["alda", "music programming", "sound synthesis"],
      websites: [{ title: "Alda Official Website", href: "https://alda.io/", kind: "homepage" }],
      extensions: [".alda"],
      year: 2015,
    })
    .addLicenses(["license+mit"])
    .addParadigms(["paradigm+dsl"])
    .addPlatforms(["plat+cross"])
    .addTags(["tag+audio-dev", "tag+midi"])
    .addTypeSystems(["tsys+untyped"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
