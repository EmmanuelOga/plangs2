import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+vala", {
      name: "Vala",
      description:
        "Vala is an object-oriented programming language with a self-hosting compiler that generates C code and uses the GObject system. It incorporates modern programming language features with minimal runtime requirements, using the same ABI as C libraries and applications, making it ideal for GNOME development.",
      keywords: ["cross-platform", "gnome", "gobject", "object-oriented", "vala"],
      extensions: [".vala", ".vapi"],
      isTranspiler: true,
      releases: [
        { version: "0.56.17", name: "Vala 0.56.17", date: "2024-04-19" },
        { version: "0.57.0", name: "Vala 0.57", date: "2023-04-11" },
      ],
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
    })
    .relCompilesTo.add("pl+c")
    .relInfluencedBy.add("pl+boo", "pl+c", "pl+c-sharp", "pl+d")
    .relLicenses.add("lic+lgpl")
    .relParadigms.add("para+imperative", "para+oop", "para+procedural", "para+scripting", "para+structured")
    .relPlatforms.add("plat+apple", "plat+bsd", "plat+cross", "plat+linux", "plat+windows")
    .relTags.add("tag+compiler", "tag+framework", "tag+ui")
    .relTypeSystems.add("tsys+inferred", "tsys+static", "tsys+strong", "tsys+structural")
    .relWrittenWith.add("pl+c");

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
