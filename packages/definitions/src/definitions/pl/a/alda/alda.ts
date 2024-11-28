import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+alda", {
      name: "Alda",
      description:
        "Alda is a text-based programming language designed for music composition. It allows users to write and play music using a simple syntax in a text editor and execute it through the command line. Its intuitive syntax is accessible for both musicians with no programming background and programmers with limited music knowledge, making it a versatile tool for creative musical expression.",
      keywords: ["alda", "music composition", "music programming"],
      extensions: [".alda"],
      extHomeURL: "https://alda.io/",
      created: "2015",
    })
    .relLicenses.add("lic+mit")
    .relParadigms.add("para+dsl")
    .relPlatforms.add("plat+cross")
    .relTags.add("tag+audio-dev", "tag+midi")
    .relTypeSystems.add("tsys+untyped");

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
