import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+scratchjr", {
      name: "ScratchJr",
      description:
        "ScratchJr is a visual programming language designed to introduce programming skills to children ages 5–7. The app is considered an introductory programming language. It is available as a free app for iOS, Android and Chromebook.",
      keywords: ["children's programming language", "scratchjr", "visual programming"],
      extWikipediaPath: "ScratchJr",
      created: "2014",
      isTranspiler: false,
      shortDesc: "ScratchJr is a beginner-friendly visual programming language for children aged 5–7.",
      githubStars: 1200,
      extGithubPath: "scratchfoundation/scratch-vm",
    })
    .relInfluencedBy.add("pl+scratch")
    .relParadigms.add("para+educational", "para+event-driven", "para+visual")
    .relPlatforms.add("plat+android", "plat+apple")
    .relTags.add("tag+edu", "tag+interpreters", "tag+low-code")
    .relTypeSystems.add("tsys+untyped");

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
