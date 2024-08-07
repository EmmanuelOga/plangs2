import type { PlangsGraph } from "../../../schema/graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+godot")
    .merge({
      name: "GDScript",
      websites: [
        {
          kind: "wikipedia",
          title: "Godot EngineGDScript",
          href: "https://en.wikipedia.org/wiki/Godot_(game_engine)#GDScript",
        },
        {
          kind: "homepage",
          title: "docs.godotengine.org",
          href: "https://docs.godotengine.org/en/stable/getting_started/scripting/gdscript/index.html",
        },
        { kind: "wikipedia", title: "Godot EngineGDScript", href: "https://en.wikipedia.org/wiki/Godot_(game_engine)" },
      ],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/5/5a/Godot_logo.svg" }],
      releases: [{ name: "Godot EngineGDScript", version: "4.2.2", date: "2024-01-01", kind: "stable" }],
    })
    .addInfluences(["pl+c", "pl+cpp", "pl+python"])
    .addLicenses(["lic+mit"])
    .addParadigms(["para+objects"])
    .addPlatforms(["platf+cross-platform"])
    .addTypeSystems(["tsys+dynamic", "tsys+duck"]);

  /**/
}
