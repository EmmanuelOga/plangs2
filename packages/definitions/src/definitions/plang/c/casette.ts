import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+casette", {
      name: "Cassette",
      description:
        "Simple, DIY language for personal programming, focusing on fun rather than built-in features, and characterized by a lack of batteries included.",
      shortDesc: "Simple, DIY personal programming language focusing on fun.",
      created: "2021",
      extensions: [".cassette"],
      extGithubPath: "protestContest/Cassette",
      extHomeURL: "https://cassette-lang.com/",
      githubStars: 6,
      isTranspiler: true,
      keywords: ["cassette"],
      releases: [
        { version: "2.0.0", date: "2023-01-01" },
        { version: "1.0.0", date: "2021-05-01" },
      ],
    })
    .relLicenses.add("lic+mit")
    .relParadigms.add(
      "para+dataflow",
      "para+declarative",
      "para+dsl",
      "para+event-driven",
      "para+functional",
      "para+general-purpose",
      "para+interpreted",
    )
    .relPlatforms.add("plat+cross")
    .relWrittenWith.add("pl+c");
}
