import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+alda", {
      name: "Alda",
      description:
        "Text-based programming language designed for music composition. It allows users to write and play music using a simple syntax in a text editor and execute it through the command line. Its intuitive syntax is accessible for both musicians with no programming background and programmers with limited music knowledge, making it a versatile tool for creative musical expression.",
      shortDesc:
        "Text-based programming language for music composition with simple syntax for musicians and programmers.",
      created: "2015",
      extensions: [".alda"],
      extGithubPath: "alda-lang/alda",
      extHomeURL: "https://alda.io/",
      githubStars: 5600,
      isTranspiler: false,
      keywords: ["alda", "music composition", "music programming"],
    })
    .relLicenses.add("lic+mit")
    .relParadigms.add("para+dsl")
    .relPlatforms.add("plat+cross")
    .relTags.add("tag+audio-dev", "tag+midi")
    .relTypeSystems.add("tsys+untyped");
}
