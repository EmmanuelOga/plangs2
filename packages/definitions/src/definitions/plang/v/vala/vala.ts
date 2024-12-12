import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+vala", {
      name: "Vala",
      description: "Vala is an object-oriented programming language with a self-hosting compiler that generates C code and uses the GObject system.",
      keywords: ["cross-platform", "gobject", "object-oriented", "vala"],
      extensions: [".vala", ".vapi"],
      isTranspiler: false,
      releases: [{ version: "0.56.17", name: "Vala 0.56.17", date: "2024-04-19" }],
      stackovTags: ["vala"],
      githubName: "Vala",
      languishRanking: 121,
      githubLangId: "386",
      githubColor: "#a56de2",
      githubPopular: false,
      githubType: "programming",
      extWikipediaPath: "Vala_(programming_language)",
      extRedditPath: "vala",
      extHomeURL: "https://wiki.gnome.org/Projects/Vala",
      created: "2006",
      shortDesc: "Vala is an object-oriented language that generates C code using the GObject system.",
      githubStars: 824,
      extGithubPath: "GNOME/vala",
      ghRepoCreated: "2007-12-10",
    })
    .relCompilesTo.add("pl+c")
    .relInfluencedBy.add("pl+boo", "pl+c", "pl+c-sharp", "pl+d")
    .relLicenses.add("lic+lgpl")
    .relParadigms.add("para+imperative", "para+oop", "para+procedural", "para+scripting", "para+structured")
    .relPlatforms.add("plat+apple", "plat+bsd", "plat+cross", "plat+linux", "plat+windows")
    .relTags.add("tag+compiler", "tag+framework", "tag+gui")
    .relTypeSystems.add("tsys+inferred", "tsys+static", "tsys+strong", "tsys+structural")
    .relWrittenWith.add("pl+c");

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
