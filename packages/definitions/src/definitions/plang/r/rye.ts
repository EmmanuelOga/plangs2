import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+rye", {
      name: "Rye",
      description:
        "A high-level, interpreted programming language focused on simplicity, expressiveness, and modern coding paradigms. It is designed to make programming more intuitive and accessible, with features that emphasize functional programming and ease of use.",
      shortDesc:
        "High-level, interpreted programming language focused on simplicity and expressiveness.",
      created: "2022",
      extensions: [".ry"],
      extGithubPath: "refaktor/rye",
      extHomeURL: "https://ryelang.org/",
      githubStars: 477,
      isTranspiler: false,
      keywords: ["rye", "ryelang"],
      releases: [
        { version: "0.0.26", name: "Rye 0.0.26", date: "2024-10-01" },
        { version: "1.0", name: "Rye 1.0", date: "2022-01-01" },
        { version: "1.1", name: "Rye 1.1", date: "2023-03-10" },
      ],
    })
    .relInfluencedBy.add("pl+factor", "pl+rebol", "pl+red")
    .relLicenses.add("lic+mit")
    .relParadigms.add(
      "para+array",
      "para+functional",
      "para+general-purpose",
      "para+interpreted",
      "para+multi",
      "para+scripting",
    )
    .relPlatforms.add(
      "plat+apple",
      "plat+cross",
      "plat+linux",
      "plat+web",
      "plat+windows",
    )
    .relTags.add("tag+app", "tag+cli", "tag+scripting")
    .relTypeSystems.add("tsys+duck", "tsys+dynamic")
    .relWrittenWith.add("pl+go");
}
