import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+vala", {
      name: "Vala",
      description:
        "Vala is an object-oriented programming language with a self-hosting compiler that generates C code and uses the GObject system. It incorporates modern programming language features with minimal runtime requirements, using the same ABI as C libraries and applications, making it ideal for GNOME development.",
      keywords: ["cross-platform", "gnome", "gobject", "object-oriented", "vala"],
      websites: [
        { title: "Vala", href: "https://wiki.gnome.org/Projects/Vala", kind: "homepage" },
        { title: "Vala", href: "https://en.wikipedia.org/wiki/Vala_(programming_language)", kind: "wikipedia" },
        { title: "Vala", href: "https://wiki.gnome.org/Projects/Vala#Valac_the_Compiler", kind: "apidocs" },
        { title: "Vala on Reddit", kind: "reddit", href: "https://reddit.com/r/vala" },
      ],
      extensions: [".vala", ".vapi"],
      year: 2006,
      isTranspiler: true,
      isMainstream: false,
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
    })
    .addCompilesTo(["pl+c"])
    .addInfluencedBy(["pl+boo", "pl+c", "pl+c-sharp", "pl+d"])
    .addLicenses(["license+lgpl"])
    .addParadigms(["paradigm+imperative", "paradigm+oop", "paradigm+procedural", "paradigm+scripting", "paradigm+structured"])
    .addPlatforms(["plat+apple", "plat+bsd", "plat+cross", "plat+linux", "plat+windows"])
    .addTags(["tag+compiler", "tag+framework", "tag+ui"])
    .addTypeSystems(["tsys+inferred", "tsys+static", "tsys+strong", "tsys+structural"])
    .addWrittenIn(["pl+c"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
