import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+scratchjr", {
      name: "ScratchJr",
      description:
        "Visual programming language designed to introduce programming skills to children ages 5 to 7. The app is considered an introductory programming language. It is available as a free app for iOS, Android and Chromebook.",
      shortDesc:
        "Beginner-friendly visual programming language for children aged 5 to 7.",
      created: "2014",
      extGithubPath: "scratchfoundation/scratch-vm",
      extWikipediaPath: "ScratchJr",
      githubStars: 1200,
      isTranspiler: false,
      keywords: [
        "children's programming language",
        "scratchjr",
        "visual programming",
      ],
    })
    .relInfluencedBy.add("pl+scratch")
    .relParadigms.add("para+educational", "para+event-driven", "para+visual")
    .relPlatforms.add("plat+android", "plat+apple")
    .relTags.add("tag+edu", "tag+interpreters", "tag+low-code")
    .relTypeSystems.add("tsys+untyped");
}
