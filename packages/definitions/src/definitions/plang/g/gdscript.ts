import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+gdscript", {
      name: "GDScript",
      description:
        "High-level, dynamically typed programming language tailored for the Godot Engine, influenced by Python, facilitating gameplay scripting and rapid prototyping.",
      shortDesc: "High-level, dynamically typed language for the Godot Engine.",
      created: "2014",
      extensions: [".gd"],
      extGithubPath: "godotengine/godot",
      extHomeURL: "https://godotengine.org/",
      extRedditPath: "godot",
      extWikipediaPath: "Godot_(game_engine)",
      githubColor: "#355570",
      githubLangId: "123",
      githubName: "GDScript",
      githubPopular: false,
      githubStars: 91800,
      githubType: "programming",
      isTranspiler: false,
      keywords: ["gdscript", "godot"],
      languishRanking: 41,
      releases: [
        { version: "3.6", date: "2024-09-09" },
        { version: "4.3", date: "2024-08-15" },
      ],
      stackovTags: ["godot"],
    })
    .relInfluencedBy.add("pl+python")
    .relLicenses.add("lic+mit")
    .relParadigms.add("para+imperative", "para+oop", "para+scripting")
    .relPlatforms.add(
      "plat+android",
      "plat+apple",
      "plat+bsd",
      "plat+cross",
      "plat+linux",
      "plat+web",
      "plat+windows",
    )
    .relTags.add(
      "tag+3dg",
      "tag+audio-dev",
      "tag+games",
      "tag+gui",
      "tag+scripting",
    )
    .relTypeSystems.add(
      "tsys+duck",
      "tsys+dynamic",
      "tsys+object",
      "tsys+strong",
    )
    .relWrittenWith.add("pl+c++");
}
