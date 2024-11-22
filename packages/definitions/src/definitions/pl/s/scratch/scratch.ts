import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+scratch", {
      name: "Scratch",
      description:
        "Scratch is a high-level, block-based visual programming language and website aimed primarily at children as an educational tool, with a target audience of ages 8 to 16. Users on the site can create projects on the website using a block-like interface. Scratch is conceived and designed through collaborative National Science Foundation grants awarded to Mitchel Resnick and Yasmin Kafai. Scratch is developed by the MIT Media Lab and has been translated into over 70 languages, being used globally. It's widely taught and used in after-school centers, schools, and colleges. As of February 2023, over 123 million projects were shared by over 103 million users, with over 800 million total projects ever created and over 95 million visitors monthly to the website.",
      keywords: ["scratch"],
      extensions: [".sb", ".sb2", ".sb3", ".sprite", ".sprite2", ".sprite3"],
      releases: [
        { version: "3.0", name: "Scratch 3.0", date: "2019-01-02" },
        { version: "1.0", name: "Scratch 1.0", date: "2007-05-15" },
        { version: "2.0", name: "Scratch 2.0", date: "2013-05-09" },
      ],
      extWikipediaPath: "Scratch_(programming_language)",
      extHomeURL: "https://scratch.mit.edu/",
      created: "2003",
    })
    .relInfluencedBy.add(["pl+squeak"])
    .relLicenses.add(["license+bsd", "license+dual", "license+gnu-gpl"])
    .relParadigms.add(["paradigm+educational", "paradigm+event-driven", "paradigm+visual"])
    .relPlatforms.add(["plat+android", "plat+apple", "plat+linux", "plat+windows"])
    .relTags.add(["tag+audio-dev", "tag+editor", "tag+games", "tag+interpreters", "tag+multimedia", "tag+video", "tag+viz"])
    .relTsys.add(["tsys+untyped"])
    .relWrittenIn.add(["pl+actionscript", "pl+javascript", "pl+squeak"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
