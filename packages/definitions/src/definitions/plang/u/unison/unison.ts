import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+unison", {
      name: "Unison",
      description:
        "Modern, statically-typed, purely functional programming language that simplifies distributed programming by treating code as data. It eliminates encoders and decoders at network boundaries, refactoring complexities, and dependency conflicts by using a content-addressed approach where code is identified by its hash. Unison allows storing code directly in a database, making distributed systems and refactoring workflows more efficient and reliable.",
      shortDesc: "Statically-typed, functional language treating code as data for efficient distributed programming.",
      created: "2023",
      extensions: [".u"],
      extGithubPath: "unisonweb/unison",
      extHomeURL: "https://www.unison-lang.org/",
      githubStars: 5800,
      isTranspiler: false,
      keywords: ["content-addressed", "distributed computing", "functional programming", "statically-typed", "unison"],
      releases: [{ version: "1.0.0", name: "Unison M1a", date: "2023-09-15" }],
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
