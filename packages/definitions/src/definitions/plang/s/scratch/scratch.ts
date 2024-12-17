import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+scratch", {
      name: "Scratch",
      description:
        "Block-based visual programming language developed by MIT Media Lab for children, providing an educational tool to learn coding through interactive projects. Users create animations, games, and stories using a simple drag-and-drop interface. The language encourages creativity and logical thinking, with global reach and availability in multiple languages.",
      shortDesc: "Block-based visual language for children to learn coding through interactive projects.",
      created: "2003",
      extensions: [".sb", ".sb2", ".sb3", ".sprite", ".sprite2", ".sprite3"],
      extGithubPath: "scratchfoundation/scratch-vm",
      extHomeURL: "https://scratch.mit.edu",
      extWikipediaPath: "Scratch_(programming_language)",
      githubStars: 1200,
      isTranspiler: false,
      keywords: ["scratch"],
      releases: [
        { version: "3.0", name: "Scratch 3.0", date: "2019-01-02" },
        { version: "1.0", name: "Scratch 1.0", date: "2007-05-15" },
        { version: "2.0", name: "Scratch 2.0", date: "2013-05-09" },
      ],
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
