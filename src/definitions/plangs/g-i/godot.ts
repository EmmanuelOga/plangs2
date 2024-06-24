import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+godot",
    "GDScript",
    {
      name: "GDScript",
      websites: [
        { kind: "wikipedia", title: "Godot EngineGDScript", href: "https://en.wikipedia.org/wiki/Godot_(game_engine)" },
        {
          kind: "homepage",
          title: "docs.godotengine.org",
          href: "https://docs.godotengine.org/en/stable/getting_started/scripting/gdscript/index.html",
        },
        { kind: "wikipedia", title: "GDScript", href: "https://en.wikipedia.org/wiki/Godot_(game_engine)#GDScript" },
      ],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/5/5a/Godot_logo.svg" }],
      references: {
        initial_release: [
          {
            href: "https://godotengine.org/article/first-public-release",
            title: "Godot Engine - First public release!",
          },
        ],
        stable_release: [
          {
            href: "https://godotengine.org/article/maintenance-release-godot-4-2-2-and-4-1-4/",
            title: "Maintenance release: Godot 4.2.2",
          },
        ],
        written_in: [
          {
            href: "https://www.openhub.net/p/godotengine",
            title: "The Godot Game Engine Open Source Project on Open Hub",
          },
        ],
        operating_system: [{ href: "https://godotengine.org/features", title: "Godot Features" }],
        size: [{ href: "https://github.com/godotengine/godot/releases", title: "Releases · godotengine/Godot" }],
      },
      releases: [
        { version: "unknown", date: "2014-01-14", kind: "first" },
        { version: "4.2.2", date: "2024-01-01", kind: "stable" },
      ],
      extensions: [".gd"],
    },
    {
      influenced: ["pl+python"],
      influences: ["pl+c", "pl+cpp", "pl+python"],
      licenses: ["lic+mit"],
      paradigms: ["para+objects"],
      platforms: ["platf+cross-platform"],
      typeSystems: ["tsys+duck", "tsys+dynamic"],
    },
  );

  /**/
}
