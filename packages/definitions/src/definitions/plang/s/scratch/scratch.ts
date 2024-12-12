import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+scratch", {
      name: "Scratch",
      description:
        "Scratch is a block-based visual programming language developed by MIT Media Lab for children, providing an educational tool to learn coding through interactive projects. Users create animations, games, and stories using a simple drag-and-drop interface. The language encourages creativity and logical thinking, with global reach and availability in multiple languages.",
      keywords: ["scratch"],
      extensions: [".sb", ".sb2", ".sb3", ".sprite", ".sprite2", ".sprite3"],
      releases: [
        { version: "3.0", name: "Scratch 3.0", date: "2019-01-02" },
        { version: "1.0", name: "Scratch 1.0", date: "2007-05-15" },
        { version: "2.0", name: "Scratch 2.0", date: "2013-05-09" },
      ],
      extWikipediaPath: "Scratch_(programming_language)",
      extHomeURL: "https://scratch.mit.edu",
      created: "2003",
      isTranspiler: false,
      shortDesc: "Scratch is a block-based visual language for children to learn coding through interactive projects.",
      githubStars: 1200,
      extGithubPath: "scratchfoundation/scratch-vm",
    })
    .relInfluencedBy.add("pl+squeak")
    .relLicenses.add("lic+bsd", "lic+dual", "lic+gnu-gpl")
    .relParadigms.add("para+educational", "para+event-driven", "para+visual")
    .relPlatforms.add("plat+android", "plat+apple", "plat+linux", "plat+windows")
    .relTags.add("tag+audio-dev", "tag+editor", "tag+games", "tag+interpreters", "tag+multimedia", "tag+video", "tag+viz")
    .relTypeSystems.add("tsys+untyped")
    .relWrittenWith.add("pl+actionscript", "pl+javascript", "pl+squeak");

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
