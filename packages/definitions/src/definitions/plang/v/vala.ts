import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+vala", {
      name: "Vala",
      description:
        "Object-oriented programming language with a self-hosting compiler that generates C code and uses the GObject system.",
      shortDesc:
        "Object-oriented language that generates C code using the GObject system.",
      created: "2006",
      extensions: [".vala", ".vapi"],
      extGithubPath: "GNOME/vala",
      extHomeURL: "https://wiki.gnome.org/Projects/Vala",
      extRedditPath: "vala",
      extWikipediaPath: "Vala_(programming_language)",
      githubColor: "#a56de2",
      githubLangId: "386",
      githubName: "Vala",
      githubPopular: false,
      githubStars: 824,
      githubType: "programming",
      isTranspiler: true,
      keywords: ["cross-platform", "gobject", "object-oriented", "vala"],
      languishRanking: 122,
      releases: [
        { version: "0.56.17", name: "Vala 0.56.17", date: "2024-04-19" },
      ],
      stackovTags: ["vala"],
    })
    .relCompilesTo.add("pl+c")
    .relInfluencedBy.add("pl+boo", "pl+c", "pl+c-sharp", "pl+d")
    .relLicenses.add("lic+lgpl")
    .relParadigms.add(
      "para+general-purpose",
      "para+imperative",
      "para+oop",
      "para+procedural",
      "para+scripting",
      "para+structured",
    )
    .relPlatforms.add(
      "plat+apple",
      "plat+bsd",
      "plat+cross",
      "plat+linux",
      "plat+windows",
    )
    .relTags.add("tag+better-c", "tag+compiler", "tag+framework", "tag+gui")
    .relTypeSystems.add(
      "tsys+inferred",
      "tsys+object",
      "tsys+static",
      "tsys+strong",
      "tsys+structural",
    )
    .relWrittenWith.add("pl+c");
}
