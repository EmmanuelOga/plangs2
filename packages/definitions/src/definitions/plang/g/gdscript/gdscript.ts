import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+gdscript", {
      name: "GDScript",
      description:
        "GDScript is a high-level, dynamically typed programming language tailored for the Godot Engine, influenced by Python, facilitating gameplay scripting and rapid prototyping.",
      keywords: ["gdscript", "godot"],
      extensions: [".gd"],
      releases: [
        { version: "3.6", date: "2024-09-09" },
        { version: "4.3", date: "2024-08-15" },
      ],
      stackovTags: ["godot"],
      githubName: "GDScript",
      languishRanking: 41,
      githubLangId: "123",
      githubColor: "#355570",
      githubPopular: false,
      githubType: "programming",
      extWikipediaPath: "Godot_(game_engine)",
      extRedditPath: "godot",
      extHomeURL: "https://godotengine.org/",
      created: "2014",
      isTranspiler: false,
      shortDesc: "GDScript is a high-level, dynamically typed language for the Godot Engine.",
      githubStars: 91800,
      extGithubPath: "godotengine/godot",
    })
    .relInfluencedBy.add("pl+python")
    .relLicenses.add("lic+mit")
    .relParadigms.add("para+imperative", "para+oop", "para+scripting")
    .relPlatforms.add("plat+android", "plat+apple", "plat+bsd", "plat+cross", "plat+linux", "plat+web", "plat+windows")
    .relTags.add("tag+3dg", "tag+audio-dev", "tag+games", "tag+gui", "tag+scripting")
    .relTypeSystems.add("tsys+duck", "tsys+dynamic", "tsys+strong")
    .relWrittenWith.add("pl+c++");

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
