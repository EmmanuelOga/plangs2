import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+gdscript", {
      name: "Godot Engine",
      description:
        "Godot (/ˈɡɒdoʊ/) is a cross-platform, free and open-source game engine released under the permissive MIT license. It was initially developed in Buenos Aires by Argentine software developers Juan Linietsky and Ariel Manzur for several companies in Latin America prior to its public release in 2014. The development environment runs on many platforms, and can export to several more. It is designed to create both 2D and 3D games targeting PC, mobile, and web platforms and can also be used to develop non-game software, including editors.",
      websites: [
        { href: "https://godotengine.org/", title: "godotengine.org", kind: "other" },
        { href: "https://en.wikipedia.org/wiki/GDScript", title: "Godot Engine", kind: "wikipedia" },
      ],
      releases: [{ version: "4.3", date: "2024-01-01" }],
      images: [{ kind: "other", title: "Godot Engine", url: "/images/plangs/g/gdscript/other.png" }],
    })
    .addInfluencedBy(["pl+python"])
    .addLicenses(["license+mit"])
    .addPlatforms(["plat+android", "plat+apple", "plat+bsd", "plat+linux", "plat+windows"])
    .addTags([
      "tag+3dg",
      "tag+app",
      "tag+audio-dev",
      "tag+dbms",
      "tag+editor",
      "tag+games",
      "tag+industrial",
      "tag+interpreter",
      "tag+ray-tracer",
      "tag+scripting",
      "tag+testing",
      "tag+ui",
    ])
    .addWrittenIn(["pl+c++"]);
}
