import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+enso", {
      name: "Enso",
      description:
        "Enso is a visual, data-centric programming language designed for data professionals to efficiently collaborate. It seamlessly combines visual programming with a high-performance engine, offering both scalability and intuitive design.",
      shortDesc: "Enso is a visual, data-centric programming language designed for efficient collaboration.",
      created: "2021",
      extensions: [".enso"],
      extGithubPath: "enso-org/enso",
      extHomeURL: "https://enso.org",
      githubStars: 7400,
      isTranspiler: false,
      keywords: ["data-centric", "enso", "visual programming"],
      releases: [{ version: "2024.5.0", date: "2024-05" }],
    })
    .relLicenses.add("lic+agpl", "lic+apache")
    .relParadigms.add("para+data-driven", "para+functional", "para+multi", "para+visual")
    .relPlatforms.add("plat+apple", "plat+linux", "plat+windows")
    .relTags.add("tag+analysis", "tag+viz", "tag+workflow")
    .relTypeSystems.add("tsys+dynamic", "tsys+gradual")
    .relWrittenWith.add("pl+rust", "pl+scala");

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
