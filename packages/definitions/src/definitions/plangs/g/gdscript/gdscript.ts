import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+gdscript", {
      name: "GDScript",
      description:
        "GDScript is a high-level, dynamically typed programming language used to create content within the Godot Engine. It is influenced by Python and designed specifically for ease of use within game development. It is lightweight yet expressive, offering flexibility particularly for rapid prototyping and development within the Godot ecosystem.",
      keywords: ["gdscript", "godot engine"],
      websites: [
        { title: "godotengine.org", href: "https://godotengine.org/", kind: "homepage" },
        { title: "Godot Engine - Wikipedia", href: "https://en.wikipedia.org/wiki/GDScript", kind: "wikipedia" },
        { title: "GDScript on Reddit", kind: "reddit", href: "https://reddit.com/r/godot" },
        { title: "GDScript on Wikipedia", kind: "wikipedia", href: "https://en.wikipedia.org/wiki/Godot_(game_engine)" },
      ],
      extensions: [".gd"],
      year: 2014,
      images: [{ kind: "logo", title: "Godot Engine", url: "https://godotengine.org/assets/logo.svg", width: 512, height: 512 }],
      isTranspiler: false,
      isMainstream: true,
      releases: [
        { version: "3.2", name: "GDScript 3.2", date: "2020-01-29" },
        { version: "4.0", name: "GDScript 4.0", date: "2023-01-23" },
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
    .addPlatforms(["plat+android", "plat+apple", "plat+bsd", "plat+cross", "plat+linux", "plat+windows"])
    .addTags(["tag+3dg", "tag+audio-dev", "tag+games", "tag+scripting", "tag+ui"])
    .addTypeSystems(["tsys+duck", "tsys+dynamic", "tsys+strong"])
    .addWrittenIn(["pl+c++"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
