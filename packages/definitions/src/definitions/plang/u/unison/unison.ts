import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+unison", {
      name: "Unison",
      description:
        "Unison is a modern, statically-typed, purely functional programming language that simplifies distributed programming by treating code as data. It eliminates encoders and decoders at network boundaries, refactoring complexities, and dependency conflicts by using a content-addressed approach where code is identified by its hash. Unison allows storing code directly in a database, making distributed systems and refactoring workflows more efficient and reliable.",
      keywords: ["content-addressed", "distributed computing", "functional programming", "statically-typed", "unison"],
      extensions: [".u"],
      releases: [{ version: "1.0.0", name: "Unison M1a", date: "2023-09-15" }],
      isTranspiler: false,
      shortDesc: "Unison is a statically-typed, functional language treating code as data for efficient distributed programming.",
      githubStars: 5800,
      extGithubPath: "unisonweb/unison",
      extHomeURL: "https://www.unison-lang.org/",
      created: "2023",
    })
    .relLicenses.add("lic+apache")
    .relParadigms.add("para+declarative", "para+distributed", "para+functional")
    .relPlatforms.add("plat+cross")
    .relTags.add("tag+cli")
    .relTypeSystems.add("tsys+algebraic", "tsys+static", "tsys+strong")
    .relWrittenWith.add("pl+haskell");

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
