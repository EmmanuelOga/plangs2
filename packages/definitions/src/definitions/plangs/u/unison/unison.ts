import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+unison", {
      name: "Unison",
      description:
        "Unison is a functional programming language that treats code as data, allowing for simple distributed computing and code-management workflows. It uses a content-addressed codebase model where functions and data structures are identified by hash, making it straightforward to build distributed applications, refactor code, and ensure repeatability.",
      keywords: ["unison", "functional programming", "content-addressed", "distributed computing"],
      websites: [
        { title: "Unison", href: "https://www.unison-lang.org/", kind: "homepage" },
        { title: "Unison on GitHub", href: "https://github.com/unisonweb/unison", kind: "repository" },
      ],
      extensions: [".u"],
      firstAppeared: "2010-01-01",
      images: [{ kind: "logo", title: "Unison", url: "https://www.unison-lang.org/images/unison-logo.svg", width: 600, height: 600 }],
      releases: [{ version: "1.0.0", name: "Unison M1a", date: "2023-09-15" }],
    })
    .addInfluencedBy(["pl+elm", "pl+haskeL"])
    .addLicenses(["license+apache"])
    .addParadigms(["paradigm+declarative", "paradigm+distributed", "paradigm+functional"])
    .addPlatforms(["plat+cross"])
    .addTags(["tag+cli", "tag+distributed"])
    .addTypeSystems(["tsys+algebraic", "tsys+static", "tsys+strong"])
    .addWrittenIn(["pl+haskell"]);
}
