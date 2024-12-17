import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+flutter", {
      name: "Flutter",
      description:
        "UI software development toolkit by Google, used for crafting natively compiled cross-platform applications from a single codebase for mobile, web, and desktop.",
      shortDesc: "Toolkit for creating natively compiled cross-platform apps from a single codebase.",
      created: "2017",
      extensions: [".dart"],
      extGithubPath: "flutter/flutter",
      extHomeURL: "https://flutter.dev/",
      extWikipediaPath: "Flutter_(software)",
      githubStars: 167000,
      isTranspiler: true,
      keywords: ["flutter"],
      releases: [{ version: "3.27.0", date: "2024-12-11" }],
    })
    .relCompilesTo.add("pl+javascript")
    .relImplements.add("pl+dart")
    .relLicenses.add("lic+bsd")
    .relParadigms.add("para+declarative", "para+functional", "para+oop")
    .relPlatforms.add("plat+android", "plat+apple", "plat+cross", "plat+linux", "plat+web", "plat+windows")
    .relTags.add("tag+3dg", "tag+app", "tag+framework", "tag+gui", "tag+industrial", "tag+ray-tracer", "tag+webdev")
    .relTypeSystems.add("tsys+static", "tsys+strong")
    .relWrittenWith.add("pl+c", "pl+c++", "pl+dart");

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
