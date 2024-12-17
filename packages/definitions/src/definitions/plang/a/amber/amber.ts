import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+amber", {
      name: "Amber",
      description:
        "Amber is a programming language compiled into Bash. It was designed with a modern syntax, safety features, type safety and practical functionalities that Bash could not offer, allowing enhanced runtime and type safety for writing scripts.",
      shortDesc: "Amber is a language compiling into Bash with modern syntax and safety features.",
      created: "2015",
      extensions: [".amber"],
      extGithubPath: "amber-lang/amber",
      extHomeURL: "https://amber-lang.com",
      githubStars: 540,
      isTranspiler: true,
      keywords: ["amber"],
      releases: [{ version: "0.3.5.alpha", date: "2024-09-04" }],
    })
    .relCompilesTo.add("pl+bash")
    .relLicenses.add("lic+mit")
    .relParadigms.add("para+compiled", "para+multi", "para+oop", "para+scripting")
    .relPlatforms.add("plat+apple", "plat+linux", "plat+web")
    .relTags.add("tag+cli", "tag+scripting")
    .relTypeSystems.add("tsys+dynamic", "tsys+safe", "tsys+static")
    .relWrittenWith.add("pl+rust");

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
