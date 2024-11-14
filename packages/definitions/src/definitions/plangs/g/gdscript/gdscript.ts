import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+gdscript", {
      name: "GDScript",
      description:
        "GDScript is a high-level, dynamically typed programming language used to create content within the Godot Engine. It is influenced by Python and designed specifically for ease of use within game development. It is lightweight yet expressive, offering flexibility particularly for rapid prototyping and development within the Godot ecosystem.",
      keywords: ["gdscript", "godot engine"],
      websites: [
        { title: "Godot Engine - Free and open source 2D and 3D game engine", href: "https://godotengine.org/", kind: "homepage" },
        { title: "Godot (game engine) - Wikipedia", href: "https://en.wikipedia.org/wiki/Godot_(game_engine)", kind: "wikipedia" },
        { title: "GDScript on Reddit", href: "https://reddit.com/r/godot", kind: "reddit" },
      ],
      extensions: [".gd"],
      year: 2014,
      isMainstream: true,
      releases: [
        { version: "3.6", name: "Godot 3.6", date: "2024-09-09" },
        { version: "4.0", name: "Godot 4.0", date: "2023-03-01" },
        { version: "4.1", name: "Godot 4.1", date: "2023-07-01" },
        { version: "4.2", name: "Godot 4.2", date: "2023-11-30" },
        { version: "4.3", name: "Godot 4.3", date: "2024-08-15" },
      ],
      stackovTags: ["godot"],
      githubName: "GDScript",
      languishRanking: 41,
      githubLangId: "123",
      githubColor: "#355570",
      githubPopular: false,
      githubType: "programming",
    })
    .addInfluencedBy(["pl+python"])
    .addLicenses(["license+mit"])
    .addParadigms(["paradigm+imperative", "paradigm+oop", "paradigm+scripting"])
    .addPlatforms(["plat+android", "plat+apple", "plat+bsd", "plat+cross", "plat+linux", "plat+web", "plat+windows"])
    .addTags(["tag+3dg", "tag+audio-dev", "tag+games", "tag+scripting", "tag+ui"])
    .addTypeSystems(["tsys+duck", "tsys+dynamic", "tsys+strong"])
    .addWrittenIn(["pl+c++"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
