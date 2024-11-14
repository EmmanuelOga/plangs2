import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+unison", {
      name: "Unison",
      description:
        "Unison is a modern, statically-typed, purely functional programming language that simplifies distributed programming by treating code as data. It eliminates encoders and decoders at network boundaries, refactoring complexities, and dependency conflicts by using a content-addressed approach where code is identified by its hash. Unison allows storing code directly in a database, making distributed systems and refactoring workflows more efficient and reliable.",
      keywords: ["content-addressed", "distributed computing", "functional programming", "statically-typed", "unison"],
      websites: [
        { title: "The Unison language", href: "https://www.unison-lang.org/", kind: "homepage" },
        {
          title: "unisonweb/unison: A friendly programming language from the future",
          href: "https://github.com/unisonweb/unison",
          kind: "repository",
        },
      ],
      extensions: [".u"],
      year: 2023,
      releases: [{ version: "1.0.0", name: "Unison M1a", date: "2023-09-15" }],
    })
    .addInfluencedBy(["pl+elm", "pl+haskeL"])
    .addLicenses(["license+apache"])
    .addParadigms(["paradigm+declarative", "paradigm+distributed", "paradigm+functional"])
    .addPlatforms(["plat+cross"])
    .addTags(["tag+cli", "tag+distributed"])
    .addTypeSystems(["tsys+algebraic", "tsys+static", "tsys+strong"])
    .addWrittenIn(["pl+haskell"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
