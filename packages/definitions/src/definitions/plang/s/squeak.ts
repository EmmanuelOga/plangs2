import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+squeak", {
      name: "Squeak",
      description:
        "Modern Smalltalk programming system with fast execution environments across all major platforms including macOS, Windows, and Linux. It is known for its implementation of the Morphic graphical framework, fostering low-effort, interactive application development. Squeak's rich history includes its derivation from Smalltalk-80 and collaboration with entities like Disney, HP Labs, and Y Combinator. It is renowned for educational tools like Scratch and innovative user interface frameworks such as Morphic, Etoys, and Tweak.",
      shortDesc: "Modern Smalltalk with a fast execution environment and the Morphic framework.",
      created: "1996",
      extensions: [".changes", ".image", ".sources", ".st"],
      extGithubPath: "squeak-smalltalk/squeak-app",
      extHomeURL: "https://squeak.org/",
      extRedditPath: "smalltalk",
      extWikipediaPath: "Smalltalk",
      githubColor: "#596706",
      githubLangId: "352",
      githubName: "Smalltalk",
      githubPopular: false,
      githubStars: 44,
      githubType: "programming",
      isTranspiler: false,
      keywords: ["etoys", "morphic", "open source", "platforms", "smalltalk", "squeak", "tweak", "virtual machine"],
      releases: [{ version: "202312181441", name: "Squeak Stable Release", date: "2023-12-20" }],
      stackovTags: ["smalltalk"],
    })
    .relInfluencedBy.add("pl+lisp", "pl+self")
    .relLicenses.add("lic+apache", "lic+mit")
    .relParadigms.add("para+educational", "para+interpreted", "para+oop", "para+reflective")
    .relPlatforms.add("plat+apple", "plat+cross", "plat+linux", "plat+windows")
    .relTags.add("tag+edu", "tag+games", "tag+interpreters", "tag+multimedia")
    .relTypeSystems.add("tsys+dynamic");
}
