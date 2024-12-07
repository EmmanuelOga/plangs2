import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+squeak", {
      name: "Squeak",
      description:
        "Squeak is a modern, open-source Smalltalk programming system with fast execution environments across all major platforms including macOS, Windows, and Linux. It is known for its implementation of the Morphic graphical framework, fostering low-effort, interactive application development. Squeak's rich history includes its derivation from Smalltalk-80 and collaboration with entities like Disney, HP Labs, and Y Combinator. It is renowned for educational tools like Scratch and innovative user interface frameworks such as Morphic, Etoys, and Tweak.",
      keywords: ["etoys", "morphic", "open source", "platforms", "smalltalk", "squeak", "tweak", "virtual machine"],
      extensions: [".changes", ".image", ".sources", ".st"],
      releases: [
        { version: "202312181441", name: "Squeak Stable Release", date: "2023-12-20" },
        { version: "6.0", name: "Squeak 6.0", date: "2022-05-01" },
        { version: "5.3", name: "Squeak 5.3", date: "2020-12-01" },
      ],
      stackovTags: ["smalltalk"],
      githubName: "Smalltalk",
      githubLangId: "352",
      githubColor: "#596706",
      githubPopular: false,
      githubType: "programming",
      extWikipediaPath: "Smalltalk",
      extRedditPath: "smalltalk",
      extHomeURL: "http://www.squeak.org/",
      created: "1996",
    })
    .relInfluencedBy.add("pl+lisp", "pl+self")
    .relLicenses.add("lic+apache", "lic+mit")
    .relParadigms.add("para+educational", "para+interpreted", "para+oop", "para+reflective")
    .relPlatforms.add("plat+apple", "plat+cross", "plat+linux", "plat+windows")
    .relTags.add("tag+edu", "tag+games", "tag+interpreters", "tag+multimedia")
    .relTypeSystems.add("tsys+dynamic");

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
